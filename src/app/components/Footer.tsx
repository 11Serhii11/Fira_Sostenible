import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import footerLogoSrc from '../../assets/images/logo-fira-reviu.png?url';
import { useTheme } from '../App';

const hashtags = ['#IFiraSolidària', '#InstitutPoblenou', '#Reviu', '#AREP', '#SantJordi'];
const links = [
  { label: 'Inici', href: '#hero' },
  { label: 'La Fira', href: '#about' },
  { label: 'Activitats', href: '#activities' },
  { label: 'Participa', href: '#participate' },
  { label: 'AREP', href: '#arep' },
];

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className="relative py-10 overflow-hidden transition-colors duration-700"
      style={{ background: isDark ? '#0a0f1e' : '#e2e8f0' }}
    >
      <div className="crystal-divider absolute top-0 left-0 right-0" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img src={footerLogoSrc} alt="RE-VIU" className="h-16 w-auto object-contain mb-2" width={320} height={200} decoding="async" />
              <p className="text-xs max-w-[220px] text-center md:text-left" style={{ color: isDark ? 'rgba(255,255,255,0.25)' : '#94a3b8' }}>
                Una fira creada per l'alumnat per generar impacte social real.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center gap-1.5">
              <h4 className="text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold" style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }}>
                Navegació
              </h4>
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-xs transition-colors duration-300 hover:text-[#0A6FBE]" style={{ color: isDark ? 'rgba(255,255,255,0.4)' : '#64748b' }}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Hashtags */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold" style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }}>
                Comparteix
              </h4>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-end">
                {hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[11px] cursor-pointer"
                    style={{
                      color: '#0A6FBE',
                      background: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                      border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider + bottom */}
          <div className="h-[1px] mb-6" style={{ background: isDark ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }} />

          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs flex items-center gap-1.5" style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#94a3b8' }}>
              Fet amb{' '}
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Heart size={12} className="text-red-400" />
              </motion.span>{' '}
              per l'alumnat de l'Institut Poblenou
            </p>
            <p className="text-[10px]" style={{ color: isDark ? 'rgba(255,255,255,0.12)' : '#cbd5e1' }}>
              &copy; 2026 RE-VIU — I Fira Sostenible i Solidària
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
