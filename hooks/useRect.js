import { useCallback, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

export const useRect = (ref) => {
  const [rect, setRect] = useState(getRect(ref ? ref.current : null))

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return
    }
    setRect(getRect(ref.current))
  }, [ref])

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el) {
      return
    }
    handleResize()

    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(() => handleResize())
      resizeObserver.observe(el)
      return () => {
        if (!resizeObserver) {
          return
        }
        resizeObserver.disconnect()
        resizeObserver = null
      }
    } else {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [ref.current])

  return rect
}

function getRect(el) {
  if (!el) {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    }
  }
  return el.getBoundingClientRect()
}