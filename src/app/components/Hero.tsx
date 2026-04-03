import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const heroLogoSrc = '/images/logo-reciclaje-rosa.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src={heroLogoSrc}
                alt="Símbol de reciclatge amb rosa — identitat RE-VIU"
                className="w-full max-w-[min(88vw,24rem)] max-h-[min(40vh,17rem)] object-contain drop-shadow-2xl"
                width={320}
                height={320}
                decoding="async"
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-full"
            >
              <div className="flex flex-col items-center space-y-8 text-center lg:-translate-x-4">
              {/* Title */}
              <div className="w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900"
                >
                  Fira Sostenible <br />
                  i Solidària
                </motion.h1>
              </div>

              {/* Three Words in Same Line */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <h2 className="text-3xl md:text-4xl" style={{ color: '#0A6FBE' }}>
                  Reutilitza
                </h2>
                <h2 className="text-3xl md:text-4xl" style={{ color: '#0A6FBE' }}>
                  Reinventa
                </h2>
                <h2 className="text-3xl md:text-4xl" style={{ color: '#0A6FBE' }}>
                  Reviu
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                Una fira creada per l'alumnat amb un objectiu clar: generar impacte social real a través del comerç, la creativitat i la solidaritat.
              </motion.p>

              {/* Info Cards - Date and Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center w-full"
              >
                {/* Date Card */}
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                  <Calendar size={24} style={{ color: '#0A6FBE' }} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Data</p>
                    <p className="font-semibold text-gray-900">23 abril 2026</p>
                  </div>
                </div>
                
                {/* Location Card */}
                <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-lg border border-gray-100">
                  <MapPin size={24} style={{ color: '#6FA76F' }} />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Lloc</p>
                    <p className="font-semibold text-gray-900">Institut Poblenou</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button - Centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="text-xl px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#0A6FBE' }}
                >
                  Fes una donació
                </Button>
              </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 text-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="mx-auto text-gray-400" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}