import React, { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { ArepSection } from "./components/ArepSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ParticipateSection } from "./components/ParticipateSection";
import { Lang, translations } from "../translations";

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
    <div className="relative min-h-screen noise-overlay bg-[#f0f4f8] dark:bg-[#0f172a]">
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
        lang={lang}
        onLangChange={setLang}
      />

      <main className="pb-8">
        <Hero content={t.hero} />
        <div className="px-4 md:px-8">
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
        </div>
      </main>
      <Footer content={t.footer} />
    </div>
  );
}

export default App;