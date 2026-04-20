import { BriefingData } from "@/store/useBriefingStore";

export const formatBriefingForEmail = (data: Partial<BriefingData>) => {
  return `
    <h2>Novo Briefing Premium - R3 Creative</h2>
    <hr />
    
    <h3>1. Contato</h3>
    <ul>
      <li><strong>Nome:</strong> ${data.contactName || 'Não informado'}</li>
      <li><strong>E-mail:</strong> ${data.contactEmail || 'Não informado'}</li>
      <li><strong>WhatsApp:</strong> ${data.contactPhone || 'Não informado'}</li>
    </ul>

    <h3>2. Diagnóstico & Cenário</h3>
    <ul>
      <li><strong>Momento do Negócio:</strong> ${data.businessMoment || 'Não informado'}</li>
      <li><strong>Sobre o Negócio:</strong> ${data.businessDescription || 'Não informado'}</li>
      <li><strong>Maior Dor / Desafio:</strong> ${data.mainPain || 'Não informado'}</li>
    </ul>

    <h3>3. Estratégia & Foco</h3>
    <ul>
      <li><strong>Objetivo Principal:</strong> ${data.objective || 'Não informado'}</li>
      <li><strong>Público-alvo Principal:</strong> ${data.targetAudience || 'Não informado'}</li>
      <li><strong>Foco no Público:</strong> ${data.audienceFocus || 'Não informado'}</li>
      <li><strong>Concorrentes / Referências:</strong> ${data.competitors || 'Não informado'}</li>
    </ul>

    <h3>4. Escopo & Necessidades Técnicas</h3>
    <ul>
      <li><strong>O que o projeto precisa:</strong> ${data.needs?.length ? data.needs.join(', ') : 'Não informado'}</li>
      <li><strong>Direção Criativa:</strong> ${data.creativeDirection || 'Não informado'}</li>
      <li><strong>Expectativa do Resultado:</strong> ${data.expectations || 'Não informado'}</li>
      <li><strong>Link do Logo Atual:</strong> ${data.logoLink ? `<a href="${data.logoLink}">${data.logoLink}</a>` : 'Não informado'}</li>
    </ul>

    <h3>5. Prazos & Investimento</h3>
    <ul>
      <li><strong>Prazo Esperado:</strong> ${data.deadline || 'Não informado'}</li>
      <li><strong>Faixa de Investimento:</strong> ${data.investmentRange || 'Não informado'}</li>
    </ul>
    
    <p><small>Enviado via Briefing Digital R3 Creative</small></p>
  `;
};

export const formatBriefingForWhatsApp = (data: Partial<BriefingData>) => {
  const needs = data.needs?.length ? data.needs.join(', ') : 'Não informado';
  
  return `🚀 *NOVO BRIEFING PREMIUM - R3 CREATIVE*

*1. IDENTIFICAÇÃO*
👤 *Nome:* ${data.contactName || '-'}
📧 *E-mail:* ${data.contactEmail || '-'}
📱 *WhatsApp:* ${data.contactPhone || '-'}

*2. CENÁRIO DO NEGÓCIO*
📊 *Momento:* ${data.businessMoment || '-'}
🏢 *Sobre:* ${data.businessDescription || '-'}
🔥 *Maior Dor:* ${data.mainPain || '-'}

*3. ESTRATÉGIA*
🎯 *Objetivo:* ${data.objective || '-'}
👥 *Público:* ${data.targetAudience || '-'}
💡 *Direção Criativa:* ${data.creativeDirection || '-'}

*4. ESCOPO & PRAZOS*
🛠️ *Necessidades:* ${needs}
📅 *Prazo:* ${data.deadline || '-'}
💰 *Investimento:* ${data.investmentRange || '-'}
🔗 *Logo:* ${data.logoLink || 'A enviar'}

---
_Gerado via Briefing Digital R3_`;
};
