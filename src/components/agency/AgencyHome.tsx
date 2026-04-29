"use client";

import React from "react";
import { AgencyNavbar } from "./AgencyNavbar";
import { AgencyHero } from "./AgencyHero";
import { AgencySolutions } from "./AgencySolutions";
import { AgencyBEAI } from "./AgencyBEAI";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

export const AgencyHome: React.FC = () => {
  return (
    <div className="agency-container">
      <AgencyNavbar />
      
      <main>
        <AgencyHero />
        
        {/* Trusted By / Logos */}
        <div className="py-10 border-y border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-black italic tracking-tighter">CLIENTE_A</span>
            <span className="text-2xl font-black italic tracking-tighter">CLIENTE_B</span>
            <span className="text-2xl font-black italic tracking-tighter">CLIENTE_C</span>
            <span className="text-2xl font-black italic tracking-tighter">CLIENTE_D</span>
            <span className="text-2xl font-black italic tracking-tighter">CLIENTE_E</span>
          </div>
        </div>

        <AgencySolutions />
        
        <AgencyBEAI />

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto px-6">
            <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] -mr-32 -mt-32"></div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-8 leading-tight"
              >
                Pronto para <span className="text-gradient">escalar de verdade?</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-lg mb-12 max-w-2xl mx-auto"
              >
                Deixe de ser apenas uma marca e torne-se uma referência global orientada por dados e performance. O próximo passo começa aqui.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/" className="btn-primary-agency px-12 py-5 text-xl">
                  Diagnóstico Estratégico
                  <ArrowRight size={24} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <img src="/images/logo.png" alt="R3 Creative" className="h-10 mb-8" />
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Acelerando o crescimento de empresas globais através de tecnologia proprietária, inteligência analítica e criatividade disruptiva.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-primary transition-colors border border-white/10">
                <Mail size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-primary transition-colors border border-white/10">
                <Phone size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-primary transition-colors border border-white/10">
                <Globe size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Navegação</h5>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="#" className="hover:text-primary">Sobre</Link></li>
              <li><Link href="#" className="hover:text-primary">Soluções</Link></li>
              <li><Link href="#" className="hover:text-primary">Cases</Link></li>
              <li><Link href="#" className="hover:text-primary">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Contato</h5>
            <ul className="space-y-4 text-white/40 text-sm">
              <li>contato@r3creative.com.br</li>
              <li>+55 21 99319-7567</li>
              <li>Rio de Janeiro, Brasil</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-widest font-bold">
          <div>© 2026 R3 Creative. All rights reserved.</div>
          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
