import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img } from '../utils/img'

const stages = [
  {
    service: 'Microblading',
    sub: 'Pelo a pelo · Resultado natural',
    before: img('images/cejas-antes.jpg'),
    after: img('images/cejas-despues.jpg'),
    beforePos: 'center top',
    afterPos: 'center top',
    stat: '12–18 meses',
    statLabel: 'duración sin retoque',
    steps: ['Análisis facial', 'Diseño con calibre', 'Pigmentación'],
  },
  {
    service: 'Micropigmentación',
    sub: 'Labios definidos · Color permanente',
    before: img('images/labios-pmu-2.png'),
    after: img('images/labios-pmu.jpg'),
    beforePos: 'center center',
    afterPos: 'center center',
    stat: '100% natural',
    statLabel: 'sin cirugía',
    steps: ['Diseño del contorno', 'Elección del tono', 'Aplicación'],
  },
  {
    service: 'Resultado Final',
    sub: 'Una sesión · Años de impacto',
    before: img('images/cejas-antes-2.jpg'),
    after: img('images/cejas-despues-2.jpg'),
    beforePos: 'center 20%',
    afterPos: 'center 20%',
    stat: '2–3 años',
    statLabel: 'con un retoque anual',
    steps: ['Diseño', 'Técnica', 'Arte permanente'],
  },
]

export default function TransformScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Smoother per-stage progress
  const s0 = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const s1 = useTransform(scrollYProgress, [0.33, 0.72], [0, 1])
  const s2 = useTransform(scrollYProgress, [0.65, 1], [0, 1])

  // Crossfade opacities — quick overlap for smooth feel
  const op0 = useTransform(scrollYProgress, [0, 0.36, 0.42], [1, 1, 0])
  const op1 = useTransform(scrollYProgress, [0.3, 0.36, 0.68, 0.74], [0, 1, 1, 0])
  const op2 = useTransform(scrollYProgress, [0.66, 0.72, 1], [0, 1, 1])

  // Progress bar
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      style={{ height: '220vh', position: 'relative', background: 'var(--bg)' }}
    >
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        borderTop: '1px solid rgba(212,175,55,0.08)',
      }}>

        {/* Header row */}
        <div style={{
          position: 'absolute', top: '1.8rem',
          left: 0, right: 0, padding: '0 2.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          zIndex: 10,
        }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.6rem',
            letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--accent)',
          }}>
            La transformación
          </span>
          <div style={{ position: 'relative', height: '1rem', width: '3rem' }}>
            {[op0, op1, op2].map((op, i) => (
              <motion.span key={i} style={{
                opacity: op, position: 'absolute', right: 0, top: 0,
                fontFamily: 'var(--font-body)', fontSize: '0.6rem',
                letterSpacing: '0.16em', color: 'var(--muted)',
              }}>
                0{i + 1} / 03
              </motion.span>
            ))}
          </div>
        </div>

        {/* Stages — stacked, crossfade */}
        {[
          { stage: stages[0], progress: s0, opacity: op0 },
          { stage: stages[1], progress: s1, opacity: op1 },
          { stage: stages[2], progress: s2, opacity: op2 },
        ].map(({ stage, progress, opacity }, i) => (
          <StagePanel key={i} stage={stage} progress={progress} opacity={opacity} />
        ))}

        {/* Bottom progress bar */}
        <motion.div style={{
          position: 'absolute', bottom: 0, left: 0,
          height: '1px', width: barWidth,
          background: 'linear-gradient(90deg, var(--accent), rgba(212,175,55,0.3))',
        }} />
      </div>
    </section>
  )
}

function StagePanel({ stage, progress, opacity }) {
  // Reveal line sweeps left→right
  const clipRight = useTransform(progress, [0.05, 0.75], ['100%', '0%'])
  const lineLeft  = useTransform(progress, [0.05, 0.75], ['0%', '100%'])

  // Text entries
  const headY  = useTransform(progress, [0, 0.18], [32, 0])
  const headOp = useTransform(progress, [0, 0.18], [0, 1])
  const statOp = useTransform(progress, [0.12, 0.32], [0, 1])
  const statY  = useTransform(progress, [0.12, 0.32], [20, 0])

  const stepOps = [
    useTransform(progress, [0.25, 0.4], [0, 1]),
    useTransform(progress, [0.4, 0.55], [0, 1]),
    useTransform(progress, [0.55, 0.7], [0, 1]),
  ]

  return (
    <motion.div style={{
      opacity,
      position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '4rem 2.5rem 3rem',
    }}>
      <div style={{
        maxWidth: '1280px', width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 400px 1fr',
        gap: '3rem', alignItems: 'center',
      }} className="transform-grid">

        {/* Left */}
        <motion.div style={{ y: headY, opacity: headOp }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.62rem',
            letterSpacing: '0.26em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '0.8rem',
          }}>
            {stage.sub}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400, color: 'var(--bone)',
            lineHeight: 1.1, marginBottom: '2rem',
          }}>
            {stage.service}
          </h2>
          <motion.div style={{ opacity: statOp, y: statY }}>
            <div style={{
              borderLeft: '2px solid var(--accent)', paddingLeft: '1rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.6rem',
                fontWeight: 400, color: 'var(--bone)', lineHeight: 1,
              }}>
                {stage.stat}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                color: 'var(--muted)', marginTop: '0.3rem', letterSpacing: '0.06em',
              }}>
                {stage.statLabel}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Center: before/after image */}
        <div style={{
          aspectRatio: '3/4', position: 'relative',
          border: '1px solid rgba(212,175,55,0.18)', overflow: 'hidden',
        }}>
          {/* BEFORE */}
          <img src={stage.before} alt="Antes"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: stage.beforePos,
            }}
          />
          {/* AFTER — clip reveal */}
          <motion.div style={{
            position: 'absolute', inset: 0,
            clipPath: useTransform(clipRight, v => `inset(0 ${v} 0 0)`),
          }}>
            <img src={stage.after} alt="Después"
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover',
                objectPosition: stage.afterPos,
              }}
            />
          </motion.div>

          {/* Gold sweep line */}
          <motion.div style={{
            position: 'absolute', top: 0, bottom: 0, width: '2px',
            background: 'var(--accent)',
            boxShadow: '0 0 16px 2px rgba(212,175,55,0.5)',
            left: lineLeft,
          }} />

          {/* Labels */}
          <div style={{
            position: 'absolute', bottom: '1rem', left: '1rem',
            fontFamily: 'var(--font-body)', fontSize: '0.55rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(240,237,232,0.45)',
          }}>Antes</div>
          <div style={{
            position: 'absolute', bottom: '1rem', right: '1rem',
            fontFamily: 'var(--font-body)', fontSize: '0.55rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>Después</div>

          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }} />
        </div>

        {/* Right: steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.58rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '0.25rem',
          }}>
            El proceso
          </p>
          {stage.steps.map((step, i) => (
            <motion.div key={i} style={{ opacity: stepOps[i] }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div style={{
                  width: '18px', height: '1px',
                  background: 'var(--accent)', flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.82rem',
                  color: 'rgba(240,237,232,0.75)', letterSpacing: '0.04em',
                }}>
                  {step}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
