"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

const options = [
  { id: "site", label: "Construir ou reposicionar minha marca" },
  { id: "branding", label: "Criar ou melhorar meu site" },
  { id: "ads", label: "Aumentar minhas vendas (Tráfego Pago)" },
  { id: "social", label: "Gestão de Redes Sociais" },
  { id: "systems", label: "Desenvolvimento de Software / SaaS" },
  { id: "ux", label: "Consultoria Estratégica" },
];

export const CategoryStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();
  const selected = data.needs || [];

  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      updateData({ needs: selected.filter((s) => s !== id) });
    } else {
      updateData({ needs: [...selected, id] });
    }
  };

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">O que você precisa hoje?</h2>
            <p className="form-step-subtitle">Selecione uma ou mais opções para personalizarmos sua experiência.</p>
        </div>

        <div className="form-options-grid">
          {options.map((opt) => (
            <div 
              key={opt.id}
              className={`option-card ${selected.includes(opt.id) ? "selected" : ""}`} 
              onClick={() => toggleOption(opt.id)}
            >
                <div className="option-card-title">{opt.label}</div>
            </div>
          ))}
        </div>
    </div>
  );
};
