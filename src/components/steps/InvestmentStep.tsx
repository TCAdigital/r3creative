"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const InvestmentStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  const ranges = [
    "Até R$ 2.000 (Apenas essencial)",
    "R$ 2.000 a R$ 5.000 (Otimizado)",
    "R$ 5.000 a R$ 10.000 (Profissional)",
    "Acima de R$ 10.000 (Premium/Personalizado)",
  ];

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Expectativa de Investimento</h2>
            <p className="form-step-subtitle">Isso nos ajuda a ser precisos. Não ofereceremos algo fora do seu orçamento, mas também não entregaremos algo básico se você procura premium.</p>
        </div>

        <div className="form-input-group">
            <div className="form-options-grid full-width">
                {ranges.map((range, idx) => (
                    <div 
                        key={idx} 
                        className={`option-card ${data.investmentRange === range ? "selected" : ""}`} 
                        onClick={() => updateData({ investmentRange: range })}
                    >
                        <div className="option-card-title">{range}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
