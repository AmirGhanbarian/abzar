import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Search, X } from 'lucide-react'
import { products, formatPrice } from '../data/products'
import { categories } from '../data/categories'
import { useUI } from '../hooks/useUI'
import { matchesQuery } from '../lib/search'

/**
 * پنل جستجو به سبک command-palette. از دکمه جستجو در هدر (یا میانبرهای ⌘K / «/»)
 * باز می‌شود. فهرست محصولات را هنگام تایپ زنده فیلتر می‌کند؛ کلیک روی یک نتیجه
 * نمایش سریع محصول را باز می‌کند و Enter (یا «همه نتایج») به /shop?q=… برای
 * شبکه کامل فیلترشده پیوند می‌دهد.
 */
export function SearchOverlay() {
  const { searchOpen, closeSearch, openQuickView } = useUI()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // Reset + focus the input each time the overlay opens.
  useEffect(() => {
    if (!searchOpen) return
    setQuery('')
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => window.clearTimeout(t)
  }, [searchOpen])

  // Lock body scroll and close on Escape while open.
  useEffect(() => {
    if (!searchOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [searchOpen, closeSearch])

  const results = useMemo(() => {
    const q = query.trim()
    if (!q) return []
    return products.filter((p) => matchesQuery(p, q)).slice(0, 8)
  }, [query])

  if (!searchOpen) return null

  const trimmed = query.trim()

  const seeAllOnShop = (q?: string) => {
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : '/shop')
    closeSearch()
  }

  const browseCategory = (id: string) => {
    navigate(`/shop?category=${id}`)
    closeSearch()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="جستجوی محصولات"
    >
      <div
        className="absolute inset-0 animate-fade-in bg-ink-950/80 backdrop-blur-sm"
        onClick={closeSearch}
      />

      <div className="relative z-10 mt-[10vh] w-full max-w-2xl px-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-2xl">
          {/* ورودی */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') seeAllOnShop(query)
              }}
              placeholder="جستجوی ابزار — اره گرد، پیچ‌گوشتی، سمباده…"
              className="h-14 flex-1 bg-transparent text-base text-white placeholder:text-slate-500 focus:outline-none"
              aria-label="جستجوی محصولات"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              onClick={closeSearch}
              className="tap rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              aria-label="بستن جستجو"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* بدنه */}
          <div className="max-h-[52vh] overflow-y-auto p-2">
            {trimmed === '' ? (
              <div className="p-4">
                <p className="text-xs font-semibold text-slate-500">
                  مرور بر اساس دسته
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => browseCategory(c.id)}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-brand-amber/40 hover:text-white"
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-sm text-slate-400">
                  ابزاری مطابق{' '}
                  <span className="font-medium text-white">«{trimmed}»</span> یافت
                  نشد.
                </p>
                <button
                  onClick={() => seeAllOnShop(trimmed)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-amber transition hover:text-brand-amber-light"
                >
                  مشاهده همه ابزارها در فروشگاه
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <ul>
                {results.map((p) => {
                  const cat = categories.find((c) => c.id === p.category)
                  return (
                    <li key={p.id}>
                      <button
                        onClick={() => {
                          openQuickView(p)
                          closeSearch()
                        }}
                        className="flex w-full items-center gap-3 rounded-xl p-2 text-start transition hover:bg-white/5"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-12 w-12 shrink-0 rounded-lg object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-medium text-white">
                            {p.name}
                          </div>
                          <div className="truncate text-xs text-slate-400">
                            {p.brand}
                            {cat ? ` · ${cat.name}` : ''}
                          </div>
                        </div>
                        <span className="shrink-0 font-display text-sm font-bold text-white">
                          {formatPrice(p.price)}
                        </span>
                      </button>
                    </li>
                  )
                })}
                <li className="p-2">
                  <button
                    onClick={() => seeAllOnShop(trimmed)}
                    className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-brand-amber transition hover:border-brand-amber/40 hover:text-brand-amber-light"
                  >
                    همه نتایج برای «{trimmed}»
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* پاورقی */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300">
                ↵
              </kbd>
              همه نتایج
              <span className="mx-1 opacity-40">·</span>
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300">
                Esc
              </kbd>
              بستن
            </span>
            {trimmed && (
              <button
                onClick={() => seeAllOnShop(trimmed)}
                className="font-medium text-brand-amber transition hover:text-brand-amber-light"
              >
                فروشگاه ↵
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
