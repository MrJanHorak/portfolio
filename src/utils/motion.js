const canUseMatchMedia = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export const prefersReducedMotion = () =>
  canUseMatchMedia() && window.matchMedia(REDUCED_MOTION_QUERY).matches

export const getScrollBehavior = () =>
  prefersReducedMotion() ? 'auto' : 'smooth'
