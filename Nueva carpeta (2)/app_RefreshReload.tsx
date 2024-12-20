'use client'

import { useEffect } from 'react'

export default function ScrollToTopOnReload() {
  useEffect(() => {
    // Cuando se recargue la página, desplazarse al inicio
    window.scrollTo(0, 0)
  }, [])

  return null
}

