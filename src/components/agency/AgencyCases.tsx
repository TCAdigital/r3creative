"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "E-Commerce Growth Platform",
    category: "Branding · Performance",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=80",
    large: true
  },
  {
    title: "Global FinTech Redesign",
    category: "UI/UX · Scalability",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    large: false
  },
  {
    title: "AI-Driven Healthcare App",
    category: "Technology · Data",
    image: "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&w=1200&q=80",
    large: true
  },
  {
    title: "Next-Gen SaaS Identity",
    category: "Branding · Web Design",
    image: "https://images.unsplash.com/photo-1614851099511-773084f6911d?auto=format&fit=crop&w=1200&q=80",
    large: false
  }
];

export const AgencyCases: React.FC = () => {
  return (
    <section id="cases" className="section-padding">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <div className="eyebrow"><i></i> Nossos Projetos</div>
            <h2 className="section-title mb-0">
              Selected Case Studies<br/>
              <span className="text-accent">That Reflect Our Expertise.</span>
            </h2>
          </div>
          <button className="btn-agency btn-agency-outline">
            Ver Todos os Cases
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {cases.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[40px] border border-white/5 bg-surface cursor-pointer ${
                project.large ? "lg:col-span-7" : "lg:col-span-5"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                <div>
                  <span className="font-mono text-accent text-xs uppercase tracking-widest block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
