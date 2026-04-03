import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, ShoppingCart, Heart, Share2 } from 'lucide-react';

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
    color: '#0A6FBE',
  },
  {
    icon: Heart,
    title: 'Fes una donació',
    description: 'i suma al canvi',
    color: '#0A6FBE',
  },
  {
    icon: Share2,
    title: 'Comparteix',
    description: 'l\'esdeveniment amb el teu entorn',
    color: '#0A6FBE',
  },
];

export function ParticipateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl mb-4 text-gray-900"
          >
            Com pots participar?
          </h2>
          <p className="text-xl text-gray-600">
            Hi ha moltes maneres de formar part d'aquesta iniciativa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ways.map((way, index) => (
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
                style={{ backgroundColor: `${way.color}15` }}
              >
                <way.icon 
                  size={40} 
                  style={{ color: way.color }}
                />
              </div>
              <h3 
                className="text-xl mb-3"
                style={{ color: way.color }}
              >
                {way.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}