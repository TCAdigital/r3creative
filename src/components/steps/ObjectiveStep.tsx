"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const ObjectiveStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  const objectives = [
    "Aumentar o volume de vendas",
    "Melhorar a percepção de valor (cobrar mais caro)",
    "Lançar um novo produto/serviço",
    "Atrair um público mais qualificado",
  ];

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Qual seu principal objetivo com a R3?</h2>
            <p className="form-step-subtitle">Precisamos mirar exatamente no resultado que você espera.</p>
        </div>

        <div className="form-input-group">
            <div className="form-options-grid full-width">
                {objectives.map((obj, idx) => (
                    <div 
                        key={idx} 
                        className={`option-card ${data.objective === obj ? "selected" : ""}`} 
                        onClick={() => updateData({ objective: obj })}
                    >
                        <div className="option-card-title">{obj}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
