import React from 'react';

const AboutCreator: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark to-dark-deeper">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12">
            <span className="text-gold">Sobre</span> a Criadora
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-gold">
                  <img 
                    src="https://i.ibb.co/vCwZqGQb/Whats-App-Image-2025-05-26-at-15-49-57.jpg"
                    alt="Giselle Roberto" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gold text-dark py-1 px-6 rounded-full text-sm font-bold">
                  DESIGNER DE SOBRANCELHAS
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-gold text-center md:text-left">
                Olá, sou a Giselle Roberto!
              </h3>
              
              <p className="text-gray-300 mb-4">
                Desde cedo, Giselle sonhava em transformar vidas através da beleza. Com apenas 14 anos, 
                iniciou sua jornada repleta de paixão e determinação. O espaço era simples — um pequeno 
                canto de seu quarto, com uma penteadeira que se tornou seu primeiro "estúdio". Foi ali 
                que tudo começou.
              </p>
              
              <p className="text-gray-300 mb-4">
                Mesmo com recursos limitados, ela nunca desistiu. A cada cliente, aperfeiçoava suas 
                técnicas e construía uma reputação sólida. Com o passar dos anos, seu talento e dedicação 
                a levaram a abrir um estúdio em um dos maiores prédios comerciais da cidade.
              </p>
              
              <p className="text-gold font-semibold">
                Minha missão é democratizar o conhecimento da colorimetria das hennas e ajudar 
                você a atingir resultados perfeitos desde o primeiro dia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;