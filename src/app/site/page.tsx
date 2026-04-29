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
import '../premium.css';

export const metadata = {
  title: 'R3 Creative · Plataforma de Crescimento Orientada por Dados',
  description: 'A R3 Creative é uma plataforma de crescimento especializada em Performance & Growth, Branding, Conteúdo e Tecnologia.',
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
