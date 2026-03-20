import { motion } from 'framer-motion'

const services = [
  {
    name: 'Microblading',
    desc: 'Pelo a pelo · Resultado ultra natural',
    img: '/images/cejas-despues.jpg',
    pos: 'center top',
  },
  {
    name: 'PMU de Labios',
    desc: 'Color permanente · Labios definidos',
    img: '/images/labios-pmu.jpg',
    pos: 'center center',
  },
  {
    name: 'Lash Lifting',
    desc: 'Rizadas y elevadas · Sin extensiones',
    img: '/images/lash-lifting.jpg',
    pos: 'center center',
  },
]

export default function TrustBar() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid rgba(212,175,55,0.08)',
    }} className="services-strip">
      {services.map((s, i) => (
        <motion.a
          key={s.name}
          href="#servicios"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          style={{
            position: 'relative',
            aspectRatio: '4/3',
            overflow: 'hidden',
            display: 'block',
            borderRight: i < 2 ? '1px solid rgba(212,175,55,0.08)' : 'none',
            cursor: 'none',
          }}
        >
          <motion.img
            src={s.img}
            alt={s.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: s.pos,
              display: 'block',
            }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)',
          }} />
          {/* Gold top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)',
          }} />
          {/* Text */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              fontWeight: 400,
              color: 'var(--bone)',
              letterSpacing: '0.02em',
              marginBottom: '0.3rem',
            }}>
              {s.name}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(240,237,232,0.5)',
            }}>
              {s.desc}
            </p>
          </div>
          {/* Number */}
          <div style={{
            position: 'absolute', top: '1.2rem', right: '1.2rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem',
            letterSpacing: '0.2em',
            color: 'rgba(212,175,55,0.5)',
          }}>
            0{i + 1}
          </div>
        </motion.a>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .services-strip { grid-template-columns: 1fr !important; }
          .services-strip a { aspect-ratio: 16/9 !important; border-right: none !important; border-bottom: 1px solid rgba(212,175,55,0.08); }
        }
      `}</style>
    </section>
  )
}
