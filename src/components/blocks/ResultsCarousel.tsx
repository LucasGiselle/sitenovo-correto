import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ResultsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const results = [
    {
      before: "https://i.ibb.co/93gVFvnF/Whats-App-Image-2025-05-29-at-08-24-14.jpg",
      after: "https://i.ibb.co/r2Xjj5Cd/Whats-App-Image-2025-05-29-at-08-18-31.jpg",
      title: "Transformação Completa",
      description: "Resultado incrível com técnica aperfeiçoada"
    },
    {
      before: "https://i.ibb.co/PG10RPQ3/Whats-App-Image-2025-05-29-at-08-24-17.jpg",
      after: "https://i.ibb.co/zTvBQmg0/Whats-App-Image-2025-05-29-at-08-18-30-1.jpg",
      title: "Definição Perfeita",
      description: "Colorimetria precisa e formato harmonioso"
    },
    {
      before: "https://i.ibb.co/kg1H0VbZ/Whats-App-Image-2025-05-29-at-08-24-10.jpg",
      after: "https://i.ibb.co/zThsZK2F/Whats-App-Image-2025-05-29-at-08-18-30.jpg",
      title: "Coloração Precisa",
      description: "Tom perfeito para o tipo de pele"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % results.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [results.length, isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-gold rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-gold rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight animate-fade-in-up">
            <span className="block mb-2">Agora vem dar uma olhada nos resultados</span>
            <span className="block mb-2">que você também vai conseguir alcançar</span>
            <span className="text-gold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent block">
              após aplicar o meu método
            </span>
          </h2>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-gold fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
            <span className="ml-2 text-gray-300 font-medium text-sm md:text-base">Resultados Comprovados</span>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 rounded-3xl blur-xl"></div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gold/30">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {results.map((result, index) => (
                <div key={index} className="min-w-full">
                  <div className="flex flex-col md:flex-row bg-dark-lighter">
                    <div className="w-full md:w-1/2 relative group overflow-hidden">
                      <img 
                        src={result.before} 
                        alt={`Antes - ${result.title}`}
                        className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg text-sm md:text-base">
                        ANTES
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="w-full md:w-1/2 relative group overflow-hidden">
                      <img 
                        src={result.after} 
                        alt={`Depois - ${result.title}`}
                        className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-gold to-yellow-400 text-dark px-3 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg text-sm md:text-base">
                        DEPOIS
                      </div>
                      <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/5 transition-colors duration-300"></div>
                    </div>
                  </div>
                  <div className="bg-dark-deeper p-4 md:p-6 text-center border-t border-gold/20">
                    <h3 className="text-xl md:text-2xl font-semibold text-gold mb-2">{result.title}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-gradient-to-r from-gold to-yellow-400 text-dark p-2 md:p-3 rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-gradient-to-r from-gold to-yellow-400 text-dark p-2 md:p-3 rounded-full shadow-2xl hover:shadow-gold/25 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gold scale-125 shadow-lg shadow-gold/50' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;