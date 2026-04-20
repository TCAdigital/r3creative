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
    <div className="form-step active text-center flex flex-col items-center justify-center py-10">
        <div className="success-icon mb-8">✓</div>
        <h2 className="form-step-title mb-4">Briefing Recebido!</h2>
        <p className="form-step-subtitle mb-10 max-w-[500px] mx-auto text-center">Obrigado por compartilhar essas informações. Agora nosso time vai analisar os dados e preparar um plano de ação para você.</p>
        
        <div style={{ marginBottom: "40px", fontSize: "14px", color: emailStatus === 'error' ? "#ff6b6b" : "#999999" }}>
          {emailStatus === 'sending' && (
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
              Enviando dados para processamento...
            </div>
          )}
          {emailStatus === 'sent' && "✅ Uma cópia dos dados foi enviada com sucesso para nossa central segura."}
          {emailStatus === 'error' && "⚠️ Seu briefing foi recebido! Tivemos um problema com a cópia por e-mail, mas os dados estão salvos. Por favor, prossiga para o WhatsApp."}
        </div>

        <div className="success-actions mt-auto md:mt-0">
            <a 
              href={generateWhatsAppMessage()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-success inline-block"
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
  );
};
