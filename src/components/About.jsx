import { motion } from 'framer-motion'
import { img } from '../utils/img'

const credentials = ['Artista PMU Certificada', 'Microblading Avanzado', 'PMU Labial']

export default function About() {
  return (
    <section id="sobre-valeria" style={{ padding: '6rem 2.5rem', background: 'var(--surface)' }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '420px 1fr',
        gap: '5rem', alignItems: 'center',
      }} className="about-grid">

        {/* Left: Valeria's portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            aspectRatio: '3/4',
            border: '1px solid rgba(212,175,55,0.15)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src={img('images/valeria.png')}
            alt="Valeria Ambuca — Artista PMU"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.65) 0%, transparent 55%)',
          }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }} />
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--bone)',
            }}>
              Valeria Ambuca
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(212,175,55,0.7)',
              marginTop: '0.2rem',
            }}>
              Artista PMU · Certificada
            </p>
          </div>
        </motion.div>

        {/* Right: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.2rem',
          }}>
            Valeria Ambuca · Artista PMU
          </p>

          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            fontWeight: 400,
            color: 'var(--bone)',
            lineHeight: 1.4,
            margin: '0 0 1.8rem 0',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '1.2rem',
          }}>
            "Cada rostro es único.<br />Cada trazo, permanente."
          </blockquote>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'rgba(240,237,232,0.65)',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            Valeria comenzó su camino en el PMU hace más de 6 años, formándose con
            referentes de la técnica en Argentina y Brasil. Su especialidad es el
            microblading hiperrealista — trazos individuales que replican el vello
            natural con una precisión milimétrica.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            color: 'rgba(240,237,232,0.65)',
            lineHeight: 1.8,
            marginBottom: '1.8rem',
          }}>
            Cada consulta comienza con un análisis facial completo: forma, simetría y
            estilo de vida de la clienta determinan el diseño final. Para Valeria, el
            objetivo no es transformar — es revelar.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {credentials.map((c) => (
              <span key={c} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                border: '1px solid rgba(212,175,55,0.35)',
                padding: '0.4rem 0.9rem',
              }}>
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
