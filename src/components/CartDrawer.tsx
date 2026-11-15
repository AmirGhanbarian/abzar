import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, Truck, X } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../data/products'

const FREE_SHIPPING_THRESHOLD = 99

export function CartDrawer() {
  const { items, isOpen, closeCart, setQty, removeItem, subtotal, count } =
    useCart()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const pct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`absolute left-0 top-0 flex h-full w-full max-w-md flex-col border-r border-white/10 bg-ink-900 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="سبد خرید"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-brand-amber" />
            <h2 className="font-display text-lg font-semibold text-white">
              سبد خرید شما
              {count > 0 && <span className="text-slate-400"> ({count})</span>}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="tap grid place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="بستن سبد"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white/5 text-slate-500">
              <ShoppingBag className="h-8 w-8" />
            </span>
            <div>
              <div className="font-display text-lg font-semibold text-white">
                سبد خرید شما خالی است
              </div>
              <p className="mt-1 text-sm text-slate-400">
                محصولات را مرور کنید و اولین ابزار را اضافه کنید.
              </p>
            </div>
            <button
              onClick={() => {
                closeCart()
                navigate('/shop')
              }}
              className="btn-primary"
            >
              مشاهده ابزارها
            </button>
          </div>
        ) : (
          <>
            {/* نوار پیشرفت ارسال رایگان */}
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Truck className="h-4 w-4 shrink-0 text-brand-amber" />
                {remaining > 0 ? (
                  <span>
                    برای ارسال رایگان{' '}
                    <span className="font-semibold text-white">
                      {formatPrice(remaining)}
                    </span>{' '}
                    اضافه کنید
                  </span>
                ) : (
                  <span className="font-semibold text-emerald-400">
                    ارسال رایگان برای شما فعال شد!
                  </span>
                )}
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-brand-amber transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>

            {/* اقلام */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 shrink-0 rounded-lg object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-[11px] text-brand-amber">
                            {product.brand}
                          </div>
                          <div className="text-sm font-medium leading-tight text-white">
                            {product.name}
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="tap grid place-items-center rounded text-slate-500 transition hover:text-rose-400"
                          aria-label={`حذف ${product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-lg border border-white/15">
                          <button
                            onClick={() => setQty(product.id, quantity - 1)}
                            className="tap grid place-items-center px-2 text-slate-300 transition hover:text-white"
                            aria-label="کاهش تعداد"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold text-white">
                            {quantity}
                          </span>
                          <button
                            onClick={() => setQty(product.id, quantity + 1)}
                            className="tap grid place-items-center px-2 text-slate-300 transition hover:text-white"
                            aria-label="افزایش تعداد"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-display text-sm font-bold text-white">
                          {formatPrice(product.price * quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* پاورقی */}
            <div className="border-t border-white/10 px-5 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">جمع کل</span>
                <span className="font-display text-xl font-bold text-white">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                هزینه ارسال و مالیات در تسویه‌حساب محاسبه می‌شود.
              </p>
              <button className="btn-primary mt-4 w-full">
                تسویه‌حساب
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={closeCart}
                className="mt-2 w-full text-center text-sm text-slate-400 transition hover:text-white"
              >
                ادامه خرید
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
