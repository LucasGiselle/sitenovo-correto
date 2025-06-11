import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-20 bg-dark bg-[url('https://i.ibb.co/TD1dwcW2/HENNA-2.jpg')] bg-cover bg-center bg-blend-overlay backdrop-blur-md relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-gold/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gold/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-gold/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gold/30 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-10 group">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-gold via-yellow-400 to-gold flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
            <BookOpen size={40} className="text-dark group-hover:animate-pulse" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold animate-pulse" />
          </div>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in-up">
          <span className="block transform hover:scale-105 transition-transform duration-300">Colorimetria das Hennas:</span>
          <span className="text-gold">
            Dominando as Cores
          </span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8 animate-pulse"></div>
        
        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Um guia completo para dominar as misturas de henna e criar resultados únicos e personalizados.
        </p>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-8 opacity-20">
          <div className="w-16 h-16 border-2 border-gold rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        </div>
        <div className="absolute bottom-1/4 right-8 opacity-20">
          <div className="w-12 h-12 border-2 border-gold rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;