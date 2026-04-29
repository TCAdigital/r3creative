import MainHeader from '@/components/home/MainHeader';
import FloatingCTA from '@/components/home/FloatingCTA';
import HomeHero from '@/components/home/HomeHero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeServices from '@/components/home/HomeServices';
import HomeSpecialties from '@/components/home/HomeSpecialties';
import HomeCases from '@/components/home/HomeCases';
import HomeSteps from '@/components/home/HomeSteps';
import HomeTeam from '@/components/home/HomeTeam';
import HomeFAQ from '@/components/home/HomeFAQ';
import MainFooter from '@/components/MainFooter';
import ScrollAnimations from '@/components/ScrollAnimations';

import '../home.css';
import '../premium-v12.css';

export const metadata = {
  metadataBase: new URL('https://r3creative.com.br'),
  title: 'R3 Creative · Plataforma de Crescimento Orientada por Dados',
  description: 'A R3 Creative é uma plataforma de crescimento especializada em Performance & Growth, Branding, Conteúdo e Tecnologia. Transformamos marcas com design premium e estratégias inteligentes.',
  openGraph: {
    title: 'R3 Creative · Performance & Growth Digital',
    description: 'Transforme sua presença digital com estratégias orientadas por dados e design de alta performance.',
    url: 'https://r3creative.com.br/site',
    siteName: 'R3 Creative',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'R3 Creative Social Preview',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R3 Creative · Performance & Growth Digital',
    description: 'A R3 Creative é uma plataforma de crescimento especializada em Performance & Growth, Branding, Conteúdo e Tecnologia.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <div className="ambient" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grain"></div>
      </div>

      <MainHeader />
      <FloatingCTA />

      <main>
        <HomeHero />
        <HomeAbout />
        <HomeServices />
        <HomeSpecialties />
        <HomeCases />
        <HomeSteps />
        <HomeTeam />
        <HomeFAQ />
        <MainFooter />
      </main>
      
      <ScrollAnimations />
    </>
  );
}
