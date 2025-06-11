import React from 'react';
import { MessageCircle } from 'lucide-react';

const CommunitySection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark-lighter to-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-dark-deeper rounded-lg overflow-hidden shadow-xl">
          <div className="bg-gold text-dark py-2 text-center font-bold text-lg">
            COMUNIDADE EXCLUSIVA
          </div>
          
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-gold" />
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-semibold text-center mb-6">
              <span className="text-gold">Você não estará sozinha!</span>
            </h2>
            
            <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
              Ao adquirir o ebook, você também ganha acesso ao nosso grupo VIP exclusivo no 
              WhatsApp, onde você poderá tirar dúvidas diretamente comigo e com outras alunas.
            </p>
            
            <div className="bg-dark rounded-lg p-4 mb-8 border border-gold/30">
              <div className="flex items-center border-b border-gray-700 pb-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-dark font-bold">
                  C
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-white">Comunidade Colorimetria das Hennas</p>
                  <p className="text-xs text-gray-400">você + 47 participantes</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex">
                  <div className="bg-dark-lighter rounded-lg py-2 px-3 max-w-xs">
                    <p className="text-sm text-gray-300">Pessoal, consegui o tom perfeito usando a mistura que aprendi no ebook! 😍</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-gold/20 rounded-lg py-2 px-3 max-w-xs">
                    <p className="text-sm text-gold">Maravilhoso! Compartilha a foto do resultado com a gente!</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-dark-lighter rounded-lg py-2 px-3 max-w-xs">
                    <p className="text-sm text-gray-300">Alguém pode me ajudar com a mistura para pele oleosa?</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <div className="bg-gold/20 rounded-lg py-2 px-3 max-w-xs">
                    <p className="text-sm text-gold">Claro!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-400 text-sm">
              Um espaço exclusivo para networking, compartilhamento de resultados e crescimento conjunto!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;