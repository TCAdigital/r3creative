export default function HomeFAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">
          Perguntas Frequentes<br/>
          <span className="text-accent">Respostas Rápidas</span>
        </h2>

        <div className="faq-grid">
          <details className="faq-item" open>
            <summary>
              <span className="faq-num">01.</span>
              <span className="faq-q">Quais serviços a R3 Creative oferece?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </summary>
            <div className="faq-a">Oferecemos Performance & Growth, Branding & Posicionamento, Conteúdo & Criativo e Tecnologia & Dados, tudo integrado para escalar resultados.</div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="faq-num">02.</span>
              <span className="faq-q">Como funciona a R3 BEAI?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </summary>
            <div className="faq-a">A R3 BEAI é nossa inteligência artificial proprietária que cruza dados de mercado e comportamento para gerar modelagens de cenários preditivos e decisões estratégicas.</div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="faq-num">03.</span>
              <span className="faq-q">Como vocês abordam um novo projeto?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </summary>
            <div className="faq-a">Começamos por um diagnóstico estratégico profundo. Analisamos dados, entendemos sua operação atual e propomos um plano de ação estruturado antes de iniciar qualquer execução.</div>
          </details>
          <details className="faq-item">
            <summary>
              <span className="faq-num">04.</span>
              <span className="faq-q">A R3 Creative atende empresas fora do Brasil?</span>
              <span className="faq-toggle" aria-hidden="true"></span>
            </summary>
            <div className="faq-a">Sim, possuímos expertise sólida em expansão internacional e posicionamento global de marcas em diversos mercados globais.</div>
          </details>
        </div>
      </div>
    </section>
  );
}
