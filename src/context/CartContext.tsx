import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import type { CartItem, Product } from '../types'

const STORAGE_KEY = 'abzar-cart-v1'

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'add'; product: Product; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'setQty'; id: string; quantity: number }
  | { type: 'clear' }
  | { type: 'open' }
  | { type: 'close' }
  | { type: 'hydrate'; items: CartItem[] }

const initialState: CartState = { items: [], isOpen: false }

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const existing = state.items.find((i) => i.product.id === action.product.id)
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.product.id === action.product.id
              ? { ...i, quantity: i.quantity + action.quantity }
              : i,
          ),
        }
      }
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { product: action.product, quantity: action.quantity }],
      }
    }
    case 'remove':
      return { ...state, items: state.items.filter((i) => i.product.id !== action.id) }
    case 'setQty':
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.product.id === action.id ? { ...i, quantity: action.quantity } : i,
          )
          .filter((i) => i.quantity > 0),
      }
    case 'clear':
      return { ...state, items: [] }
    case 'open':
      return { ...state, isOpen: true }
    case 'close':
      return { ...state, isOpen: false }
    case 'hydrate':
      return { ...state, items: action.items }
    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  count: number
  subtotal: number
  addItem: (product: Product, quantity?: number) => void
  removeItem: (id: string) => void
  setQty: (id: string, quantity: number) => void
  clear: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const items = JSON.parse(raw) as CartItem[]
        if (Array.isArray(items)) dispatch({ type: 'hydrate', items })
      }
    } catch {
      /* ignore corrupt storage */
    }
  }, [])

  // Persist on change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      /* storage might be unavailable; non-fatal */
    }
  }, [state.items])

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      count: state.items.reduce((n, i) => n + i.quantity, 0),
      subtotal: state.items.reduce((s, i) => s + i.product.price * i.quantity, 0),
      addItem: (product, quantity = 1) => dispatch({ type: 'add', product, quantity }),
      removeItem: (id) => dispatch({ type: 'remove', id }),
      setQty: (id, quantity) => dispatch({ type: 'setQty', id, quantity }),
      clear: () => dispatch({ type: 'clear' }),
      openCart: () => dispatch({ type: 'open' }),
      closeCart: () => dispatch({ type: 'close' }),
    }),
    [state],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
