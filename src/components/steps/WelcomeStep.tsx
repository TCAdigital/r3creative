"use client";

import React from "react";

export const WelcomeStep: React.FC = () => {
  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Bem-vindo ao Briefing R3</h2>
            <p className="form-step-subtitle">Leva menos de 3 minutos para darmos o primeiro passo estratégico.</p>
        </div>

        <p style={{ color: "#999999", fontSize: "14px", lineHeight: 1.6, marginBottom: "30px" }}>
          Você optou por continuar sua jornada. Clique em próximo para iniciarmos as perguntas sobre seu negócio.
        </p>

        <div style={{ flex: 1 }}></div>
    </div>
  );
};
