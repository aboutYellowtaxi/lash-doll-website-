import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { img } from '../utils/img'

export default function Hero() {
  const ref = useRef(null)
  const [mouse, setMouse] = useState({ x: 50, y: 50 })
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
      onMouseMove={e => setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 })}
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
      {/* Mouse-tracking ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 55% 50% at ${mouse.x}% ${mouse.y}%, rgba(212,175,55,0.055) 0%, transparent 70%)`,
        transition: 'background 0.6s ease',
      }} />

      <div style={{
        width: '100%', maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 440px',
        gap: '4rem', alignItems: 'center',
      }} className="hero-grid">

        {/* Left: Typography */}
        <motion.div style={{ y: textY, opacity }}>

          {/* Brand label */}
          <motion.p
            {...fadeUp(0)}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1.8rem',
            }}
          >
            Lash Doll Studio · General Rodríguez
          </motion.p>

          {/* Main headline */}
          <div style={{ overflow: 'hidden', lineHeight: 1 }}>
            <motion.h1
              custom={0} variants={wordVariant} initial="hidden" animate="visible"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 10vw, 8rem)',
                fontWeight: 400,
                color: 'var(--bone)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                margin: 0,
              }}
            >
              Despertate
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', lineHeight: 1, marginBottom: '0.15em' }}>
            <motion.div
              custom={1} variants={wordVariant} initial="hidden" animate="visible"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 10vw, 8rem)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                background: 'linear-gradient(90deg, #D4AF37 0%, #F5E27A 40%, #D4AF37 60%, #A0832A 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3.5s linear infinite',
              }}
            >
              perfecta.
            </motion.div>
          </div>

          {/* Service descriptor */}
          <motion.p {...fadeUp(0.45)} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'rgba(240,237,232,0.55)',
            lineHeight: 1.7,
            marginTop: '1.8rem',
            maxWidth: '420px',
          }}>
            Microblading · PMU de Labios · Lash Lifting.<br />
            Un procedimiento. Años de resultado natural.
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="hero-cta-group" style={{
            display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '2.5rem', flexWrap: 'wrap',
          }}>
            <MagneticButton
              href="#portfolio"
              data-cursor-label="VER"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                border: '1px solid var(--accent)',
                padding: '0.75rem 2rem',
                background: 'transparent',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
            >
              Ver resultados
            </MagneticButton>
            <MagneticButton
              href="https://api.whatsapp.com/send?phone=541133436809"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="WA"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--bone)',
                background: 'transparent',
                border: 'none',
                padding: '0.75rem 0',
                transition: 'color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--bone)' }}
            >
              Reservar turno →
            </MagneticButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div {...fadeUp(0.8)} style={{
            display: 'flex', gap: '2rem', marginTop: '3rem',
            borderTop: '1px solid rgba(212,175,55,0.1)', paddingTop: '1.5rem',
            flexWrap: 'wrap',
          }}>
            {[
              { num: '+6', label: 'años de experiencia' },
              { num: '2–3', label: 'años de duración' },
              { num: '★ 5.0', label: 'reseñas Google' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 400,
                  color: 'var(--bone)',
                  lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.08em',
                  marginTop: '0.2rem',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          className="hero-image-col"
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
              src={img('images/hero-eyebrows.jpg')}
              alt="Microblading resultado natural — Lash Doll"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            }} />
            {/* Service tag on image */}
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '1.5rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,232,0.6)',
            }}>
              Microblading · Resultado natural
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          opacity,
          position: 'absolute', bottom: '2.5rem', left: '50%',
          translateX: '-50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
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
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
