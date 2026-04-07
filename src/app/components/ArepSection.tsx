import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart, Users, TrendingUp, ExternalLink } from 'lucide-react';
import arepLogoSrc from '../../assets/images/logo-arep.png?url';
import { useTheme } from '../App';

const benefits = [
  { icon: Users, text: 'Promoure la inclusió social', color: '#c026d3' },
  { icon: Heart, text: 'Suport a persones vulnerables', color: '#ec4899' },
  { icon: TrendingUp, text: 'Oportunitats reals de millora', color: '#9333ea' },
];

function BenefitCard({ b, index, isInView, isDark }: { b: typeof benefits[0]; index: number; isInView: boolean; isDark: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
      className="rounded-xl p-4 text-center cursor-default"
      style={{
        background: hovered
          ? isDark ? `${b.color}30` : `${b.color}18`
          : isDark ? 'rgba(255,255,255,0.03)' : 'rgba(147,51,234,0.03)',
        border: hovered
          ? `1px solid ${b.color}60`
          : isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(147,51,234,0.1)',
        boxShadow: hovered ? `0 8px 25px ${b.color}30` : 'none',
        transition: 'all 0.4s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <b.icon size={20} className="mx-auto mb-2" style={{ color: b.color }} />
      <p className="text-xs font-medium" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#475569' }}>
        {b.text}
      </p>
    </motion.div>
  );
}

export function ArepSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      id="arep"
      ref={ref}
      className="relative pt-36 pb-20 overflow-hidden transition-colors duration-700 scroll-mt-28"
      style={{ background: isDark ? '#111a2e' : '#f0f4f8' }}
    >
      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="gradient-border gradient-border-purple rounded-2xl overflow-hidden"
          >
            <div
              className="p-6 md:p-10"
              style={{
                background: isDark ? 'rgba(255,255,255,0.02)' : '#ffffff',
                backdropFilter: 'blur(20px)',
                boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              {/* Logo + Info row */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  <img
                    src={arepLogoSrc}
                    alt="AREP per la salut mental"
                    className="w-44 md:w-52 h-auto object-contain"
                    width={461} height={156} decoding="async"
                  />
                </motion.div>
                <div className="text-center md:text-left">
                  <span
                    className="inline-block text-[11px] uppercase tracking-[0.25em] mb-2 px-3 py-1 rounded-full"
                    style={isDark
                      ? { color: '#c026d3', background: 'rgba(192,38,211,0.08)', border: '1px solid rgba(192,38,211,0.15)' }
                      : { color: '#9333ea', background: 'rgba(147,51,234,0.06)', border: '1px solid rgba(147,51,234,0.15)' }
                    }
                  >
                    Col·laborador solidari
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    <span className="holo-text-purple">Fundació AREP</span>
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#64748b' }}>
                    Parts dels beneficis de la fira es destinen a la Fundació AREP, una entitat que treballa per millorar la qualitat de vida de persones amb problemes de salut mental.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <p className="text-sm text-center font-semibold mb-4" style={{ color: '#c026d3' }}>
                Amb la teva participació ajudes a:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {benefits.map((b, i) => (
                  <BenefitCard key={i} b={b} index={i} isInView={isInView} isDark={isDark} />
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  className="btn-glass text-sm px-7 py-3 rounded-full font-semibold text-white cursor-pointer inline-flex items-center gap-2"
                  style={{
                    background: isDark ? 'rgba(158,42,158,0.2)' : 'rgba(158,42,158,0.85)',
                    border: isDark ? '1px solid rgba(158,42,158,0.4)' : '1px solid rgba(158,42,158,0.9)',
                    boxShadow: isDark ? '0 0 15px rgba(158,42,158,0.15)' : '0 4px 15px rgba(158,42,158,0.2)',
                  }}
                >
                  Fes una donació <Heart size={14} />
                </button>
                <a href="#" className="text-xs font-medium inline-flex items-center gap-1" style={{ color: isDark ? 'rgba(255,255,255,0.35)' : '#94a3b8' }}>
                  Coneix la fundació <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
