import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para escalar com previsibilidade?</h2>
            <p className="cta-subtext">Vamos construir juntos uma operação de performance sustentável.</p>
            
            <div className="cta-contact-list">
              <div className="cta-contact-item">
                <div className="cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <a href="mailto:contato@r3creative.com.br">contato@r3creative.com.br</a>
              </div>
              
              <div className="cta-contact-item">
                <div className="cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <a href="https://wa.me/5521993197567" target="_blank" rel="noopener noreferrer">(21) 99319-7567</a>
              </div>

              <div className="cta-contact-item success-tag">
                <div className="cta-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <span>Agendar reunião estratégica disponível</span>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <Link href="/briefing" className="btn btn-primary btn-large">
              Iniciar Diagnóstico Agora
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
