import { useRef } from 'react'
import { motion } from 'framer-motion'

const words1 = ['ARTE']
const words2 = ['PERMANENTE.']

export default function Hero() {
  const containerRef = useRef(null)

  const wordVariant = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  const fadeUp = (delay = 0) => ({
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2.5rem',
        paddingTop: '6rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* Ambient gradient */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)',
      }} />

      <div style={{
        width: '100%', maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 420px',
        gap: '4rem', alignItems: 'center',
      }} className="hero-grid">

        {/* Left: Typography */}
        <div>
          {/* Line 1 */}
          <div style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.h1
              custom={0}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 13vw, 10rem)',
                fontWeight: 400,
                color: 'var(--bone)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                margin: 0,
              }}
            >
              ARTE
            </motion.h1>
          </div>

          {/* Line 2 */}
          <div style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.div
              custom={1}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(5rem, 13vw, 10rem)',
                fontWeight: 400,
                color: 'var(--accent)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              PERMANENTE.
            </motion.div>
          </div>

          {/* Sub-tagline */}
          <motion.p {...fadeUp(0.4)} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.5)',
            marginTop: '1.5rem',
          }}>
            Microblading · Micropigmentación · PMU
          </motion.p>
          <motion.p {...fadeUp(0.5)} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginTop: '0.35rem',
          }}>
            General Rodríguez · Buenos Aires
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeUp(0.65)} style={{
            display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '2.5rem', flexWrap: 'wrap',
          }}>
            <a
              href="#portfolio"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                padding: '0.6rem 1.6rem',
                transition: 'background 0.2s, color 0.2s',
                cursor: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >
              Ver portfolio
            </a>
            <a
              href="https://wa.me/54XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--bone)',
                cursor: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--bone)' }}
            >
              Consultá ahora →
            </a>
          </motion.div>
        </div>

        {/* Right: Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            aspectRatio: '3/4',
            border: '1px solid rgba(212,175,55,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/hero-eyebrows.jpg"
            alt="Microblading artístico — cejas perfectas"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
