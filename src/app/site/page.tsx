import React from "react";
import { AgencyLegacySite } from "@/components/agency/AgencyLegacySite";
import "../agency.css";

export const metadata = {
  title: "R3 Creative · Soluções Digitais Inteligentes",
  description: "A R3 Creative é uma agência digital full-service especializada em UI/UX Design, Performance e Estratégia de Crescimento.",
};

export default function AgencyPage() {
  return (
    <main>
      <AgencyLegacySite />
    </main>
  );
}
