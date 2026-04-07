import { useTheme } from '../App';

const words = ['Reutilitza', 'Reinventa', 'Reviu', 'Sostenible', 'Solidària', 'Comunitat', 'Impacte', 'Creativitat'];

export function Marquee() {
  const { isDark } = useTheme();

  const items = [...words, ...words, ...words, ...words];

  return (
    <div
      className="relative py-6 overflow-hidden transition-colors duration-700"
      style={{
        background: isDark
          ? 'linear-gradient(90deg, rgba(10,111,190,0.04), rgba(111,167,111,0.04), rgba(10,111,190,0.04))'
          : 'linear-gradient(90deg, rgba(10,111,190,0.03), rgba(111,167,111,0.03), rgba(10,111,190,0.03))',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.04)',
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.04)',
      }}
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(to right, #0f172a, transparent)' : 'linear-gradient(to right, #f0f4f8, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: isDark ? 'linear-gradient(to left, #0f172a, transparent)' : 'linear-gradient(to left, #f0f4f8, transparent)' }}
      />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] mx-6 transition-colors duration-700"
              style={{ color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(10,111,190,0.3)' }}
            >
              {word}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: isDark ? 'rgba(10,111,190,0.3)' : 'rgba(10,111,190,0.2)' }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
