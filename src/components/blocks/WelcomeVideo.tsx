import React, { useState } from 'react';
import ActionButton from '../ui/ActionButton';
import { Play, Volume2 } from 'lucide-react';

const WelcomeVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    // Fazer scroll suave para a seção final
    const finalSection = document.getElementById('secao-final');
    if (finalSection) {
      finalSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark to-dark-lighter relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-12 animate-fade-in-up">
          Descubra o Poder da <span className="text-gold">Colorimetria das Hennas</span>
        </h2>
        
        <div className="relative group mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 group-hover:border-gold/60 transition-all duration-500">
            <iframe 
              title="vimeo-player" 
              src="https://player.vimeo.com/video/1089241936?h=c7bcc10da1" 
              className="absolute top-0 left-0 w-full h-full transform group-hover:scale-105 transition-transform duration-700"
              frameBorder="0"
              allowFullScreen
              onLoad={() => setIsPlaying(true)}
            ></iframe>
            
            {/* Video overlay effects */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-20 h-20 bg-gold/90 rounded-full flex items-center justify-center animate-pulse">
                  <Play className="w-8 h-8 text-dark ml-1" />
                </div>
              </div>
            )}
            
            {/* Corner decorations */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/70 px-3 py-1 rounded-full">
              <Volume2 className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-gold text-sm font-medium">HD</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block transform hover:scale-105 transition-transform duration-300">
            <button onClick={handleButtonClick}>
              <ActionButton className="uppercase font-bold text-xl px-10 py-5 shadow-2xl hover:shadow-gold/25">
                QUERO SABER MAIS
              </ActionButton>
            </button>
          </div>
          
          {/* Floating call-to-action elements */}
          <div className="mt-8 flex justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="w-2 h-2 bg-gold rounded-full animate-ping"></div>
            <span className="text-gray-300 text-sm">Assista ao vídeo completo</span>
            <div className="w-2 h-2 bg-gold rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeVideo;