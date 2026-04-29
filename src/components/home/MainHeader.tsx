'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`} id="siteHeader">
        <div className="container header-inner">
          <Link href="#hero" className="logo" aria-label="R3 Creative - Página inicial">
            {/* 180px: Retornando para um tamanho mais contido e elegante */}
            <Image 
              src="/logo-r3creative.png" 
              alt="R3 Creative" 
              width={180} 
              height={38} 
              className="logo-img" 
              priority 
            />
          </Link>

          <nav className="nav-main" aria-label="Navegação principal">
            <ul>
              <li><Link href="#sobre">Sobre</Link></li>
              <li><Link href="#solucoes">Soluções</Link></li>
              <li><Link href="#especialidades">Especialidades</Link></li>
              <li><Link href="#cases">Cases</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link 
              href="/briefing" 
              className={`btn btn-primary btn-cta ${scrolled ? 'header-btn-hidden' : ''}`}
            >
              Diagnóstico Estratégico
            </Link>

            <div className="header-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu" 
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <ul>
            <li><Link href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
            <li><Link href="#solucoes" onClick={() => setMenuOpen(false)}>Soluções</Link></li>
            <li><Link href="#especialidades" onClick={() => setMenuOpen(false)}>Especialidades</Link></li>
            <li><Link href="#cases" onClick={() => setMenuOpen(false)}>Cases</Link></li>
            <li><Link href="/briefing" className="mobile-cta" onClick={() => setMenuOpen(false)}>Diagnóstico Estratégico →</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}
