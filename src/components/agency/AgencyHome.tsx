"use client";

import React from "react";
import { AgencyNavbar } from "./AgencyNavbar";
import { AgencyHero } from "./AgencyHero";
import { AgencyAbout } from "./AgencyAbout";
import { AgencySolutions } from "./AgencySolutions";
import { AgencyCases } from "./AgencyCases";
import { AgencyProcess } from "./AgencyProcess";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";

export const AgencyHome: React.FC = () => {
  return (
    <div className="bg-bg text-ink selection:bg-accent selection:text-bg">
      <AgencyNavbar />
      
      <main>
        <AgencyHero />
        <AgencyAbout />
        <AgencySolutions />
        <AgencyCases />
        <AgencyProcess />

        {/* Growth / Awards Section (Replacing BEAI with Design style) */}
        <section className="section-padding overflow-hidden">
          <div className="container">
            <div className="text-center mb-20">
              <div className="eyebrow center"><i></i> Excellence</div>
              <h2 className="section-title">
                Innovation for Business<br/>
                <span className="text-accent">Growth with R3 Creative.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-ink-3 text-xl mb-12 leading-relaxed">
                  Reconhecimentos e marcos que validam nossa entrega contínua de qualidade, tecnologia proprietária e excelência em resultados.
                </p>
                <div className="space-y-4">
                  {[
                    { year: "2024-2026", name: "Growth Excellence", tag: "Certified" },
                    { year: "2023-2025", name: "AI Integration", tag: "Innovation" },
                    { year: "2022-2024", name: "Data Protection", tag: "SRE Standard" },
                  ].map((award, i) => (
                    <motion.div
                      key={award.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between py-6 border-b border-white/5 hover:pl-4 transition-all group"
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-xs text-ink-4">{award.year}</span>
                        <span className="text-2xl font-bold group-hover:text-accent transition-colors">{award.name}</span>
                      </div>
                      <span className="px-4 py-1 border border-accent text-accent text-[10px] uppercase font-mono rounded-full">
                        {award.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-[64px] overflow-hidden rotate-3 scale-95 border border-white/10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80" 
                    alt="Innovation" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 bg-accent p-8 rounded-3xl shadow-2xl rotate-[-6deg]">
                  <div className="text-5xl font-black text-bg tracking-tighter">+200%</div>
                  <div className="text-bg/60 text-xs font-bold uppercase tracking-widest">ROI Médio</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-bg-2">
          <div className="container">
            <div className="agency-glass-card p-12 md:p-24 text-center">
              <h2 className="agency-hero-title !text-5xl md:!text-8xl mb-12">
                Ready to <span className="text-accent italic">Scale?</span><br/>
                <span className="text-gradient">Let&apos;s Build it.</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Link href="/" className="btn-agency btn-agency-primary px-12 py-5 text-xl">
                  Diagnóstico Estratégico
                  <ArrowRight size={24} />
                </Link>
                <Link href="https://wa.me/5521993197567" className="btn-agency btn-agency-outline px-12 py-5 text-xl">
                  Falar no WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-24 pb-12 border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16 pb-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-bg font-black">R3</div>
                <span className="text-xl font-bold">creative</span>
              </div>
              <p className="text-ink-3 leading-relaxed mb-10 max-w-sm">
                Acelerando o crescimento de empresas globais através de tecnologia proprietária, inteligência analítica e criatividade disruptiva.
              </p>
              <div className="flex gap-4">
                {[Mail, Phone, Globe].map((Icon, i) => (
                  <Link key={i} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent transition-all">
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6">Empresa</h4>
              <ul className="space-y-4 text-ink-3 text-sm">
                <li><Link href="#" className="hover:text-accent transition-colors">Sobre Nós</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Carreiras</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Cultura</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6">Serviços</h4>
              <ul className="space-y-4 text-ink-3 text-sm">
                <li><Link href="#" className="hover:text-accent transition-colors">UI/UX Design</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Growth Marketing</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Dev Ops</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Web3 Solutions</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-ink-3 text-sm mb-6">Assine para receber insights de performance toda semana.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="bg-surface-2 border border-white/5 rounded-full px-6 py-3 flex-1 text-sm outline-none focus:border-accent"
                />
                <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-bg flex-shrink-0 hover:scale-110 transition-transform">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-ink-4 uppercase tracking-[0.3em] font-bold">
            <div>© 2026 R3 Creative. All rights reserved.</div>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-accent">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
