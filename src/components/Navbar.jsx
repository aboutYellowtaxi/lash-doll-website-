import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre Valeria', href: '#sobre-valeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'rgba(240,237,232,0.6)',
    transition: 'color 0.2s',
    cursor: 'none',
  }

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: 'var(--bg)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
        padding: '1.2rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a href="#" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: 400,
        color: 'var(--bone)',
        letterSpacing: '0.12em',
        cursor: 'none',
      }}>
        LASH DOLL<sup style={{ fontSize: '0.55rem', verticalAlign: 'super', color: 'var(--accent)', marginLeft: '1px' }}>®</sup>
      </a>

      {/* Desktop */}
      <div className="nav-desktop">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--bone)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.6)')}
          >
            {link.label}
          </a>
        ))}
        <motion.a
          href="https://api.whatsapp.com/send?phone=541133436809"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.48rem 1.3rem',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            cursor: 'none',
          }}
          whileHover={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
          transition={{ duration: 0.2 }}
        >
          Reservar
        </motion.a>
      </div>

      {/* Mobile toggle */}
      <button
        className="nav-mobile-toggle"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Cerrar' : 'Menú'}
        style={{ background: 'none', border: 'none', color: 'var(--bone)', padding: '0.25rem', alignItems: 'center', justifyContent: 'center' }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
          {menuOpen ? (
            <><line x1="4" y1="4" x2="18" y2="18" strokeLinecap="round" /><line x1="18" y1="4" x2="4" y2="18" strokeLinecap="round" /></>
          ) : (
            <><line x1="3" y1="6" x2="19" y2="6" strokeLinecap="round" /><line x1="3" y1="11" x2="19" y2="11" strokeLinecap="round" /><line x1="3" y1="16" x2="19" y2="16" strokeLinecap="round" /></>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'var(--bg)',
              borderBottom: '1px solid rgba(212,175,55,0.1)',
              padding: '1.5rem 2rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem',
            }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ ...linkStyle, fontSize: '0.9rem', color: 'var(--bone)', cursor: 'auto' }}>
                {link.label}
              </a>
            ))}
            <a href="https://api.whatsapp.com/send?phone=541133436809" target="_blank" rel="noopener noreferrer"
              style={{ padding: '0.75rem', border: '1px solid var(--accent)', color: 'var(--accent)', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'auto' }}
              onClick={() => setMenuOpen(false)}>
              Reservar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
