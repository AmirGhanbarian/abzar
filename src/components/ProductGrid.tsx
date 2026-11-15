import { categories } from '../data/categories'
import { products } from '../data/products'
import type { CategoryId, Product } from '../types'
import { ProductCard } from './ProductCard'

interface Props {
  active: CategoryId | 'all'
  onSelect: (id: CategoryId | 'all') => void
  onQuickView: (p: Product) => void
}

export function ProductGrid({ active, onSelect, onQuickView }: Props) {
  const available = categories.filter((c) =>
    products.some((p) => p.category === c.id),
  )
  const filtered =
    active === 'all' ? products : products.filter((p) => p.category === active)

  const Chip = ({ id, label }: { id: CategoryId | 'all'; label: string }) => (
    <button
      onClick={() => onSelect(id)}
      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
        active === id
          ? 'bg-brand-amber text-ink-950'
          : 'border border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:text-white'
      }`}
    >
      {label}
    </button>
  )

  return (
    <section id="shop" className="container-page py-14 sm:py-20">
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <span className="eyebrow">Best sellers</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            The tools pros reach for first
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Every tool in the Abzar lineup ships brushless with a 3-year
            warranty. Browse by trade or scroll the full range.
          </p>
        </div>

        {/* Filter chips */}
        <div className="no-scrollbar flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
          <Chip id="all" label={`All (${products.length})`} />
          {available.map((c) => (
            <Chip
              key={c.id}
              id={c.id}
              label={`${c.name} (${products.filter((p) => p.category === c.id).length})`}
            />
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-ink-850/60 p-12 text-center text-slate-400">
            No tools in this category yet — check back soon.
          </div>
        )}
      </div>
    </section>
  )
}
