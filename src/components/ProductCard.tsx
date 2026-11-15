import { Eye, Plus } from 'lucide-react'
import type { Product } from '../types'
import { formatPrice } from '../data/products'
import { useCart } from '../hooks/useCart'
import { Rating } from './Rating'

const badgeStyle: Record<NonNullable<Product['badge']>, string> = {
  new: 'bg-sky-500 text-white',
  sale: 'bg-rose-500 text-white',
  bestseller: 'bg-brand-amber text-ink-950',
}
const badgeLabel: Record<NonNullable<Product['badge']>, string> = {
  new: 'جدید',
  sale: 'تخفیف',
  bestseller: 'پرفروش',
}

interface Props {
  product: Product
  onQuickView: (p: Product) => void
}

export function ProductCard({ product, onQuickView }: Props) {
  const { addItem } = useCart()
  const onSale = !!product.compareAtPrice && product.compareAtPrice > product.price
  const pct = onSale
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850/80 transition duration-300 hover:-translate-y-1 hover:border-brand-amber/30 hover:shadow-glow">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-ink-900">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute start-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${badgeStyle[product.badge]}`}
            >
              {badgeLabel[product.badge]}
            </span>
          )}
          {onSale && (
            <span className="rounded-md bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white">
              {pct}٪ تخفیف
            </span>
          )}
        </div>

        <button
          onClick={() => onQuickView(product)}
          className="tap absolute end-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-ink-950/70 text-white backdrop-blur transition hover:bg-brand-amber hover:text-ink-950"
          aria-label={`نمایش سریع ${product.name}`}
        >
          <Eye className="h-4 w-4" />
        </button>

        {!product.inStock && (
          <div className="absolute inset-0 grid place-items-center bg-ink-950/60 backdrop-blur-[1px]">
            <span className="rounded-lg border border-white/20 bg-ink-950/80 px-4 py-2 text-sm font-semibold text-white">
              ناموجود
            </span>
          </div>
        )}
      </div>

      {/* بدنه */}
      <div className="flex flex-1 flex-col p-4">
        <div className="text-xs font-semibold text-brand-amber">
          {product.brand}
        </div>
        <button
          onClick={() => onQuickView(product)}
          className="mt-1 text-start"
          aria-label={`نمایش سریع ${product.name}`}
        >
          <h3 className="font-display text-[15px] font-semibold leading-snug text-white transition hover:text-brand-amber-light">
            {product.name}
          </h3>
        </button>

        <div className="mt-2">
          <Rating rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="font-display text-lg font-bold text-white">
            {formatPrice(product.price)}
          </span>
          {onSale && (
            <span className="text-sm text-slate-500 line-through">
              {formatPrice(product.compareAtPrice!)}
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
          {product.blurb}
        </p>

        <div className="mt-auto pt-4">
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            className="btn-primary w-full disabled:cursor-not-allowed"
          >
            <Plus className="h-4 w-4" />
            {product.inStock ? 'افزودن به سبد' : 'ناموجود'}
          </button>
        </div>
      </div>
    </div>
  )
}
