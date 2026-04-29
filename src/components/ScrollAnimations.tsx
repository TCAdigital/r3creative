'use client';
import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);

    // Grab elements to animate
    const targets = document.querySelectorAll('.animate-on-scroll, .section-title, .about-grid > div, .service-row, .specialty-card, .case-card, .step-card, .team-card, .faq-item');
    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
