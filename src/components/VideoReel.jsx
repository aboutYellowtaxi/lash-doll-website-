import { motion } from 'framer-motion'
import { img } from '../utils/img'

export default function VideoReel() {
  return (
    <section style={{
      padding: '5rem 2.5rem',
      background: 'var(--surface)',
      borderTop: '1px solid rgba(212,175,55,0.08)',
    }}>
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
            marginBottom: '2.5rem',
          }}
        >
          En acción
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1.5rem',
        }} className="video-grid">
          {[
            { src: img('images/lash-lifting-2.mp4'), label: 'Lash Lifting · Proceso' },
            { src: img('images/lash-lifting.mp4'), label: 'Lash Lifting · Resultado' },
            { src: img('images/labios-video.mp4'), label: 'Micropigmentación de Labios' },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              style={{
                border: '1px solid rgba(212,175,55,0.1)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <video
                src={v.src}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block', aspectRatio: '9/16', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '1rem',
                background: 'linear-gradient(to top, rgba(8,8,8,0.8) 0%, transparent 100%)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '0.78rem',
                  color: 'rgba(240,237,232,0.8)',
                }}>
                  {v.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .video-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
