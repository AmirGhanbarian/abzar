import { useState } from 'react'
import { Menu, Search, ShoppingBag, X, Zap } from 'lucide-react'
import { useCart } from '../hooks/useCart'

const nav = [
  { label: 'Shop', href: '#shop' },
  { label: 'Categories', href: '#categories' },
  { label: 'Deals', href: '#deals' },
  { label: 'Why Abzar', href: '#why' },
]

export function Header() {
  const { count, openCart } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-brand-amber text-ink-950">
        <div className="container-page flex h-9 items-center justify-center gap-2 text-center text-[11px] font-semibold uppercase tracking-wide sm:text-xs">
          <span>Free shipping over $99</span>
          <span className="opacity-40">•</span>
          <span>3-year warranty</span>
          <span className="hidden opacity-40 sm:inline">•</span>
          <span className="hidden sm:inline">30-day returns</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur-lg">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-amber text-ink-950">
              <Zap className="h-5 w-5" fill="currentColor" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              ABZAR
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="tap rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={openCart}
              className="tap relative rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-brand-amber px-1 text-[10px] font-bold text-ink-950">
                  {count}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="tap rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="animate-fade-in border-t border-white/10 bg-ink-950 md:hidden">
            <nav className="container-page flex flex-col py-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-sm font-medium text-slate-200 last:border-0 transition hover:text-brand-amber"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
