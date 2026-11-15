import type { Product } from '../types'
import { categories } from '../data/categories'

/**
 * Case-insensitive search across a product's searchable text: name, brand,
 * category name, blurb, description, and every spec label/value. Multi-token
 * queries require every token to appear (AND), in any order, so "brushless
 * saw" matches products that are both brushless and a saw.
 */
export function matchesQuery(product: Product, query: string): boolean {
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return true

  const catName =
    categories.find((c) => c.id === product.category)?.name.toLowerCase() ?? ''

  const haystack = [
    product.name,
    product.brand,
    catName,
    product.blurb,
    product.description,
    ...product.specs.map((s) => `${s.label} ${s.value}`),
  ]
    .join(' ')
    .toLowerCase()

  return tokens.every((t) => haystack.includes(t))
}
