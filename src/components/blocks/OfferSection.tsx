import React from 'react';
import ActionButton from '../ui/ActionButton';
import { ShieldCheck, CreditCard, Gift, Clock } from 'lucide-react';

const OfferSection: React.FC = () => {
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
    <section className="py-20 bg-dark-deeper relative overflow-hidden" id="oferta">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gold/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gold/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold/3 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Offer badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-gold via-yellow-400 to-gold text-dark px-8 py-3 rounded-full font-bold text-xl shadow-2xl animate-bounce">
              🔥 OFERTA EXCLUSIVA 🔥
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-dark via-dark-lighter to-dark rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/50 relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-yellow-400 to-gold rounded-3xl blur opacity-20 animate-pulse"></div>
            
            <div className="relative bg-dark rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Product image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src="https://i.ibb.co/JF2kpZdF/1748546812.png"
                    alt="Ebook Colorimetria das Hennas"
                    className="relative w-full max-w-md mx-auto h-auto rounded-2xl shadow-2xl border-2 border-gold/30 transform group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    BESTSELLER
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Gift className="w-4 h-4" />
                    BÔNUS INCLUSOS
                  </div>
                </div>
                
                {/* Offer content */}
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-8 animate-fade-in-up">
                    <span className="text-white block mb-2">Adquira agora por apenas</span>
                  </h2>
                  
                  {/* Price display */}
                  <div className="mb-10">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                      <span className="text-2xl font-medium line-through text-gray-500">R$ 97,00</span>
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        51% OFF
                      </div>
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-gold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent animate-shimmer">
                      R$ 47,00
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-red-400 animate-pulse">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">Oferta por tempo limitado!</span>
                    </div>
                  </div>
                  
                  {/* Benefits list */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span>Acesso imediato após a compra</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span>Grupo VIP no WhatsApp incluído</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span>Bônus exclusivos de valor</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mb-8">
                    <button onClick={handleButtonClick} className="w-full md:w-auto">
                      <ActionButton className="animate-pulse uppercase font-bold text-xl px-12 py-6 shadow-2xl hover:shadow-gold/25 w-full md:w-auto">
                        🚀 VER OFERTA COMPLETA
                      </ActionButton>
                    </button>
                  </div>
                  
                  {/* Security badges */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                      <span>Pagamento 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-blue-500" />
                      <span>Principais cartões aceitos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;