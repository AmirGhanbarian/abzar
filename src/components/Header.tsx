import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X, Zap } from 'lucide-react'
import { useCart } from '../hooks/useCart'
import { useUI } from '../hooks/useUI'
import { formatPrice } from '../data/products'

/** سقف ارسال رایگان (به دلار) — در نوار اعلان با formatPrice به تومان نمایش داده می‌شود. */
const FREE_SHIPPING_USD = 99

const nav = [
  { label: 'فروشگاه', to: '/shop' },
  { label: 'دسته‌بندی‌ها', to: '/#categories' },
  { label: 'تخفیف‌ها', to: '/shop?deal=1' },
  { label: 'چرا ابزار', to: '/#why' },
]

export function Header() {
  const { count, openCart } = useCart()
  const { openSearch } = useUI()
  const [open, setOpen] = useState(false)

  // میانبرهای سراسری: ⌘/Ctrl+K یا «/» پنل جستجو را باز می‌کند. «/» هنگام
  // تایپ در ورودی یا ناحیه‌متن نادیده گرفته می‌شود.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        openSearch()
        return
      }
      if (
        e.key === '/' &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault()
        openSearch()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [openSearch])

  return (
    <>
      {/* نوار اعلان */}
      <div className="bg-brand-amber text-ink-950">
        <div className="container-page flex h-9 items-center justify-center gap-2 text-center text-[11px] font-semibold sm:text-xs">
          <span>ارسال رایگان از {formatPrice(FREE_SHIPPING_USD)}</span>
          <span className="opacity-40">•</span>
          <span>گارانتی ۳ ساله</span>
          <span className="hidden opacity-40 sm:inline">•</span>
          <span className="hidden sm:inline">۳۰ روز مهلت بازگشت</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur-lg">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* لوگو */}
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-amber text-ink-950">
              <Zap className="h-5 w-5" fill="currentColor" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              ABZAR
            </span>
          </Link>

          {/* ناوبری دسکتاپ */}
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* اکشن‌ها */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* دکمه جستجو — قرص دسکتاپ با راهنمای میانبر */}
            <button
              onClick={openSearch}
              className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-slate-400 transition hover:border-white/25 hover:text-white md:flex"
              aria-label="جستجوی محصولات"
            >
              <Search className="h-4 w-4" />
              <span className="text-xs">جستجو…</span>
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300">
                ⌘K
              </kbd>
            </button>

            {/* دکمه جستجو — آیکن موبایل */}
            <button
              onClick={openSearch}
              className="tap rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-label="جستجوی محصولات"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              onClick={openCart}
              className="tap relative rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label={`باز کردن سبد، ${count} کالا`}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -left-0.5 -top-0.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-brand-amber px-1 text-[10px] font-bold text-ink-950">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="tap rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-label="باز/بسته کردن منو"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {open && (
          <div className="animate-fade-in border-t border-white/10 bg-ink-950 md:hidden">
            <nav className="container-page flex flex-col py-2">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-sm font-medium text-slate-200 last:border-0 transition hover:text-brand-amber"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
