import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import footerLogoSrc from '../../assets/images/logo-fira-reviu.png?url';
import { useTheme } from '../App';

const hashtags = ['#IFiraSolidària', '#InstitutPoblenou', '#Reviu', '#AREP', '#SantJordi'];

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className="relative py-20 overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0a0f1e' : '#e2e8f0' }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] blur-[100px] transition-opacity duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(10,111,190,0.3), transparent 70%)',
          opacity: isDark ? 0.15 : 0.08,
        }}
      />

      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo with glow and reflection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col items-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 blur-[35px] transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle, rgba(10,111,190,0.4), transparent 70%)',
                  opacity: isDark ? 0.15 : 0.08,
                }}
              />
              <img
                src={footerLogoSrc}
                alt="RE-VIU — I Fira Sostenible i Solidària — Institut Poblenou"
                className="relative max-h-48 w-auto max-w-full object-contain"
                width={320}
                height={200}
                decoding="async"
              />
            </div>
            {/* Reflection */}
            <div className="w-full max-w-[300px] overflow-hidden" style={{ height: '45px' }}>
              <img
                src={footerLogoSrc}
                alt=""
                aria-hidden="true"
                className="w-full max-h-[45px] object-contain blur-[2px] transition-opacity duration-700"
                style={{
                  opacity: isDark ? 0.08 : 0.05,
                  transform: 'scaleY(-1)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 80%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 80%)',
                }}
              />
            </div>
          </motion.div>

          {/* Hashtags in glass pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {hashtags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300"
                style={isDark ? {
                  color: '#0A6FBE',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                } : {
                  color: '#0A6FBE',
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(10,111,190,0.12)',
                }}
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
            className="h-[1px] mb-10 max-w-lg mx-auto"
            style={{
              background: isDark
                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)'
                : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
            }}
          />

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p
              className="text-base flex items-center justify-center gap-2 transition-colors duration-700"
              style={{ color: isDark ? 'rgba(255,255,255,0.3)' : '#64748b' }}
            >
              Fet amb{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={18} className="text-red-400" style={{ filter: 'drop-shadow(0 0 6px rgba(248,113,113,0.4))' }} />
              </motion.span>{' '}
              per l'alumnat de l'Institut Poblenou
            </p>
            <p
              className="text-sm transition-colors duration-700"
              style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }}
            >
              23 d'abril de 2026 &bull; Institut Poblenou, Barcelona
            </p>
            <p
              className="text-xs mt-6 transition-colors duration-700"
              style={{ color: isDark ? 'rgba(255,255,255,0.1)' : '#cbd5e1' }}
            >
              &copy; 2026 RE-VIU &mdash; I Fira Sostenible i Solidària
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
