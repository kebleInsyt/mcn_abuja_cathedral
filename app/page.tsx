import Slider from '@/components/Slider';
import AboutSection from '@/components/home/AboutSection';
import DonateBanner from '@/components/home/DonateBanner';
import MinisteriesSection from '@/components/home/MinisteriesSection';
import CallSection from '@/components/home/CallSection';


export default function Home() {
  return (
    <main>
      <Slider />
         
      <AboutSection />
      <DonateBanner />
      <MinisteriesSection />
      <CallSection />
    </main>
  )
}
