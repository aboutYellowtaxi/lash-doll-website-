import { motion } from 'framer-motion'

const items = [
  'Artista PMU Certificada',
  'General Rodríguez desde 2018',
  'Resultados Duraderos',
]

export default function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid rgba(212,175,55,0.08)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
        padding: '1rem 2.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {items.map((item, i) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,232,0.6)',
              padding: '0 2rem',
            }}>
              {item}
            </span>
            {i < items.length - 1 && (
              <span style={{
                width: '1px', height: '16px',
                background: 'rgba(212,175,55,0.25)',
                display: 'inline-block',
              }} />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
