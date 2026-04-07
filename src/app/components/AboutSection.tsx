import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { useTheme } from '../App';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { isDark } = useTheme();

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
    >
      {/* Subtle blob */}
      <div
        className="aurora-blob-2 absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(10,111,190,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(10,111,190,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-12 transition-colors duration-700"
            style={{ color: isDark ? '#ffffff' : '#1e293b' }}
          >
            Què és <span className="holo-text">la fira</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="gradient-border rounded-3xl p-10 md:p-14 relative transition-all duration-700"
            style={isDark ? {
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            } : {
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(10,111,190,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          >
            {/* Quote icon */}
            <div
              className="absolute -top-5 left-1/2 -translate-x-1/2 p-3 rounded-full transition-colors duration-700"
              style={{
                background: isDark ? '#0f172a' : '#f0f4f8',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(10,111,190,0.15)',
              }}
            >
              <Quote size={24} className="text-[#0A6FBE]" style={{ filter: 'drop-shadow(0 0 8px rgba(10,111,190,0.4))' }} />
            </div>

            <p
              className="text-lg md:text-xl leading-relaxed relative z-10 transition-colors duration-700"
              style={{ color: isDark ? 'rgba(255,255,255,0.55)' : '#475569' }}
            >
              "La I Fira Solidària de{' '}
              <span className="text-[#0A6FBE] font-semibold text-glow-blue">
                l'Institut Poblenou
              </span>{' '}
              és una oportunitat per aprendre, col·laborar i transformar. Un projecte que uneix cicles, fomenta valors i genera impacte real a la comunitat i on es combinen aprenentatge, emprenedoria i compromís social per contribuir a una causa solidària."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
