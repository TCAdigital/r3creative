"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Globe, Zap } from "lucide-react";
import Link from "next/link";

export const AgencyHero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Decorative Orbs */}
      <div className="ambient">
        <div className="orb orb-1 animate-pulse"></div>
        <div className="orb orb-2 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="grain"></div>
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="agency-hero-title">
                <span className="block overflow-hidden">
                  <motion.span 
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
                  >
                    Smart Solutions
                  </motion.span>
                </span>
                <span className="block overflow-hidden text-accent italic">
                  <motion.span 
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
                  >
                    for a Digital
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span 
                    className="block text-gradient"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
                  >
                    Growth Platform.
                  </motion.span>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-4 pb-8 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                  <Zap size={14} />
                  <span>Web Assessment</span>
                </div>
                <p className="text-ink-3 text-sm leading-relaxed max-w-sm">
                  Auditoria completa do seu produto digital atual com diagnóstico estratégico e roadmap acionável para escala global.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                  <Globe size={14} />
                  <span>Growth Strategy</span>
                </div>
                <p className="text-ink-3 text-sm leading-relaxed max-w-sm">
                  A R3 Creative é uma consultoria full-service que ajuda empresas a se tornarem ícones em seu setor através de dados e performance.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/" className="btn-agency btn-agency-primary px-10 py-5 text-lg">
                  Iniciar Projeto
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Image / Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: "circOut" }}
          className="mt-20 relative"
        >
          <div className="aspect-[21/9] rounded-[48px] overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80" 
              alt="Workspace" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors duration-500 flex items-center justify-center">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-bg shadow-2xl animate-pulse group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={32} />
              </div>
            </div>
          </div>
          
          {/* Floating Badges */}
          <div className="absolute -top-6 -left-6 bg-bg border border-accent/30 px-6 py-3 rounded-2xl shadow-2xl">
            <span className="text-accent font-mono text-sm">★ Award-Winning Agency</span>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-bg border border-accent/30 px-6 py-3 rounded-2xl shadow-2xl">
            <span className="text-accent font-mono text-sm">+25M Gerados para Clientes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
