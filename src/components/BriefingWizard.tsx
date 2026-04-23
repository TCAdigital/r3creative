"use client";

import React, { useState, useEffect, useRef } from "react";
import { useBriefingStore } from "@/store/useBriefingStore";
import { LandingPage } from "./LandingPage";
import { VideoIntro } from "./VideoIntro";

import { WelcomeStep } from "./steps/WelcomeStep";
import { CategoryStep } from "./steps/CategoryStep";
import { BusinessStep } from "./steps/BusinessStep";
import { ObjectiveStep } from "./steps/ObjectiveStep";
import { AudienceStep } from "./steps/AudienceStep";
import { CompetitorsStep } from "./steps/CompetitorsStep";
import { CreativeStep } from "./steps/CreativeStep";
import { ExpectationStep } from "./steps/ExpectationStep";
import { TimelineStep } from "./steps/TimelineStep";
import { InvestmentStep } from "./steps/InvestmentStep";
import { PainStep } from "./steps/PainStep";
import { LogoStep } from "./steps/LogoStep";
import { ReviewStep } from "./steps/ReviewStep";
import { ContactStep } from "./steps/ContactStep";
import { SuccessStep } from "./steps/SuccessStep";

export const BriefingWizard: React.FC = () => {
  const { currentStep, nextStep, prevStep } = useBriefingStore();
  const [showIntro, setShowIntro] = useState(true);
  const [showLanding, setShowLanding] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // Prevent hydration errors
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Automatic scroll to top when changing steps
  useEffect(() => {
    if (mainRef.current) {
      if (window.innerWidth <= 1024) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentStep]);

  if (!mounted) return null;

  const isFinalStep = currentStep === 14;

  if (showIntro) {
    return <VideoIntro onComplete={() => setShowIntro(false)} />;
  }

  if (showLanding && currentStep === 0) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0: return <WelcomeStep />;
      case 1: return <CategoryStep />;
      case 2: return <BusinessStep />;
      case 3: return <ObjectiveStep />;
      case 4: return <AudienceStep />;
      case 5: return <CompetitorsStep />;
      case 6: return <CreativeStep />;
      case 7: return <ExpectationStep />;
      case 8: return <TimelineStep />;
      case 9: return <InvestmentStep />;
      case 10: return <PainStep />;
      case 11: return <LogoStep />;
      case 12: return <ReviewStep />;
      case 13: return <ContactStep />; 
      case 14: return <SuccessStep />;
      default: return null;
    }
  };

  const getSidebarInfo = () => {
    if (currentStep <= 2) return { badge: "Diagnóstico", title: "Entendendo o Cenário", desc: "A primeira etapa é fundamental para mapearmos seu momento atual e o tamanho do desafio.", checklist: ["Visão clara de negócios", "Alinhamento inicial"] };
    if (currentStep <= 6) return { badge: "Estratégia", title: "Definindo o Alvo", desc: "Precisamos entender quem você quer atingir e contra quem estamos competindo no mercado.", checklist: ["Público-alvo", "Concorrência e Estilo"] };
    if (currentStep <= 11) return { badge: "Escopo", title: "Expectativas e Prazos", desc: "Vamos alinhar o tamanho do projeto, necessidades técnicas e cronograma esperado.", checklist: ["Entregas e Prazos", "Investimento e Dores"] };
    if (currentStep <= 13) return { badge: "Contato", title: "Finalização", desc: "Deixe seus dados para que nossa equipe apresente a melhor solução para o seu caso.", checklist: ["Identificação segura", "Canal de comunicação"] };
    return { badge: "Sucesso", title: "Briefing Concluído", desc: "Obrigado.", checklist: [] };
  };

  const activeSidebarInfo = getSidebarInfo();
  const progress = Math.min(((currentStep + 1) / 14) * 100, 100);

  return (
    <div className="form-page active">
      <div className="form-container">
        
        {/* Sidebar */}
        <div className={isFinalStep ? "form-sidebar success-mode" : "form-sidebar"}>
          <img src="/images/logo.png" alt="R3 Creative" className="sidebar-logo" />
          {!isFinalStep && (
            <div className="sidebar-header">
                <div className="progress-label">
                    <span>Progresso</span>
                    <span>{String(currentStep + 1).padStart(2, '0')}/14</span>
                </div>
                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
          )}

          <div className="sidebar-content">
              <div className="sidebar-badge">{activeSidebarInfo.badge}</div>
              <div className="sidebar-title">{activeSidebarInfo.title}</div>
              <p style={{ fontSize: "13px", color: "#999999", lineHeight: 1.6, marginBottom: "16px" }}>
                {activeSidebarInfo.desc}
              </p>
              {activeSidebarInfo.checklist && activeSidebarInfo.checklist.length > 0 && (
                <ul className="sidebar-checklist">
                  {activeSidebarInfo.checklist.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="form-main" ref={mainRef}>
          {renderStep()}

          {!isFinalStep && (
            <div className="form-footer">
              {currentStep > 0 ? (
                <button className="btn-back" onClick={prevStep}>Voltar</button>
              ) : <div />}
              
              <button className="btn-next" onClick={nextStep}>
                {currentStep === 13 ? "Finalizar Briefing" : "Próximo Passo"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
