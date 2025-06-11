import React from 'react';
import CountdownBanner from './blocks/CountdownBanner';
import Header from './blocks/Header';
import WelcomeVideo from './blocks/WelcomeVideo';
import TargetAudience from './blocks/TargetAudience';
import SocialProof from './blocks/SocialProof';
import ResultsCarousel from './blocks/ResultsCarousel';
import BeginnerSection from './blocks/BeginnerSection';
import MarketData from './blocks/MarketData';
import StudentTestimonials from './blocks/StudentTestimonials';
import OfferSection from './blocks/OfferSection';
import ContentOutline from './blocks/ContentOutline';
import CommunitySection from './blocks/CommunitySection';
import InteractiveGame from './blocks/InteractiveGame';
import AboutCreator from './blocks/AboutCreator';
import RecapSection from './blocks/RecapSection';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <CountdownBanner />
      <Header />
      <WelcomeVideo />
      <TargetAudience />
      <SocialProof />
      <ResultsCarousel />
      <BeginnerSection />
      <MarketData />
      <StudentTestimonials />
      <OfferSection />
      <ContentOutline />
      <CommunitySection />
      <InteractiveGame />
      <AboutCreator />
      <RecapSection />
      <footer className="w-full py-6 bg-dark-deeper text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Colorimetria das Hennas. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;