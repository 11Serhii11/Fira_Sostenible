import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ShoppingBag, BookOpen, Sparkles, Users } from 'lucide-react';
import { useTheme } from '../App';

const activities = [
  {
    icon: ShoppingBag,
    title: 'Roba de segona mà',
    description: 'Preparada i reutilitzada per l\'alumnat. Moda circular que dona vida a noves històries.',
    color: '#0A6FBE',
    tag: 'Moda',
  },
  {
    icon: BookOpen,
    title: 'Llibres de segona mà',
    description: 'Revisats i preparats amb cura per donar-los una nova oportunitat.',
    color: '#6FA76F',
    tag: 'Cultura',
  },
  {
    icon: Sparkles,
    title: 'Productes solidaris',
    description: 'Creats pels diferents cicles amb creativitat i compromís.',
    color: '#0891b2',
    tag: 'Artesania',
  },
  {
    icon: Users,
    title: 'Tallers i activitats',
    description: 'Tallers creatius, jocs i dinàmiques per a totes les edats.',
    color: '#9333ea',
    tag: 'Experiència',
  },
];

function BentoCard({ activity, index, isInView, isDark }: { activity: typeof activities[0]; index: number; isInView: boolean; isDark: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className={isFeatured ? 'sm:row-span-2' : ''}
    >
      <div
        className={`h-full rounded-2xl group cursor-default relative overflow-hidden transition-all duration-500 ${
          isFeatured ? 'p-8' : 'p-6'
        }`}
        style={{
          background: hovered
            ? isDark ? `${activity.color}30` : `${activity.color}18`
            : isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc',
          border: hovered
            ? `1px solid ${activity.color}60`
            : isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
          boxShadow: hovered
            ? `0 12px 40px ${activity.color}30`
            : isDark ? '0 2px 16px rgba(0,0,0,0.2)' : '0 2px 12px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at top right, ${activity.color}${isDark ? '12' : '08'}, transparent 70%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Tag */}
          <span
            className="inline-block self-start text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 rounded-full mb-4"
            style={{ color: activity.color, background: `${activity.color}10`, border: `1px solid ${activity.color}18` }}
          >
            {activity.tag}
          </span>

          {/* Icon */}
          <div
            className={`rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 ${
              isFeatured ? 'w-14 h-14' : 'w-12 h-12'
            }`}
            style={{ background: `${activity.color}12`, border: `1px solid ${activity.color}20` }}
          >
            <activity.icon size={isFeatured ? 28 : 22} style={{ color: activity.color }} />
          </div>

          {/* Content */}
          <h3
            className={`font-bold mb-2 ${isFeatured ? 'text-xl' : 'text-base'}`}
            style={{ color: isDark ? '#fff' : '#1e293b' }}
          >
            {activity.title}
          </h3>
          <p
            className={`leading-relaxed ${isFeatured ? 'text-sm' : 'text-xs'}`}
            style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#64748b' }}
          >
            {activity.description}
          </p>

          {/* Bottom bar on hover */}
          <div className="mt-auto pt-4">
            <div
              className="h-[2px] rounded-full transition-all duration-700"
              style={{
                width: hovered ? '60px' : '0px',
                background: `linear-gradient(90deg, ${activity.color}, transparent)`,
              }}
            />
          </div>
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
      id="activities"
      ref={ref}
      className="relative pt-36 pb-20 overflow-hidden transition-colors duration-700 scroll-mt-28"
      style={{ background: isDark ? '#111a2e' : '#f0f4f8' }}
    >
      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <span
              className="inline-block text-[11px] uppercase tracking-[0.25em] mb-3 px-3 py-1 rounded-full"
              style={isDark
                ? { color: '#6FA76F', background: 'rgba(111,167,111,0.08)', border: '1px solid rgba(111,167,111,0.15)' }
                : { color: '#6FA76F', background: 'rgba(111,167,111,0.06)', border: '1px solid rgba(111,167,111,0.15)' }
              }
            >
              Activitats
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: isDark ? '#fff' : '#1e293b' }}
            >
              Què hi <span className="holo-text">trobaràs</span>?
            </h2>
          </motion.div>

          {/* Bento grid — first card spans 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {activities.map((activity, index) => (
              <BentoCard key={index} activity={activity} index={index} isInView={isInView} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
