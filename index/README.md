# R3 Creative — Landing Page

Cópia 100% fiel do design enviado, com tema escuro e acentos verde-neon.

## 📁 Arquivos

```
site/
├── index.html      → HTML semântico com SEO completo (meta, OG, Twitter Cards, JSON-LD)
├── styles.css      → Design system completo (mobile-first, responsivo, animações)
├── script.js       → Interatividade (menu, reveal, FAQ, form, parallax, tilt)
├── robots.txt      → Instruções para crawlers
└── sitemap.xml     → Mapa do site para indexação
```

## ✅ O que está implementado

### Design fiel à imagem
- Tema escuro (#0a0c0a) com acentos verde-neon (#00ff99)
- Hero com tipografia gigante "Smart Solutions for a Digital World"
- Orbs ambient com blur animado (atmosfera neon)
- Card de fotos com grade overlay (mosaico de equipe)
- Logos de parceiros (Rakuten, Quora, HubSpot, Roku, etc.)
- Stats "25+" com número gigante em verde
- Lista de serviços com setas e tags ao hover
- Marquees rotativos diagonais (verde + outline)
- Grid de cases (E-Commerce, SEO, Brand Redesign)
- Botão circular giratório "Discover More"
- 4 cards de step-by-step (01 destacado verde)
- Grade da equipe com fotos (4 pessoas)
- Lista de prêmios (2018-2024)
- Cards de depoimentos com aspas verdes
- FAQ accordion com numeração
- Formulário de contato com card verde da agência
- Cards de blog/news com data
- Footer completo com newsletter + telefone destacado

### Mobile-first ⭐
- Layout 100% otimizado para celular (testado <380px)
- Menu hambúrguer animado em telas pequenas
- Breakpoints progressivos: 640px (tablet), 1024px (desktop), 1280px (wide)
- Imagens com `loading="lazy"` e `decoding="async"`
- Touch targets ≥ 44px
- Tipografia fluida com `clamp()`

### Interatividade
- ✨ Scroll reveal staggered em todos os blocos
- 🎯 Cards 3D tilt com mouse (desktop)
- 📱 Menu mobile com slide e backdrop-blur
- 🔍 Cards de serviço expandem ao hover (cor, deslocamento, ícone gira)
- ❓ FAQ accordion (abre um, fecha os outros)
- 📜 Marquees infinitos rotacionados
- 💫 Hero com parallax sutil
- 🎬 Botão "Discover More" gira lentamente
- 📨 Form com validação client-side
- 🎨 Header com backdrop-blur ao rolar

### SEO Profissional para indexação rápida no Google
- ✅ Meta tags completas (title, description, keywords)
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URL
- ✅ Hreflang e geo-localização
- ✅ **3 JSON-LD Schema.org**: Organization, WebSite, FAQPage
- ✅ HTML semântico (header, main, section, article, footer)
- ✅ Hierarquia correta de headings (h1 único, h2-h4 estruturados)
- ✅ Alt text descritivo em todas as imagens
- ✅ ARIA labels em todos os elementos interativos
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Performance: preconnect a fontes/imagens, lazy-load
- ✅ `prefers-reduced-motion` respeitado

## 🚀 Como publicar (passos para indexação rápida)

1. Faça upload dos arquivos para seu servidor (raiz do domínio)
2. Substitua `https://www.r3creative.com.br` em `index.html`, `robots.txt` e `sitemap.xml` pelo seu domínio real
3. Crie a imagem `assets/og-cover.jpg` (1200x630px) para preview social
4. Acesse o **Google Search Console** → adicione a propriedade
5. Envie o `sitemap.xml` em "Sitemaps"
6. Use "Inspeção de URL" → "Solicitar indexação" para acelerar
7. Configure o **Google Analytics 4** e o **Bing Webmaster Tools**

## 🎨 Próximos passos sugeridos

Quando quiser, me passe os tópicos extras de movimento/interatividade que mencionou e eu adiciono. Algumas ideias que ficam ainda mais incríveis:

- Cursor customizado seguindo o mouse
- Cards com efeito magnético
- Loader de página inicial
- Transições page-to-page
- WebGL / Three.js para o hero
- Modo claro/escuro toggle
