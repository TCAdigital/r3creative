'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece quando o usuário rola mais de 100px
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link 
      href="/briefing" 
      className={`floating-cta ${visible ? 'visible' : 'hidden'}`} 
      aria-label="Diagnóstico Estratégico"
    >
      <span>Diagnóstico Estratégico</span>
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Link>
  );
}
