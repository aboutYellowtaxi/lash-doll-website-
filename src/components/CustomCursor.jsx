import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  // Dot — snappy, tracks cursor directly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40, mass: 0.4 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40, mass: 0.4 })

  // Ring — slightly behind, feels organic
  const ringX = useSpring(mouseX, { stiffness: 280, damping: 28, mass: 0.6 })
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 28, mass: 0.6 })

  const [hovered, setHovered] = useState(false)
  const [label, setLabel] = useState('')

  const onMouseMove = useCallback((e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [onMouseMove])

  // Watch for hoverable elements
  useEffect(() => {
    const enter = (e) => {
      const el = e.target.closest('a, button, [data-cursor]')
      if (!el) return
      setHovered(true)
      setLabel(el.dataset.cursorLabel || '')
    }
    const leave = (e) => {
      const el = e.target.closest('a, button, [data-cursor]')
      if (!el) return
      setHovered(false)
      setLabel('')
    }
    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)
    return () => {
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  const DOT_SIZE = 10
  const RING_SIZE = hovered ? 52 : 34
  const RING_OFFSET = -(RING_SIZE / 2)

  return (
    <>
      {/* Main gold dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: dotX,
          y: dotY,
          translateX: -(DOT_SIZE / 2),
          translateY: -(DOT_SIZE / 2),
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: '50%',
          background: hovered ? 'transparent' : 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: hovered ? 'normal' : 'screen',
        }}
        animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      />

      {/* Outer ring — expands on hover */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          x: ringX,
          y: ringY,
          translateX: RING_OFFSET,
          translateY: RING_OFFSET,
          width: RING_SIZE,
          height: RING_SIZE,
          borderRadius: '50%',
          border: hovered ? '1.5px solid var(--accent)' : '1px solid rgba(212,175,55,0.35)',
          background: hovered ? 'rgba(212,175,55,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        animate={{
          width: RING_SIZE,
          height: RING_SIZE,
          translateX: -(RING_SIZE / 2),
          translateY: -(RING_SIZE / 2),
        }}
        transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.48rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          body { cursor: auto !important; }
        }
      `}</style>
    </>
  )
}
