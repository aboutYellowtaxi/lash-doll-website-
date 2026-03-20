import { motion } from 'framer-motion'

const pmuServices = [
  {
    name: 'Microblading de Cejas',
    desc: 'Diseño pelo a pelo con pigmentos premium. Resultado ultra natural que imita el vello real.',
  },
  {
    name: 'Micropigmentación de Labios',
    desc: 'Definición y color permanente. Labios perfectos sin retoque diario.',
  },
  {
    name: 'Sombreado de Cejas',
    desc: 'Powder brows: efecto maquillaje suave y duradero. Ideal para piel grasa.',
  },
  {
    name: 'Eyeliner Permanente',
    desc: 'Delineado superior o inferior de precisión. Mirada definida las 24 horas.',
  },
]

const lashServices = [
  {
    name: 'Extensiones Clásicas',
    desc: 'Una extensión por pestaña natural. Look natural y elegante.',
  },
  {
    name: 'Volumen Ruso',
    desc: 'Técnica de abanico para máximo volumen y densidad.',
  },
  {
    name: 'Lifting de Pestañas',
    desc: 'Riza y eleva tus pestañas naturales. Sin extensiones.',
  },
]

function ServiceCard({ name, desc, index }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--accent)',
        borderLeft: '1px solid rgba(212,175,55,0.1)',
        borderRight: '1px solid rgba(212,175,55,0.1)',
        borderBottom: '1px solid rgba(212,175,55,0.1)',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        transition: 'background 0.2s',
        cursor: 'default',
      }}
      whileHover={{ backgroundColor: 'rgba(26,26,26,1)' }}
    >
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: 400,
        color: 'var(--bone)',
        letterSpacing: '0.02em',
      }}>
        {name}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8rem',
        color: 'var(--muted)',
        lineHeight: 1.6,
        flex: 1,
      }}>
        {desc}
      </p>
      <a
        href="https://wa.me/54XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginTop: '0.5rem',
          cursor: 'none',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
      >
        Consultá →
      </a>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" style={{ padding: '6rem 2.5rem', background: 'var(--bg)' }}>
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
            marginBottom: '0.5rem',
          }}
        >
          Lo que Hacemos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '3rem',
          }}
        >
          PMU · Maquillaje Permanente
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'rgba(212,175,55,0.06)',
          marginBottom: '1px',
        }} className="services-pmu-grid">
          {pmuServices.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            margin: '3rem 0 2rem',
          }}
        >
          Lash Services
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(212,175,55,0.06)',
        }} className="services-lash-grid">
          {lashServices.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i + 4} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-pmu-grid { grid-template-columns: 1fr !important; }
          .services-lash-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
