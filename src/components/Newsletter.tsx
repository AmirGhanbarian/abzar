import { useState, type FormEvent } from 'react'
import { Check, Mail } from 'lucide-react'
import { formatPrice } from '../data/products'

const DISCOUNT_USD = 25

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function submit(e: FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) return
    setDone(true)
  }

  return (
    <section className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-brand-amber/20 bg-gradient-to-br from-ink-850 to-ink-900 p-8 sm:p-12">
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-amber/10 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="eyebrow">
              <Mail className="h-3.5 w-3.5" />
              خبرنامه کارگاه
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {formatPrice(DISCOUNT_USD)} تخفیف روی اولین ست
            </h2>
            <p className="mt-3 max-w-md text-slate-400">
              به جمع ما بپیوندید تا زودتر از تخفیف‌ها، معرفی ابزارهای جدید و یک
              چک‌لیست رایگان نگهداری کارگاه مطلع شوید. بدون هرزنامه — هر زمان
              بخواهید لغو کنید.
            </p>
          </div>

          <div>
            {done ? (
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-300">
                <Check className="h-6 w-6 shrink-0" />
                <div>
                  <div className="font-semibold">شما در لیست هستید.</div>
                  <div className="text-sm text-emerald-300/80">
                    صندوق ورودی خود را برای کد تخفیف بررسی کنید.
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل@نمونه.ir"
                  className="w-full rounded-xl border border-white/15 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-amber focus:outline-none focus:ring-2 focus:ring-brand-amber/30"
                />
                <button type="submit" className="btn-primary shrink-0">
                  دریافت تخفیف
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-slate-500">
              با عضویت، با دریافت ایمیل‌های بازاریابی از ابزار موافقت می‌کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
