"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Activity, Globe2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const specialties = [
  {
    title: "R3 BEAI",
    tag: "Produto Proprietário",
    desc: "Inteligência de Dados e Modelagem de Cenários para decisões preditivas.",
    icon: <BrainCircuit size={40} className="text-primary" />
  },
  {
    title: "BI Político",
    tag: "Estratégico",
    desc: "Análise de Eleitorado e Inteligência de Campanha de alto nível.",
    icon: <Activity size={40} className="text-primary" />
  },
  {
    title: "Expansão Global",
    tag: "Internacional",
    desc: "Estratégias de mercado e operação internacional para marcas brasileiras.",
    icon: <Globe2 size={40} className="text-primary" />
  },
  {
    title: "Registro de Marca",
    tag: "Proteção",
    desc: "Gestão completa de Propriedade Intelectual e proteção no INPI.",
    icon: <ShieldCheck size={40} className="text-primary" />
  }
];

export const AgencyBEAI: React.FC = () => {
  return (
    <section className="section-padding bg-black/40 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
            <img 
              src="/images/beai-viz.png" 
              alt="BEAI Intelligence" 
              className="relative z-10 rounded-3xl border border-white/10 shadow-2xl"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4"
            >
              Diferenciais Competitivos
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-8"
            >
              Tecnologia de <span className="text-gradient">última geração</span> ao seu favor.
            </motion.h2>
            
            <div className="space-y-8 mt-12">
              {specialties.map((spec, idx) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 bg-white/5 p-4 rounded-2xl group-hover:bg-primary/10 transition-colors">
                    {spec.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-xl font-bold text-white">{spec.title}</h4>
                      <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase">{spec.tag}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                      {spec.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <Link href="/briefing" className="btn-primary-agency">
                Conhecer Especialidades
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
