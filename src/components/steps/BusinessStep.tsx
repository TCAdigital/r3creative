"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const BusinessStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  const moments = [
    "Estou começando do zero",
    "Já tenho um negócio físico e quero ir para o digital",
    "Já tenho um negócio digital e quero profissionalizar",
    "Preciso de um reposicionamento de marca",
  ];

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Conte um pouco sobre seu negócio</h2>
            <p className="form-step-subtitle">Isso nos ajuda a entender seu momento atual.</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">O que sua empresa faz?</label>
            <textarea 
                className="form-textarea" 
                placeholder="Descreva brevemente o que sua empresa vende ou que problema resolve..."
                value={data.businessDescription || ""}
                onChange={(e) => updateData({ businessDescription: e.target.value })}
            ></textarea>
        </div>

        <div className="form-input-group">
            <label className="form-label">Qual o seu momento atual?</label>
            <div className="form-options-grid full-width">
                {moments.map((moment, idx) => (
                    <div 
                        key={idx} 
                        className={`option-card ${data.businessMoment === moment ? "selected" : ""}`} 
                        onClick={() => updateData({ businessMoment: moment })}
                    >
                        <div className="option-card-title">{moment}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
