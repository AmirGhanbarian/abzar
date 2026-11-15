import { Disc3, Package, Scissors, Settings2, Wind, Zap, type LucideIcon } from 'lucide-react'
import { categories } from '../data/categories'
import { products } from '../data/products'
import type { CategoryId } from '../types'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Scissors,
  Disc3,
  Wind,
  Settings2,
  Package,
}

interface Props {
  active: CategoryId | 'all'
  onSelect: (id: CategoryId | 'all') => void
}

export function CategoryStrip({ active, onSelect }: Props) {
  const countFor = (id: CategoryId) =>
    products.filter((p) => p.category === id).length

  return (
    <section id="categories" className="container-page py-14 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Shop by trade</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find your category
          </h2>
        </div>
        <a
          href="#shop"
          className="hidden text-sm font-medium text-brand-amber transition hover:text-brand-amber-light sm:inline"
        >
          View all →
        </a>
      </div>

      <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
        {categories.map((c) => {
          const Icon = iconMap[c.icon] ?? Zap
          const isActive = active === c.id
          const n = countFor(c.id)
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className={`group flex w-40 shrink-0 flex-col items-start gap-3 rounded-2xl border p-5 text-left transition sm:w-auto ${
                isActive
                  ? 'border-brand-amber bg-brand-amber/10'
                  : 'border-white/10 bg-ink-850/60 hover:border-white/20'
              }`}
            >
              <span
                className={`grid h-12 w-12 place-items-center rounded-xl transition ${
                  isActive
                    ? 'bg-brand-amber text-ink-950'
                    : 'bg-white/5 text-brand-amber group-hover:bg-brand-amber/15'
                }`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-white">
                  {c.name}
                </div>
                <div className="text-xs text-slate-400">{c.tagline}</div>
              </div>
              <div className="text-xs text-slate-500">
                {n} {n === 1 ? 'tool' : 'tools'}
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
