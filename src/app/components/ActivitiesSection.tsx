import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ShoppingBag, BookOpen, Sparkles, Users } from 'lucide-react';

const activities = [
  {
    icon: ShoppingBag,
    title: 'Roba de segona mà',
    description: 'Preparada i reutilitzada per l\'alumnat',
    color: '#0A6FBE',
  },
  {
    icon: BookOpen,
    title: 'Llibres de segona mà',
    description: 'Preparats i revisats per l\'alumnat',
    color: '#0A6FBE',
  },
  {
    icon: Sparkles,
    title: 'Productes solidaris',
    description: 'Creats pels diferents cicles',
    color: '#0A6FBE',
  },
  {
    icon: Users,
    title: 'Tallers i activitats',
    description: 'Per a tots els més petits',
    color: '#0A6FBE',
  },
];

type ActivitiesContent = {
  title: string;
  items: Array<{ title: string; description: string }>;
};

export function ActivitiesSection({ content }: { content: ActivitiesContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="activities" ref={ref}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="rounded-[2.2rem] border-2 border-slate-900 bg-white p-7 shadow-[8px_8px_0_0_#0f172a] dark:border-blue-300 dark:bg-slate-900 dark:shadow-[8px_8px_0_0_#93c5fd] md:p-10"
      >
        <h2 className="text-4xl uppercase text-slate-900 dark:text-slate-100 md:text-5xl">{content.title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-3 rounded-xl border-2 border-slate-900 bg-cyan-50 p-5 dark:border-slate-600 dark:bg-slate-800"
            >
              <div className="rounded-2xl p-3" style={{ backgroundColor: `${activity.color}15` }}>
                <activity.icon size={24} style={{ color: activity.color }} />
              </div>
              <div>
                <h3 className="text-lg text-slate-900 dark:text-slate-100">
                  {content.items[index]?.title ?? activity.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {content.items[index]?.description ?? activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </section>
  );
}