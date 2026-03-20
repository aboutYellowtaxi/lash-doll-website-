import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { img } from '../utils/img'

// Replace these 4 images with the ones generated in Nano Banana
// (same face, same angle — base + each treatment applied)
// Drop them in public/images/ with these exact names when ready:
//   transform-base.jpg | transform-microblading.jpg | transform-lash-lifting.jpg | transform-lip-pmu.jpg
const USE_GENERATED = false // flip to true once you drop the generated images in

const stages = [
  {
    service: 'Microblading',
    sub: 'Pelo a pelo · Resultado natural',
    before: USE_GENERATED ? img('images/transform-base.jpg') : img('images/before microblading v2.jpeg'),
    after:  USE_GENERATED ? img('images/transform-microblading.jpg') : img('images/after microblading v2.jpeg'),
    beforePos: 'center top',
    afterPos: 'center top',
    stat: '12–18 meses',
    statLabel: 'duración sin retoque',
    steps: ['Análisis facial', 'Diseño con calibre', 'Pigmentación pelo a pelo'],
  },
  {
    service: 'Lash Lifting',
    sub: 'Rizadas y elevadas · Sin extensiones',
    before: USE_GENERATED ? img('images/transform-base.jpg') : img('images/before microblading v2.jpeg'),
    after:  USE_GENERATED ? img('images/transform-lash-lifting.jpg') : img('images/lash lifting 1.jpg'),
    beforePos: 'center top',
    afterPos: 'center center',
    stat: '6–8 semanas',
    statLabel: 'duración del efecto',
    steps: ['Limpieza de pestañas', 'Rizado con varilla', 'Fijación y nutrición'],
  },
  {
    service: 'Micropigmentación Labial',
    sub: 'Labios definidos · Color permanente',
    before: USE_GENERATED ? img('images/transform-base.jpg') : img('images/microblanding before.jpg'),
    after:  USE_GENERATED ? img('images/transform-lip-pmu.jpg') : img('images/micropigmentacion labios.png'),
    beforePos: 'center top',
    afterPos: 'center center',
    stat: '100% natural',
    statLabel: 'sin cirugía ni relleno',
    steps: ['Diseño del contorno', 'Elección del tono', 'Pigmentación degradé'],
  },
]

export default function TransformScroll() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Each stage gets 1/3 of the scroll, with smooth overlap
  const s0 = useTransform(scrollYProgress, [0, 0.38], [0, 1])
  const s1 = useTransform(scrollYProgress, [0.3, 0.68], [0, 1])
  const s2 = useTransform(scrollYProgress, [0.62, 1], [0, 1])

  // Wider visible windows so each panel stays on screen longer
  const op0 = useTransform(scrollYProgress, [0, 0.32, 0.38], [1, 1, 0])
  const op1 = useTransform(scrollYProgress, [0.3, 0.36, 0.64, 0.70], [0, 1, 1, 0])
  const op2 = useTransform(scrollYProgress, [0.62, 0.68, 1], [0, 1, 1])

  // Progress bar
  const barWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section
      ref={containerRef}
      className="transform-section"
      style={{ height: '300vh', position: 'relative', background: 'var(--bg)' }}
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
  // Reveal line sweeps left→right — slower range = more scroll to complete
  const clipRight = useTransform(progress, [0.08, 0.85], ['100%', '0%'])
  const lineLeft  = useTransform(progress, [0.08, 0.85], ['0%', '100%'])

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
        <motion.div className="transform-left" style={{ y: headY, opacity: headOp }}>
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
        <div className="transform-center" style={{
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
        <div className="transform-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
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
