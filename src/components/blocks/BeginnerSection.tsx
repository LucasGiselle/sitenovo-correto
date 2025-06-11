import React from 'react';

const BeginnerSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-dark to-dark-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-10">
          E se você ainda não é desse mercado e tem 
          <span className="text-gold"> dúvidas de que ele seja pra você...</span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-dark-lighter p-8 rounded-lg border border-gold/30">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Muitas pessoas começam exatamente como você está agora – com interesse, 
                mas sem experiência prévia. A colorimetria das hennas é uma arte que 
                qualquer pessoa dedicada pode aprender.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                No meu ebook, começo dos fundamentos básicos e vou avançando gradualmente, 
                para que mesmo quem nunca trabalhou com hennas consiga criar misturas 
                perfeitas e resultados profissionais.
              </p>
              <p className="text-lg text-gold font-semibold">
                Você só precisa de vontade de aprender e praticar!
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="border-4 border-gold rounded-lg overflow-hidden">
                  <div className="flex items-center justify-center">
                    <div className="w-1/2 relative">
                      <img 
                        src="https://i.ibb.co/WNgJcRQW/Whats-App-Image-2025-05-29-at-08-26-18.jpg"
                        alt="Antes da aprendizagem" 
                        className="w-full h-60 object-cover object-center"
                      />
                      <div className="absolute top-0 left-0 bg-dark-deeper text-white px-2 py-1">
                        Antes
                      </div>
                    </div>
                    <div className="w-1/2 relative">
                      <img 
                        src="https://i.ibb.co/hx4sm73K/Whats-App-Image-2025-05-29-at-08-26-31.jpg"
                        alt="Depois da aprendizagem" 
                        className="w-full h-60 object-cover object-center"
                      />
                      <div className="absolute top-0 left-0 bg-gold text-dark px-2 py-1">
                        Depois
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 right-4 bg-dark text-gold px-3 py-1 font-bold text-sm rounded">
                  Mesma modelo só que agora dominando técnica + colorimetria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeginnerSection;