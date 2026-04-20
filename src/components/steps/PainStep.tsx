"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const PainStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Qual a sua maior dor hoje?</h2>
            <p className="form-step-subtitle">Qual o problema exato que se resolvermos, considerará este projeto um sucesso absoluto?</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Nos conte o gargalo atual da sua empresa</label>
            <textarea 
                className="form-textarea" 
                placeholder="Ex: Não consigo atrair clientes novos, meu site atual é feio e não passa confiança..."
                value={data.mainPain || ""}
                onChange={(e) => updateData({ mainPain: e.target.value })}
            ></textarea>
        </div>
    </div>
  );
};
