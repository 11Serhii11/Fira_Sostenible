import { motion } from 'motion/react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import heroLogoSrc from '../../assets/images/logo-reciclaje-rosa.png?url';
import { useTheme } from '../App';

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
    >
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 transition-opacity duration-700">
        <div
          className="aurora-blob-1 absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(10,111,190,0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(10,111,190,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="aurora-blob-2 absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(111,167,111,0.18) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(111,167,111,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="aurora-blob-3 absolute bottom-[5%] left-[30%] w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(10,111,190,0.12) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(10,111,190,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left - Logo with reflection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Glow behind logo */}
                <div
                  className="absolute inset-0 blur-[50px] transition-opacity duration-700"
                  style={{
                    background: 'radial-gradient(circle, rgba(10,111,190,0.4), transparent 70%)',
                    opacity: isDark ? 0.3 : 0.15,
                  }}
                />
                <img
                  src={heroLogoSrc}
                  alt="Símbol de reciclatge amb rosa — identitat RE-VIU"
                  className="relative w-full max-w-[min(88vw,22rem)] max-h-[min(40vh,17rem)] object-contain drop-shadow-2xl"
                  width={320}
                  height={320}
                  decoding="async"
                />
              </motion.div>
              {/* Reflection */}
              <div className="w-full max-w-[min(88vw,20rem)] mt-2 overflow-hidden" style={{ height: '70px' }}>
                <img
                  src={heroLogoSrc}
                  alt=""
                  aria-hidden="true"
                  className="w-full max-h-[70px] object-contain blur-[2px] transition-opacity duration-700"
                  style={{
                    opacity: isDark ? 0.12 : 0.08,
                    transform: 'scaleY(-1)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 80%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 80%)',
                  }}
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="w-full"
            >
              <div className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold transition-colors duration-700"
                  style={{ color: isDark ? '#ffffff' : '#1e293b' }}
                >
                  Fira Sostenible <br />
                  <span style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#64748b' }}>
                    i Solidària
                  </span>
                </motion.h1>

                {/* Three holographic words */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start"
                >
                  {['Reutilitza', 'Reinventa', 'Reviu'].map((word, i) => (
                    <motion.h2
                      key={word}
                      className="holo-text text-3xl md:text-4xl font-bold"
                      style={{ animationDelay: `${i * 0.5}s` }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {word}
                    </motion.h2>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="max-w-2xl text-lg md:text-xl leading-relaxed transition-colors duration-700"
                  style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#64748b' }}
                >
                  Una fira creada per l'alumnat amb un objectiu clar: generar impacte social real a través del comerç, la creativitat i la solidaritat.
                </motion.p>

                {/* Glass Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4 justify-center lg:justify-start w-full"
                >
                  <div
                    className="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl cursor-default transition-all duration-700"
                    style={isDark ? {} : {
                      background: 'rgba(255,255,255,0.7)',
                      borderColor: 'rgba(10,111,190,0.15)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="p-2 rounded-xl" style={{ background: isDark ? 'rgba(10,111,190,0.1)' : 'rgba(10,111,190,0.08)' }}>
                      <Calendar size={22} className="text-[#0A6FBE]" style={{ filter: 'drop-shadow(0 0 6px rgba(10,111,190,0.4))' }} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest transition-colors duration-700" style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#94a3b8' }}>Data</p>
                      <p className="font-semibold text-sm transition-colors duration-700" style={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#1e293b' }}>23 abril 2026</p>
                    </div>
                  </div>

                  <div
                    className="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl cursor-default transition-all duration-700"
                    style={isDark ? {} : {
                      background: 'rgba(255,255,255,0.7)',
                      borderColor: 'rgba(111,167,111,0.15)',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div className="p-2 rounded-xl" style={{ background: isDark ? 'rgba(111,167,111,0.1)' : 'rgba(111,167,111,0.08)' }}>
                      <MapPin size={22} className="text-[#6FA76F]" style={{ filter: 'drop-shadow(0 0 6px rgba(111,167,111,0.4))' }} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest transition-colors duration-700" style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#94a3b8' }}>Lloc</p>
                      <p className="font-semibold text-sm transition-colors duration-700" style={{ color: isDark ? 'rgba(255,255,255,0.9)' : '#1e293b' }}>Institut Poblenou</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <button
                    className="btn-glass text-lg px-10 py-4 rounded-full font-semibold cursor-pointer transition-all duration-500"
                    style={{
                      color: '#ffffff',
                      background: isDark ? 'rgba(10,111,190,0.2)' : 'rgba(10,111,190,0.85)',
                      border: isDark ? '1px solid rgba(10,111,190,0.4)' : '1px solid rgba(10,111,190,0.9)',
                      boxShadow: isDark
                        ? '0 0 20px rgba(10,111,190,0.25)'
                        : '0 4px 20px rgba(10,111,190,0.3)',
                    }}
                  >
                    Fes una donació
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-24 text-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="text-[10px] uppercase tracking-[0.3em] transition-colors duration-700"
                style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }}
              >
                Descobreix
              </span>
              <ChevronDown size={24} style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
