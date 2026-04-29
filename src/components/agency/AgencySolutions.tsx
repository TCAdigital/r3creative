"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Palette, Megaphone, Database, CheckCircle2, LucideIcon } from "lucide-react";

interface Solution {
  title: string;
  Icon: LucideIcon;
  desc: string;
  items: string[];
}

const solutions: Solution[] = [
  {
    title: "Performance & Growth",
    Icon: TrendingUp,
    desc: "Tráfego Pago (Meta, Google, TikTok), Growth Marketing, Funil de Vendas e CRO (Otimização de Conversão).",
    items: ["Estratégia de Aquisição", "Escalabilidade de ROI", "Data-driven decisions"]
  },
  {
    title: "Branding & Posicionamento",
    Icon: Palette,
    desc: "Estratégia de Marca, Naming, Identidade Visual e Branding Digital focado em percepção de valor.",
    items: ["Identidade Visual", "Naming Estratégico", "Brand Voice"]
  },
  {
    title: "Conteúdo & Criativo",
    Icon: Megaphone,
    desc: "Social Media, Produção Criativa e Copywriting Estratégico para engajar e converter.",
    items: ["Produção de Vídeo", "Copywriting de Alto Impacto", "Gestão de Comunidades"]
  },
  {
    title: "Tecnologia & Dados",
    Icon: Database,
    desc: "Data Analytics, Automação, CRM e Integrações complexas para otimizar sua operação.",
    items: ["Inteligência de Dados", "Automação de Marketing", "Integração CRM"]
  }
];

export const AgencySolutions: React.FC = () => {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            Nossas Soluções
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            O coração do seu <span className="text-gradient">crescimento.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <sol.Icon size={32} className="text-primary" />
                </div>
                <div className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  0{idx + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{sol.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                {sol.desc}
              </p>

              <ul className="space-y-3">
                {sol.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
