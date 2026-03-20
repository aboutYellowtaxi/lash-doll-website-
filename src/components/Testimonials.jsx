import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'Valeria es una artista. Me hizo el microblading y quedó increíblemente natural. Todos me preguntan si son mis cejas reales.',
    name: 'Florencia G.',
    service: 'Microblading',
  },
  {
    text: 'Primera vez que me hacía micropigmentación de labios y me fui re tranquila. Muy profesional, me explicó todo y el resultado es hermoso.',
    name: 'Camila T.',
    service: 'Micropigmentación Labial',
  },
  {
    text: 'Hace 2 años que tengo el microblading hecho y sigue perfecto. La mejor inversión que hice.',
    name: 'Luciana M.',
    service: 'Microblading',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '6rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          Lo que dicen ellas
        </motion.p>

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

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
