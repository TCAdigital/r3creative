"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Zap } from "lucide-react";
import Link from "next/link";

export const AgencyHero: React.FC = () => {
  return (
    <section className="relative min-height-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Growth Platform 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            Elevando marcas através de <span className="text-gradient">Dados e Criatividade.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-xl">
            Não somos apenas uma agência. Somos sua plataforma de crescimento orientada por inteligência, estratégia global e performance extrema.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/briefing" className="btn-primary-agency px-8 py-4 text-lg w-full sm:w-auto">
              Iniciar Projeto
              <ArrowRight size={20} />
            </Link>
            <Link href="#solutions" className="px-8 py-4 text-white/80 hover:text-white font-semibold transition-colors flex items-center gap-2">
              Ver Soluções
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl font-bold text-white">+R$ 50M</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Geridos em Ads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Taxa de Retenção</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">+12</div>
              <div className="text-xs text-white/40 uppercase tracking-wider">Países Atendidos</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card p-4 rotate-3 transform-gpu">
             <img 
              src="/images/hero-bg.png" 
              alt="R3 Strategy" 
              className="rounded-xl w-full h-auto shadow-2xl"
            />
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass-card p-6 flex items-center gap-4 z-20"
          >
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
              <Zap size={24} />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">Performance</div>
              <div className="text-lg font-bold">Real-time</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass-card p-6 flex items-center gap-4 z-20"
          >
            <div className="bg-primary/20 p-3 rounded-lg text-primary">
              <BarChart3 size={24} />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">ROI</div>
              <div className="text-lg font-bold">+340% Avg.</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
