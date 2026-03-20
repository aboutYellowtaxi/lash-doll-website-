import ServicePage from './ServicePage'

const data = {
  meta: {
    title: 'Lash Lifting · Pestañas rizadas sin extensiones — Lash Doll Studio',
    desc: 'Lash lifting en General Rodríguez. Rizá y elevá tus pestañas naturales. Resultado de 6–8 semanas sin mantenimiento diario. Conocé el proceso.',
  },
  hero: {
    tag: 'Tratamiento de Pestañas',
    title: 'Lash Lifting',
    sub: 'Tus propias pestañas, rizadas y elevadas para siempre. Sin extensiones, sin adhesivos, sin mantenimiento diario.',
    img: '/images/result-lifting-1.jpg',
    pos: 'center center',
    alt: 'Lash lifting resultado — Lash Doll',
  },
  intro: {
    title: 'El rizo perfecto que dura 6–8 semanas.',
    paragraphs: [
      'El lash lifting es un tratamiento químico que moldea permanentemente la curva de tus pestañas naturales hacia arriba. El efecto es inmediato: tus pestañas se ven más largas (porque al curvarse revelan toda su longitud), más abiertas y más definidas — sin una sola extensión.',
      'Se utilizan escudos de silicona en diferentes tamaños (S, M, L, XL) seleccionados según el largo de tus pestañas. Una solución de lifting afloja la estructura proteica del pelo, el escudo moldea la curva, y una solución fijadora la fija permanentemente en esa forma. El proceso no daña las pestañas cuando se hace correctamente.',
      'En Lash Doll el lifting se combina con tintura de keratina: además de rizar, el tinte oscurece y define cada pestaña y el tratamiento de queratina fortalece el pelo desde adentro, dejándolo más brillante y resistente. El resultado dura hasta 8 semanas, que es exactamente la duración de un ciclo completo de crecimiento de pestaña.',
    ],
    facts: [
      { value: '6–8 semanas', label: 'de duración (un ciclo de pestaña completo)' },
      { value: '45–60 min', label: 'duración de la sesión' },
      { value: '0/10', label: 'sin dolor ni molestias' },
      { value: '0 hs', label: 'mantenimiento post tratamiento (solo 48 hs de cuidado inicial)' },
    ],
    idealFor: [
      'Pestañas rectas o apuntando hacia abajo que no mantienen el rizo del rizador',
      'Personas que quieren despertar listas sin maquillaje',
      'Quienes quieren dejar de usar mascara o reducir su uso',
      'Personas activas (natación, deporte) que necesitan algo resistente',
      'Quienes no quieren el mantenimiento de extensiones de pestañas',
      'Pestañas largas pero sin definición visual por falta de curva',
      'Personas que usan lentes de contacto y tienen dificultad para aplicar mascara',
    ],
    notFor: [
      'Pestañas muy cortas (menos de 4mm) — el escudo no tiene dónde moldearse',
      'Pestañas dañadas, frágiles o muy tratadas químicamente recientemente',
      'Ojos con irritación activa, conjuntivitis o orzuelos',
      'Personas con alergia conocida a los químicos del lifting',
      'Embarazadas (por precaución ante la inhalación de vapores)',
      'Pestañas con extensiones actuales — deben removerse completamente antes',
    ],
  },
  process: {
    steps: [
      {
        title: 'Limpieza y preparación',
        desc: 'Se retira cualquier resto de maquillaje, sombra o aceite de la zona del ojo. La limpieza es fundamental para que los químicos actúen uniformemente. No uses rímel waterproof el día del turno.',
      },
      {
        title: 'Selección del escudo de silicona',
        desc: 'Valeria elige el tamaño de escudo (S/M/L/XL) según el largo y el estilo de rizo deseado. Un escudo más pequeño crea un rizo más pronunciado y dramático; uno más grande da una curvatura más abierta y natural. Se pegan los escudos sobre el párpado con adhesivo especial para ojos.',
      },
      {
        title: 'Colocación de las pestañas sobre el escudo',
        desc: 'Cada pestaña se acomoda individualmente sobre el escudo con un adhesivo especial, asegurando que todas queden bien separadas y pegadas al molde. Esta etapa requiere precisión y es la que más tiempo lleva (15–20 min).',
      },
      {
        title: 'Aplicación de la solución de lifting',
        desc: 'La crema de lifting se aplica sobre las pestañas y actúa entre 8 y 12 minutos. Esta solución rompe los puentes disulfuro de la proteína del pelo (queratina), ablandando temporalmente la estructura para que tome la forma del escudo. El tiempo exacto depende del grosor y estado de cada pestaña.',
      },
      {
        title: 'Solución fijadora',
        desc: 'La crema fijadora se aplica inmediatamente después y actúa otros 8–10 minutos. Esta solución reconstruye los puentes disulfuro, fijando la nueva curva de forma permanente. El resultado del rizo ya no cambiará — la pestaña creció con esa curvatura y así se queda hasta que se renueve naturalmente.',
      },
      {
        title: 'Tinte de queratina (opcional pero recomendado)',
        desc: 'Luego del lifting se aplica el tinte de keratina para oscurecer y definir cada pestaña. El tratamiento de queratina incluido fortalece y suaviza el pelo. Esto elimina la necesidad de máscara en el día a día y potencia dramáticamente el resultado visual.',
      },
    ],
    duration: '45–60 min',
    durationLabel: 'sesión completa incluyendo limpieza, lifting, fijación y tinte de keratina',
  },
  results: {
    images: [
      { src: '/images/result-lifting-1.jpg', alt: 'Lash lifting · Resultado inmediato', pos: 'center center' },
      { src: '/images/result-lifting-2.jpg', alt: 'Lifting + tinte · Pestañas rizadas y definidas', pos: 'center center' },
      { src: '/images/lash-lifting.jpg', alt: 'Lash lifting · Resultado real', pos: 'center center' },
    ],
    aftercare: [
      'No mojar las pestañas ni exponerlas a vapor durante las primeras 48 horas (esto incluye ducha de agua caliente, sauna, pileta)',
      'No usar máscara waterproof durante las primeras 48 horas',
      'No frotar ni tocar los ojos más de lo necesario',
      'No usar rizador de pestañas mecánico — ya están rizadas permanentemente',
      'A las 48 horas ya podés mojar, maquillar y vivir normalmente',
      'Para prolongar el resultado, evitar aceites en la zona ocular y preferir removedores suaves',
    ],
  },
  faq: [
    {
      q: '¿Cuánto dura el resultado?',
      a: 'Entre 6 y 8 semanas, que es la duración de un ciclo completo de pestaña. Las pestañas tratadas no cambian su forma — van cayendo naturalmente y siendo reemplazadas por pestañas nuevas sin el rizo. No hay un momento en que "se va" de golpe: el proceso es gradual.',
    },
    {
      q: '¿Duele?',
      a: 'No, el lash lifting es completamente indoloro. Los ojos están cerrados durante toda la sesión. La única sensación es leve incomodidad al mantener los ojos cerrados 45 minutos — algunas clientas directamente se duermen.',
    },
    {
      q: '¿Daña las pestañas?',
      a: 'No si se hace correctamente y con el tiempo de actuación adecuado para cada tipo de pestaña. Un lifting bien ejecutado no debilita el pelo. De hecho, la queratina del tinte fortalece la estructura. Hacerlo con demasiada frecuencia (antes de las 6 semanas) o dejando los químicos más tiempo del necesario sí puede dañar.',
    },
    {
      q: '¿Puedo usar máscara encima?',
      a: 'Sí, y se ve increíble. La diferencia es que con el rizo permanente la máscara rinde mucho más. Muchas clientas descubren que ya no la necesitan — o que con solo una pasada tienen un look completo.',
    },
    {
      q: '¿Qué diferencia hay con las extensiones?',
      a: 'El lash lifting trabaja con tus propias pestañas. No hay adhesivos, no hay piezas extras, no hay mantenimiento cada 3 semanas, no hay riesgo de alergia al pegamento y no hay restricciones para dormir o tocarte los ojos. Es el tratamiento ideal para quienes quieren resultado natural sin el compromiso de mantenimiento de las extensiones.',
    },
    {
      q: '¿Puedo hacerlo si tengo extensiones?',
      a: 'No directamente. Las extensiones deben removerse completamente y esperar al menos 4 semanas para que las pestañas naturales se recuperen antes del lifting.',
    },
    {
      q: '¿Cada cuánto me lo puedo hacer?',
      a: 'Cada 6–8 semanas como mínimo, que es cuando se completó el ciclo de renovación de pestaña. Hacerlo antes puede sobretratar el pelo y debilitarlo. Esperá a que el efecto esté completamente ido antes de reagendar.',
    },
  ],
}

export default function LashLiftingPage() {
  return <ServicePage {...data} />
}
