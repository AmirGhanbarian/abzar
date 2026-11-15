import { Star } from 'lucide-react'

interface RatingProps {
  rating: number
  reviews?: number
  size?: 'sm' | 'md'
}

export function Rating({ rating, reviews, size = 'sm' }: RatingProps) {
  const stars = Math.round(rating)
  const cls = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`${cls} ${i < stars ? 'fill-brand-amber text-brand-amber' : 'text-slate-600'}`}
          />
        ))}
      </div>
      <span className="text-xs text-slate-400">
        {rating.toFixed(1)}
        {reviews !== undefined && ` · ${reviews.toLocaleString()}`}
      </span>
    </div>
  )
}
