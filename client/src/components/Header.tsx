import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { Button, IconButton } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

const t = {
  en: {
    title: "Chernobyl: Before & After",
    subtitle: "Historical Documentation Project",
    intro: "Introduction",
    timeline: "Timeline",
    beforeAfter: "Before & After",
    gallery: "Gallery",
  },
  it: {
    title: "Chernobyl: Prima & Dopo",
    subtitle: "Progetto di Documentazione Storica",
    intro: "Introduzione",
    timeline: "Cronologia",
    beforeAfter: "Prima & Dopo",
    gallery: "Galleria",
  },
};

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lbl = t[language];
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-primary-800 text-black shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img
            src="/logo.png" // metti il file in public/logo.png
            alt="Chernobyl Logo"
            className="w-12 h-12 rounded-full object-cover" // Tailwind per sistemarlo bello preciso
          />
          
          {/* Titolo + sottotitolo */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{lbl.title}</h1>
            <p className="text-primary-300 text-sm md:text-base">{lbl.subtitle}</p>
          </div>
        </div>

        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#introduction" className="hover:text-accent-400 transition-colors">
                {lbl.intro}
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:text-accent-400 transition-colors">
                {lbl.timeline}
              </a>
            </li>
            <li>
              <a href="#before-after" className="hover:text-accent-400 transition-colors">
                {lbl.beforeAfter}
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-accent-400 transition-colors">
                {lbl.gallery}
              </a>
            </li>
          </ul>

          {/* Lang switch + burger */}
          <div className="flex items-center gap-2">
            <IconButton
              sx={{ color: "black" }}
              onClick={() => setLanguage(language === "en" ? "it" : "en")}
              aria-label="Switch language"
            >
              <TranslateIcon />
            </IconButton>

            {/* burger solo mobile */}
            <Button
              variant="text"
              sx={{ display: { md: "none" }, color: "black" }}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <MenuIcon sx={{ fontSize: 24 }} />
            </Button>
          </div>
        </nav>
      </div>

      {/* NAV mobile */}
      <div className={`md:hidden bg-primary-700 ${isMobileMenuOpen ? "" : "hidden"}`}>
        <ul className="px-4 py-3 space-y-3">
          {[
            ["#introduction", lbl.intro],
            ["#timeline", lbl.timeline],
            ["#before-after", lbl.beforeAfter],
            ["#gallery", lbl.gallery],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="block hover:text-accent-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
