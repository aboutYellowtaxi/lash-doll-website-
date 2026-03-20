import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'Tenía terror de quedar con cara de sorprendida o con las cejas demasiado marcadas. Valeria me mostró el trazo antes de empezar y me fue consultando todo el tiempo. El resultado es tan natural que mi pareja tardó días en darse cuenta.',
    name: 'Florencia G.',
    service: 'Microblading',
  },
  {
    text: 'Me daba miedo hacerme algo permanente en la cara. Valeria me explicó exactamente qué iba a pasar en cada paso, sin apuros. Salí amando el resultado y ya agendé la retocada. Si dudás, dale para adelante.',
    name: 'Camila T.',
    service: 'Micropigmentación Labial',
  },
  {
    text: 'Pensé que en un año iba a necesitar hacérmelo de vuelta. Hace dos años que lo tengo y sigue impecable. Ya no me acuerdo lo que era maquillarme las cejas todos los días. Vale cada peso.',
    name: 'Luciana M.',
    service: 'Microblading',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '6rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.75rem',
          }}>
            Lo que dicen ellas
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '1rem', letterSpacing: '0.05em' }}>★★★★★</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
              5.0 · Reseñas verificadas
            </span>
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(212,175,55,0.1)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>★</span>
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: 'rgba(240,237,232,0.8)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                "{t.text}"
              </p>

              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--bone)',
                  letterSpacing: '0.08em',
                }}>
                  {t.name}
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginTop: '0.2rem',
                }}>
                  {t.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Google Reviews CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ marginTop: '3rem', textAlign: 'center' }}
      >
        <a
          href="https://g.page/r/lashdollestetica/review"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            border: '1px solid rgba(212,175,55,0.35)',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            transition: 'background 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.08)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.35 11.1H12v2.8h5.35C16.8 16.4 14.7 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c1.55 0 2.95.6 4.02 1.57l2.01-2.01C16.46 4.04 14.36 3 12 3 7.03 3 3 7.03 3 12s4.03 9 9 9c5.24 0 8.72-3.68 8.72-8.86 0-.6-.06-1.04-.14-1.04H21.35z"/>
          </svg>
          Ver reseñas en Google
        </a>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
