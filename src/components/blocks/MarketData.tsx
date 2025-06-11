import React from 'react';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const MarketData: React.FC = () => {
  const marketStats = [
    {
      icon: <TrendingUp className="w-10 h-10 text-gold" />,
      title: "Crescimento anual de 17%",
      description: "O mercado de design de sobrancelhas cresceu mesmo durante períodos de crise econômica"
    },
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      title: "Mais de 500 mil profissionais",
      description: "O Brasil tem meio milhão de profissionais atuando no setor de sobrancelhas"
    },
    {
      icon: <DollarSign className="w-10 h-10 text-gold" />,
      title: "Faturamento de R$7 bilhões",
      description: "O mercado de beleza focado em sobrancelhas movimenta bilhões anualmente"
    }
  ];

  return (
    <section className="py-16 bg-white text-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12 text-dark">
          O mercado de design de sobrancelhas no Brasil
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {marketStats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-gold transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{stat.title}</h3>
              <p className="text-gray-600 text-center">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">
            As técnicas naturais como a henna estão em alta
          </h3>
          <p className="text-gray-600 mb-4">
            Segundo pesquisas do setor, 78% dos consumidores preferem técnicas de embelezamento 
            com produtos naturais e menos invasivos, colocando a henna no topo das preferências.
          </p>
          <div className="flex justify-center">
            <div className="h-4 w-full bg-gray-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold" 
                style={{ width: '78%' }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span>0%</span>
            <span className="text-gold font-bold">78% preferem técnicas naturais</span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketData;