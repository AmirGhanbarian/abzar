export type CategoryId =
  | 'drills'
  | 'saws'
  | 'grinders'
  | 'sanders'
  | 'multi-tools'
  | 'combo'

export interface Product {
  id: string
  name: string
  brand: string
  category: CategoryId
  price: number
  /** Original price for items on sale; shown struck-through. */
  compareAtPrice?: number
  rating: number
  reviews: number
  image: string
  badge?: 'new' | 'sale' | 'bestseller'
  blurb: string
  description: string
  specs: { label: string; value: string }[]
  inStock: boolean
}

export interface Category {
  id: CategoryId
  name: string
  icon: string
  tagline: string
}

export interface CartItem {
  product: Product
  quantity: number
}
