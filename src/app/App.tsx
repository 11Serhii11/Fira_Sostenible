import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { ArepSection } from "./components/ArepSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ParticipateSection } from "./components/ParticipateSection";
import { Lang, translations } from "../translations";

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

function App() {
  const [lang, setLang] = useState<Lang>("ca");
  const [darkMode, setDarkMode] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "ca" || savedLang === "es" || savedLang === "en") {
      setLang(savedLang);
    }

    const savedDark = localStorage.getItem("darkMode");
    if (savedDark) setDarkMode(JSON.parse(savedDark));
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <div className="relative min-h-screen bg-[linear-gradient(135deg,#fdf2f8_0%,#eff6ff_40%,#ecfeff_100%)] dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_50%,#111827_100%)]">
      <div className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-2xl border-2 border-slate-900 bg-white px-3 py-2 shadow-[6px_6px_0_0_#0f172a] dark:border-blue-300 dark:bg-slate-900 dark:shadow-[6px_6px_0_0_#93c5fd]">
        {languageButtons.map((button) => (
          <button
            key={button.lang}
            onClick={() => setLang(button.lang)}
            className={`h-9 w-9 rounded-full overflow-hidden transition-all hover:scale-110 ${
              lang === button.lang
                ? "ring-2 ring-blue-500 bg-blue-50 dark:bg-gray-800 shadow-md"
                : "bg-white/70 dark:bg-slate-800/70"
            }`}
            aria-label={button.label}
            title={button.label}
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
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 text-lg hover:scale-110 transition-transform shadow-sm"
          aria-label={t.controls.toggleTheme}
          title={t.controls.toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      <main className="px-4 pb-8 md:px-8">
        <Hero content={t.hero} />
        <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <ParticipateSection content={t.participate} />
          </section>
          <section className="lg:col-span-7">
            <AboutSection content={t.about} />
          </section>
        </div>
        <div className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-12">
          <section className="lg:col-span-4">
            <ArepSection content={t.arep} />
          </section>
          <section className="lg:col-span-8">
            <ActivitiesSection content={t.activities} />
          </section>
        </div>
      </main>
      <Footer content={t.footer} />
    </div>
  );
}

export default App;