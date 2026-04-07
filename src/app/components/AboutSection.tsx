import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

type AboutContent = {
  title: string;
  description: string;
};

export function AboutSection({ content }: { content: AboutContent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="h-full">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="h-full rounded-[2.2rem] border-2 border-slate-900 bg-white p-7 shadow-[8px_8px_0_0_#0f172a] dark:border-blue-300 dark:bg-slate-900 dark:shadow-[8px_8px_0_0_#93c5fd] md:p-10"
      >
        <p className="mb-4 inline-flex rounded-md border-2 border-slate-900 bg-lime-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-900 dark:border-blue-300 dark:bg-blue-900 dark:text-blue-100">
          Sobre la fira
        </p>
        <h2 className="text-4xl uppercase text-slate-900 dark:text-slate-100 md:text-5xl">{content.title}</h2>
        <div className="mt-8 rounded-3xl border-2 border-slate-900 bg-gradient-to-br from-cyan-50 to-blue-100 p-6 dark:border-slate-600 dark:from-slate-800 dark:to-slate-800 md:p-8">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl">{content.description}</p>
        </div>
      </motion.article>
    </section>
  );
}