import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Timeline from "@/components/Timeline";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import Gallery from "@/components/Gallery";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.hash;
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-primary-50 text-primary-800">
      <Header />
      <Hero />
      <Introduction />
      <Timeline />
      <BeforeAfterSection />
      <Gallery />
      <Impact />
      <Footer />
    </div>
  );
}
