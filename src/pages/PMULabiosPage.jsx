import ServicePage from './ServicePage'

const data = {
  meta: {
    title: 'PMU de Labios · Micropigmentación Labial — Lash Doll Studio',
    desc: 'Micropigmentación de labios en General Rodríguez. Definición permanente, color a medida, corrige asimetría. Sin cirugía. Conocé el proceso y resultados.',
  },
  hero: {
    tag: 'Maquillaje Permanente · Labios',
    title: 'PMU de Labios',
    sub: 'Labios definidos, con color y volumen visual — sin cirugía, sin relleno. Una sola sesión que dura años.',
    img: '/images/labios-pmu.jpg',
    pos: 'center center',
    alt: 'PMU de labios resultado — Lash Doll',
  },
  intro: {
    title: 'Labios perfectos sin retoque diario.',
    paragraphs: [
      'La micropigmentación labial (PMU de labios) es una técnica de maquillaje permanente que deposita pigmento en la capa superior de la dermis para definir el contorno, agregar color y corregir asimetrías. El resultado es una boca que siempre luce arreglada — incluso al despertar, después de comer o de hacer ejercicio.',
      'Existen varias técnicas según el objetivo: el delineado de contorno puro para mayor definición, el relleno completo para un color parejo en toda la superficie, o la técnica acuarela (ombre lips) que crea un degradé natural desde el contorno hacia el interior, dando volumen visual sin cirugía.',
      'Una de las aplicaciones más buscadas es la corrección de labios oscuros o hiperpigmentados — condición muy común en mujeres latinoamericanas. Valeria trabaja con pigmentos de neutralización que aclaran el tono base antes de depositar el color final, logrando un resultado parejo y luminoso.',
    ],
    facts: [
      { value: '2–4 años', label: 'de duración promedio' },
      { value: '2 hs', label: 'duración de la sesión' },
      { value: '40–50%', label: 'el color se aclara al cicatrizar — es normal' },
      { value: '3/10', label: 'nivel de dolor (los labios tienen más terminaciones nerviosas)' },
    ],
    idealFor: [
      'Labios finos o con poco color propio que querés potenciar',
      'Contorno difuso o poco definido (borde borroso)',
      'Asimetría labial que querés equilibrar visualmente',
      'Labios oscuros o hiperpigmentados que querés aclarar y unificar',
      'Personas cansadas de retocar el labial a lo largo del día',
      'Quienes quieren volumen visual sin procedimientos invasivos',
      'Personas activas (deporte, natación, trabajo) que no pueden maquillarse seguido',
    ],
    notFor: [
      'Embarazadas o en período de lactancia',
      'Personas con brotes activos de herpes labial (se necesita tratamiento antiviral previo)',
      'Piel con lesiones activas, cortes o irritación en la zona',
      'Personas que toman anticoagulantes o aspirina diaria',
      'Tratamientos con ácidos o retinol en la zona (suspender 4 semanas antes)',
      'Tendencia a queloides',
      'Diabetes no controlada',
    ],
  },
  process: {
    steps: [
      {
        title: 'Consulta y elección de técnica',
        desc: 'Valeria evalúa la forma, simetría, tono natural y estado de hidratación de tus labios. Se define la técnica más adecuada: solo contorno, relleno completo, o técnica acuarela (ombre). Si tenés hiperpigmentación, se planifica el tratamiento de neutralización previo.',
      },
      {
        title: 'Selección del color',
        desc: 'Se prueba la paleta de pigmentos sobre tu piel para encontrar el tono exacto que mejor armonice con tu tez, tu cabello y tu estilo. El color que se ve recién aplicado es entre 30 y 50% más intenso que el resultado final — Valeria te muestra exactamente cómo quedará.',
      },
      {
        title: 'Diseño del contorno',
        desc: 'Con lápiz removible se dibuja el contorno ideal, corrigiendo asimetrías y ajustando el tamaño. Podés pedir todos los cambios antes de comenzar. El diseño se hace pensando en cómo el labio se ve en movimiento, no solo estático.',
      },
      {
        title: 'Anestesia tópica',
        desc: 'Se aplica crema anestésica que actúa 20 minutos. Los labios tienen más terminaciones nerviosas que las cejas, por lo que la sensación es un poco más intensa — pero completamente manejable. Durante el procedimiento se refuerza con anestesia líquida si es necesario.',
      },
      {
        title: 'Aplicación del pigmento',
        desc: 'Valeria aplica el pigmento con técnica de puntillismo o líneas finas según la zona, siguiendo el diseño pautado. La sesión dura aproximadamente 1.5–2 horas. Al terminar, los labios se ven hinchados y con el color muy intenso — completamente normal.',
      },
      {
        title: 'Retoque a las 6–8 semanas',
        desc: 'Luego de la cicatrización completa (4 semanas), los labios van a verse mucho más suaves y claros. Es normal: la piel regenerada cubre el pigmento. El retoque, que se agenda a las 6–8 semanas, intensifica el color, corrige áreas donde no tomó parejo y termina el resultado.',
      },
    ],
    duration: '2 hs',
    durationLabel: 'duración de la primera sesión incluyendo diseño, anestesia y aplicación',
  },
  results: {
    images: [
      { src: '/images/labios-pmu.jpg', alt: 'PMU de labios · Resultado natural', pos: 'center center' },
      { src: '/images/lips-micropigmentation.jpg', alt: 'Micropigmentación labial · Antes/Después', pos: 'center center' },
      { src: '/images/labios-pmu-2.png', alt: 'PMU labios · Técnica acuarela', pos: 'center center' },
    ],
    aftercare: [
      'No mojar los labios durante las primeras 24 horas (ni agua, ni bebidas con sorbete)',
      'Comer con cubiertos los primeros 3 días para no frotar el área',
      'Aplicar la vaselina o cicatrizante indicado por Valeria cada 2–3 horas los primeros días',
      'No usar bálsamos labiales con perfume, sabores ni SPF las primeras 2 semanas',
      'No exfoliar la zona ni desprender las costras — dejar caer solas entre el día 4 y 7',
      'Evitar comidas muy ácidas, picantes o saladas la primera semana',
      'Si tenés historial de herpes labial: tomá el antiviral (Aciclovir) que te indique tu médico desde 2 días antes',
      'Evitar sol, sauna y piscinas las primeras 4 semanas',
    ],
  },
  faq: [
    {
      q: '¿Los labios quedan muy marcados o artificiales?',
      a: 'Depende de la técnica elegida. Con la técnica acuarela el resultado es muy natural — parece que tus labios tienen color propio, no que llevan labial. El contorno puro da más definición sin verse "pintado". Valeria siempre busca que el resultado sea armonioso con cada rostro.',
    },
    {
      q: '¿Tengo que hacer algo especial si tengo herpes labial?',
      a: 'Sí, es fundamental. Las personas con historial de herpes labial (aunque sea muy de vez en cuando) DEBEN tomar profilaxis antiviral antes del procedimiento. El estrés mecánico en los labios puede reactivar el virus. Consultá a tu médico para que te indique la dosis de Aciclovir o Valaciclovir desde 2 días antes.',
    },
    {
      q: '¿El pigmento queda bien en labios oscuros?',
      a: 'Sí, pero requiere una técnica específica. En labios muy oscuros o hiperpigmentados se trabaja primero con pigmentos de neutralización (colores complementarios que cancelan el tono base) antes de depositar el color final. Valeria está formada en corrección de hiperpigmentación.',
    },
    {
      q: '¿Cuánto dura el resultado?',
      a: 'Entre 2 y 4 años. Los labios son una zona con mucha actividad (comés, hablás, tomás sol) y la piel se renueva constantemente. Los tonos más claros duran menos que los más oscuros. Se recomienda un mantenimiento cada 2–3 años para mantener la intensidad.',
    },
    {
      q: '¿Duele mucho?',
      a: 'Más que las cejas, pero con anestesia tópica es totalmente tolerable. Los labios tienen más terminaciones nerviosas, así que la sensación es más intensa — la mayoría lo describe como 3 sobre 10. El anestésico se aplica antes y se refuerza durante el procedimiento.',
    },
    {
      q: '¿Puedo elegir el color que quiero?',
      a: 'Sí, dentro de lo que es natural y armónico para tu tono de piel. Valeria te muestra muestras de pigmentos sobre tu piel para que veas cómo interactúan. Se tiene en cuenta que el pigmento se aclara un 40–50% al cicatrizar, por lo que el color final siempre es más suave que el que se ve recién aplicado.',
    },
    {
      q: '¿Puedo seguir usando labiales encima?',
      a: 'Sí, claro. Una vez cicatrizado podés usar cualquier producto encima. La diferencia es que ya tenés una base de color permanente, así que con solo un gloss o un labial fino tenés un look completo.',
    },
  ],
}

export default function PMULabiosPage() {
  return <ServicePage {...data} />
}
