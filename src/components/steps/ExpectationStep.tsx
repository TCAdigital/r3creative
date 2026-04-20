"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const ExpectationStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Detalhe as Entregas Esperadas</h2>
            <p className="form-step-subtitle">O que exatamente você espera que nossa equipe desenvolva?</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Expectativas de Projeto</label>
            <textarea 
                className="form-textarea" 
                placeholder="Ex: Preciso de uma Landing Page com 5 seções focado em conversão e uma identidade visual básica..."
                value={data.expectations || ""}
                onChange={(e) => updateData({ expectations: e.target.value })}
            ></textarea>
        </div>
    </div>
  );
};
