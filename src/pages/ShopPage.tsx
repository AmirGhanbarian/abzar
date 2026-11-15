import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'
import { categories } from '../data/categories'
import type { CategoryId, Product } from '../types'
import { matchesQuery } from '../lib/search'
import { ProductCard } from '../components/ProductCard'
import { useUI } from '../hooks/useUI'

type CategoryFilter = CategoryId | 'all'

const isCategoryId = (v: string | null): v is CategoryId =>
  !!v && categories.some((c) => c.id === v)

/**
 * The shop page. All filter state lives in the URL query string
 * (?category=&q=&deal=&focus=) so views are shareable and the search overlay /
 * home page can deep-link here. Category and deal changes push a new history
 * entry; the search box updates the `q` param (debounced, replace) so typing
 * doesn't spam back-button history.
 */
export function ShopPage() {
  const [params, setParams] = useSearchParams()
  const { openQuickView } = useUI()

  const category: CategoryFilter = isCategoryId(params.get('category'))
    ? (params.get('category') as CategoryId)
    : 'all'
  const deal = params.get('deal') === '1'
  const qParam = params.get('q') ?? ''
  const focusId = params.get('focus')

  // The search box is local for instant typing; it syncs to the `q` param
  // (debounced) so results stay shareable and the overlay can deep-link here.
  const [query, setQuery] = useState(qParam)
  useEffect(() => {
    setQuery(qParam)
  }, [qParam])

  useEffect(() => {
    const t = window.setTimeout(() => {
      const next = new URLSearchParams(params)
      const v = query.trim()
      if (v) next.set('q', v)
      else next.delete('q')
      if (next.get('q') !== params.get('q')) {
        setParams(next, { replace: true })
      }
    }, 200)
    return () => window.clearTimeout(t)
    // We intentionally only re-run on `query`; `params` is read fresh inside.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  // Arriving via ?focus=<id> (e.g. from a deep link) opens that product's
  // quick view, then the param is cleared so the back button doesn't reopen it.
  useEffect(() => {
    if (!focusId) return
    const product = products.find((p) => p.id === focusId)
    if (product) openQuickView(product)
    const next = new URLSearchParams(params)
    next.delete('focus')
    setParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusId])

  const filtered = useMemo(() => {
    let list: Product[] = products
    if (category !== 'all') list = list.filter((p) => p.category === category)
    if (deal) {
      list = list.filter(
        (p) => !!p.compareAtPrice && p.compareAtPrice > p.price,
      )
    }
    const q = query.trim()
    if (q) list = list.filter((p) => matchesQuery(p, q))
    return list
  }, [category, deal, query])

  const availableCategories = categories.filter((c) =>
    products.some((p) => p.category === c.id),
  )

  const setCategory = (id: CategoryFilter) => {
    const next = new URLSearchParams(params)
    if (id === 'all') next.delete('category')
    else next.set('category', id)
    setParams(next)
  }

  const toggleDeal = () => {
    const next = new URLSearchParams(params)
    if (deal) next.delete('deal')
    else next.set('deal', '1')
    setParams(next)
  }

  const clearAll = () => {
    setQuery('')
    setParams(new URLSearchParams(), { replace: true })
  }

  const hasFilters = category !== 'all' || deal || query.trim() !== ''

  const heading =
    category !== 'all'
      ? (categories.find((c) => c.id === category)?.name ?? 'Shop')
      : deal
        ? 'Deals'
        : 'All tools'

  return (
    <>
      {/* Page header */}
      <section className="border-b border-white/10 bg-ink-900/40">
        <div className="container-page py-10 sm:py-14">
          <span className="eyebrow">Shop</span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {heading}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Every Abzar tool ships brushless with a 3-year warranty. Filter by
            trade, search by name or spec, or browse the full range.
          </p>
        </div>
      </section>

      <section className="container-page py-10 sm:py-14">
        {/* Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Search box */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, brand, or spec…"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-9 text-sm text-white placeholder:text-slate-500 focus:border-brand-amber/50 focus:outline-none"
                aria-label="Search products"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Deals toggle */}
            <button
              onClick={toggleDeal}
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
                deal
                  ? 'border-brand-amber bg-brand-amber/10 text-brand-amber'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white'
              }`}
              aria-pressed={deal}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Deals only
            </button>
          </div>

          {/* Category chips */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            <Chip active={category === 'all'} onClick={() => setCategory('all')}>
              All ({products.length})
            </Chip>
            {availableCategories.map((c) => (
              <Chip
                key={c.id}
                active={category === c.id}
                onClick={() => setCategory(c.id)}
              >
                {c.name} ({products.filter((p) => p.category === c.id).length})
              </Chip>
            ))}
          </div>
        </div>

        {/* Result meta + clear */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            {filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}
            {query.trim() && (
              <>
                {' '}
                for <span className="text-white">“{query.trim()}”</span>
              </>
            )}
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-sm font-medium text-brand-amber transition hover:text-brand-amber-light"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={openQuickView} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-white/10 bg-ink-850/60 p-12 text-center">
            <p className="text-slate-300">No tools match your filters.</p>
            <button onClick={clearAll} className="btn-primary mt-4">
              Reset and show all
            </button>
          </div>
        )}
      </section>
    </>
  )
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? 'bg-brand-amber text-ink-950'
          : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}
