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

type ParticipateContent = {
  title: string;
  subtitle: string;
  items: Array<{ title: string; description: string }>;
};

export function ParticipateSection({ content }: { content: ParticipateContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="participate" ref={ref} className="h-full">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="h-full rounded-[2.2rem] border-2 border-slate-900 bg-[#fff8ec] p-7 shadow-[8px_8px_0_0_#0f172a] dark:border-blue-300 dark:bg-slate-900 dark:shadow-[8px_8px_0_0_#93c5fd] md:p-8"
      >
        <h2 className="text-3xl uppercase text-slate-900 dark:text-slate-100 md:text-4xl">{content.title}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{content.subtitle}</p>

        <div className="relative mt-8 space-y-4 border-l-4 border-slate-900 pl-4 dark:border-blue-300">
          {ways.map((way, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-xl border-2 border-slate-900 bg-white p-4 dark:border-slate-600 dark:bg-slate-800"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-xl p-2" style={{ backgroundColor: `${way.color}15` }}>
                  <way.icon size={18} style={{ color: way.color }} />
                </span>
                <h3 className="text-base text-slate-900 dark:text-slate-100">
                  {content.items[index]?.title ?? way.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {content.items[index]?.description ?? way.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </section>
  );
}