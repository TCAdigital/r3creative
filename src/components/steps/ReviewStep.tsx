"use client";

import React from "react";
import { useBriefingStore } from "@/store/useBriefingStore";

export const ReviewStep: React.FC = () => {
  const { data, setStep } = useBriefingStore();

  return (
    <div className="form-step active">
        <div className="form-step-header">
            <h2 className="form-step-title">Resumo do Diagnóstico</h2>
            <p className="form-step-subtitle">Verifique se as principais informações estão corretas antes de deixarmos seus contatos. Você sempre pode voltar para editar.</p>
        </div>

        <div className="review-grid">
            <div className="review-item">
                <div className="review-item-label">Momento do Negócio</div>
                <div className="review-item-value flex justify-between items-center">
                    <span>{data.businessMoment || "Não preenchido"}</span>
                    {!data.businessMoment && (
                        <button onClick={() => setStep(2)} style={{ color: '#00ff99', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}>Preencher</button>
                    )}
                </div>
            </div>
            
            <div className="review-item">
                <div className="review-item-label">Objetivo Principal</div>
                <div className="review-item-value flex justify-between items-center">
                    <span>{data.objective || "Não preenchido"}</span>
                    {!data.objective && (
                        <button onClick={() => setStep(3)} style={{ color: '#00ff99', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}>Preencher</button>
                    )}
                </div>
            </div>

            <div className="review-item">
                <div className="review-item-label">Prazo Esperado</div>
                <div className="review-item-value flex justify-between items-center">
                    <span>{data.deadline || "Não preenchido"}</span>
                    {!data.deadline && (
                        <button onClick={() => setStep(8)} style={{ color: '#00ff99', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}>Preencher</button>
                    )}
                </div>
            </div>

            <div className="review-item">
                <div className="review-item-label">Faixa de Investimento</div>
                <div className="review-item-value flex justify-between items-center">
                    <span>{data.investmentRange || "Não preenchido"}</span>
                    {!data.investmentRange && (
                        <button onClick={() => setStep(9)} style={{ color: '#00ff99', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', fontWeight: 'bold' }}>Preencher</button>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};
