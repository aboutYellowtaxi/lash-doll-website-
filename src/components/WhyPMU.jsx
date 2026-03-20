import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'


export default function WhyPMU() {
  return (
    <section style={{
      padding: '6rem 2.5rem',
      background: 'var(--surface)',
      borderTop: '1px solid rgba(212,175,55,0.08)',
      borderBottom: '1px solid rgba(212,175,55,0.08)',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '5rem', alignItems: 'center',
      }} className="why-grid">

        {/* Left: stats */}
        <div>
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
              marginBottom: '2rem',
            }}
          >
            ¿Por qué Maquillaje Permanente?
          </motion.p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[
              { value: '2–3 años', label: 'de duración promedio', num: null },
              { value: null, label: 'con anestesia tópica', num: 0, prefix: 'Sin', suffix: ' dolor' },
              { value: null, label: 'resultado a medida', num: 100, prefix: '', suffix: '% natural' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 400,
                  color: 'var(--bone)',
                  lineHeight: 1,
                }}>
                  {s.value ? s.value : (
                    <>
                      {s.prefix}{s.num !== null && (
                        <CountUp from={0} to={s.num} />
                      )}{s.suffix}
                    </>
                  )}
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'var(--muted)',
                  marginTop: '0.3rem',
                  letterSpacing: '0.06em',
                }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--bone)',
            lineHeight: 1.3,
            marginBottom: '1.5rem',
          }}>
            Despertate lista.<br />Todos los días.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'rgba(240,237,232,0.65)',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            El maquillaje permanente no es solo estética — es tiempo devuelto.
            Sin rutinas de media hora cada mañana. Sin retoques antes de salir.
            Solo vos, tal como sos, pero resaltada.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'rgba(240,237,232,0.65)',
            lineHeight: 1.8,
          }}>
            Los procedimientos PMU de Valeria están diseñados para que el resultado
            sea tan natural que nadie pueda notar que es permanente — solo que siempre
            lucís increíble.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=541133436809"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="CONSULTAR"
            style={{
              display: 'inline-block',
              marginTop: '2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              borderBottom: '1px solid rgba(212,175,55,0.4)',
              paddingBottom: '2px',
              cursor: 'none',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
          >
            Agendá tu consulta gratuita →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}

function CountUp({ from, to }) {
  const [val, setVal] = useState(from)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const steps = 60
    const step = (to - from) / steps
    let cur = from
    const t = setInterval(() => {
      cur += step
      if (cur >= to) { setVal(to); clearInterval(t) }
      else setVal(Math.floor(cur))
    }, duration / steps)
    return () => clearInterval(t)
  }, [inView, from, to])

  return <span ref={ref}>{val}</span>
}
