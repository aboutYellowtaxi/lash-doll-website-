import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// 21st.dev-inspired: button that magnetically attracts to the cursor
export default function MagneticButton({ children, href, style = {}, ...props }) {
  const ref = useRef(null)
  const [xy, setXY] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const strength = 0.35
    setXY({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setXY({ x: 0, y: 0 })}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 25, mass: 0.5 }}
      style={{ display: 'inline-block', cursor: 'none' }}
    >
      <Tag href={href} style={style} {...props}>
        {children}
      </Tag>
    </motion.div>
  )
}
