import React from 'react';
import { Book, Droplet, PaintBucket, Palette, Users, Award, Lightbulb, CheckCircle, List } from 'lucide-react';

const ContentOutline: React.FC = () => {
  const contentItems = [
    {
      icon: <Droplet className="w-6 h-6 text-gold" />,
      title: "Fundamentos da Henna",
      description: "Entenda os tipos e propriedades de hennas disponíveis no mercado"
    },
    {
      icon: <PaintBucket className="w-6 h-6 text-gold" />,
      title: "Misturas Básicas e Avançadas",
      description: "Aprenda desde as combinações fundamentais até misturas complexas para efeitos únicos"
    },
    {
      icon: <Palette className="w-6 h-6 text-gold" />,
      title: "Chega de neutralizar sobrancelhas",
      description: "Nesse ebook abordo marcas e formas que você não vai ficar refém disso"
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Adaptação por Tipo de Pele",
      description: "Como ajustar as misturas para diferentes tonalidades de pele"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-gold" />,
      title: "Criação de Receitas Exclusivas",
      description: "Desenvolva suas próprias fórmulas personalizadas para se destacar no mercado"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-gold" />,
      title: "Resolução de Problemas",
      description: "Soluções práticas para desafios comuns na colorimetria"
    },
    {
      icon: <Book className="w-6 h-6 text-gold" />,
      title: "Guia Visual Completo",
      description: "Referências visuais de cores e resultados para consulta rápida"
    },
    {
      icon: <List className="w-6 h-6 text-gold" />,
      title: "Lista de materiais",
      description: "Lista de todos os materias que eu utilizo no meu dia a dia"
    }
  ];

  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-12">
          O que você irá aprender no <span className="text-gold">meu método?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contentItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-dark-lighter p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tudo isso em um guia completo, passo a passo, com mais de 50 páginas recheadas de 
            conhecimento prático e aplicável imediatamente no seu trabalho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentOutline;