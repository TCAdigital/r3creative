import { BarChart3, PenTool, Layout, Database, ArrowRight } from 'lucide-react';

export default function HomeServices() {
  const services = [
    {
      num: "01",
      icon: <BarChart3 size={32} />,
      title: "Performance & Growth",
      tag: "Tráfego Pago · Growth Marketing",
      items: ["Meta Ads", "Google Ads", "CRO"]
    },
    {
      num: "02",
      icon: <Layout size={32} />,
      title: "Branding & Websites",
      tag: "Estratégia de Marca · Identidade",
      items: ["Naming", "Identidade Visual", "Websites"]
    },
    {
      num: "03",
      icon: <PenTool size={32} />,
      title: "Conteúdo & Criativo",
      tag: "Social Media · Produção Criativa",
      items: ["Social Media", "Copywriting", "Produção"]
    },
    {
      num: "04",
      icon: <Database size={32} />,
      title: "Tecnologia & Dados",
      tag: "Data Analytics · Automação",
      items: ["Data Analytics", "CRM", "Automação"]
    }
  ];

  return (
    <section className="services" id="solucoes">
      <div className="container">
        <h2 className="section-title">
          Soluções Completas para<br/>
          <span className="text-accent">Seu Crescimento</span>
        </h2>

        <div className="service-grid-premium">
          {services.map((service, index) => (
            <div className="service-card-premium" key={index}>
              <div className="service-num">{service.num}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <span className="service-tag-main">{service.tag}</span>
              <ul className="service-tags">
                {service.items.map((item, i) => (
                  <li key={i}>
                    {item}
                    <ArrowRight size={14} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-stack" aria-hidden="true">
        <div className="marquee marquee-1">
          <div className="marquee-flow-text">
            <span>Estratégia de Performance</span><span>•</span>
            <span>Design de Experiência</span><span>•</span>
            <span>Inteligência de Dados</span><span>•</span>
            <span>Crescimento Exponencial</span><span>•</span>
            <span>Estratégia de Performance</span><span>•</span>
            <span>Design de Experiência</span><span>•</span>
            <span>Inteligência de Dados</span><span>•</span>
            <span>Crescimento Exponencial</span><span>•</span>
          </div>
        </div>
        <div className="marquee marquee-2">
          <div className="marquee-flow-text">
            <span>Identidade Visual Elite</span><span>•</span>
            <span>Desenvolvimento Web</span><span>•</span>
            <span>Consultoria Estratégica</span><span>•</span>
            <span>Tecnologia & Inovação</span><span>•</span>
            <span>Identidade Visual Elite</span><span>•</span>
            <span>Desenvolvimento Web</span><span>•</span>
            <span>Consultoria Estratégica</span><span>•</span>
            <span>Tecnologia & Inovação</span><span>•</span>
          </div>
        </div>
      </div>
    </section>
  );
}
