import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax layers
  const imgY     = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const wordVariant = {
    hidden: { y: 80, opacity: 0, skewY: 3 },
    visible: (i) => ({
      y: 0, opacity: 1, skewY: 0,
      transition: { delay: i * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  const fadeUp = (delay = 0) => ({
    initial: { y: 28, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section
      ref={ref}
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
      {/* Ambient gradient — parallax */}
      <motion.div style={{ y: textY, position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }} />
      </motion.div>

      <div style={{
        width: '100%', maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 420px',
        gap: '4rem', alignItems: 'center',
      }} className="hero-grid">

        {/* Left: Typography — moves up on scroll */}
        <motion.div style={{ y: textY, opacity }}>
          <div style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.h1
              custom={0} variants={wordVariant} initial="hidden" animate="visible"
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

          <div style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.div
              custom={1} variants={wordVariant} initial="hidden" animate="visible"
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

          <motion.p {...fadeUp(0.42)} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.5)',
            marginTop: '1.5rem',
          }}>
            Microblading · Micropigmentación · PMU
          </motion.p>
          <motion.p {...fadeUp(0.52)} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginTop: '0.35rem',
          }}>
            General Rodríguez · Buenos Aires
          </motion.p>

          <motion.div {...fadeUp(0.68)} style={{
            display: 'flex', gap: '2rem', alignItems: 'center', marginTop: '2.5rem', flexWrap: 'wrap',
          }}>
            <a
              href="#portfolio"
              data-cursor-label="VER"
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
              href="https://api.whatsapp.com/send?phone=541133436809"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="CONSULTAR"
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
        </motion.div>

        {/* Right: Portrait — parallax slower */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            aspectRatio: '3/4',
            border: '1px solid rgba(212,175,55,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <motion.img
              src="/images/cejas-antes-despues.webp"
              alt="Microblading — resultado natural"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 55%)',
            }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style2={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}
      >
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.3)',
          }}>scroll</span>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)',
          }} />
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
