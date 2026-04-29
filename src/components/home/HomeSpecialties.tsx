export default function HomeSpecialties() {
  return (
    <section className="specialties" id="especialidades">
      <div className="container">
        <span className="eyebrow"><i></i> Nossos Diferenciais</span>
        <h2 className="section-title">
          Especialidades que nos<br/>
          <span className="text-accent">diferenciam no mercado</span>
        </h2>

        <div className="specialties-grid">
          <article className="specialty-card">
            <div className="specialty-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>R3 BEAI</h3>
            <p>Nossa inteligência artificial proprietária para modelagem de cenários e decisões estratégicas.</p>
            <ul>
              <li>Inteligência de Dados</li>
              <li>Modelagem de Cenários</li>
              <li>Aplicações Estratégicas</li>
            </ul>
          </article>

          <article className="specialty-card">
            <div className="specialty-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>BI Político & Estratégico</h3>
            <p>Análise estratégica de cenários políticos e eleitorais com foco em inteligência de campanha.</p>
            <ul>
              <li>Análise de Eleitorado</li>
              <li>Inteligência de Campanha</li>
              <li>Segmentação de Público</li>
            </ul>
          </article>

          <article className="specialty-card">
            <div className="specialty-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Expansão Internacional</h3>
            <p>Estratégias de posicionamento global e operação internacional para marcas que querem crescer.</p>
            <ul>
              <li>Posicionamento Global</li>
              <li>Estratégias de Mercado</li>
              <li>Operação Internacional</li>
            </ul>
          </article>

          <article className="specialty-card">
            <div className="specialty-icon">
              <svg viewBox="0 0 24 24" fill="none"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Registro de Marca (INPI)</h3>
            <p>Proteção completa da propriedade intelectual e gestão de marcas no Brasil.</p>
            <ul>
              <li>Proteção de Marca</li>
              <li>Processo de Registro</li>
              <li>Gestão de Propriedade Intelectual</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
