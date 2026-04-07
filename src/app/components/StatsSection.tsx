import { motion, useSpring, useMotionValue } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../App';

const stats = [
  { value: 500, suffix: '+', label: 'Articles donats', color: '#0A6FBE', percent: 85 },
  { value: 12, suffix: '', label: 'Cicles implicats', color: '#6FA76F', percent: 100 },
  { value: 300, suffix: '+', label: 'Participants esperats', color: '#0891b2', percent: 70 },
  { value: 100, suffix: '%', label: 'Solidari', color: '#9333ea', percent: 100 },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [springValue]);

  return <span className="countdown-digit">{display}{suffix}</span>;
}

function StatCard({ stat, index, isInView, isDark }: { stat: typeof stats[0]; index: number; isInView: boolean; isDark: boolean }) {
  const [barWidth, setBarWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setBarWidth(stat.percent), 200 + index * 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, stat.percent, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-5 rounded-2xl cursor-default"
      style={{
        background: hovered
          ? isDark ? `${stat.color}30` : `${stat.color}18`
          : isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
        border: hovered
          ? `1px solid ${stat.color}60`
          : isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0',
        boxShadow: hovered
          ? `0 8px 30px ${stat.color}30`
          : isDark ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-baseline justify-between mb-2">
        <span
          className="text-3xl md:text-4xl font-bold"
          style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}30` }}
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
        </span>
      </div>
      <p className="text-xs font-medium mb-3" style={{ color: isDark ? 'rgba(255,255,255,0.35)' : '#64748b' }}>
        {stat.label}
      </p>
      {/* Progress bar */}
      <div className="progress-bar" style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
        <div
          className="progress-fill"
          style={{
            width: `${barWidth}%`,
            background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { isDark } = useTheme();

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden transition-colors duration-700"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, #0d1424, #111a2e, #0d1424)'
          : 'linear-gradient(180deg, #e8edf4, #dfe6ef, #e8edf4)',
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center text-[10px] uppercase tracking-[0.3em] mb-6"
            style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }}
          >
            L'impacte en números
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} isInView={isInView} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
