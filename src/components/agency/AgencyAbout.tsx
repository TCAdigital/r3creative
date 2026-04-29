"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";

export const AgencyAbout: React.FC = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container">
        <div className="eyebrow"><i></i> Sobre a R3</div>
        <h2 className="section-title">
          We build smart digital systems<br/>
          and user-first experiences <span className="text-accent">for<br/>brands ready to grow.</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-8 mt-16">
          {/* Main Photo */}
          <div className="lg:col-span-4 h-full">
            <div className="rounded-[32px] overflow-hidden border border-white/5 h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=900&q=80" 
                alt="Creative Process" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-4 agency-glass-card">
            <div className="text-[12rem] font-bold text-accent leading-none tracking-tighter mb-8">
              25<span className="text-[6rem]">+</span>
            </div>
            <p className="text-ink-3 text-lg mb-8 max-w-[280px]">
              Mais de 25 milhões em faturamento gerado para nossos parceiros globais através de:
            </p>
            <ul className="space-y-4">
              {["Powering Global Scaling", "Inteligência de Dados", "Performance Disruptiva"].map(item => (
                <li key={item} className="flex items-center gap-3 text-ink-2 font-medium">
                  <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_var(--accent-glow)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="agency-glass-card group flex-1">
              <div className="w-16 h-16 rounded-2xl bg-accent-soft border border-accent flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <RefreshCw size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3">Relatórios Contínuos</h4>
              <p className="text-ink-3 text-sm leading-relaxed">
                Comunicação contínua com relatórios claros, transparentes e acionáveis em cada sprint de desenvolvimento.
              </p>
            </div>

            <div className="agency-glass-card group flex-1">
              <div className="w-16 h-16 rounded-2xl bg-accent-soft border border-accent flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3">Segurança Máxima</h4>
              <p className="text-ink-3 text-sm leading-relaxed">
                Patches críticos e segurança em camadas aplicados continuamente com monitoramento 24/7 da infraestrutura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
