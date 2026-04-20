"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const CompetitorsStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Quem são seus concorrentes?</h2>
            <p className="form-step-subtitle">Saber com quem você compete nos ajuda a criar diferenciais exclusivos.</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Liste até 3 concorrentes diretos ou referências</label>
            <textarea 
                className="form-textarea" 
                placeholder="Ex: Empresa X, Referência Y, Concorrente Z... (Se possível coloque o @ do Instagram)"
                value={data.competitors || ""}
                onChange={(e) => updateData({ competitors: e.target.value })}
            ></textarea>
        </div>
    </div>
  );
};
