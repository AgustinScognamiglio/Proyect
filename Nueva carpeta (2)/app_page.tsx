import HeroSection from '../components/HeroSection'
import ModelsGallery from '../components/ModelsGallery'
import TechnologySection from '../components/TechnologySection'
import DrivingExperience from '../components/DrivingExperience'
import FullscreenImageSection from '../components/FullscreenImageSection'
import SustainabilitySection from '../components/SustainabilitySection'
import ContactSection from '../components/ContactSection'
import PerformanceSection from '../components/PerformanceSection'
import HeritageSection from '../components/HeritageSection'
import LifestyleSection from '../components/LifestyleSection'
import RacingHeritage from '../components/RacingHeritage'
import AnimatedFeatures from '../components/AnimatedFeatures'
import ParallaxGallery from '../components/ParallaxGallery'
import GT3RSSection from '../components/LegendaryModels/GT3RSSection'
import SpyderSection from '../components/LegendaryModels/SpyderSection'
import CarreraGTSection from '../components/LegendaryModels/CarreraGTSection'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <audio autoPlay loop>
        <source src="https://example.com/porsche-background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <HeroSection />
      <AnimatedFeatures />
      <ModelsGallery />
      <GT3RSSection />
      <SpyderSection />
      <CarreraGTSection />
      <PerformanceSection />
      <FullscreenImageSection />
      <TechnologySection />
      <RacingHeritage />
      <ParallaxGallery />
      <DrivingExperience />
      <HeritageSection />
      <LifestyleSection />
      <SustainabilitySection />
      <ContactSection />
    </main>
  )
}

