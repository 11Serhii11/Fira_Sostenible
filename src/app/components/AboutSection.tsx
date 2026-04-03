import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl mb-8 text-gray-900"
          >
            Què és la fira?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-xl border-2 border-blue-100"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              "La I Fira Solidària de <span style={{ color: '#0A6FBE', fontWeight: '600' }}>l'Institut Poblenou</span> és una oportunitat per aprendre, col·laborar i transformar. Un projecte que uneix cicles, fomenta valors i genera impacte real a la comunitat i on es combinen aprenentatge, emprenedoria i compromís social per contribuir a una causa solidària."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}