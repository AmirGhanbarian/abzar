import { Disc3, Package, Scissors, Settings2, Wind, Zap, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import { products } from '../data/products'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Scissors,
  Disc3,
  Wind,
  Settings2,
  Package,
}

/**
 * بخش «خرید بر اساس کاربری» در صفحه اصلی. هر کارت به فروشگاه فیلتر‌شده بر اساس
 * آن دسته پیوند عمیق می‌دهد (/shop?category=<id>).
 */
export function CategoryStrip() {
  const countFor = (id: string) =>
    products.filter((p) => p.category === id).length

  return (
    <section id="categories" className="container-page py-14 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="eyebrow">خرید بر اساس کاربری</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            دسته‌بندی خود را پیدا کنید
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden text-sm font-medium text-brand-amber transition hover:text-brand-amber-light sm:inline"
        >
          همه ←
        </Link>
      </div>

      <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
        {categories.map((c) => {
          const Icon = iconMap[c.icon] ?? Zap
          const n = countFor(c.id)
          return (
            <Link
              key={c.id}
              to={`/shop?category=${c.id}`}
              className="group flex w-40 shrink-0 flex-col items-start gap-3 rounded-2xl border border-white/10 bg-ink-850/60 p-5 text-start transition hover:border-brand-amber/40 hover:bg-brand-amber/5 sm:w-auto"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-brand-amber transition group-hover:bg-brand-amber group-hover:text-ink-950">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-base font-semibold text-white">
                  {c.name}
                </div>
                <div className="text-xs text-slate-400">{c.tagline}</div>
              </div>
              <div className="text-xs text-slate-500">{n} محصول</div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
