import Link from 'next/link';

export default function HomeCases() {
  const cases = [
    {
      title: "Performance & Growth",
      result: "+300% LEADS QUALIFICADOS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Branding & Identity",
      result: "+150% BRAND AWARENESS",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Design & Tech",
      result: "INTERFACE DE ALTA CONVERSÃO",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Strategy & BI",
      result: "+200% EFICIÊNCIA DECISÃO",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
    }
  ];

  return (
    <section className="cases" id="cases">
      <div className="container">
        <span className="eyebrow"><i></i> Cases de Sucesso</span>
        <h2 className="section-title">
          Resultados que movem o ponteiro<br/>
          <span className="text-accent">da sua empresa</span>
        </h2>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className="case-card" key={index}>
              <div className="case-image">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async"/>
                <div className="case-overlay"></div>
              </div>
              <div className="case-meta">
                <h3>{item.title}</h3>
                <span className="case-result">{item.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
