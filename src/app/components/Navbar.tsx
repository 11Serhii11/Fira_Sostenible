import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import logoSrc from "../../assets/images/logo-reciclaje-rosa.png?url";
import { Lang, translations } from "../../translations";

type NavbarProps = {
  darkMode: boolean;
  onToggleTheme: () => void;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
};

const languageButtons: Array<{ lang: Lang; label: string; flagSrc: string }> = [
  { lang: "ca", label: "Catala", flagSrc: "/flags/catalunya.svg" },
  { lang: "es", label: "Espanol", flagSrc: "/flags/espana.svg" },
  { lang: "en", label: "English", flagSrc: "/flags/english.svg" },
];

const fallbackFlagSvg =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="48" viewBox="0 0 64 48" role="img" aria-label="Bandera de Espana">
      <rect width="64" height="48" fill="#AA151B"/>
      <rect y="12" width="64" height="24" fill="#F1BF00"/>
    </svg>
  `);

export function Navbar({ darkMode, onToggleTheme, lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navBg = scrolled
    ? darkMode
      ? "rgba(15, 23, 42, 0.85)"
      : "rgba(240, 244, 248, 0.85)"
    : "transparent";

  const navBorder = scrolled
    ? darkMode
      ? "1px solid rgba(255,255,255,0.06)"
      : "1px solid rgba(0,0,0,0.06)"
    : "1px solid transparent";

  const navShadow = scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none";
  const labels = translations[lang].nav;
  const links = [
    { label: labels.home, href: "#hero" },
    { label: labels.fair, href: "#about" },
    { label: labels.arep, href: "#arep" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          background: navBg,
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          border: navBorder,
          boxShadow: navShadow,
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" className="flex items-center gap-3 group">
              <img
                src={logoSrc}
                alt="RE-VIU"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span
                className="font-bold text-lg tracking-tight transition-colors duration-500"
                style={{ color: darkMode ? "#fff" : "#1e293b" }}
              >
                RE-VIU
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/5"
                  style={{ color: darkMode ? "rgba(255,255,255,0.6)" : "#64748b" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 rounded-full px-2 py-1 bg-white/70 dark:bg-slate-800/70 border border-white/30 dark:border-slate-700">
                {languageButtons.map((button) => (
                  <button
                    key={button.lang}
                    onClick={() => onLangChange(button.lang)}
                    className={`h-7 w-7 rounded-full overflow-hidden transition-transform hover:scale-110 ${
                      lang === button.lang ? "ring-2 ring-blue-500" : ""
                    }`}
                    aria-label={button.label}
                  >
                    <img
                      src={button.flagSrc}
                      alt={button.label}
                      className="h-full w-full object-contain"
                      onError={(event) => {
                        event.currentTarget.src = fallbackFlagSvg;
                      }}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={onToggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                  border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-[#0A6FBE]" />}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                  border: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {mobileOpen ? (
                  <X size={18} style={{ color: darkMode ? "#fff" : "#1e293b" }} />
                ) : (
                  <Menu size={18} style={{ color: darkMode ? "#fff" : "#1e293b" }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed inset-x-0 top-16 z-[99] p-4 md:hidden">
          <div
            className="rounded-2xl p-4 flex flex-col gap-2"
            style={{
              background: darkMode ? "rgba(15,23,42,0.95)" : "rgba(240,244,248,0.95)",
              backdropFilter: "blur(20px)",
              border: darkMode ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium"
                style={{ color: darkMode ? "rgba(255,255,255,0.7)" : "#475569" }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 px-4 pt-2">
              {languageButtons.map((button) => (
                <button
                  key={button.lang}
                  onClick={() => onLangChange(button.lang)}
                  className={`h-7 w-7 rounded-full overflow-hidden ${lang === button.lang ? "ring-2 ring-blue-500" : ""}`}
                  aria-label={button.label}
                >
                  <img
                    src={button.flagSrc}
                    alt={button.label}
                    className="h-full w-full object-contain"
                    onError={(event) => {
                      event.currentTarget.src = fallbackFlagSvg;
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
