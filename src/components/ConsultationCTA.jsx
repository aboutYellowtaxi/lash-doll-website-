import { motion } from 'framer-motion'

export default function ConsultationCTA() {
  return (
    <section id="contacto" style={{
      padding: '6rem 2.5rem',
      background: 'var(--surface)',
      borderTop: '1px solid var(--accent)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 400,
            color: 'var(--bone)',
            lineHeight: 1.25,
            marginBottom: '1rem',
          }}
        >
          ¿Lista para transformar<br />tu mirada?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            letterSpacing: '0.12em',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
          }}
        >
          Agendá tu consulta gratuita · WhatsApp o Instagram
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=541133436809"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '0.85rem 2.2rem',
              fontWeight: 500,
              transition: 'opacity 0.2s',
              cursor: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/lash.doll.estetica/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              background: 'transparent',
              color: 'var(--bone)',
              padding: '0.85rem 2.2rem',
              border: '1px solid rgba(240,237,232,0.25)',
              transition: 'border-color 0.2s, color 0.2s',
              cursor: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--bone)'; e.currentTarget.style.color = 'var(--bone)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,237,232,0.25)'; e.currentTarget.style.color = 'var(--bone)' }}
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
