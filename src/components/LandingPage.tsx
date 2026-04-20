"use client";

import React from "react";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-left">
          <div className="header-label">BRIEFING PREMIUM • R3 CREATIVE</div>
          <h1 className="landing-title">Vamos transformar sua ideia em um projeto estratégico.</h1>
          <p className="landing-subtitle">Leva menos de 3 minutos para entendermos seu projeto e te entregar o melhor caminho.</p>

          <div className="login-options">
            <button className="btn-login" onClick={onStart}>Continuar com Google</button>
            <button className="btn-login" onClick={onStart}>Continuar com Apple</button>
          </div>

          <div className="divider-text">ou, se preferir</div>

          <button className="btn-continue-no-login" onClick={onStart}>Continuar sem login</button>
          <p className="footer-text">Se preferir, você pode preencher tudo sem criar conta.</p>
        </div>

        <div className="landing-right">
          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-title">DE ASSERTIVIDADE INICIAL</div>
            <div className="stat-description">O formulário não apenas pergunta, ele consulta. Essa clareza inicial economiza horas de reunião e direciona a proposta comercial para o fechamento imediato.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
