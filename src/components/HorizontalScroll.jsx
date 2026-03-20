import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img } from '../utils/img'

const strips = [
  { img: img('images/tools-pmu-pen.jpg'),    label: 'Máquina PMU de precisión' },
  { img: img('images/cejas-despues.jpg'),    label: 'Microblading · Resultado' },
  { img: img('images/tools-pigments.jpg'),   label: 'Pigmentos certificados' },
  { img: img('images/labios-pmu.jpg'),       label: 'Micropigmentación de labios' },
  { img: img('images/tools-caliper.jpg'),    label: 'Diseño con calibre dorado' },
  { img: img('images/lash-lifting.jpg'),     label: 'Lash lifting · Detalle' },
]

export default function HorizontalScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Each card ~340px + 24px gap = ~364px, 6 cards
  // We want to scroll the strip by ~(364*5 - viewport) px
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-72vw'])

  return (
    <section
      ref={containerRef}
      style={{
        height: '300vh',
        position: 'relative',
        background: 'var(--bg)',
      }}
    >
      {/* Sticky viewport */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* Header */}
        <div style={{ padding: '0 2.5rem', marginBottom: '2.5rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}
          >
            El arte del detalle
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 400,
              color: 'var(--bone)',
              letterSpacing: '0.02em',
            }}
          >
            Precisión milimétrica,<br />
            <em style={{ color: 'var(--accent)' }}>cada vez.</em>
          </motion.h2>
        </div>

        {/* Scrolling strip */}
        <motion.div
          style={{
            x,
            display: 'flex',
            gap: '1.5rem',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            willChange: 'transform',
          }}
        >
          {strips.map((s, i) => (
            <div
              key={i}
              data-cursor
              data-cursor-label="VER"
              style={{
                flexShrink: 0,
                width: '300px',
                height: '420px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(212,175,55,0.12)',
              }}
            >
              <motion.img
                src={s.img}
                alt={s.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(8,8,8,0.75) 0%, transparent 50%)',
              }} />
              {/* Gold top line on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                  background: 'var(--accent)',
                  transformOrigin: 'left',
                }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1.2rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.82rem',
                  color: 'rgba(240,237,232,0.75)',
                  letterSpacing: '0.03em',
                }}>
                  {s.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginTop: '0.3rem',
                  opacity: 0.7,
                }}>
                  Lash Doll®
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div style={{
          padding: '1.5rem 2.5rem 0',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <motion.div
            style={{
              width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              height: '1px',
              background: 'var(--accent)',
              maxWidth: '120px',
            }}
          />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            scroll
          </span>
        </div>
      </div>
    </section>
  )
}
