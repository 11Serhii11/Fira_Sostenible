import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import arepLogoSrc from '../../assets/images/logo-arep.png?url';

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

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Logo, Title and Description in 2 equal columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Left Column - Logo */}
            <div className="flex justify-center">
              <img
                src={arepLogoSrc}
                alt="AREP per la salut mental"
                className="w-56 md:w-72 lg:w-80 h-auto object-contain drop-shadow-lg"
                width={461}
                height={156}
                decoding="async"
              />
            </div>
            
            {/* Right Column - Title and Description */}
            <div className="space-y-4 text-center md:text-left">
              <h2 
                className="text-4xl md:text-5xl"
                style={{ color: '#9E2A9E' }}
              >
                Fundació AREP
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Aquest any, parts dels beneficis de la fira es destinen a la Fundació AREP, una entitat que treballa per millorar la qualitat de vida de persones amb problemes de salut mental i les seves famílies.
              </p>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-center"
            style={{ color: '#9E2A9E' }}
          >
            Amb la teva participació ajudes a:
          </motion.p>

          {/* Benefits Cards in Row */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 text-center group"
              >
                <div
                  className="mb-4 inline-block p-3 rounded-full transition-transform duration-600 group-hover:rotate-360"
                  style={{ backgroundColor: '#9E2A9E15' }}
                >
                  <benefit.icon 
                    size={32} 
                    style={{ color: '#9E2A9E' }}
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base">{benefit.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center"
          >
            <Button
              size="lg"
              className="text-xl px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#9E2A9E' }}
            >
              Fes una donació
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}