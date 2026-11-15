import { Hero } from '../components/Hero'
import { CategoryStrip } from '../components/CategoryStrip'
import { FeaturedBanner } from '../components/FeaturedBanner'
import { ValueProps } from '../components/ValueProps'
import { Newsletter } from '../components/Newsletter'

/**
 * Marketing landing page. The shoppable product grid lives on /shop; here we
 * show the hero, category shortcuts (which deep-link into the shop), the deal
 * of the week, value props, and the newsletter capture.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedBanner />
      <ValueProps />
      <Newsletter />
    </>
  )
}
