import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFAB from '../components/WhatsAppFAB'

const WA = 'https://api.whatsapp.com/send?phone=541133436809'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  }
}

export default function ServicePage({ meta, hero, intro, process, results, faq, related }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
      </Helmet>

      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        minHeight: '70vh', position: 'relative', display: 'flex',
        alignItems: 'flex-end', overflow: 'hidden', background: 'var(--bg)',
      }}>
        <img
          src={hero.img}
          alt={hero.alt}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: hero.pos || 'center top',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.3) 60%, transparent 100%)',
        }} />
        <div style={{ position: 'relative', padding: '4rem 2.5rem', maxWidth: '1280px', width: '100%', margin: '0 auto' }}>
          <Link to="/" style={{
            fontFamily: 'var(--font-body)', fontSize: '0.65rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(212,175,55,0.7)', display: 'inline-block', marginBottom: '1.5rem',
          }}>
            ← Lash Doll Studio
          </Link>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '0.68rem',
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: 'var(--accent)', marginBottom: '0.8rem',
            }}
          >
            {hero.tag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              fontWeight: 400, color: 'var(--bone)', letterSpacing: '-0.02em',
              lineHeight: 1, margin: 0,
            }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-body)', fontSize: '1rem',
              color: 'rgba(240,237,232,0.6)', marginTop: '1rem', maxWidth: '560px', lineHeight: 1.6,
            }}
          >
            {hero.sub}
          </motion.p>
          <motion.a
            href={WA} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{
              display: 'inline-block', marginTop: '2rem',
              fontFamily: 'var(--font-body)', fontSize: '0.78rem',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--bg)', background: 'var(--accent)',
              padding: '0.8rem 2rem', cursor: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            Reservar turno →
          </motion.a>
        </div>
      </section>

      {/* ── Intro / Qué es ── */}
      <section style={{ padding: '6rem 2.5rem', background: 'var(--surface)', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="sp-intro-grid">
          <motion.div {...fadeUp(0)}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              ¿Qué es?
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--bone)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {intro.title}
            </h2>
            {intro.paragraphs.map((p, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'rgba(240,237,232,0.7)', lineHeight: 1.85, marginBottom: '1rem' }}>
                {p}
              </p>
            ))}
          </motion.div>
          <motion.div {...fadeUp(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {intro.facts.map((f, i) => (
              <div key={i} style={{
                background: 'var(--bg)', border: '1px solid rgba(212,175,55,0.1)',
                borderLeft: '2px solid var(--accent)', padding: '1.2rem 1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.3rem',
              }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--bone)' }}>{f.value}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <style>{`.sp-intro-grid { } @media(max-width:768px){ .sp-intro-grid{ grid-template-columns:1fr !important; gap:2.5rem !important; } }`}</style>
      </section>

      {/* ── Para quién es / No es para ── */}
      <section style={{ padding: '5rem 2.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.h2 {...fadeUp(0)} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'var(--bone)', marginBottom: '3rem', textAlign: 'center' }}>
            ¿Para quién es ideal?
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="sp-ideal-grid">
            <motion.div {...fadeUp(0)} style={{ background: 'var(--surface)', border: '1px solid rgba(212,175,55,0.12)', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>
                Ideal si...
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {intro.idealFor.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>—</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(240,237,232,0.75)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp(0.1)} style={{ background: 'var(--surface)', border: '1px solid rgba(212,175,55,0.12)', padding: '2rem' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.2rem' }}>
                No recomendado si...
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {intro.notFor.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--muted)', marginTop: '2px', flexShrink: 0 }}>×</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(240,237,232,0.55)', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          <style>{`@media(max-width:768px){ .sp-ideal-grid{ grid-template-columns:1fr !important; } }`}</style>
        </div>
      </section>

      {/* ── Proceso paso a paso ── */}
      <section style={{ padding: '6rem 2.5rem', background: 'var(--surface)', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.p {...fadeUp(0)} style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            El proceso
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--bone)', marginBottom: '3.5rem', lineHeight: 1.1 }}>
            Cómo funciona,<br />paso a paso.
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {process.steps.map((step, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr',
                gap: '1.5rem', paddingBottom: '2.5rem',
                borderLeft: i < process.steps.length - 1 ? '1px solid rgba(212,175,55,0.15)' : 'none',
                marginLeft: '30px', paddingLeft: '2rem', position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', left: '-16px', top: 0,
                  width: '32px', height: '32px',
                  background: 'var(--bg)', border: '1px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-body)', fontSize: '0.65rem',
                  letterSpacing: '0.1em', color: 'var(--accent)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ paddingTop: '0.2rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--bone)', marginBottom: '0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(240,237,232,0.65)', lineHeight: 1.7 }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {process.duration && (
            <motion.div {...fadeUp(0.2)} style={{
              marginTop: '1rem', background: 'var(--bg)',
              border: '1px solid rgba(212,175,55,0.15)', padding: '1.2rem 1.5rem',
              display: 'flex', gap: '1rem', alignItems: 'center',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--accent)' }}>{process.duration}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--muted)' }}>{process.durationLabel}</span>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Resultados / Fotos ── */}
      {results && results.images && results.images.length > 0 && (
        <section style={{ padding: '6rem 2.5rem', background: 'var(--bg)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <motion.h2 {...fadeUp(0)} style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400, color: 'var(--bone)', marginBottom: '3rem',
            }}>
              Resultados reales
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(212,175,55,0.06)' }} className="sp-results-grid">
              {results.images.map((img, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} style={{ aspectRatio: '3/4', position: 'relative', overflow: 'hidden' }}>
                  <motion.img
                    src={img.src} alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: img.pos || 'center', display: 'block' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 55%)' }} />
                  <p style={{ position: 'absolute', bottom: '1rem', left: '1rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '0.75rem', color: 'rgba(240,237,232,0.7)' }}>
                    {img.alt}
                  </p>
                </motion.div>
              ))}
            </div>
            <style>{`@media(max-width:768px){ .sp-results-grid{ grid-template-columns:1fr !important; } }`}</style>
          </div>
        </section>
      )}

      {/* ── Cuidados post ── */}
      {results && results.aftercare && (
        <section style={{ padding: '5rem 2.5rem', background: 'var(--surface)', borderTop: '1px solid rgba(212,175,55,0.08)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.p {...fadeUp(0)} style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
              Post procedimiento
            </motion.p>
            <motion.h2 {...fadeUp(0.05)} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 400, color: 'var(--bone)', marginBottom: '2.5rem' }}>
              Cuidados después del turno
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="sp-aftercare-grid">
              {results.aftercare.map((item, i) => (
                <motion.div key={i} {...fadeUp(i * 0.06)} style={{
                  background: 'var(--bg)', padding: '1.2rem 1.4rem',
                  border: '1px solid rgba(212,175,55,0.1)',
                  display: 'flex', gap: '0.8rem', alignItems: 'flex-start',
                }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginTop: '2px', flexShrink: 0 }}>—</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.7)', lineHeight: 1.55 }}>{item}</span>
                </motion.div>
              ))}
            </div>
            <style>{`@media(max-width:768px){ .sp-aftercare-grid{ grid-template-columns:1fr !important; } }`}</style>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section style={{ padding: '6rem 2.5rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.p {...fadeUp(0)} style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
            Preguntas frecuentes
          </motion.p>
          <motion.h2 {...fadeUp(0.05)} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--bone)', marginBottom: '3rem' }}>
            Lo que más nos preguntan
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faq.map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.05)} style={{
                borderTop: '1px solid rgba(212,175,55,0.1)',
                padding: '1.8rem 0',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--bone)', marginBottom: '0.7rem', lineHeight: 1.3 }}>
                  {item.q}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'rgba(240,237,232,0.6)', lineHeight: 1.75 }}>
                  {item.a}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }} />
          </div>
        </div>
      </section>

      {/* ── Valeria CTA ── */}
      <section style={{
        padding: '0', background: 'var(--surface)',
        borderTop: '1px solid rgba(212,175,55,0.08)',
        display: 'grid', gridTemplateColumns: '1fr 420px',
        minHeight: '460px',
      }} className="sp-cta-grid">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5rem 3rem 5rem 2.5rem', maxWidth: '600px' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>
            Lash Doll Studio · General Rodríguez
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 400, color: 'var(--bone)', lineHeight: 1.25, marginBottom: '1.5rem' }}>
            "Cada rostro es único.<br />Cada trazo, permanente."
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.6)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Consultá con Valeria sin compromiso. Te explica el procedimiento, el resultado esperado y si sos candidata ideal — antes de agendar.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.78rem',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--bg)', background: 'var(--accent)',
              padding: '0.8rem 2rem', cursor: 'none', transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Consulta gratis por WhatsApp
            </a>
            <Link to="/" style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', cursor: 'none' }}>
              Ver todos los servicios →
            </Link>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/images/valeria-studio.png" alt="Valeria Ambuca — Lash Doll Studio"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--surface) 0%, transparent 30%)' }} />
        </div>
        <style>{`@media(max-width:768px){ .sp-cta-grid{ grid-template-columns:1fr !important; } .sp-cta-grid>div:last-child{ height:320px; } }`}</style>
      </section>

      <Footer />
      <WhatsAppFAB />
    </>
  )
}
