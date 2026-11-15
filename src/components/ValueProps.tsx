import { Headphones, ShieldCheck, Truck, Zap } from 'lucide-react'

const props = [
  {
    icon: Zap,
    title: 'براشلس به‌طور پیش‌فرض',
    body: 'هر ابزار ابزار با موتور براشلس کار می‌کند — زمان اجرای بیشتر، عمر طولانی‌تر و توان یکنواخت زیر بار.',
  },
  {
    icon: ShieldCheck,
    title: 'گارانتی ۳ ساله',
    body: 'هر ابزار سه سال در برابر نقص گارانتی می‌شود، با گارانتی ۱ ساله باتری و ادعای آنلاین آسان.',
  },
  {
    icon: Truck,
    title: 'ارسال سریع و رایگان',
    body: 'سفارش‌های بالا در دو روز کاری رایگان ارسال می‌شوند. برای فردای کارگاه لازمش دارید؟ تا ساعت ۱۵ سفارش بدهید تا فردا ارسال شود.',
  },
  {
    icon: Headphones,
    title: 'پشتیبانی کارگاهی',
    body: 'تکنسین‌های واقعی شنبه تا پنجشنبه تلفن را جواب می‌دهند — نقشه قطعات، رزرو تعمیر و مشاوره ابزار هر زمان لازم باشد.',
  },
]

export function ValueProps() {
  return (
    <section id="why" className="border-y border-white/5 bg-ink-900/60">
      <div className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">چرا ابزار</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ابزارهایی ساخته‌شده برای دوام بیش از کار
          </h2>
          <p className="mt-4 text-slate-400">
            ما روی جزئیاتی که پس از صد برش اول آشکار می‌شوند وسواس داریم — عمر
            موتور، چسبندگی سه‌نظام، تراز فلز راهنما — تا کیت شما به درآمدن ادامه
            دهد.
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
