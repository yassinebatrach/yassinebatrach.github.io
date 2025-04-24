import { useState } from "react";
import { Link } from "wouter";
import MenuIcon from "@mui/icons-material/Menu";
import TranslateIcon from "@mui/icons-material/Translate";
import { Button, IconButton } from "@mui/material";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  // ⬇️ prendi sia language che setLanguage dal context
  const { language, setLanguage } = useLanguage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-primary-800 text-black shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo / titolo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
          {language === "en" ? "Chernobyl: Before & After" : "Chernobyl: Prima & Dopo"}
          </h1>
          <p className="text-primary-300 text-sm md:text-base">
            Historical Documentation Project
          </p>
        </div>

        {/* NAV desktop */}
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#introduction"
                className="hover:text-accent-400 transition-colors"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="hover:text-accent-400 transition-colors"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#before-after"
                className="hover:text-accent-400 transition-colors"
              >
                Before & After
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-accent-400 transition-colors"
              >
                Gallery
              </a>
            </li>
          </ul>

          {/* Lang‑switch + burger */}
          <div className="flex items-center gap-2">
            <IconButton
              sx={{ color: "black" }}
              onClick={() => {
                setLanguage(language === "en" ? "it" : "en");
                console.log("LANG NOW:", language === "en" ? "it" : "en");
              }}
              aria-label="Switch language"
            >
              <TranslateIcon />
            </IconButton>

            {/* burger solo su mobile */}
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
      <div
        className={`md:hidden bg-primary-700 ${
          isMobileMenuOpen ? "" : "hidden"
        }`}
      >
        <ul className="px-4 py-3 space-y-3">
          {[
            ["#introduction", "Introduction"],
            ["#timeline", "Timeline"],
            ["#before-after", "Before & After"],
            ["#gallery", "Gallery"],
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
