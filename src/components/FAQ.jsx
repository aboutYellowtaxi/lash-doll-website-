import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Duele el microblading?',
    a: 'Se aplica anestesia tópica antes del procedimiento. La mayoría de las clientas reportan solo una leve presión o cosquilleo. La incomodidad es mínima y dura solo durante el proceso.',
  },
  {
    q: '¿Cuánto dura el resultado?',
    a: 'En promedio entre 12 y 18 meses. Con un retoque anual, los resultados se mantienen perfectos por 2 a 3 años. La duración varía según el tipo de piel y los cuidados post-tratamiento.',
  },
  {
    q: '¿Necesito algún cuidado especial después?',
    a: 'Sí. Los primeros 7–10 días hay que evitar mojar la zona, no aplicar maquillaje y no exponerse al sol. Valeria te entrega una guía completa de cuidados post-procedimiento.',
  },
  {
    q: '¿Cómo agendo un turno?',
    a: 'Por WhatsApp o Instagram DM. Valeria responde consultas personalmente. La primera consulta es gratuita y sin compromiso.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div style={{
      borderBottom: '1px solid rgba(212,175,55,0.1)',
    }}>
      <button
        onClick={onClick}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'none',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.92rem',
          fontWeight: 400,
          color: isOpen ? 'var(--bone)' : 'rgba(240,237,232,0.75)',
          letterSpacing: '0.03em',
          transition: 'color 0.2s',
        }}>
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            color: 'var(--accent)',
            fontSize: '1.2rem',
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              color: 'var(--muted)',
              lineHeight: 1.75,
              paddingBottom: '1.5rem',
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section style={{ padding: '5rem 2.5rem', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
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
            marginBottom: '2rem',
          }}
        >
          Preguntas Frecuentes
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
