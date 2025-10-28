import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop component
 * - Scrolls to the top on pathname changes
 * - If there's a hash (e.g. /#explore-menu) it will attempt to scroll that element into view
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash, try to scroll that element into view (preserve existing behavior)
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // use smooth so anchored sections still animate
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    // No hash -> scroll to top immediately
    // use 'auto' to avoid a long smooth scroll from previous position
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default ScrollToTop
