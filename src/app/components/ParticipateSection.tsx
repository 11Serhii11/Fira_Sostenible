import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Calendar, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { useTheme } from '../App';

const steps = [
  { icon: Calendar, title: 'Vine a la fira', description: "El 23 d'abril, vine a l'Institut Poblenou i descobreix tot el que hem preparat.", color: '#0A6FBE' },
  { icon: ShoppingCart, title: 'Compra productes', description: 'Roba, llibres i productes solidaris. Cada compra genera impacte real.', color: '#6FA76F' },
  { icon: Heart, title: 'Fes una donació', description: 'Els beneficis van directament a la Fundació AREP. Cada euro compta.', color: '#0891b2' },
  { icon: Share2, title: 'Comparteix', description: "Fes córrer la veu! Comparteix l'esdeveniment amb família i amics.", color: '#9333ea' },
];

function StepCard({ step, index, isInView, isDark }: { step: typeof steps[0]; index: number; isInView: boolean; isDark: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="flex items-start gap-5"
    >
      {/* Step circle */}
      <div
        className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-base font-bold relative z-10 outline-none border-none"
        style={{
          background: hovered ? `${step.color}30` : isDark ? `${step.color}20` : `${step.color}15`,
          boxShadow: `inset 0 0 0 2px ${step.color}40`,
          color: step.color,
          outline: 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {index + 1}
      </div>

      {/* Content card */}
      <div
        className="flex-1 rounded-2xl p-5"
        style={{
          background: hovered
            ? isDark ? `${step.color}30` : `${step.color}18`
            : isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc',
          border: hovered
            ? `1px solid ${step.color}60`
            : isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
          boxShadow: hovered
            ? `0 8px 30px ${step.color}30`
            : isDark ? '0 2px 16px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
          transition: 'all 0.4s ease',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center gap-2 mb-1">
          <step.icon size={16} style={{ color: step.color }} />
          <h3 className="text-sm font-semibold" style={{ color: isDark ? '#fff' : '#1e293b' }}>
            {step.title}
          </h3>
        </div>
        <p className="text-xs leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function ParticipateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { isDark } = useTheme();

  return (
    <section
      id="participate"
      ref={ref}
      className="relative pt-36 pb-20 overflow-hidden transition-colors duration-700 scroll-mt-28"
      style={{ background: isDark ? '#0f172a' : '#ffffff' }}
    >
      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span
              className="inline-block text-[11px] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full"
              style={isDark
                ? { color: '#0891b2', background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.15)' }
                : { color: '#0891b2', background: 'rgba(8,145,178,0.06)', border: '1px solid rgba(8,145,178,0.15)' }
              }
            >
              Participa
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: isDark ? '#fff' : '#1e293b' }}
            >
              Com pots <span className="holo-text">participar</span>?
            </h2>
            <p className="text-sm" style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#94a3b8' }}>
              Quatre passos per formar part del canvi
            </p>
          </motion.div>

          {/* Timeline layout */}
          <div className="relative">
            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <StepCard key={i} step={step} index={i} isInView={isInView} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
