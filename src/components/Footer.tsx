import { CreditCard, Facebook, Instagram, Phone, Twitter, Youtube, Zap } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: ['Drills & Drivers', 'Saws', 'Grinders', 'Sanders', 'Combo Kits', 'Gift cards'],
  },
  {
    title: 'Support',
    links: ['Track order', 'Warranty claims', 'Repair service', 'Parts diagrams', 'Contact us', 'FAQ'],
  },
  {
    title: 'Company',
    links: ['About Abzar', 'Pro program', 'Trade accounts', 'Careers', 'Press', 'Sustainability'],
  },
]

const social = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-amber text-ink-950">
                <Zap className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                ABZAR
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Pro-grade power tools built for the jobsite. Designed, tested, and
              warrantied for the people who make their living with their hands.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="tap grid place-items-center rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-brand-amber/40 hover:text-brand-amber"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#shop"
                      className="text-sm text-slate-400 transition hover:text-brand-amber"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Phone className="h-4 w-4 text-brand-amber" />
            <span>1-800-ABZAR-PRO · Mon–Sat 7am–8pm CT</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs uppercase tracking-wide">Visa · Mastercard · Amex · PayPal · Apple Pay</span>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abzar Tools, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#top" className="hover:text-slate-300">Privacy</a>
            <a href="#top" className="hover:text-slate-300">Terms</a>
            <a href="#top" className="hover:text-slate-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
