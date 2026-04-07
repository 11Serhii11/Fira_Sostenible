import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { useTheme } from '../App';

const ways = [
  {
    icon: Calendar,
    title: 'Vine a la fira',
    description: 'i participa en les activitats',
    color: '#0A6FBE',
  },
  {
    icon: ShoppingCart,
    title: 'Compra productes',
    description: 'solidaris',
    color: '#6FA76F',
  },
  {
    icon: Heart,
    title: 'Fes una donació',
    description: 'i suma al canvi',
    color: '#0891b2',
  },
  {
    icon: Share2,
    title: 'Comparteix',
    description: "l'esdeveniment amb el teu entorn",
    color: '#9333ea',
  },
];

export function ParticipateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
    >
      <div
        className="aurora-blob-2 absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(10,111,190,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(10,111,190,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 transition-colors duration-700"
            style={{ color: isDark ? '#ffffff' : '#1e293b' }}
          >
            Com pots <span className="holo-text">participar</span>?
          </h2>
          <p
            className="text-xl transition-colors duration-700"
            style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#94a3b8' }}
          >
            Hi ha moltes maneres de formar part d'aquesta iniciativa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl p-8 text-center group cursor-default relative overflow-hidden transition-all duration-500"
              style={isDark ? {
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
              } : {
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
              }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
            >
              {/* Top glow line on hover */}
              <div
                className="absolute top-0 left-1/4 right-1/4 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${way.color}, transparent)` }}
              />

              {/* Step number */}
              <div
                className="step-number w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-6 text-xs font-bold transition-colors duration-700"
                style={{ color: isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}
              >
                {index + 1}
              </div>

              {/* Icon */}
              <motion.div
                className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl"
                style={{
                  background: `${way.color}10`,
                  border: `1px solid ${way.color}20`,
                }}
                whileHover={{ scale: 1.12, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <way.icon
                  size={28}
                  style={{ color: way.color, filter: `drop-shadow(0 0 6px ${way.color}60)` }}
                />
              </motion.div>

              <h3
                className="text-lg font-semibold mb-2 transition-colors duration-700"
                style={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#1e293b' }}
              >
                {way.title}
              </h3>
              <p
                className="text-sm leading-relaxed transition-colors duration-700"
                style={{ color: isDark ? 'rgba(255,255,255,0.35)' : '#64748b' }}
              >
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
