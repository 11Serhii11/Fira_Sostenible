import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Leaf, Heart, Users, Lightbulb } from 'lucide-react';
import { useTheme } from '../App';

const cards = [
  { icon: Leaf, title: 'Sostenibilitat', text: 'Donar una segona vida als objectes, reduint residus i fomentant el consum responsable.', color: '#6FA76F' },
  { icon: Heart, title: 'Solidaritat', text: 'Parts dels beneficis es destinen a la Fundació AREP per la salut mental.', color: '#0A6FBE' },
  { icon: Users, title: 'Comunitat', text: 'Un projecte que uneix cicles formatius, famílies i el barri sencer.', color: '#0891b2' },
  { icon: Lightbulb, title: 'Aprenentatge', text: "L'alumnat aprèn emprenedoria, treball en equip i compromís social real.", color: '#9333ea' },
];

function ValueCard({ card, index, isInView, isDark }: { card: typeof cards[0]; index: number; isInView: boolean; isDark: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
      className="bento-card rounded-2xl p-5 cursor-default"
      style={{
        background: hovered
          ? isDark ? `${card.color}30` : `${card.color}18`
          : isDark ? 'rgba(255,255,255,0.04)' : '#ffffff',
        border: hovered
          ? `1px solid ${card.color}60`
          : isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
        boxShadow: hovered
          ? `0 8px 30px ${card.color}30`
          : isDark ? '0 2px 16px rgba(0,0,0,0.15)' : '0 2px 12px rgba(0,0,0,0.06)',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300"
        style={{
          background: `${card.color}12`,
          border: `1px solid ${card.color}20`,
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <card.icon size={20} style={{ color: card.color }} />
      </div>
      <h3 className="text-sm font-semibold mb-1" style={{ color: isDark ? '#fff' : '#1e293b' }}>
        {card.title}
      </h3>
      <p className="text-xs leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}>
        {card.text}
      </p>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      ref={ref}
      className="relative pt-36 pb-20 overflow-hidden transition-colors duration-700 scroll-mt-28"
      style={{ background: isDark ? '#0f172a' : '#ffffff' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Editorial header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <span
              className="inline-block text-[11px] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full"
              style={isDark
                ? { color: '#0A6FBE', background: 'rgba(10,111,190,0.08)', border: '1px solid rgba(10,111,190,0.15)' }
                : { color: '#0A6FBE', background: 'rgba(10,111,190,0.06)', border: '1px solid rgba(10,111,190,0.15)' }
              }
            >
              Sobre la fira
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: isDark ? '#fff' : '#1e293b' }}
            >
              No és només una fira.{' '}
              <span className="holo-text">És un manifest.</span>
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gradient-border rounded-2xl p-6 md:p-10 mb-6 relative overflow-hidden"
            style={{
              background: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              backdropFilter: 'blur(20px)',
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
              boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.06)',
            }}
          >
            <p
              className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto"
              style={{ color: isDark ? 'rgba(255,255,255,0.55)' : '#475569' }}
            >
              "La I Fira Solidària de{' '}
              <span className="text-[#0A6FBE] font-semibold">l'Institut Poblenou</span>{' '}
              és una oportunitat per aprendre, col·laborar i transformar. Un projecte que uneix cicles, fomenta valors i genera{' '}
              <span className="text-[#6FA76F] font-semibold">impacte real</span>{' '}
              a la comunitat."
            </p>
          </motion.div>

          {/* Value cards — 2x2 grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {cards.map((card, i) => (
              <ValueCard key={i} card={card} index={i} isInView={isInView} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
