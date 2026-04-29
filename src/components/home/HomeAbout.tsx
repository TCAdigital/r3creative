import Link from 'next/link';

export default function HomeAbout() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <span className="eyebrow"><i></i> Sobre Nós</span>
        <h2 className="section-title">
          Somos uma plataforma de crescimento<br/>
          orientada por dados, criatividade e<br/>
          <span className="text-accent">inteligência artificial</span>
        </h2>

        <div className="about-grid">
          <div className="about-card-photo">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80" 
              alt="Equipe da R3 Creative trabalhando em estratégias de crescimento" 
              loading="lazy" 
              decoding="async"
            />
          </div>

          <div className="about-stat">
            <div className="big-number">R3<span>BEAI</span></div>
            <p className="stat-desc">Nossa inteligência artificial proprietária que transforma dados em decisões estratégicas:</p>
            <ul className="stat-list">
              <li><span className="dot"></span> Modelagem de cenários preditivos</li>
              <li><span className="dot"></span> Análise de inteligência de mercado</li>
              <li><span className="dot"></span> Otimização de performance em tempo real</li>
            </ul>
          </div>

          <div className="about-features">
            <article className="feat-card">
              <div className="feat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 11-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h4>Metodologia R3</h4>
              <p>Abordagem consultiva que combina dados, criatividade e tecnologia para resultados mensuráveis.</p>
            </article>
            <article className="feat-card">
              <div className="feat-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
              </div>
              <h4>Presença Global</h4>
              <p>Operações internacionais com expertise em expansão de mercado e posicionamento global.</p>
            </article>
            <Link href="/briefing" className="btn btn-primary btn-pill">
              Conheça Nossa Metodologia
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
                <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
