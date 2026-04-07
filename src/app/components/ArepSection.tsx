import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Users, TrendingUp } from 'lucide-react';
import arepLogoSrc from '../../assets/images/logo-arep.png?url';
import { useTheme } from '../App';

const benefits = [
  {
    icon: Users,
    text: 'Promoure la inclusió social',
  },
  {
    icon: Heart,
    text: 'Donar suport a persones en situació de vulnerabilitat',
  },
  {
    icon: TrendingUp,
    text: 'Generar oportunitats reals de millora',
  },
];

export function ArepSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { isDark } = useTheme();

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
    >
      {/* Purple blobs */}
      <div
        className="aurora-blob-1 absolute top-[-10%] left-[20%] w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(158,42,158,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(158,42,158,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* Logo + Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Logo with reflection */}
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div
                  className="absolute inset-0 blur-[40px] transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle, rgba(158,42,158,0.4), transparent 70%)',
                    opacity: isDark ? 0.2 : 0.1,
                  }}
                />
                <img
                  src={arepLogoSrc}
                  alt="AREP per la salut mental"
                  className="relative w-56 md:w-72 lg:w-80 h-auto object-contain"
                  width={461}
                  height={156}
                  decoding="async"
                />
              </motion.div>
              {/* Reflection */}
              <div className="w-56 md:w-72 lg:w-80 overflow-hidden" style={{ height: '45px' }}>
                <img
                  src={arepLogoSrc}
                  alt=""
                  aria-hidden="true"
                  className="w-full max-h-[45px] object-contain blur-[2px] transition-opacity duration-700"
                  style={{
                    opacity: isDark ? 0.1 : 0.06,
                    transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 80%)',
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="holo-text-purple">Fundació AREP</span>
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed transition-colors duration-700"
                style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#64748b' }}
              >
                Aquest any, parts dels beneficis de la fira es destinen a la Fundació AREP, una entitat que treballa per millorar la qualitat de vida de persones amb problemes de salut mental i les seves famílies.
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-center font-semibold"
            style={{ color: '#c026d3' }}
          >
            Amb la teva participació ajudes a:
          </motion.p>

          {/* Benefit Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="gradient-border gradient-border-purple rounded-3xl p-7 text-center group cursor-default relative overflow-hidden transition-all duration-500"
                style={isDark ? {
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                } : {
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(158,42,158,0.1)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isDark
                      ? 'radial-gradient(circle at 50% 0%, rgba(158,42,158,0.15), transparent 70%)'
                      : 'radial-gradient(circle at 50% 0%, rgba(158,42,158,0.08), transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-2xl"
                    style={{
                      background: 'rgba(158,42,158,0.08)',
                      border: '1px solid rgba(158,42,158,0.2)',
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon
                      size={28}
                      style={{ color: '#c026d3', filter: 'drop-shadow(0 0 6px rgba(192,38,211,0.4))' }}
                    />
                  </motion.div>
                  <p
                    className="text-sm md:text-base transition-colors duration-700"
                    style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#475569' }}
                  >
                    {benefit.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center"
          >
            <button
              className="btn-glass text-lg px-10 py-4 rounded-full font-semibold cursor-pointer transition-all duration-500"
              style={{
                color: '#ffffff',
                background: isDark ? 'rgba(158,42,158,0.2)' : 'rgba(158,42,158,0.85)',
                border: isDark ? '1px solid rgba(158,42,158,0.4)' : '1px solid rgba(158,42,158,0.9)',
                boxShadow: isDark
                  ? '0 0 20px rgba(158,42,158,0.2)'
                  : '0 4px 20px rgba(158,42,158,0.3)',
              }}
            >
              Fes una donació
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
