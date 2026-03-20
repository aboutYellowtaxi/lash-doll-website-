import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// 21st.dev-inspired: card with a gold spotlight that follows the cursor
export default function SpotlightCard({ children, style = {} }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos(p => ({ ...p, visible: false }))}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {/* Spotlight glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: pos.visible
          ? `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(212,175,55,0.07), transparent 70%)`
          : 'transparent',
        transition: 'background 0.1s',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </div>
  )
}
