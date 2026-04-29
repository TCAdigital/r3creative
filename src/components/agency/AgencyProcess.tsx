"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: ".01",
    title: "Diagnóstico",
    desc: "Analisamos sua marca, mercado e competidores para definir a melhor rota de crescimento.",
    highlight: true
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Desenvolvemos o roadmap completo com foco em KPI's de curto e longo prazo.",
    highlight: false
  },
  {
    num: "03",
    title: "Execução",
    desc: "Nosso time de elite implementa as soluções usando stack tecnológica de ponta.",
    highlight: false
  },
  {
    num: "04",
    title: "Escalabilidade",
    desc: "Otimizamos continuamente para garantir que seu crescimento nunca estagne.",
    highlight: false
  }
];

export const AgencyProcess: React.FC = () => {
  return (
    <section className="section-padding bg-bg-2">
      <div className="container text-center">
        <div className="eyebrow center"><i></i> Metodologia</div>
        <h2 className="section-title">
          Helping You Succeed Through<br/>
          <span className="text-accent">Step-by-Step Innovation.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`agency-glass-card text-left flex flex-col justify-between group h-full ${
                step.highlight ? "bg-accent !border-accent" : ""
              }`}
            >
              <div>
                <div className={`text-6xl font-bold mb-8 tracking-tighter ${
                  step.highlight ? "text-bg" : "text-accent"
                }`}>
                  {step.num}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  step.highlight ? "text-bg" : "text-white"
                }`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  step.highlight ? "text-bg/70" : "text-ink-3"
                }`}>
                  {step.desc}
                </p>
              </div>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-full h-1 rounded-full ${
                  step.highlight ? "bg-bg/20" : "bg-accent/20"
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
