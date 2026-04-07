import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroLogoSrc from '../../assets/images/logo-reciclaje-rosa.png?url';
import { useTheme } from '../App';

function useCountdown(targetDate: Date) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return time;
}

function CountdownUnit({ value, label, isDark }: { value: number; label: string; isDark: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-xl px-3 py-2 min-w-[56px] md:min-w-[68px] text-center"
        style={{
          background: isDark ? 'rgba(255,255,255,0.04)' : '#ffffff',
          border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
          boxShadow: isDark ? '0 2px 12px rgba(0,0,0,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <motion.span
          key={value}
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="countdown-digit text-2xl md:text-3xl font-bold block"
          style={{ color: isDark ? '#fff' : '#0A6FBE' }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="text-[9px] uppercase tracking-[0.15em] mt-1.5" style={{ color: isDark ? 'rgba(255,255,255,0.25)' : '#94a3b8' }}>
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const { isDark } = useTheme();
  const countdown = useCountdown(new Date('2026-04-23T10:00:00'));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0f172a' : '#f0f4f8' }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="aurora-blob-1 absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: `radial-gradient(circle, rgba(10,111,190,${isDark ? '0.15' : '0.08'}) 0%, transparent 70%)` }}
        />
        <div
          className="aurora-blob-2 absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[120px]"
          style={{ background: `radial-gradient(circle, rgba(111,167,111,${isDark ? '0.12' : '0.06'}) 0%, transparent 70%)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div
              className="absolute inset-0 blur-[40px]"
              style={{ background: 'radial-gradient(circle, rgba(10,111,190,0.35), transparent 70%)', opacity: isDark ? 0.25 : 0.1 }}
            />
            <img src={heroLogoSrc} alt="RE-VIU" className="relative w-24 h-24 md:w-32 md:h-32 object-contain" width={128} height={128} decoding="async" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-4"
          style={{ color: isDark ? '#ffffff' : '#1e293b' }}
        >
          Fira Sostenible<br />
          <span style={{ color: isDark ? 'rgba(255,255,255,0.35)' : '#94a3b8' }}>i Solidària</span>
        </motion.h1>

        {/* Holographic words */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex items-center gap-3 md:gap-4 mb-4"
        >
          {['Reutilitza', 'Reinventa', 'Reviu'].map((word, i) => (
            <span key={word} className="flex items-center gap-3 md:gap-4">
              <span className="holo-text text-lg md:text-2xl font-bold" style={{ animationDelay: `${i * 0.4}s` }}>{word}</span>
              {i < 2 && <span className="w-1 h-1 rounded-full bg-[#0A6FBE]/40" />}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-lg text-sm md:text-base leading-relaxed mb-6"
          style={{ color: isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}
        >
          Una fira creada per l'alumnat amb un objectiu clar: generar impacte social real a través del comerç, la creativitat i la solidaritat.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-2 md:gap-3 mb-5"
        >
          <CountdownUnit value={countdown.days} label="Dies" isDark={isDark} />
          <span className="text-xl font-light mt-[-16px]" style={{ color: isDark ? 'rgba(255,255,255,0.12)' : '#cbd5e1' }}>:</span>
          <CountdownUnit value={countdown.hours} label="Hores" isDark={isDark} />
          <span className="text-xl font-light mt-[-16px]" style={{ color: isDark ? 'rgba(255,255,255,0.12)' : '#cbd5e1' }}>:</span>
          <CountdownUnit value={countdown.minutes} label="Min" isDark={isDark} />
          <span className="text-xl font-light mt-[-16px]" style={{ color: isDark ? 'rgba(255,255,255,0.12)' : '#cbd5e1' }}>:</span>
          <CountdownUnit value={countdown.seconds} label="Seg" isDark={isDark} />
        </motion.div>

        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {['23 d\'abril de 2026', 'Institut Poblenou, Barcelona'].map((text, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: isDark ? 'rgba(255,255,255,0.04)' : '#ffffff',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                color: isDark ? 'rgba(255,255,255,0.6)' : '#475569',
                boxShadow: isDark ? 'none' : '0 1px 4px rgba(0,0,0,0.04)',
              }}
            >
              {text}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-3"
        >
          <a
            href="#arep"
            className="btn-glass text-sm px-7 py-3 rounded-full font-semibold text-white cursor-pointer"
            style={{
              background: isDark ? 'rgba(10,111,190,0.2)' : 'rgba(10,111,190,0.85)',
              border: isDark ? '1px solid rgba(10,111,190,0.4)' : '1px solid rgba(10,111,190,0.9)',
              boxShadow: isDark ? '0 0 15px rgba(10,111,190,0.2)' : '0 4px 15px rgba(10,111,190,0.2)',
            }}
          >
            Fes una donació
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-full text-sm font-semibold cursor-pointer"
            style={{
              color: isDark ? 'rgba(255,255,255,0.5)' : '#475569',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
            }}
          >
            Descobreix
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} style={{ color: isDark ? 'rgba(255,255,255,0.12)' : '#cbd5e1' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
