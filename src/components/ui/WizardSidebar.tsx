"use client";

import React from "react";
import { motion } from "framer-motion";
import { useBriefingStore } from "@/store/useBriefingStore";

export const WizardSidebar: React.FC = () => {
  const currentStep = useBriefingStore((state) => state.currentStep);
  const progress = ((currentStep + 1) / 14) * 100;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10">
        <div className="flex justify-between text-[12px] font-semibold text-[#666666] uppercase tracking-[1px] mb-3">
          <span>Progresso</span>
          <span>{String(currentStep + 1).padStart(2, '0')}/14</span>
        </div>
        <div className="h-1 bg-[#222222] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
            className="h-full bg-primary"
          />
        </div>
      </div>

      <div className="mt-auto pt-[30px] border-t border-border">
        <div className="inline-block bg-[rgba(0,255,153,0.15)] text-primary px-3 py-1.5 rounded-md text-[12px] font-semibold mb-6">
          Diagnóstico
        </div>
        <div className="text-[14px] font-bold text-white mb-4">
          Entendendo o Cenário
        </div>
        <p className="text-[13px] text-text-muted leading-[1.6] mb-4">
          A primeira etapa é fundamental para mapearmos seu momento atual e o tamanho do desafio.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-[13px] text-text-muted">
            <span className="text-primary font-bold">✓</span> Visão clara de negócios
          </li>
          <li className="flex items-center gap-2 text-[13px] text-text-muted">
            <span className="text-primary font-bold">✓</span> Alinhamento inicial
          </li>
        </ul>
      </div>
    </div>
  );
};
