import { useState, useEffect, createContext, useContext } from 'react';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ArepSection } from './components/ArepSection';
import { ParticipateSection } from './components/ParticipateSection';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

export const ThemeContext = createContext({ isDark: true });
export const useTheme = () => useContext(ThemeContext);

function CursorGlow({ isDark }: { isDark: boolean }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-[400px] h-[400px] rounded-full blur-[80px]"
      style={{
        background: isDark
          ? 'radial-gradient(circle, rgba(10,111,190,0.6), transparent 70%)'
          : 'radial-gradient(circle, rgba(10,111,190,0.3), transparent 70%)',
        opacity: isDark ? 0.05 : 0.04,
        left: pos.x - 200,
        top: pos.y - 200,
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

  return (
    <ThemeContext.Provider value={{ isDark }}>
      <div
        className="size-full noise-overlay transition-colors duration-700"
        style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
      >
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <CursorGlow isDark={isDark} />
        <Hero />
        <AboutSection />
        <ActivitiesSection />
        <ParticipateSection />
        <ArepSection />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
