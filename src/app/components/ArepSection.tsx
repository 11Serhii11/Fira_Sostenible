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

type ArepContent = {
  title: string;
  description: string;
  subtitle: string;
  benefits: string[];
  donateButton: string;
};

export function ArepSection({ content }: { content: ArepContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2.2rem] border-2 border-slate-900 bg-gradient-to-b from-fuchsia-100 to-rose-100 p-6 shadow-[8px_8px_0_0_#0f172a] dark:border-blue-300 dark:from-slate-900 dark:to-slate-900 dark:shadow-[8px_8px_0_0_#93c5fd]"
      >
        <img
          src={arepLogoSrc}
          alt="AREP per la salut mental"
          className="mx-auto mb-5 w-44 object-contain"
          width={461}
          height={156}
          decoding="async"
        />
        <h2 className="text-center text-3xl uppercase text-purple-800 dark:text-purple-300">{content.title}</h2>
        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{content.description}</p>
        <p className="mt-5 text-sm text-purple-700 dark:text-purple-300">{content.subtitle}</p>

        <div className="mt-4 space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 rounded-xl border border-purple-200 bg-white/80 p-3 dark:border-slate-700 dark:bg-slate-800/80">
              <benefit.icon size={16} className="mt-0.5 text-purple-700 dark:text-purple-300" />
              <p className="text-sm text-slate-700 dark:text-slate-300">{content.benefits[index] ?? benefit.text}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="mt-5 w-full rounded-md border-2 border-slate-900 text-base font-semibold text-white hover:opacity-95 dark:border-blue-300"
          style={{ backgroundColor: '#9E2A9E' }}
        >
          {content.donateButton}
        </Button>
      </motion.article>
    </section>
  );
}