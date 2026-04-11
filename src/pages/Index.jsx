import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import WhyChooseUs from '../components/WhyChooseUs'
import OffersSection from '../components/OffersSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import BackgroundPattern from '../components/BackgroundPattern'
import WhatsAppButton from '../components/WhatsAppButton'

const Index = () => {
  return (
    <div style={{ position: 'relative', overflowX: 'hidden', width: '100%' }}>
      <BackgroundPattern />
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <WhyChooseUs />
      <OffersSection />
      <GallerySection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Index