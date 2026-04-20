"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const ContactStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Como podemos falar com você?</h2>
            <p className="form-step-subtitle">Deixe seus contatos para nossa equipe de especialistas.</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Nome Completo</label>
            <input 
                type="text" 
                className="form-input" 
                placeholder="Ex: João da Silva"
                value={data.contactName || ""}
                onChange={(e) => updateData({ contactName: e.target.value })}
            />
        </div>

        <div className="form-input-group">
            <label className="form-label">E-mail Corporativo</label>
            <input 
                type="email" 
                className="form-input" 
                placeholder="Ex: joao@suaempresa.com.br"
                value={data.contactEmail || ""}
                onChange={(e) => updateData({ contactEmail: e.target.value })}
            />
        </div>

        <div className="form-input-group">
            <label className="form-label">WhatsApp com DDD</label>
            <input 
                type="tel" 
                className="form-input" 
                placeholder="Ex: (11) 99999-9999"
                value={data.contactPhone || ""}
                onChange={(e) => updateData({ contactPhone: e.target.value })}
            />
        </div>
    </div>
  );
};
