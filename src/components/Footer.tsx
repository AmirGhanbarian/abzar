import { CreditCard, Facebook, Instagram, Phone, Twitter, Youtube, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

type FooterLink = { label: string; to?: string }

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'فروشگاه',
    links: [
      { label: 'دریل و پیچ‌گوشتی', to: '/shop?category=drills' },
      { label: 'اره‌ها', to: '/shop?category=saws' },
      { label: 'سنگ‌فرزینه', to: '/shop?category=grinders' },
      { label: 'سمباده', to: '/shop?category=sanders' },
      { label: 'ست‌های کامل', to: '/shop?category=combo' },
      { label: 'کارت هدیه', to: '/shop' },
    ],
  },
  {
    title: 'پشتیبانی',
    links: [
      { label: 'پیگیری سفارش' },
      { label: 'ادعای گارانتی' },
      { label: 'سرویس تعمیر' },
      { label: 'نقشه قطعات' },
      { label: 'تماس با ما' },
      { label: 'سوالات متداول' },
    ],
  },
  {
    title: 'شرکت',
    links: [
      { label: 'درباره ابزار' },
      { label: 'برنامه حرفه‌ای' },
      { label: 'حساب‌های تجاری' },
      { label: 'فرصت‌های شغلی' },
      { label: 'مطبوعات' },
      { label: 'پایداری' },
    ],
  },
]

const social = [
  { icon: Instagram, label: 'اینستاگرام' },
  { icon: Twitter, label: 'توییتر' },
  { icon: Facebook, label: 'فیسبوک' },
  { icon: Youtube, label: 'یوتیوب' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* برند */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-amber text-ink-950">
                <Zap className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                ABZAR
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              ابزارهای برقی حرفه‌ای ساخته‌شده برای کارگاه. طراحی، آزمایش و
              گارانتی برای کسانی که با دست‌هایشان امرار معاش می‌کنند.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="tap grid place-items-center rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-brand-amber/40 hover:text-brand-amber"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ستون‌های پیوند */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link
                        to={l.to}
                        className="text-sm text-slate-400 transition hover:text-brand-amber"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-sm text-slate-400 transition hover:text-brand-amber"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ردیف تماس */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Phone className="h-4 w-4 text-brand-amber" />
            <span>۰۲۱-۱۲۳۴۵۶۷۸ · شنبه تا پنجشنبه ۷ تا ۲۰</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs">ویزا · مسترکارت · آمکس · پی‌پال · اپل‌پی</span>
          </div>
        </div>

        {/* حقوقی */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear().toLocaleString('fa-IR')} ابزار. همه حقوق محفوظ است.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">حریم خصوصی</a>
            <a href="#" className="hover:text-slate-300">قوانین</a>
            <a href="#" className="hover:text-slate-300">دسترس‌پذیری</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
