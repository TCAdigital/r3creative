export default function HomeSteps() {
  const steps = [
    {
      num: ".01",
      title: "Diagnóstico Inicial",
      desc: "Realizamos uma imersão profunda para entender sua marca, mercado e os verdadeiros gargalos do seu crescimento atual."
    },
    {
      num: ".02",
      title: "Estratégia sob Medida",
      desc: "Nossa inteligência em dados aliada ao time criativo desenha um plano de ação tático, com KPIs e metas definidas."
    },
    {
      num: ".03",
      title: "Execução Ágil",
      desc: "Implementamos a estratégia através de sprints rápidos, testando e otimizando campanhas e interfaces em tempo real."
    },
    {
      num: ".04",
      title: "Escala & Crescimento",
      desc: "Com os dados validados, aceleramos os investimentos para escalar seus resultados de forma sólida e previsível."
    }
  ];

  return (
    <section className="steps">
      <div className="container">
        <span className="eyebrow"><i></i> O Processo</span>
        <h2 className="section-title">
          Sua Jornada de Sucesso<br/>
          <span className="text-accent">Passo a Passo</span>
        </h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index}>
              <article className="step-card active-step">
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
