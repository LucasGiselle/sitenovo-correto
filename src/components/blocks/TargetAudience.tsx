import React from 'react';
import { GraduationCap, Briefcase, Target, TrendingDown, Palette, Camera } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const profiles = [
    {
      icon: <GraduationCap className="text-gold w-8 h-8" />,
      title: "Iniciante",
      description: "Está começando do zero e quer aprender da forma certa"
    },
    {
      icon: <Briefcase className="text-gold w-8 h-8" />,
      title: "Profissional",
      description: "Já trabalha com sobrancelhas e quer dominar a colorimetria de forma prática"
    },
    {
      icon: <Target className="text-gold w-8 h-8" />,
      title: "Em Busca de Precisão",
      description: "Tem dificuldade em acertar a cor certa da henna em cada cliente"
    },
    {
      icon: <TrendingDown className="text-gold w-8 h-8" />,
      title: "Buscando Melhorias",
      description: "Está perdendo clientes por causa de resultados insatisfatórios"
    },
    {
      icon: <Palette className="text-gold w-8 h-8" />,
      title: "Estudante de Colorimetria",
      description: "Quer entender a colorimetria e dominar as misturas de henna"
    },
    {
      icon: <Camera className="text-gold w-8 h-8" />,
      title: "Marketing Digital",
      description: "Deseja postar resultados perfeitos nas redes e atrair mais clientes através da harmonia que seus resultados terão"
    }
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-gold animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-center mb-16 animate-fade-in-up">
          <span className="text-gold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">Esse ebook é para você</span> que...
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className="group bg-dark-lighter p-8 rounded-2xl border border-gold/20 transition-all duration-500 hover:border-gold/70 hover:shadow-2xl hover:shadow-gold/10 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dark-deeper to-black flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {profile.icon}
                </div>
                <h3 className="font-semibold text-xl text-gold group-hover:text-yellow-400 transition-colors duration-300">{profile.title}</h3>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">{profile.description}</p>
              
              {/* Hover effect decoration */}
              <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;