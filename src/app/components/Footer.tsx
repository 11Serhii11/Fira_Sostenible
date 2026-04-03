import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const footerLogoSrc = '/images/logo-fira-reviu.png';

const hashtags = ['#IFiraSolidària', '#InstitutPoblenou', '#Reviu', '#AREP', '#SantJordi'];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img
              src={footerLogoSrc}
              alt="RE-VIU — I Fira Sostenible i Solidària — Institut Poblenou"
              className="max-h-52 w-auto max-w-full mx-auto object-contain drop-shadow-md"
              width={320}
              height={200}
              decoding="async"
            />
          </motion.div>

          {/* Hashtags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {hashtags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  color: '#6FA76F',
                  transition: { duration: 0.2 }
                }}
                className="text-blue-300 hover:text-green-400 transition-colors cursor-pointer text-lg"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"
          />

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300 flex items-center justify-center gap-2">
              Fet amb <Heart size={20} className="text-red-400 inline animate-pulse" /> per l'alumnat de l'Institut Poblenou
            </p>
            <p className="text-sm text-gray-400">
              23 d'abril de 2026 • Institut Poblenou, Barcelona
            </p>
            <p className="text-sm text-gray-500 mt-6">
              © 2026 RE-VIU - I Fira Sostenible i Solidària
            </p>
          </motion.div>

          {/* Animated decoration */}
          <motion.div
            animate={{ 
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mt-12 w-16 h-16 mx-auto opacity-20"
          >
            <div className="w-full h-full rounded-full border-4 border-dashed border-green-400" />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
