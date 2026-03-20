import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid rgba(212,175,55,0.08)',
      padding: '2.5rem',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 400,
            color: 'var(--bone)',
            letterSpacing: '0.12em',
          }}>
            LASH DOLL<sup style={{ fontSize: '0.5rem', verticalAlign: 'super', color: 'var(--accent)', marginLeft: '1px' }}>®</sup>
          </span>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            color: 'var(--muted)',
            marginTop: '0.3rem',
            letterSpacing: '0.06em',
          }}>
            2 de Abril 636, General Rodríguez
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a
            href="https://www.instagram.com/lash.doll.estetica/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              transition: 'color 0.2s',
              cursor: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)' }}
          >
            Instagram
          </a>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}>
            © 2025 Lash Doll® · Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  )
}
