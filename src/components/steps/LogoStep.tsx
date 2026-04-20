"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const LogoStep: React.FC = () => {
  const { data, updateData } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Você já tem uma Logomarca?</h2>
            <p className="form-step-subtitle">Precisamos dos seus arquivos atuais (caso tenha) para analisarmos sua identidade visual.</p>
        </div>

        <div className="form-input-group">
            <label className="form-label">Link para arquivos / Google Drive / Dropbox</label>
            <input 
                type="text" 
                className="form-input" 
                placeholder="Cole o link aqui. (Pode deixar em branco e nos enviar pelo WhatsApp no final)"
                value={data.logoLink || ""}
                onChange={(e) => updateData({ logoLink: e.target.value })}
            />
        </div>

        <p className="form-hint" style={{ marginTop: '20px' }}>
          *Dica: Se você não tiver um link agora, não tem problema. Você poderá enviar os arquivos diretamente no nosso WhatsApp comercial assim que concluirmos o diagnóstico.
        </p>
    </div>
  );
};
