import React, { useState } from 'react';
import { FlaskRound as Flask, Play } from 'lucide-react';

const InteractiveGame: React.FC = () => {
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
              <Flask className="w-8 h-8 text-gold" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-8">
            Pratique com o <span className="text-gold">Laboratório da Henna</span>
          </h2>
          
          <div className="bg-dark-lighter rounded-lg overflow-hidden shadow-xl border border-gold/20 mb-10">
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4 text-gold">Aprenda brincando!</h3>
                  <p className="text-gray-300 mb-4">
                    O Laboratório da Henna é um jogo interativo exclusivo onde você pode 
                    praticar suas misturas em um ambiente virtual antes de aplicá-las em clientes reais.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Teste combinações sem desperdiçar produto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Visualize resultados em diferentes tons de pele</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">✓</span>
                      <span>Fixe o conhecimento com desafios práticos</span>
                    </li>
                  </ul>
                  
                  <button 
                    onClick={() => setShowDemo(!showDemo)}
                    className="flex items-center gap-2 bg-gold/20 hover:bg-gold/30 text-gold py-2 px-4 rounded transition-colors"
                  >
                    <Play size={16} />
                    <span>{showDemo ? 'Esconder' : 'Ver'} demonstração</span>
                  </button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-dark-deeper rounded-lg overflow-hidden shadow-lg border border-gold/10 h-full">
                    {showDemo ? (
                      <img 
                        src="https://i.ibb.co/B5c26zSN/lab-henna.png" 
                        alt="Laboratório da Henna Demo"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center p-6">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4">
                            <Play className="w-8 h-8 text-gold" />
                          </div>
                          <p className="text-gray-400">Clique em "Ver demonstração" para visualizar o jogo</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-300">
            Uma forma divertida e eficaz de memorizar as misturas e aprimorar suas habilidades!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGame;