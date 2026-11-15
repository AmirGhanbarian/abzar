import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product } from '../types'
import { SearchOverlay } from '../components/SearchOverlay'
import { QuickViewModal } from '../components/QuickViewModal'

interface UIContextValue {
  /** Whether the search overlay is open. */
  searchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  toggleSearch: () => void
  /** The product currently shown in the quick-view modal, or null. */
  quickView: Product | null
  openQuickView: (product: Product) => void
  closeQuickView: () => void
}

const UIContext = createContext<UIContextValue | null>(null)

/**
 * Owns the two app-wide overlays — the search palette and the quick-view
 * modal — so any component (header button, product card, search result) can
 * trigger them without prop-drilling. The modals render here, above the route
 * outlet, so they overlay every page.
 */
export function UIProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [quickView, setQuickView] = useState<Product | null>(null)

  const openSearch = useCallback(() => setSearchOpen(true), [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])
  const toggleSearch = useCallback(() => setSearchOpen((v) => !v), [])
  const openQuickView = useCallback(
    (product: Product) => setQuickView(product),
    [],
  )
  const closeQuickView = useCallback(() => setQuickView(null), [])

  const value = useMemo<UIContextValue>(
    () => ({
      searchOpen,
      openSearch,
      closeSearch,
      toggleSearch,
      quickView,
      openQuickView,
      closeQuickView,
    }),
    [
      searchOpen,
      quickView,
      openSearch,
      closeSearch,
      toggleSearch,
      openQuickView,
      closeQuickView,
    ],
  )

  return (
    <UIContext.Provider value={value}>
      {children}
      <SearchOverlay />
      <QuickViewModal product={quickView} onClose={closeQuickView} />
    </UIContext.Provider>
  )
}

export function useUI(): UIContextValue {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within a UIProvider')
  return ctx
}
