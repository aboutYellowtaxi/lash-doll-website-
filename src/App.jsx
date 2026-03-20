import { Helmet } from 'react-helmet-async'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyPMU from './components/WhyPMU'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ConsultationCTA from './components/ConsultationCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Lash Doll®',
  description: 'Artista PMU en General Rodríguez. Microblading, micropigmentación de labios y extensiones de pestañas.',
  telephone: '+541133436809',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 de Abril 636',
    addressLocality: 'General Rodríguez',
    addressRegion: 'Buenos Aires',
    addressCountry: 'AR',
  },
  priceRange: 'Consultar',
  sameAs: ['https://www.instagram.com/lash.doll.estetica/'],
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Lash Doll® — Microblading &amp; PMU · General Rodríguez</title>
        <meta name="description" content="Artista PMU en General Rodríguez. Microblading, micropigmentación de labios y extensiones de pestañas. Resultados naturales y duraderos." />
        <meta name="keywords" content="microblading General Rodríguez, micropigmentación labios zona oeste, PMU General Rodríguez, cejas permanentes GBA" />
        <meta property="og:title" content="Lash Doll® — Microblading & PMU · General Rodríguez" />
        <meta property="og:description" content="Nuestro objetivo es resaltar tu belleza. Artista PMU certificada en General Rodríguez." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyPMU />
        <Portfolio />
        <About />
        <Testimonials />
        <ConsultationCTA />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  )
}
