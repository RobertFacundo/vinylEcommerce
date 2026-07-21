'use client'

import { gsap } from '@/shared/lib/gsap'
import { useGSAP } from '@gsap/react'
import { RefObject } from 'react'

export const useCartAnimation = (ref: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      const element = ref.current
      if (!element) return

      const q = gsap.utils.selector(element)

      const tl = gsap.timeline()

      tl.fromTo(
        q('.cart-title'),
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        }
      ).fromTo(
        q('.cart-container'),
        {
          opacity: 0,
          y: 40,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out'
        },
        '-=.4'
      )
    },
    { scope: ref }
  )
}
