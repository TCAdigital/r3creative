"use client";

import React, { useEffect } from "react";

export const AgencyLegacySite: React.FC = () => {
  useEffect(() => {
    // ---------- Header scroll effect ----------
    const header = document.getElementById('siteHeader');
    const onScroll = () => {
      if (!header) return;
      const y = window.scrollY;
      if (y > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ---------- Mobile menu toggle ----------
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    const handleMenu = () => {
      if (!mobileNav || !menuToggle) return;
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
      mobileNav.setAttribute('aria-hidden', (!isOpen).toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    menuToggle?.addEventListener('click', handleMenu);

    // Close mobile nav when clicking a link
    mobileNav?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (!mobileNav || !menuToggle) return;
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

    const revealTargets = [
      '.section-title', '.eyebrow', '.hero-headline', '.hero-meta-item',
      '.feat-card', '.service-row', '.case-card', '.step-card',
      '.team-card', '.testi-card', '.faq-item', '.blog-card',
      '.about-stat', '.about-card-photo', '.award-list li'
    ];

    revealTargets.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.setAttribute('data-reveal', '');
        (el as HTMLElement).style.transitionDelay = `${Math.min(i * 60, 400)}ms`;
        revealObserver.observe(el);
      });
    });

    // ---------- FAQ ----------
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      item.addEventListener('toggle', () => {
        if ((item as HTMLDetailsElement).open) {
          faqItems.forEach(other => {
            if (other !== item) (other as HTMLDetailsElement).open = false;
          });
        }
      });
    });

    // ---------- Smooth anchor scroll ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#' || !href || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });

    // ---------- Year in footer ----------
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    return () => {
      window.removeEventListener('scroll', onScroll);
      menuToggle?.removeEventListener('click', handleMenu);
    };
  }, []);

  return (
    <div className="agency-legacy-wrap">
      {/* Decorative ambient orbs */}
      <div className="ambient" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grain"></div>
      </div>

      {/* ===================== HEADER ===================== */}
      <header className="site-header" id="siteHeader">
        <div className="container header-inner">
          <a href="#hero" className="logo" aria-label="R3 Creative - Página inicial">
            <span className="logo-mark">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M16 2L29.86 9.5V22.5L16 30L2.14 22.5V9.5L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                <circle cx="16" cy="16" r="4" fill="currentColor"/>
              </svg>
            </span>
            <span className="logo-text">R3 creative</span>
          </a>

          <nav className="nav-main" aria-label="Navegação principal">
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#cases">Cases</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </nav>

          <a href="/" className="btn btn-primary btn-cta">Get Started</a>

          <button className="menu-toggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="mobileNav">
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="mobile-nav" id="mobileNav" aria-hidden="true">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cases">Cases</a></li>
            <li><a href="#equipe">Equipe</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="/" className="mobile-cta">Get Started →</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* ===================== HERO ===================== */}
        <section className="hero" id="hero">
          <div className="container">
            <div className="hero-side hero-side-left" aria-hidden="true">
              <span className="rotating-text">SCROLL · TO · EXPLORE · </span>
            </div>

            <div className="hero-grid">
              <div className="hero-headline">
                <h1>
                  <span className="line">Smart Solutions</span>
                  <span className="line">for a <span className="italic">Digital</span></span>
                  <span className="line"><span className="hl-pill">World</span></span>
                </h1>
                <a href="#servicos" className="play-circle" aria-label="Veja nossos serviços">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              <div className="hero-meta">
                <div className="hero-meta-item">
                  <h3>Web Assessment</h3>
                  <p>Auditoria completa do seu produto digital atual com diagnóstico estratégico e roadmap acionável.</p>
                </div>
                <div className="hero-meta-item">
                  <h3>Virtualization</h3>
                  <p>A R3 Creative é uma agência full-service de consultoria e desenvolvimento que ajuda empresas a se tornarem ícones em seu setor.</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-photo">
              <div className="photo-frame">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80" alt="Equipe colaborando em sessão de trabalho criativo" loading="lazy" />
                <div className="photo-overlay-grid" aria-hidden="true"></div>
              </div>
              <span className="badge-corner badge-tl">★ Award-Winning</span>
              <span className="badge-corner badge-tr">+25M Gerados</span>
            </div>

            {/* Logos */}
            <div className="logos-strip">
              <p className="logos-label">Parcerias com marcas líderes globais</p>
              <div className="logos-row" aria-label="Logos de parceiros">
                <span className="brand-logo">Rakuten</span>
                <span className="brand-logo">CR<i>•</i></span>
                <span className="brand-logo">Quora</span>
                <span className="brand-logo">HubSpot</span>
                <span className="brand-logo">Roku</span>
              </div>
            </div>
          </div>

          <div className="hero-side hero-side-right" aria-hidden="true">
            <span className="vert-text">R3 Creative · Digital Studio · 2026</span>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section className="about" id="sobre">
          <div className="container">
            <span className="eyebrow"><i></i> Sobre Nós</span>
            <h2 className="section-title">
              We build smart digital systems<br/>
              and user-first experiences <span className="text-accent">for<br/>brands ready to grow</span>
            </h2>

            <div className="about-grid">
              <div className="about-card-photo">
                <img src="https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=900&q=80" alt="Material gráfico criativo" loading="lazy" />
              </div>

              <div className="about-stat">
                <div className="big-number">25<span>+</span></div>
                <p className="stat-desc">Mais de 25 milhões em faturamento gerado a clientes parceiros através de:</p>
                <ul className="stat-list">
                  <li><span className="dot"></span> Powering Change Through</li>
                  <li><span className="dot"></span> R3 Creative é uma agência full-service</li>
                  <li><span className="dot"></span> Garantindo o melhor encaixe</li>
                </ul>
              </div>

              <div className="about-features">
                <article className="feat-card">
                  <div className="feat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 11-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h4>Atualizações Regulares</h4>
                  <p>Comunicação contínua com relatórios claros, transparentes e acionáveis em cada sprint.</p>
                </article>
                <article className="feat-card">
                  <div className="feat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
                  </div>
                  <h4>Segurança Ativa</h4>
                  <p>Patches críticos aplicados continuamente com monitoramento 24/7 da infraestrutura.</p>
                </article>
                <a href="/" className="btn btn-primary btn-pill">
                  Descobrir Mais
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section className="services" id="servicos">
          <div className="container">
            <div className="services-head">
              <h2 className="section-title center">
                Helping You Succeed Through<br/>
                <span className="text-accent">Creative & Digital Services</span>
              </h2>
            </div>

            <div className="service-list">
              <article className="service-row">
                <div className="service-num">01</div>
                <div className="service-info">
                  <h3>UI/UX Design</h3>
                  <span className="service-tag">Branding · Development</span>
                </div>
                <ul className="service-tags">
                  <li>UI / UX Design</li>
                  <li>Prototyping</li>
                  <li>Development</li>
                </ul>
                <a href="/" className="service-arrow" aria-label="Saber mais sobre UI UX Design">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </article>

              <article className="service-row">
                <div className="service-num">02</div>
                <div className="service-info">
                  <h3>Brand Strategy</h3>
                  <span className="service-tag">Branding · Development</span>
                </div>
                <ul className="service-tags">
                  <li>Strategy</li>
                  <li>Prototyping</li>
                  <li>Development</li>
                </ul>
                <a href="/" className="service-arrow" aria-label="Saber mais sobre Brand Strategy">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </article>

              <article className="service-row">
                <div className="service-num">03</div>
                <div className="service-info">
                  <h3>Web Development</h3>
                  <span className="service-tag">Branding · Development</span>
                </div>
                <ul className="service-tags">
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>Performance</li>
                </ul>
                <a href="/" className="service-arrow" aria-label="Saber mais sobre Web Development">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </article>

              <article className="service-row">
                <div className="service-num">04</div>
                <div className="service-info">
                  <h3>App Development</h3>
                  <span className="service-tag">Branding · Development</span>
                </div>
                <ul className="service-tags">
                  <li>iOS / Android</li>
                  <li>Prototyping</li>
                  <li>Development</li>
                </ul>
                <a href="/" className="service-arrow accent" aria-label="Saber mais sobre App Development">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </article>
            </div>
          </div>

          {/* Marquee tags */}
          <div className="marquee-stack" aria-hidden="true">
            <div className="marquee-track">
              <span>Performance Marketing</span><span>•</span>
              <span>Ultra-Wide Scaling</span><span>•</span>
              <span>AI Integration</span><span>•</span>
              <span>Performance Marketing</span><span>•</span>
              <span>Ultra-Wide Scaling</span><span>•</span>
              <span>AI Integration</span><span>•</span>
            </div>
          </div>
        </section>

        {/* ===================== CASES ===================== */}
        <section className="cases" id="cases">
          <div className="container">
            <h2 className="section-title">
              Selected Case Studies<br/>
              That <span className="text-accent">Reflect Our<br/>Expertise</span>
            </h2>

            <div className="case-grid">
              <article className="case-card large">
                <div className="case-image">
                  <img src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80" alt="E-commerce Growth Platform" loading="lazy" />
                </div>
                <div className="case-meta">
                  <h3>E-Commerce Growth Platform</h3>
                  <span>BRANDING · PERFORMANCE</span>
                </div>
              </article>

              <article className="case-card">
                <div className="case-image">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80" alt="Local Business SEO Campaign" loading="lazy" />
                </div>
                <div className="case-meta">
                  <h3>Local Business SEO Campaign</h3>
                  <span>SCALABILITY · UX</span>
                </div>
              </article>
            </div>

            <a href="/" className="btn btn-primary btn-floating-circle">
              <span>Discover<br/>More</span>
            </a>
          </div>
        </section>

        {/* ===================== STEP BY STEP ===================== */}
        <section className="steps">
          <div className="container">
            <span className="eyebrow center"><i></i> Processo</span>
            <h2 className="section-title center">
              Helping You Succeed Through<br/>
              <span className="text-accent">Step-by-Step Innovation</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <article className="step-card highlight">
                <div className="step-num">.01</div>
                <h3>Diagnóstico</h3>
                <p>Analisamos sua marca e mercado para definir a melhor rota de crescimento estratégico.</p>
              </article>
              <article className="step-card">
                <div className="step-num">02</div>
                <h3>Estratégia</h3>
                <p>Desenvolvemos o roadmap completo com foco em KPI's de curto e longo prazo.</p>
              </article>
              <article className="step-card">
                <div className="step-num">03</div>
                <h3>Execução</h3>
                <p>Nosso time de elite implementa as soluções usando stack tecnológica de ponta.</p>
              </article>
              <article className="step-card">
                <div className="step-num">04</div>
                <h3>Escala</h3>
                <p>Otimizamos continuamente para garantir que seu crescimento nunca estagne.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== TEAM ===================== */}
        <section className="team" id="equipe">
          <div className="container">
            <div className="team-head">
              <div>
                <span className="eyebrow"><i></i> Nosso Time</span>
                <h2 className="section-title">
                  Meet Our Experienced<br/>
                  <span className="text-accent">Team People</span>
                </h2>
              </div>
              <a href="/" className="btn btn-primary btn-pill">
                Descobrir Mais
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <article className="team-card">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="David Smith - CEO" loading="lazy"/>
                <div className="team-info">
                  <h3>David Smith</h3>
                  <span>CEO & Founder</span>
                </div>
              </article>
              <article className="team-card">
                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80" alt="Marcus Lee - Creative Director" loading="lazy"/>
                <div className="team-info">
                  <h3>Marcus Lee</h3>
                  <span>Creative Director</span>
                </div>
              </article>
              <article className="team-card">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" alt="Sarah Johnson - Head of Strategy" loading="lazy"/>
                <div className="team-info">
                  <h3>Sarah Johnson</h3>
                  <span>Head of Strategy</span>
                </div>
              </article>
              <article className="team-card">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Lucas Brown - Lead Developer" loading="lazy"/>
                <div className="team-info">
                  <h3>Lucas Brown</h3>
                  <span>Lead Developer</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== GROWTH ===================== */}
        <section className="growth">
          <div className="container text-center">
            <span className="eyebrow center"><i></i> Reconhecimento</span>
            <h2 className="section-title center">
              Innovation for Business<br/>
              <span className="text-accent">Growth with R3 Creative</span>
            </h2>
            <p className="max-w-2xl mx-auto text-ink-3 mb-16 text-lg">Reconhecimentos que validam nossa entrega contínua de qualidade e excelência.</p>

            <ul className="award-list text-left border-t border-white/5">
              {[
                { year: "2024-2026", name: "Growth Excellence", tag: "Certified" },
                { year: "2023-2025", name: "AI Innovation", tag: "Winner" },
                { year: "2022-2024", name: "Data Strategy", tag: "Trusted" },
              ].map((award, i) => (
                <li key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-b border-white/5 hover:bg-accent-soft transition-all cursor-default group">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-ink-4 block mb-1">{award.year}</span>
                    <span className="text-2xl font-bold group-hover:text-accent transition-colors">{award.name}</span>
                  </div>
                  <div className="md:text-right self-center">
                    <span className="px-4 py-1 border border-accent text-accent text-[10px] uppercase font-mono rounded-full">{award.tag}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className="testimonials">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <h2 className="section-title mb-0">
                What Our Happy<br/>
                clients <span className="text-accent">say about us</span>
              </h2>
              <div className="flex items-center gap-4 bg-surface border border-white/5 p-4 rounded-full">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-bg" alt=""/>
                  ))}
                </div>
                <div>
                  <strong className="block text-sm">Worldwide Brands</strong>
                  <span className="text-[10px] text-ink-3 uppercase font-bold tracking-widest">& Customers</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3].map(i => (
                <article key={i} className="testi-card p-10 bg-surface border border-white/5 rounded-[40px] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
                  <div className="text-6xl text-accent font-serif leading-none mb-6">"</div>
                  <p className="text-ink-2 text-lg leading-relaxed mb-8">
                    "Trabalhar com a R3 Creative transformou nossa presença digital. A entrega foi impecável e os resultados superaram nossas expectativas iniciais."
                  </p>
                  <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-14 h-14 rounded-full" alt=""/>
                    <div>
                      <strong className="block text-base text-white">Cliente Parceiro</strong>
                      <span className="text-xs text-ink-4 uppercase tracking-widest font-mono">CEO @ Company</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section className="faq">
          <div className="container">
            <h2 className="section-title center">
              Have Questions in Your<br/>
              Mind? <span className="text-accent">Get the Answers Now</span>
            </h2>

            <div className="max-w-4xl mx-auto mt-20 space-y-4">
              {[
                { q: "Quais serviços vocês oferecem?", a: "Oferecemos UI/UX Design, Branding, Estratégia de Crescimento e Desenvolvimento de Software sob medida." },
                { q: "Como funciona o processo?", a: "Trabalhamos em sprints ágeis com foco total em ROI e experiência do usuário, garantindo transparência total." },
                { q: "Vocês atendem startups?", a: "Sim, temos squads específicos focados em MVPs e tração rápida para startups de tecnologia." }
              ].map((faq, i) => (
                <details key={i} className="faq-item group bg-surface border border-white/5 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 open:border-accent">
                  <summary className="flex items-center justify-between p-8 list-none font-bold text-xl group-open:text-accent transition-colors">
                    <span>{faq.q}</span>
                    <span className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center group-open:bg-accent group-open:text-bg transition-all group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-8 pb-8 text-ink-3 text-base leading-relaxed animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== BLOG ===================== */}
        <section className="blog" id="blog">
          <div className="container">
            <h2 className="section-title center">
              Check Out Latest News<br/>
              <span className="text-accent">Update & Articles</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
              {[1,2,3].map(i => (
                <article key={i} className="blog-card group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden rounded-[40px] border border-white/5">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1552664730-d307ca884978' : i === 2 ? '1559136555-9303baea8ebd' : '1551434678-e076c223a692'}?auto=format&fit=crop&w=900&q=80`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt=""/>
                  </div>
                  <div className="py-8 px-2">
                    <span className="font-mono text-xs text-accent uppercase tracking-[0.2em]">Tecnologia · 2026</span>
                    <h3 className="text-2xl font-bold mt-4 group-hover:text-accent transition-colors leading-tight">Future of Digital Transformation in 2026</h3>
                    <a href="#" className="inline-flex items-center gap-3 mt-6 text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:text-accent transition-all">
                      Read More <span className="text-2xl">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===================== FOOTER ===================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a href="#hero" className="logo">
              <span className="logo-mark">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16 2L29.86 9.5V22.5L16 30L2.14 22.5V9.5L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  <circle cx="16" cy="16" r="4" fill="currentColor"/>
                </svg>
              </span>
              <span className="logo-text">R3 creative</span>
            </a>
            <a href="tel:+5521993197567" className="footer-phone">+55 (21) 99319-7567</a>
          </div>

          <div className="footer-grid">
            <div className="footer-col footer-cta-col">
              <h3>Let's Talk<br/>Work <span className="text-accent">Together</span></h3>
              <p>Receba inspirações e novidades direto na sua caixa de entrada.</p>
              <div className="newsletter">
                <input type="email" placeholder="seu@email.com" aria-label="Email para newsletter"/>
                <button type="button" aria-label="Inscrever na newsletter">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            <div className="footer-col">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#blog">Nosso Blog</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Nossas Soluções</h4>
              <ul>
                <li><a href="#servicos">Web Development</a></li>
                <li><a href="#servicos">Web Design</a></li>
                <li><a href="#servicos">Growth Strategy</a></li>
                <li><a href="#servicos">Performance</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© <span id="year"></span> R3 Creative. Todos os direitos reservados.</p>
            <ul>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
