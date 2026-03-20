import { Helmet } from 'react-helmet-async'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import WhyPMU from './components/WhyPMU'
import Portfolio from './components/Portfolio'
import VideoReel from './components/VideoReel'
import TransformScroll from './components/TransformScroll'
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
  description: 'Artista PMU en General Rodríguez. Microblading, micropigmentación de labios y extensiones de pestañas. Resultados naturales y duraderos.',
  url: 'https://lashdoll.netlify.app/',
  telephone: '+541133436809',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 de Abril 636',
    addressLocality: 'General Rodríguez',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1748',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.6037',
    longitude: '-58.9549',
  },
  priceRange: 'Consultar',
  currenciesAccepted: 'ARS',
  paymentAccepted: 'Cash, Transfer',
  areaServed: {
    '@type': 'City',
    name: 'General Rodríguez',
  },
  sameAs: ['https://www.instagram.com/lash.doll.estetica/'],
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Lash Doll® — Microblading &amp; PMU · General Rodríguez</title>
        <meta name="description" content="Artista PMU en General Rodríguez. Microblading, micropigmentación de labios y extensiones de pestañas. Resultados naturales y duraderos." />
        <meta name="keywords" content="microblading General Rodríguez, micropigmentación labios zona oeste, PMU General Rodríguez, cejas permanentes GBA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lashdoll.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lashdoll.netlify.app/" />
        <meta property="og:title" content="Lash Doll® — Microblading & PMU · General Rodríguez" />
        <meta property="og:description" content="Nuestro objetivo es resaltar tu belleza. Artista PMU certificada en General Rodríguez, Buenos Aires." />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lash Doll® — Microblading & PMU · General Rodríguez" />
        <meta name="twitter:description" content="Microblading, micropigmentación de labios y extensiones. Resultados naturales y duraderos. General Rodríguez." />
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="General Rodríguez, Buenos Aires" />
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
        <TransformScroll />
        <VideoReel />
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
