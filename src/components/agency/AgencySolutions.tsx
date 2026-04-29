"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Palette, Megaphone, Database, AppWindow } from "lucide-react";

const solutions = [
  {
    num: "01",
    title: "UI/UX Design",
    tags: ["Product Design", "Prototyping", "UX Research"],
    icon: Palette
  },
  {
    num: "02",
    title: "Performance Marketing",
    tags: ["Paid Media", "SEO Strategy", "CRO"],
    icon: TrendingUp
  },
  {
    num: "03",
    title: "Web Development",
    tags: ["Next.js", "Headless CMS", "Architecture"],
    icon: Database
  },
  {
    num: "04",
    title: "App Development",
    tags: ["React Native", "Mobile First", "Social Apps"],
    icon: AppWindow
  }
];

export const AgencySolutions: React.FC = () => {
  return (
    <section id="solucoes" className="section-padding bg-bg-2">
      <div className="container">
        <div className="mb-24">
          <div className="eyebrow"><i></i> Nossas Soluções</div>
          <h2 className="section-title">
            Helping You Succeed Through<br/>
            <span className="text-accent">Creative & Digital Excellence.</span>
          </h2>
        </div>

        <div className="border-t border-white/5">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative border-bottom border-white/5 py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer hover:px-8 transition-all duration-500 overflow-hidden"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-soft to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-12 relative z-10">
                <span className="font-mono text-ink-4 group-hover:text-accent transition-colors duration-300">
                  {sol.num}
                </span>
                <h3 className="text-4xl md:text-6xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {sol.title}
                </h3>
              </div>

              <div className="flex items-center gap-12 relative z-10">
                <div className="hidden xl:flex flex-col gap-1">
                  {sol.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-ink-3 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-16 h-16 rounded-full bg-surface-2 border border-white/5 flex items-center justify-center text-ink-2 group-hover:bg-accent group-hover:text-bg group-hover:-rotate-45 transition-all duration-500">
                  <ArrowUpRight size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="agency-marquee mt-24">
        <div className="agency-marquee-inner">
          {[1,2,3,4].map(i => (
            <React.Fragment key={i}>
              <span>Data-Driven Strategy</span>
              <span className="mx-8 opacity-30">•</span>
              <span>Ultra Scale Performance</span>
              <span className="mx-8 opacity-30">•</span>
              <span>Proprietary AI Systems</span>
              <span className="mx-8 opacity-30">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
