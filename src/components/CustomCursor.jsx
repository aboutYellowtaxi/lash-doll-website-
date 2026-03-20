import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 600, damping: 35 })
  const springY = useSpring(y, { stiffness: 600, damping: 35 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 5)
      y.set(e.clientY - 5)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      {/* Main gold dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'screen',
        }}
      />
      {/* Outer ring — slower */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: useSpring(x, { stiffness: 150, damping: 20 }),
          y: useSpring(y, { stiffness: 150, damping: 20 }),
          width: 32,
          height: 32,
          marginLeft: -11,
          marginTop: -11,
          borderRadius: '50%',
          border: '1px solid rgba(212,175,55,0.3)',
          pointerEvents: 'none',
          zIndex: 9997,
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          body { cursor: auto !important; }
        }
      `}</style>
    </>
  )
}
