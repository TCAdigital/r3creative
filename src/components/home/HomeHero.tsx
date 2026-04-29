import Link from 'next/link';

export default function HomeHero() {
  // Lista atualizada com as novas marcas
  const brands = [
    "TCA Digital", "Unifique", "Biolab Global", "Bar Bohemia", "Major Fabiana", "ECAJ", "Martim", "Hi-Tech", "Azucon"
  ];

  return (
    <section className="hero-clean" id="hero">
      {/* Vídeo de Background 4K */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="hero-video"
      >
        <source src="/3249672-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Efeitos de Luzes Verdes por cima do vídeo */}
      <div className="hero-ambient-effects">
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
      </div>

      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-clean-grid">
          <div className="hero-clean-content animate-on-scroll">
            <span className="eyebrow" style={{ color: 'var(--accent)', opacity: 1, fontWeight: '700' }}>
              R3 Creative Agency
            </span>
            <h1 style={{ position: 'relative', zIndex: 10 }}>Estratégia Digital, Design e Performance de Alta Conversão</h1>
            <p className="hero-clean-subtext" style={{ position: 'relative', zIndex: 10 }}>
              Somos uma agência full-service especializada em transformar a presença digital da sua marca. Unimos design excepcional, tecnologia e estratégias de growth marketing para acelerar o seu crescimento.
            </p>
            <div className="hero-clean-actions" style={{ position: 'relative', zIndex: 10, display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/briefing" className="btn btn-primary">
                Diagnóstico Estratégico
                <svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <a href="#solucoes" className="btn btn-outline" style={{ color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '0.875rem 2rem', borderRadius: '99px' }}>Nossas Soluções</a>
            </div>
          </div>
        </div>
      </div>

      <div className="clients-strip-clean">
        <p className="clients-label">Marcas que confiam na R3CREATIVE</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {brands.map((brand, i) => (
              <span key={i} className="client-logo">{brand}</span>
            ))}
            {/* Duplicando apenas para o loop mobile */}
            {brands.map((brand, i) => (
              <span key={`dup-${i}`} className="client-logo mobile-only">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
