import { useState, useEffect, createContext, useContext } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { StatsSection } from './components/StatsSection';
import { ParticipateSection } from './components/ParticipateSection';
import { ArepSection } from './components/ArepSection';
import { Footer } from './components/Footer';

interface ThemeContextType {
  isDark: boolean;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({ isDark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

function CursorGlow({ isDark }: { isDark: boolean }) {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-[350px] h-[350px] rounded-full blur-[80px]"
      style={{
        background: isDark
          ? 'radial-gradient(circle, rgba(10,111,190,0.5), transparent 70%)'
          : 'radial-gradient(circle, rgba(10,111,190,0.25), transparent 70%)',
        opacity: isDark ? 0.04 : 0.03,
        left: pos.x - 175,
        top: pos.y - 175,
        transition: 'left 0.15s ease-out, top 0.15s ease-out',
      }}
    />
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('fira-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('fira-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div
        className="size-full noise-overlay transition-colors duration-700"
        style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
      >
        <CursorGlow isDark={isDark} />
        <Navbar />
        <Hero />
        <Marquee />
        <AboutSection />
        <ActivitiesSection />
        <StatsSection />
        <ParticipateSection />
        <ArepSection />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
