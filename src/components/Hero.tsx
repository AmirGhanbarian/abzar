import { ArrowRight, RotateCcw, ShieldCheck, Truck, Zap } from 'lucide-react'
import { heroImage } from '../data/products'

const trust = [
  { icon: Truck, label: 'Free shipping', sub: 'over $99' },
  { icon: ShieldCheck, label: '3-year', sub: 'warranty' },
  { icon: RotateCcw, label: '30-day', sub: 'returns' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A professional electrician using a cordless Abzar drill"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      </div>

      <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-20 sm:min-h-[640px]">
        <div className="max-w-2xl animate-slide-up">
          <span className="eyebrow">
            <Zap className="h-3.5 w-3.5" fill="currentColor" />
            Pro-Grade Power Tools
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built to cut.
            <br />
            Made to last.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Brushless motors, all-metal drivetrains, and a 3-year warranty on
            every tool. Abzar ships the gear pros reach for first — from
            cordless drills to sliding miter saws — straight to your jobsite.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#shop" className="btn-primary">
              Shop the lineup
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#deals" className="btn-secondary">
              Today's deals
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-start gap-1.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur"
              >
                <t.icon className="h-5 w-5 text-brand-amber" />
                <div className="leading-tight">
                  <div className="text-xs font-semibold text-white">{t.label}</div>
                  <div className="text-[11px] text-slate-400">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
