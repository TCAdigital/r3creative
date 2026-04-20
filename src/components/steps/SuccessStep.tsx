"use client";

import React, { useEffect, useState } from "react";
import { useBriefingStore } from "@/store/useBriefingStore";
import { formatBriefingForWhatsApp } from "@/utils/formatBriefing";

export const SuccessStep: React.FC = () => {
  const { data } = useBriefingStore();
  const [emailStatus, setEmailStatus] = useState<'sending' | 'sent' | 'error'>('sending');
  const [hasSent, setHasSent] = useState(false);

  useEffect(() => {
    // Only send once
    if (hasSent) return;
    
    const sendBriefing = async () => {
      try {
        const response = await fetch('/api/send-briefing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        
        if (response.ok) {
          setEmailStatus('sent');
        } else {
          setEmailStatus('error');
        }
      } catch (error) {
        console.error("Error sending briefing:", error);
        setEmailStatus('error');
      }
    };

    sendBriefing();
    setHasSent(true);
  }, [data, hasSent]);

  const generateWhatsAppMessage = () => {
    const text = formatBriefingForWhatsApp(data);
    const encodedText = encodeURIComponent(text);
    return `https://wa.me/5511913435895?text=${encodedText}`;
  };

  return (
    <div className="success-section active">
        <div className="success-content">
            <div className="success-icon">✓</div>
            <h2 className="success-title">Briefing Recebido!</h2>
            <p className="success-subtitle">Obrigado por compartilhar essas informações. Agora nosso time vai analisar os dados e preparar um plano de ação para você.</p>
            
            <div style={{ marginBottom: "30px", fontSize: "14px", color: emailStatus === 'error' ? "#ff6b6b" : "#999999" }}>
              {emailStatus === 'sending' && "Enviando dados do briefing para a agência segura..."}
              {emailStatus === 'sent' && "✅ Uma cópia dos dados foi enviada com sucesso para nossa central segura."}
              {emailStatus === 'error' && "⚠️ Houve um problema ao disparar o e-mail automático, mas seu briefing está salvo. Por favor, avise-nos no WhatsApp."}
            </div>

            <div className="success-actions">
                <a 
                  href={generateWhatsAppMessage()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-success"
                >
                  Falar no WhatsApp
                </a>
                <button 
                  className="btn-success-secondary" 
                  onClick={() => window.location.reload()}
                >
                  Voltar ao Início
                </button>
            </div>
        </div>
    </div>
  );
};
