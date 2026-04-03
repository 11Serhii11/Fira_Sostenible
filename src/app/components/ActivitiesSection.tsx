import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ShoppingBag, BookOpen, Sparkles, Users } from 'lucide-react';

const activities = [
  {
    icon: ShoppingBag,
    title: 'Roba de segona mà',
    description: 'Preparada i reutilitzada per l\'alumnat',
    color: '#0A6FBE',
  },
  {
    icon: BookOpen,
    title: 'Llibres de segona mà',
    description: 'Preparats i revisats per l\'alumnat',
    color: '#0A6FBE',
  },
  {
    icon: Sparkles,
    title: 'Productes solidaris',
    description: 'Creats pels diferents cicles',
    color: '#0A6FBE',
  },
  {
    icon: Users,
    title: 'Tallers i activitats',
    description: 'Per a tots els més petits',
    color: '#0A6FBE',
  },
];

export function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-16 text-gray-900"
        >
          Què hi trobaràs?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 text-center group"
            >
              <div
                className="mb-6 inline-block p-4 rounded-full transition-transform duration-600 group-hover:rotate-360"
                style={{ backgroundColor: `${activity.color}15` }}
              >
                <activity.icon 
                  size={40} 
                  style={{ color: activity.color }}
                />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ color: activity.color }}
              >
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}