import Link from 'next/link';

export default function HomeTeam() {
  return (
    <section className="team" id="equipe">
      <div className="container">
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="eyebrow"><i></i> Liderança</span>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Nossa Equipe de<br/>
            <span className="text-accent">Especialistas</span>
          </h2>
        </div>

        <div className="team-grid">
          <article className="team-card">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Diretor de Estratégia" loading="lazy" decoding="async"/>
            <div className="team-info">
              <h3>Diretoria</h3>
              <span>Estratégia & Growth</span>
            </div>
          </article>
          <article className="team-card">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=600&q=80" alt="Diretor Criativo" loading="lazy" decoding="async"/>
            <div className="team-info">
              <h3>Criação</h3>
              <span>Branding & Design</span>
            </div>
          </article>
          <article className="team-card">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" alt="Head of Data" loading="lazy" decoding="async"/>
            <div className="team-info">
              <h3>Dados & Tech</h3>
              <span>Data & Analytics</span>
            </div>
          </article>
          <article className="team-card">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" alt="Head de Conteúdo" loading="lazy" decoding="async"/>
            <div className="team-info">
              <h3>Conteúdo</h3>
              <span>Social & Copywriting</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
