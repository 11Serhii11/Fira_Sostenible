import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroLogoSrc from '../../assets/images/logo-reciclaje-rosa.png?url';

type HeroContent = {
  title: string;
  words: [string, string, string] | string[];
  description: string;
  dateLabel: string;
  dateValue: string;
  placeLabel: string;
  placeValue: string;
  donateButton: string;
  discoverButton: string;
  countdownDateText: string;
  countdownLabels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

export function Hero({ content }: { content: HeroContent }) {
  const targetDate = useMemo(() => new Date("2026-04-23T10:00:00"), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      const safeDistance = Math.max(distance, 0);

      setTimeLeft({
        days: Math.floor(safeDistance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((safeDistance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((safeDistance / (1000 * 60)) % 60),
        seconds: Math.floor((safeDistance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const donateUrl = "https://www.arep.cat/collabora/#donatiu";

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#e8f1ff] via-[#eef6fb] to-[#edf8f2] dark:from-[#0f172a] dark:via-[#0f1b32] dark:to-[#102028] transition-colors duration-700">
      <div
        className="absolute inset-0 pointer-events-none bg-center bg-cover bg-no-repeat opacity-[0.16] dark:opacity-[0.12]"
        style={{ backgroundImage: "url('/images/hero-fira-bg.png')" }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#e8f1ff]/85 via-[#eef6fb]/80 to-[#edf8f2]/88 dark:from-[#0f172a]/88 dark:via-[#0f1b32]/86 dark:to-[#102028]/90" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-blob-1 absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full blur-[130px]" style={{ background: "radial-gradient(circle, rgba(10,111,190,0.12) 0%, transparent 70%)" }} />
        <div className="aurora-blob-2 absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(111,167,111,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="mb-5">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
            <div className="absolute inset-0 blur-[40px]" style={{ background: "radial-gradient(circle, rgba(10,111,190,0.35), transparent 70%)", opacity: 0.15 }} />
            <img src={heroLogoSrc} alt="RE-VIU" className="relative w-24 h-24 md:w-32 md:h-32 object-contain" width={128} height={128} decoding="async" />
          </motion.div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-4 text-slate-800 dark:text-white">
          {content.title}
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="flex items-center gap-3 md:gap-4 mb-4">
          {content.words.map((word, i) => (
            <span key={word} className="flex items-center gap-3 md:gap-4">
              <span className="holo-text text-lg md:text-2xl">{word}</span>
              {i < content.words.length - 1 && <span className="w-1 h-1 rounded-full bg-[#0A6FBE]/40" />}
            </span>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="max-w-lg text-sm md:text-base leading-relaxed mb-6 text-slate-500 dark:text-slate-300">
          {content.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="flex items-center gap-2 md:gap-3 mb-3">
          {[
            { label: content.countdownLabels.days, value: timeLeft.days },
            { label: content.countdownLabels.hours, value: timeLeft.hours },
            { label: content.countdownLabels.minutes, value: timeLeft.minutes },
            { label: content.countdownLabels.seconds, value: timeLeft.seconds },
          ].map((unit, index) => (
            <div key={unit.label} className="flex items-center gap-2">
              <div className="rounded-xl px-3 py-2 min-w-[56px] md:min-w-[68px] text-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <span className="countdown-digit text-2xl md:text-3xl block text-[#0A6FBE] dark:text-white">{String(unit.value).padStart(2, "0")}</span>
                <span className="text-[9px] uppercase tracking-[0.15em] mt-1.5 block text-slate-400 dark:text-slate-300">{unit.label}</span>
              </div>
              {index < 3 && <span className="text-xl text-slate-300 dark:text-slate-500">:</span>}
            </div>
          ))}
        </motion.div>

        <p className="mb-4 text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-300">{content.countdownDateText}</p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }} className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-4 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
            {content.dateValue}
          </span>
          <span className="px-4 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
            {content.placeValue}
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.65 }} className="flex items-center gap-3">
          <a
            href={donateUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-glass text-sm px-7 py-3 rounded-full font-semibold text-white cursor-pointer"
            style={{ background: "rgba(10,111,190,0.85)", border: "1px solid rgba(10,111,190,0.9)" }}
          >
            {content.donateButton}
          </a>
          <a href="#about" className="px-7 py-3 rounded-full text-sm font-semibold cursor-pointer text-slate-600 border border-slate-200 dark:text-slate-300 dark:border-white/10">
            {content.discoverButton}
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} className="text-slate-400 dark:text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}