import { useEffect, useState } from 'react'
import { Check, Minus, Plus, ShoppingBag, X } from 'lucide-react'
import type { Product } from '../types'
import { formatPrice } from '../data/products'
import { useCart } from '../hooks/useCart'
import { Rating } from './Rating'

const badgeLabel: Record<NonNullable<Product['badge']>, string> = {
  new: 'جدید',
  sale: 'تخفیف',
  bestseller: 'پرفروش',
}

interface Props {
  product: Product | null
  onClose: () => void
}

export function QuickViewModal({ product, onClose }: Props) {
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  useEffect(() => setQty(1), [product])

  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  if (!product) return null

  const onSale = !!product.compareAtPrice && product.compareAtPrice > product.price
  const pct = onSale
    ? Math.round((1 - product.price / product.compareAtPrice!) * 100)
    : 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div
        className="absolute inset-0 animate-fade-in bg-ink-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl animate-slide-up flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 sm:flex-row sm:rounded-3xl">
        {/* Image */}
        <div className="relative aspect-square w-full shrink-0 bg-ink-950 sm:h-auto sm:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {product.badge && (
            <span className="absolute start-4 top-4 rounded-md bg-brand-amber px-2 py-0.5 text-[10px] font-bold text-ink-950">
              {badgeLabel[product.badge]}
            </span>
          )}
        </div>

        {/* جزئیات */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-brand-amber">
                {product.brand}
              </div>
              <h2 className="mt-1 font-display text-2xl font-bold leading-tight text-white">
                {product.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="tap grid place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
              aria-label="بستن نمایش سریع"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3">
            <Rating rating={product.rating} reviews={product.reviews} size="md" />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-display text-3xl font-bold text-white">
              {formatPrice(product.price)}
            </span>
            {onSale && (
              <>
                <span className="text-lg text-slate-500 line-through">
                  {formatPrice(product.compareAtPrice!)}
                </span>
                <span className="rounded bg-rose-500/15 px-2 py-0.5 text-xs font-bold text-rose-400">
                  {pct}٪ تخفیف
                </span>
              </>
            )}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {product.description}
          </p>

          {/* مشخصات */}
          <div className="mt-6">
            <h3 className="font-display text-sm font-semibold text-white">
              مشخصات
            </h3>
            <dl className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-2 border-b border-white/5 py-1.5 text-sm"
                >
                  <dt className="text-slate-400">{s.label}</dt>
                  <dd className="text-start font-medium text-slate-200">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* تعداد + افزودن */}
          <div className="mt-auto pt-6">
            {product.inStock ? (
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <Check className="h-4 w-4" /> موجود — ارسال در ۱ روز کاری
              </div>
            ) : (
              <div className="text-xs text-rose-400">
                ناموجود — بازگشت حدودی در ۲ هفته
              </div>
            )}

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-between rounded-xl border border-white/15 sm:justify-start">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="tap grid place-items-center px-3 text-slate-300 transition hover:text-white"
                  aria-label="کاهش تعداد"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-semibold text-white">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="tap grid place-items-center px-3 text-slate-300 transition hover:text-white"
                  aria-label="افزایش تعداد"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  addItem(product, qty)
                  onClose()
                }}
                disabled={!product.inStock}
                className="btn-primary flex-1"
              >
                <ShoppingBag className="h-4 w-4" />
                افزودن به سبد · {formatPrice(product.price * qty)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
