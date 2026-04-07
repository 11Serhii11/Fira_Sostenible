import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../App';
import logoSrc from '../../assets/images/logo-reciclaje-rosa.png?url';

const links = [
  { label: 'Inici', href: '#hero' },
  { label: 'La Fira', href: '#about' },
  { label: 'Activitats', href: '#activities' },
  { label: 'Participa', href: '#participate' },
  { label: 'AREP', href: '#arep' },
];

export function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const navBg = scrolled
    ? isDark
      ? 'rgba(15, 23, 42, 0.85)'
      : 'rgba(240, 244, 248, 0.85)'
    : 'transparent';

  const navBorder = scrolled
    ? isDark
      ? '1px solid rgba(255,255,255,0.06)'
      : '1px solid rgba(0,0,0,0.06)'
    : '1px solid transparent';

  const navShadow = scrolled
    ? '0 4px 30px rgba(0,0,0,0.1)'
    : 'none';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: navBorder,
          boxShadow: navShadow,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src={logoSrc}
                alt="RE-VIU"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span
                className="font-bold text-lg tracking-tight transition-colors duration-500"
                style={{ color: isDark ? '#fff' : '#1e293b' }}
              >
                RE-VIU
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/5"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : '#64748b' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDark ? '#fff' : '#0A6FBE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.6)' : '#64748b';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <motion.div
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  {isDark ? (
                    <Sun size={17} className="text-amber-400" style={{ filter: 'drop-shadow(0 0 6px rgba(251,191,36,0.4))' }} />
                  ) : (
                    <Moon size={17} className="text-[#0A6FBE]" style={{ filter: 'drop-shadow(0 0 6px rgba(10,111,190,0.4))' }} />
                  )}
                </motion.div>
              </button>

              {/* CTA */}
              <a
                href="#arep"
                className="hidden md:inline-flex btn-glass px-5 py-2.5 rounded-full text-sm font-semibold text-white cursor-pointer"
                style={{
                  background: isDark ? 'rgba(10,111,190,0.2)' : 'rgba(10,111,190,0.85)',
                  border: isDark ? '1px solid rgba(10,111,190,0.35)' : '1px solid rgba(10,111,190,0.9)',
                  boxShadow: '0 0 15px rgba(10,111,190,0.15)',
                }}
              >
                Dona
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {mobileOpen ? (
                  <X size={18} style={{ color: isDark ? '#fff' : '#1e293b' }} />
                ) : (
                  <Menu size={18} style={{ color: isDark ? '#fff' : '#1e293b' }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-0 top-16 z-[99] p-4 md:hidden"
        >
          <div
            className="rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(240,244,248,0.95)',
              backdropFilter: 'blur(20px)',
              border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300"
                style={{ color: isDark ? 'rgba(255,255,255,0.7)' : '#475569' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#arep"
              onClick={() => setMobileOpen(false)}
              className="mt-2 btn-glass px-5 py-3 rounded-xl text-sm font-semibold text-white text-center"
              style={{
                background: 'rgba(10,111,190,0.85)',
                border: '1px solid rgba(10,111,190,0.9)',
              }}
            >
              Fes una donació
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
