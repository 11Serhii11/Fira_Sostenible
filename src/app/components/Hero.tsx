import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Clock3, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
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
};

export function Hero({ content }: { content: HeroContent }) {
  const targetDate = useMemo(() => new Date('2026-04-23T09:00:00'), []);
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

  const countdownItems = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Institut+Poblenou+Barcelona';

  return (
    <section className="relative overflow-hidden pt-28 pb-14">
      <motion.div
        className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-[2.2rem] border-2 border-slate-900 bg-[#f6fbff] p-7 shadow-[8px_8px_0_0_#0f172a] dark:border-blue-300 dark:bg-slate-900 dark:shadow-[8px_8px_0_0_#93c5fd] md:p-10"
          >
            <div className="mb-5 inline-flex rounded-full border-2 border-slate-900 bg-amber-200 px-4 py-1 text-xs uppercase tracking-[0.2em] text-slate-900 dark:border-blue-300 dark:bg-blue-900 dark:text-blue-100">
              Edicion Sant Jordi
            </div>
            <div className="grid items-center gap-10 md:grid-cols-[auto,1fr]">
              <motion.img
                src={heroLogoSrc}
                alt="Símbol de reciclatge amb rosa — identitat RE-VIU"
                className="mx-auto w-52 object-contain drop-shadow-2xl md:w-64"
                width={320}
                height={320}
                decoding="async"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              <div className="space-y-5 text-center md:text-left">
                <h1 className="text-4xl uppercase text-slate-900 dark:text-slate-100 md:text-6xl">{content.title}</h1>
                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {content.words.map((word) => (
                    <span
                      key={word}
                      className="rounded-md border-2 border-slate-900 bg-white px-4 py-2 text-base uppercase text-slate-900 dark:border-blue-300 dark:bg-slate-800 dark:text-blue-200"
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">{content.description}</p>
                <Button
                  size="lg"
                  className="h-12 rounded-md border-2 border-slate-900 bg-emerald-400 px-8 text-base font-semibold text-slate-900 hover:bg-emerald-300 dark:border-blue-300 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400"
                >
                  {content.donateButton.toUpperCase()}
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </motion.article>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5">
          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
            className="h-full rounded-[2.2rem] border-2 border-slate-900 bg-white p-6 text-slate-900 shadow-[8px_8px_0_0_#0f172a] dark:border-blue-300 dark:bg-slate-900 dark:text-slate-100 dark:shadow-[8px_8px_0_0_#93c5fd]"
          >
            <div className="mb-2 flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Clock3 size={18} />
              <p className="text-sm uppercase tracking-[0.22em]">Cuenta atras oficial</p>
            </div>
            <p className="mb-5 text-sm text-slate-600 dark:text-slate-300">La feria es el 23 de abril</p>
            <div className="grid grid-cols-2 gap-3">
              {countdownItems.map((item) => (
                <div key={item.label} className="rounded-xl border-2 border-slate-900 bg-slate-100 p-4 text-center dark:border-slate-600 dark:bg-slate-800">
                  <p className="text-3xl">{String(item.value).padStart(2, '0')}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 rounded-xl border-2 border-slate-900 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-800"
            >
              <p className="text-xs uppercase tracking-wide text-slate-600 dark:text-slate-300">{content.placeLabel}</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-2 text-lg font-medium text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
              >
                <MapPin size={18} className="text-emerald-500" />
                {content.placeValue}
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-10 flex justify-center"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowRight className="rotate-90 text-slate-500 dark:text-slate-400" size={30} />
        </motion.div>
      </motion.div>
    </section>
  );
}