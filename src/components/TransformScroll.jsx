import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// 3 stages: each covers 1/3 of total scroll
// Stage 1: Microblading — cejas antes → después
// Stage 2: Micropigmentación — labios reveal
// Stage 3: Resultado final combinado

const stages = [
  {
    service: 'Microblading',
    sub: 'Pelo a pelo · Resultado natural',
    before: '/images/cejas-antes.jpg',
    after: '/images/cejas-despues.jpg',
    stat: '12–18 meses',
    statLabel: 'duración sin retoque',
    steps: ['Análisis facial', 'Diseño con calibre', 'Pigmentación'],
  },
  {
    service: 'Micropigmentación',
    sub: 'Definición y color · Labios perfectos',
    before: '/images/labios-pmu-2.png',
    after: '/images/labios-pmu.jpg',
    stat: '100%',
    statLabel: 'sin cirugía',
    steps: ['Diseño del contorno', 'Elección del tono', 'Aplicación'],
  },
  {
    service: 'Resultado Final',
    sub: 'Una sola sesión cambia todo',
    before: '/images/cejas-antes-2.jpg',
    after: '/images/cejas-despues-2.jpg',
    stat: '2–3 años',
    statLabel: 'de duración con retoque',
    steps: ['Diseño', 'Técnica', 'Arte permanente'],
  },
]

function Stage({ stage, progress }) {
  // The reveal line: 0% = full before, 100% = full after
  const clipX = useTransform(progress, [0.1, 0.7], ['100%', '0%'])
  const lineX = useTransform(progress, [0.1, 0.7], ['0%', '100%'])

  const titleY   = useTransform(progress, [0, 0.15], [40, 0])
  const titleOp  = useTransform(progress, [0, 0.15], [0, 1])

  const statY    = useTransform(progress, [0.15, 0.35], [30, 0])
  const statOp   = useTransform(progress, [0.15, 0.35], [0, 1])

  const step0Op  = useTransform(progress, [0.2, 0.35], [0, 1])
  const step1Op  = useTransform(progress, [0.35, 0.5], [0, 1])
  const step2Op  = useTransform(progress, [0.5, 0.65], [0, 1])

  const stepOps  = [step0Op, step1Op, step2Op]

  return (
    <div style={{
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 2.5rem',
    }}>
      <div style={{
        maxWidth: '1280px', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 480px 1fr',
        gap: '3rem',
        alignItems: 'center',
      }} className="transform-grid">

        {/* Left: service info */}
        <div>
          <motion.p
            style={{ y: titleY, opacity: titleOp }}
            transition={{ type: 'spring' }}
            sx={{ fontFamily: 'var(--font-body)' }}
          >
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '0.75rem',
            }}>
              {stage.sub}
            </span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 400,
              color: 'var(--bone)',
              lineHeight: 1.1,
              display: 'block',
            }}>
              {stage.service}
            </span>
          </motion.p>

          {/* Animated stat */}
          <motion.div
            style={{ y: statY, opacity: statOp, marginTop: '2rem' }}
          >
            <div style={{
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '1rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                fontWeight: 400,
                color: 'var(--bone)',
                lineHeight: 1,
              }}>
                {stage.stat}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                color: 'var(--muted)',
                marginTop: '0.3rem',
                letterSpacing: '0.06em',
              }}>
                {stage.statLabel}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Center: before/after image with scroll-reveal */}
        <div style={{
          position: 'relative',
          aspectRatio: '3/4',
          border: '1px solid rgba(212,175,55,0.15)',
          overflow: 'hidden',
        }}>
          {/* BEFORE — always visible */}
          <img
            src={stage.before}
            alt="Antes"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* AFTER — revealed left to right via clip-path */}
          <motion.div
            style={{
              position: 'absolute', inset: 0,
              clipPath: useTransform(clipX, v => `inset(0 ${v} 0 0)`),
            }}
          >
            <img
              src={stage.after}
              alt="Después"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* Moving divider line */}
          <motion.div
            style={{
              position: 'absolute', top: 0, bottom: 0,
              width: '2px',
              background: 'var(--accent)',
              left: lineX,
              boxShadow: '0 0 12px rgba(212,175,55,0.6)',
            }}
          />

          {/* ANTES / DESPUÉS labels */}
          <div style={{
            position: 'absolute', bottom: '1rem', left: '1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'rgba(240,237,232,0.5)',
          }}>
            Antes
          </div>
          <div style={{
            position: 'absolute', bottom: '1rem', right: '1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--accent)',
          }}>
            Después
          </div>

          {/* Gold top shimmer */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }} />
        </div>

        {/* Right: process steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--muted)',
            marginBottom: '0.5rem',
          }}>
            El proceso
          </p>
          {stage.steps.map((step, i) => (
            <motion.div
              key={i}
              style={{ opacity: stepOps[i] }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '20px', height: '1px',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'rgba(240,237,232,0.75)',
                  letterSpacing: '0.05em',
                }}>
                  {step}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TransformScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Each stage occupies 1/3 of scroll — map to local [0,1]
  const s0 = useTransform(scrollYProgress, [0, 0.33], [0, 1])
  const s1 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1])
  const s2 = useTransform(scrollYProgress, [0.66, 1], [0, 1])

  // Opacity per stage
  const op0 = useTransform(scrollYProgress, [0, 0.28, 0.33], [1, 1, 0])
  const op1 = useTransform(scrollYProgress, [0.33, 0.34, 0.61, 0.66], [0, 1, 1, 0])
  const op2 = useTransform(scrollYProgress, [0.66, 0.67, 1], [0, 1, 1])

  const stageData = [
    { stage: stages[0], progress: s0, opacity: op0 },
    { stage: stages[1], progress: s1, opacity: op1 },
    { stage: stages[2], progress: s2, opacity: op2 },
  ]

  return (
    <section
      ref={containerRef}
      style={{ height: '320vh', position: 'relative', background: 'var(--bg)' }}
    >
      {/* Sticky viewport */}
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212,175,55,0.08)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
      }}>
        {/* Section label */}
        <div style={{
          position: 'absolute', top: '2rem', left: '2.5rem',
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem', letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          zIndex: 10,
        }}>
          La transformación
        </div>

        {/* Stage counter */}
        <motion.div style={{
          position: 'absolute', top: '2rem', right: '2.5rem',
          zIndex: 10,
          fontFamily: 'var(--font-body)',
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          color: 'var(--muted)',
        }}>
          {stageData.map((s, i) => (
            <motion.span
              key={i}
              style={{ opacity: s.opacity, position: i === 0 ? 'relative' : 'absolute', top: 0, right: 0 }}
            >
              0{i + 1} / 03
            </motion.span>
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div style={{
          position: 'absolute', bottom: 0, left: 0,
          height: '2px',
          width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
          background: 'linear-gradient(90deg, var(--accent), rgba(212,175,55,0.4))',
          zIndex: 10,
        }} />

        {/* Stages */}
        {stageData.map((s, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute', inset: 0,
              opacity: s.opacity,
            }}
          >
            <Stage stage={s.stage} progress={s.progress} />
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .transform-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .transform-grid > div:first-child,
          .transform-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
