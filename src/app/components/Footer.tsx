import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import footerLogoSrc from '../../assets/images/logo-fira-reviu.png?url';

const hashtags = ['#IFiraSolidària', '#InstitutPoblenou', '#Reviu', '#AREP', '#SantJordi'];

type FooterContent = {
  madeWith: string;
  byStudents: string;
  datePlace: string;
  copyright: string;
};

export function Footer({ content }: { content: FooterContent }) {
  return (
    <footer className="mt-10 border-t-2 border-slate-900 bg-slate-950 text-white dark:border-blue-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
        >
          <img
            src={footerLogoSrc}
            alt="RE-VIU — I Fira Sostenible i Solidària — Institut Poblenou"
            className="max-h-40 w-auto object-contain"
            width={320}
            height={200}
            decoding="async"
          />
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-300">
            {content.madeWith} <Heart size={16} className="text-red-400" /> {content.byStudents}
          </p>
          <p className="mt-2 text-sm text-slate-400">{content.datePlace}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="md:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-400">Red social de la fira</p>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-blue-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 h-px w-full bg-slate-800" />
          <p className="mt-5 text-sm text-slate-500">© {content.copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
}
