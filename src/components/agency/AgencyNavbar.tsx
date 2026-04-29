"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export const AgencyNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Soluções", href: "#solucoes" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Cases", href: "#cases" },
    { name: "Insights", href: "#insights" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`agency-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-bg group-hover:scale-110 transition-transform duration-500">
            <span className="font-black text-xl">R3</span>
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            creative
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-ink-2 hover:text-accent hover:bg-accent-soft rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="btn-agency btn-agency-primary py-3 px-6 text-sm">
            Iniciar Projeto
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[200] bg-bg flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold">R3 creative</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-agency btn-agency-primary w-full justify-center py-5 text-xl"
              >
                Get Started
                <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
