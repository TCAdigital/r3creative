"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const TimelineStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  const deadlines = [
    "Urgente (Para ontem)",
    "Normal (Dentro de 1 mês)",
    "Flexível (Apenas sondando valores)",
  ];

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Qual é a sua urgência?</h2>
            <p className="form-step-subtitle">Para quando você precisa que o projeto esteja no ar?</p>
        </div>

        <div className="form-input-group">
            <div className="form-options-grid full-width">
                {deadlines.map((deadline, idx) => (
                    <div 
                        key={idx} 
                        className={`option-card ${data.deadline === deadline ? "selected" : ""}`} 
                        onClick={() => updateData({ deadline })}
                    >
                        <div className="option-card-title">{deadline}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
