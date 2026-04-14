import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  )
}
