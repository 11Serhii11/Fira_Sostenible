import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ShoppingBag, BookOpen, Sparkles, Users } from 'lucide-react';
import { useTheme } from '../App';

const activities = [
  {
    icon: ShoppingBag,
    title: 'Roba de segona mà',
    description: 'Preparada i reutilitzada per l\'alumnat',
    color: '#0A6FBE',
    glowColor: 'rgba(10, 111, 190, 0.3)',
  },
  {
    icon: BookOpen,
    title: 'Llibres de segona mà',
    description: 'Preparats i revisats per l\'alumnat',
    color: '#6FA76F',
    glowColor: 'rgba(111, 167, 111, 0.3)',
  },
  {
    icon: Sparkles,
    title: 'Productes solidaris',
    description: 'Creats pels diferents cicles',
    color: '#0891b2',
    glowColor: 'rgba(8, 145, 178, 0.3)',
  },
  {
    icon: Users,
    title: 'Tallers i activitats',
    description: 'Per a tots els més petits',
    color: '#9333ea',
    glowColor: 'rgba(147, 51, 234, 0.3)',
  },
];

function TiltCard({ activity, index, isInView }: { activity: typeof activities[0]; index: number; isInView: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="perspective-container"
    >
      <div
        className="rounded-3xl p-8 text-center group cursor-default relative overflow-hidden transition-all duration-500"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.3s ease-out, background 0.7s, border-color 0.7s, box-shadow 0.7s',
          ...(isDark ? {
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
          } : {
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          }),
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${activity.glowColor}, transparent 70%)`,
          }}
        />

        {/* Top shimmer line */}
        <div
          className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${activity.color}40, transparent)` }}
        />

        <div className="relative z-10">
          <motion.div
            className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl"
            style={{
              background: `${activity.color}10`,
              border: `1px solid ${activity.color}25`,
            }}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <activity.icon
              size={32}
              style={{ color: activity.color, filter: `drop-shadow(0 0 6px ${activity.glowColor})` }}
            />
          </motion.div>

          <h3
            className="text-xl font-semibold mb-3 transition-colors duration-700"
            style={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#1e293b' }}
          >
            {activity.title}
          </h3>
          <p
            className="leading-relaxed text-sm transition-colors duration-700"
            style={{ color: isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}
          >
            {activity.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
    >
      {/* Soft blobs */}
      <div
        className="aurora-blob-1 absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(111,167,111,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(111,167,111,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-700"
          style={{ color: isDark ? '#ffffff' : '#1e293b' }}
        >
          Què hi <span className="holo-text">trobaràs</span>?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <TiltCard key={index} activity={activity} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
