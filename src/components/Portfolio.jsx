import { motion } from 'framer-motion'

const cards = [
  { label: 'Microblading · Antes / Después' },
  { label: 'Micropigmentación Labial · Antes / Después' },
  { label: 'Powder Brows · Antes / Después' },
  { label: 'Microblading · Antes / Después' },
  { label: 'Eyeliner Permanente · Antes / Después' },
  { label: 'Micropigmentación Labial · Antes / Después' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '6rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--bone)',
            letterSpacing: '0.04em',
            marginBottom: '3rem',
          }}
        >
          Portfolio
        </motion.h2>

        <div className="portfolio-masonry">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ scale: 1.015 }}
              style={{
                aspectRatio: i % 3 === 0 ? '4/5' : '3/4',
                background: 'linear-gradient(160deg, var(--surface2) 0%, var(--surface) 100%)',
                border: '1px solid rgba(212,175,55,0.08)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s',
                cursor: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.08)' }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(212,175,55,0.05) 0%, transparent 70%)',
              }} />
              <p style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: '0.78rem',
                color: 'rgba(212,175,55,0.45)',
                letterSpacing: '0.04em',
                position: 'relative',
              }}>
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a
            href="https://www.instagram.com/lash.doll.estetica/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid rgba(212,175,55,0.35)',
              padding: '0.7rem 2rem',
              transition: 'background 0.2s, color 0.2s',
              cursor: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--bg)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)' }}
          >
            Seguinos en Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
