import { Headphones, ShieldCheck, Truck, Zap } from 'lucide-react'

const props = [
  {
    icon: Zap,
    title: 'Brushless by default',
    body: 'Every Abzar tool runs a brushless motor — more runtime, longer life, and consistent power under load.',
  },
  {
    icon: ShieldCheck,
    title: '3-year warranty',
    body: 'Each tool is covered for three years against defects, with a 1-year battery warranty and easy online claims.',
  },
  {
    icon: Truck,
    title: 'Fast, free shipping',
    body: 'Orders over $99 ship free in two business days. Need it on the job tomorrow? Order by 3pm for next-day dispatch.',
  },
  {
    icon: Headphones,
    title: 'Jobsite support',
    body: 'Real technicians answer the line Monday–Saturday — parts diagrams, repair booking, and tool advice when you need it.',
  },
]

export function ValueProps() {
  return (
    <section id="why" className="border-y border-white/5 bg-ink-900/60">
      <div className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Abzar</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tools engineered to outlast the job
          </h2>
          <p className="mt-4 text-slate-400">
            We obsess over the details that show up after the first hundred cuts
            — motor life, chuck grip, fence trueness — so your kit keeps earning.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {props.map((p) => (
            <div key={p.title} className="card p-6 transition hover:border-brand-amber/30">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-amber/15 text-brand-amber">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
