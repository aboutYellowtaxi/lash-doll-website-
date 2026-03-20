import ServicePage from './ServicePage'

const data = {
  meta: {
    title: 'Microblading de Cejas · Lash Doll Studio — General Rodríguez',
    desc: 'Microblading pelo a pelo en General Rodríguez. Resultado ultra natural, dura 12–18 meses. Conocé el procedimiento, cuidados y resultados reales.',
  },
  hero: {
    tag: 'Maquillaje Permanente · Cejas',
    title: 'Microblading',
    sub: 'Trazos individuales que imitan el vello real. El resultado más natural del mercado — nadie va a notar que es permanente.',
    img: '/images/result-cejas-mb-1.jpg',
    pos: 'center center',
    alt: 'Microblading resultado natural — Lash Doll',
  },
  intro: {
    title: 'Arte milimétrico que imita la naturaleza.',
    paragraphs: [
      'El microblading es una técnica de maquillaje semipermanente en la que una artista PMU utiliza un instrumento manual con microagujas en forma de hoja para depositar pigmento en la dermis superficial. El resultado son trazos ultra finos que replican, pelo a pelo, el vello natural de la ceja.',
      'A diferencia del tatuaje convencional, el microblading trabaja en capas más superficiales de la piel, lo que permite que el pigmento se integre de forma natural y se desvanezca gradualmente — sin dejar los tonos azulados o verdosos típicos del tatuaje. El resultado es completamente personalizado según la forma del rostro, el color de piel y el estilo de cada clienta.',
      'En Lash Doll, cada sesión comienza con un análisis facial completo: se estudia la estructura ósea, la arquitectura natural de la ceja y el estilo de vida para diseñar unas cejas que mejoren, no que cambien. El trazo se dibuja con calibre antes de empezar — vos aprobás el diseño antes de que Valeria toque la piel.',
    ],
    facts: [
      { value: '12–18 meses', label: 'duración promedio sin retoque' },
      { value: '2–2.5 hs', label: 'duración de la primera sesión' },
      { value: '2/10', label: 'nivel de dolor con anestesia tópica' },
      { value: '4 semanas', label: 'tiempo de cicatrización completa' },
    ],
    idealFor: [
      'Cejas escasas, finas o con espacios vacíos',
      'Cejas sobredepiladasy que no vuelven a crecer parejas',
      'Asimetría entre ambas cejas',
      'Pelo claro que no se define sin maquillaje',
      'Personas con poco tiempo para maquillarse a diario',
      'Pacientes en quimioterapia o con alopecia',
      'Personas activas que practican deporte o nadan',
    ],
    notFor: [
      'Piel muy grasa (se recomienda Powder Brows en su lugar)',
      'Embarazadas o en período de lactancia',
      'Personas que toman anticoagulantes o aspirina diaria',
      'Piel con brotes activos de acné en la zona',
      'Tendencia a formar queloides',
      'Piel sometida a tratamientos con retinol o ácidos (suspender 4 semanas antes)',
      'Diabetes no controlada o enfermedades autoinmunes activas',
    ],
  },
  process: {
    steps: [
      {
        title: 'Consulta y análisis facial',
        desc: 'Antes de cualquier procedimiento, Valeria analiza tu forma de rostro, tono de piel, color de pelo y estructura natural de tus cejas. Se discute el estilo deseado: desde el más natural y suave hasta una ceja más definida. No hay apuro — esta etapa es fundamental para el resultado.',
      },
      {
        title: 'Diseño con calibre',
        desc: 'Se utilizan herramientas de medición profesional (calibre de cejas) para mapear la forma ideal según las proporciones del rostro. Se dibuja el contorno con lápiz removible. Vos lo ves, lo aprobás y podés pedir todos los ajustes que necesitás antes de continuar.',
      },
      {
        title: 'Aplicación de anestesia tópica',
        desc: 'Se aplica una crema anestésica en la zona y se deja actuar 20–30 minutos. Durante el procedimiento se puede reaplicar anestesia líquida para mantener el confort. La sensación es similar a unos pequeños rasguños — la mayoría de las clientas lo describen como tolerable.',
      },
      {
        title: 'Pigmentación pelo a pelo',
        desc: 'Valeria trabaja trazo por trazo con el instrumento manual, depositando el pigmento en la dirección exacta del crecimiento natural de cada pelo. La sesión dura entre 1.5 y 2 horas. El color recién aplicado se ve entre 20–40% más oscuro de lo que quedará al cicatrizar.',
      },
      {
        title: 'Primer retoque (4–6 semanas)',
        desc: 'Luego de la cicatrización completa, se agenda el retoque obligatorio. En algunas zonas el pigmento puede no haber agarrado uniformemente — especialmente en piel grasa o muy seca. El retoque corrige esto y define el resultado final. Está incluido en el precio de la primera sesión.',
      },
      {
        title: 'Mantenimiento anual',
        desc: 'Con el tiempo el pigmento se aclara naturalmente, lo cual es una ventaja: si tus gustos cambian o el estilo de cejas cambia, podés adaptar el diseño. Se recomienda un mantenimiento cada 12–18 meses para mantener el resultado óptimo.',
      },
    ],
    duration: '2–2.5 hs',
    durationLabel: 'duración de la primera sesión completa, incluyendo diseño y anestesia',
  },
  results: {
    images: [
      { src: '/images/result-cejas-antes.jpg', alt: 'Microblading · Antes', pos: 'center center' },
      { src: '/images/result-cejas-mb-1.jpg', alt: 'Microblading · Después, pelo a pelo', pos: 'center center' },
      { src: '/images/result-cejas-despues.jpg', alt: 'Microblading · Resultado final', pos: 'center top' },
    ],
    aftercare: [
      'No mojar las cejas durante los primeros 10 días (ni en la ducha, ni transpirar en exceso)',
      'No aplicar maquillaje ni cremas en la zona por 10 días',
      'No raspar, frotar ni desprender las costras — dejá que caigan solas',
      'Evitar exposición al sol directo en la zona durante 4 semanas',
      'No hacer tratamientos faciales (peeling, láser) por 4 semanas',
      'Aplicar la crema cicatrizante indicada por Valeria, en cantidades mínimas',
      'Durante los días 4–7 las cejas pueden verse muy claras o desparejas — es normal, es parte del proceso de cicatrización',
      'El resultado final se evalúa recién a las 4 semanas de cicatrización completa',
    ],
  },
  faq: [
    {
      q: '¿Duele mucho?',
      a: 'Con anestesia tópica el procedimiento es muy tolerable. La mayoría lo describe como un rasguño o pellizco leve. Se aplica crema anestésica 30 minutos antes y se puede reforzar con anestesia líquida durante el proceso. Un 2 sobre 10 en escala de dolor.',
    },
    {
      q: '¿Cuánto dura el resultado?',
      a: 'Entre 12 y 18 meses en promedio. Las pieles secas tienden a retener el pigmento más tiempo (hasta 24 meses), las pieles grasas lo expulsan más rápido (8–12 meses). El sol, los ácidos y el retinol aceleran el desvanecimiento.',
    },
    {
      q: '¿Qué pasa si no me gusta el diseño?',
      a: 'Por eso el diseño con calibre es parte del proceso: se dibuja el contorno completo antes de empezar, lo aprobás y podés pedir todos los cambios que quieras. No se empieza el procedimiento hasta que estés conforme con el diseño.',
    },
    {
      q: '¿Se puede hacer si tengo cejas con bastante pelo?',
      a: 'Sí, el microblading se puede hacer con cualquier cantidad de pelo natural. En ese caso se trabaja entre los pelos existentes para rellenar espacios y dar uniformidad, o para corregir asimetría.',
    },
    {
      q: '¿Se ve "tatuado" o demasiado marcado?',
      a: 'No con microblading bien hecho. La técnica pelo a pelo crea la ilusión de vello real. El resultado correcto es que nadie note que son permanentes — solo que tus cejas siempre están perfectas. Valeria trabaja especialmente para que el resultado sea indistinguible de lo natural.',
    },
    {
      q: '¿Puedo maquillarme encima después?',
      a: 'Sí, una vez cicatrizadas (a las 4 semanas) podés aplicar cualquier producto encima normalmente. La mayoría de las clientas ya no necesitan lápiz de cejas — pero si querés más intensidad en algún momento, podés.',
    },
    {
      q: '¿Cuándo puedo hacer deporte?',
      a: 'Esperá al menos 10–14 días para actividades con transpiración intensa (gimnasio, natación, running). La transpiración en los primeros días puede expulsar el pigmento antes de que fije.',
    },
  ],
}

export default function MicrobladingPage() {
  return <ServicePage {...data} />
}
