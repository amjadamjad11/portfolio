'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        clearProps: "all"
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'contact', 'booking'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Meeting', href: '#booking' },
  ];

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition-opacity hover:opacity-95"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-500 to-slate-300 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(96,165,250,0.5)] ring-2 ring-white/20 group-hover:scale-110 transition-transform duration-300">
              {DEVELOPER_PROFILE.shortName.charAt(0)}
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">
              {DEVELOPER_PROFILE.shortName.toUpperCase()}
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase tracking-widest font-bold transition-all duration-300 relative py-2 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-blue-600/80 hover:bg-blue-500 rounded-none border border-blue-400/50 hover:border-blue-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)] transition-all duration-300 active:translate-y-1 backdrop-blur-sm"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-blue-400 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-black/90 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-lg uppercase tracking-widest font-black transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-blue-500/10 text-blue-400 border-l-4 border-blue-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white bg-blue-600 shadow-[0_0_20px_rgba(96,165,250,0.4)]"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

