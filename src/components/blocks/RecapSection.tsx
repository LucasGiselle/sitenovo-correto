import React from 'react';
import ActionButton from '../ui/ActionButton';
import { FileText, Users, FlaskRound as Flask, Gift, ShieldCheck, CreditCard } from 'lucide-react';

const RecapSection: React.FC = () => {
  const benefits = [
    {
      icon: <FileText className="w-5 h-5 text-gold" />,
      title: "Ebook completo com mais de 50 páginas",
      description: "Conteúdo detalhado com toda a teoria e prática da colorimetria"
    },
    {
      icon: <Users className="w-5 h-5 text-gold" />,
      title: "Acesso ao grupo VIP no WhatsApp",
      description: "Tire dúvidas e compartilhe experiências com outras alunas"
    },
    {
      icon: <Flask className="w-5 h-5 text-gold" />,
      title: "Jogo interativo Laboratório da Henna",
      description: "Pratique suas misturas em ambiente virtual"
    },
    {
      icon: <Gift className="w-5 h-5 text-gold" />,
      title: "Bônus exclusivos",
      description: "Jogos, guia rápido"
    }
  ];

  return (
    <section className="py-16 bg-dark" id="secao-final">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            <span className="text-white">Você receberá tudo isso aqui</span> 👇
          </h2>
          
          <div className="bg-dark-lighter rounded-lg p-8 shadow-xl border border-gold/30 mb-10">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gold">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <div className="max-w-md mx-auto mb-8">
              <img 
                src="https://i.ibb.co/JF2kpZdF/1748546812.png"
                alt="Ebook Colorimetria das Hennas"
                className="w-full h-auto rounded-lg shadow-2xl border border-gold/30"
              />
            </div>
            <p className="text-2xl font-semibold mb-2">
              <span className="text-gray-300">De </span>
              <span className="line-through text-gray-400">R$ 47,00</span>
              <span className="text-gray-300"> por apenas</span>
            </p>
            <p className="text-4xl md:text-5xl font-bold text-gold mb-4">R$ 19,90</p>
            <p className="text-gray-400">Oferta por tempo limitado!</p>
          </div>
          
          <div className="mb-10">
            <button 
              id="botao-compra" 
              onClick={() => {
                window.location.href = 'https://pay.kiwify.com.br/AD4vbqc';
              }}
              className="relative px-8 py-4 
                bg-gradient-to-r from-gold via-yellow-400 to-gold
                hover:from-yellow-400 hover:via-gold hover:to-yellow-400
                text-dark font-bold 
                rounded-xl shadow-2xl
                transition-all duration-300
                transform hover:scale-105 hover:-translate-y-1
                text-lg
                overflow-hidden
                group
                animate-bounce uppercase font-bold text-xl px-10 py-5"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                GARANTIR MEU ACESSO AGORA
              </span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold to-yellow-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>
            
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1 text-gold" />
                Pagamento 100% seguro
              </div>
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-1 text-gold" />
                Acesso imediato
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-deeper rounded-lg p-4 border border-gold/10">
              <p className="text-gray-300 text-sm">
                <span className="text-gold font-semibold">Garantia de 7 dias</span> - Se você não ficar 
                satisfeita com o conteúdo, basta solicitar reembolso dentro de 7 dias e devolveremos 
                100% do seu investimento, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecapSection;