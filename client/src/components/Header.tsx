import { useState } from "react";
import { Link } from "wouter";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-primary-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Chernobyl: Prima & Dopo</h1>
          <p className="text-primary-300 text-sm md:text-base">Historical Documentation Project</p>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#introduction" className="hover:text-accent-400 transition-colors">Introduzione</a></li>
            <li><a href="#timeline" className="hover:text-accent-400 transition-colors">Timeline</a></li>
            <li><a href="#before-after" className="hover:text-accent-400 transition-colors">Prima & Dopo</a></li>
            <li><a href="#gallery" className="hover:text-accent-400 transition-colors">Galleria</a></li>
          </ul>
          <Button 
            variant="text" 
            sx={{ display: { md: 'none' }, color: 'white' }}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </Button>
        </nav>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden bg-primary-700 ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="px-4 py-3 space-y-3">
          <li>
            <a 
              href="#introduction" 
              className="block hover:text-accent-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Introduzione
            </a>
          </li>
          <li>
            <a 
              href="#timeline" 
              className="block hover:text-accent-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Timeline
            </a>
          </li>
          <li>
            <a 
              href="#before-after" 
              className="block hover:text-accent-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Prima & Dopo
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              className="block hover:text-accent-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galleria
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
