"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    name: "Sobre",
    sub: ["Quem Somos", "Posicionamento", "Metodologia R3", "Presença Global", "Cultura & Valores"]
  },
  {
    name: "Soluções",
    sub: ["Performance & Growth", "Branding & Posicionamento", "Conteúdo & Criativo", "Tecnologia & Dados"]
  },
  {
    name: "Especialidades",
    sub: ["R3 BEAI", "BI Político & Estratégico", "Expansão Internacional", "Registro de Marca (INPI)"]
  },
  {
    name: "Cases",
    sub: ["Performance", "Branding", "Internacional", "BI & Dados"]
  },
  {
    name: "Insights",
    sub: ["Artigos", "Tendências", "Estudos de Caso", "Relatórios"]
  }
];

export const AgencyNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <img src="/images/logo.png" alt="R3 Creative" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-primary transition-colors py-2">
                {item.name}
                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                  >
                    {item.sub.map((subItem) => (
                      <Link 
                        key={subItem} 
                        href="#" 
                        className="block px-4 py-3 text-sm text-white/60 hover:text-primary hover:bg-white/5 transition-all"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/" 
            className="btn-primary-agency text-sm"
          >
            Diagnóstico Estratégico
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-50 flex flex-col p-8 pt-24"
          >
            {navItems.map((item) => (
              <div key={item.name} className="mb-6">
                <div className="text-xl font-bold text-primary mb-2">{item.name}</div>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {item.sub.map((sub) => (
                    <Link key={sub} href="#" className="text-white/60 text-base">{sub}</Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="mt-auto">
              <Link 
                href="/" 
                className="btn-primary-agency w-full justify-center text-lg py-4"
              >
                Iniciar Projeto
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
