"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const AudienceStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Com quem você deseja falar?</h2>
            <p className="form-step-subtitle">Detalhe o seu público-alvo ou o público que deseja atingir no futuro.</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Descreva seu público-alvo principal</label>
            <textarea 
                className="form-textarea" 
                placeholder="Ex: Profissionais liberais, entre 30 e 45 anos, buscando otimização de tempo..."
                value={data.targetAudience || ""}
                onChange={(e) => updateData({ targetAudience: e.target.value })}
            ></textarea>
        </div>
    </div>
  );
};
