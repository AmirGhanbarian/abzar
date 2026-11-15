import { ArrowRight, Check, ShoppingBag } from 'lucide-react'
import { products, formatPrice } from '../data/products'
import { useCart } from '../hooks/useCart'
import { Rating } from './Rating'

const features = [
  'X1 drill + T18 impact driver',
  '7-1/4" circular saw + reciprocating saw',
  'Oscillating multi-tool + LED area light',
  'Two 4.0Ah batteries + rapid charger',
  'Rolling kit bag, ready for the truck bed',
]

export function FeaturedBanner() {
  const combo = products.find((p) => p.id === 'abzar-combo-6')!
  const { addItem } = useCart()

  const onSale = !!combo.compareAtPrice && combo.compareAtPrice > combo.price
  const pct = onSale
    ? Math.round((1 - combo.price / combo.compareAtPrice!) * 100)
    : 0

  return (
    <section id="deals" className="container-page py-14 sm:py-20">
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-ink-850 lg:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <span className="eyebrow">Deal of the week</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {combo.name}
          </h2>
          <div className="mt-3">
            <Rating rating={combo.rating} reviews={combo.reviews} size="md" />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="font-display text-4xl font-bold text-brand-amber">
              {formatPrice(combo.price)}
            </span>
            {onSale && (
              <>
                <span className="text-xl text-slate-500 line-through">
                  {formatPrice(combo.compareAtPrice!)}
                </span>
                <span className="rounded bg-rose-500/15 px-2 py-1 text-sm font-bold text-rose-400">
                  Save {pct}%
                </span>
              </>
            )}
          </div>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            {combo.blurb}
          </p>

          <ul className="mt-5 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => addItem(combo)} className="btn-primary">
              <ShoppingBag className="h-4 w-4" />
              Add kit to cart
            </button>
            <a href="#shop" className="btn-secondary">
              Browse all tools
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[280px] overflow-hidden bg-ink-900 lg:min-h-full">
          <img
            src={combo.image}
            alt={combo.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-850/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-ink-850/80" />
        </div>
      </div>
    </section>
  )
}
