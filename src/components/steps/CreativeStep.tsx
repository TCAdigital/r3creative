"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const CreativeStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Estilo e Direção Criativa</h2>
            <p className="form-step-subtitle">Como as pessoas devem se sentir ao ver sua marca pela primeira vez?</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Descreva o estilo que você busca</label>
            <textarea 
                className="form-textarea" 
                placeholder="Ex: Minimalista, luxuoso, divertido, sério, corporativo..."
                value={data.creativeDirection || ""}
                onChange={(e) => updateData({ creativeDirection: e.target.value })}
            ></textarea>
        </div>
    </div>
  );
};
