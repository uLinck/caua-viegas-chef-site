import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import GalleryPreview from '@/components/sections/GalleryPreview'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <hr className="sectionDivider" aria-hidden="true" />
        <About />
        <hr className="sectionDivider" aria-hidden="true" />
        <Services />
        <hr className="sectionDivider" aria-hidden="true" />
        <GalleryPreview />
      </main>
      <Footer />
    </>
  )
}
