/* =========================================
   R3 Creative · Interactivity Layer
   ========================================= */

(() => {
  'use strict';

  // ---------- Header scroll effect ----------
  const header = document.getElementById('siteHeader');
  let lastScroll = 0;

  const onScroll = () => {
    const y = window.scrollY;
    if (y > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Mobile menu toggle ----------
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav when clicking a link
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });

  // ---------- Scroll reveal animations ----------
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  // Apply reveal to common content blocks
  const revealTargets = [
    '.section-title',
    '.eyebrow',
    '.hero-headline',
    '.hero-meta-item',
    '.feat-card',
    '.service-row',
    '.case-card',
    '.step-card',
    '.team-card',
    '.testi-card',
    '.faq-item',
    '.blog-card',
    '.about-stat',
    '.about-card-photo',
    '.award-list li'
  ];

  revealTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.setAttribute('data-reveal', '');
      el.style.transitionDelay = `${Math.min(i * 60, 400)}ms`;
      revealObserver.observe(el);
    });
  });

  // ---------- FAQ - close others when opening one ----------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // ---------- Smooth anchor scroll with header offset ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Contact form handler ----------
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('fullName');
    const email = formData.get('email');

    // Basic validation
    if (!name || !email) {
      formStatus.textContent = 'Por favor, preencha nome e email.';
      formStatus.style.color = '#ff6b6b';
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formStatus.textContent = 'Email inválido.';
      formStatus.style.color = '#ff6b6b';
      return;
    }

    // Simulated success — substitua por fetch real ao seu backend
    formStatus.style.color = 'var(--accent)';
    formStatus.textContent = '✓ Mensagem enviada! Retornaremos em até 24h.';
    form.reset();

    setTimeout(() => { formStatus.textContent = ''; }, 6000);
  });

  // ---------- Year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Subtle parallax on hero photo ----------
  const heroPhoto = document.querySelector('.photo-frame img');
  if (heroPhoto && window.matchMedia('(min-width: 1024px)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const factor = Math.min(y * 0.05, 30);
          heroPhoto.style.transform = `translateY(${factor}px) scale(1.05)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---------- Cursor-driven tilt on featured cards (desktop) ----------
  if (window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) {
    document.querySelectorAll('.case-card, .step-card, .blog-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ---------- Active nav link on scroll ----------
  const navLinks = document.querySelectorAll('.nav-main a');
  const sections = ['hero', 'sobre', 'servicos', 'cases', 'blog']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach(s => navObserver.observe(s));

})();
