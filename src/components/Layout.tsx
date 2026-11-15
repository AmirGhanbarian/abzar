import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CartDrawer } from './CartDrawer'

/**
 * Scrolls to top on route change, or to the element matching the URL hash
 * (e.g. /#categories) once the new page has painted.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const t = window.setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
      return () => window.clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export function Layout() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <ScrollManager />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
