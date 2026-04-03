import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ArepSection } from './components/ArepSection';
import { ParticipateSection } from './components/ParticipateSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      <ParticipateSection />
      <ArepSection />
      <Footer />
    </div>
  );
}