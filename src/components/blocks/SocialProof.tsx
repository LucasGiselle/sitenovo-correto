import React from 'react';

const SocialProof: React.FC = () => {
  const feedbacks = [
    {
      content: "Melhor investimento que já fiz! A técnica de colorimetria transformou meu trabalho.",
      author: "Ana S.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "As misturas ficam perfeitas! Finalmente acerto a cor ideal para cada cliente.",
      author: "Renata L.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "Meus clientes estão maravilhados com os resultados. Obrigada por compartilhar seu conhecimento!",
      author: "Juliana M.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dark-lighter to-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Mas esse ebook é principalmente pra você que deseja fazer trabalhos reais, reconhecidos e tão incríveis a ponto de receber diariamente comentários como esse aqui:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {feedbacks.map((feedback, index) => (
            <div 
              key={index} 
              className="bg-white text-dark p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={feedback.image} 
                  alt={feedback.author} 
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-gold"
                />
                <span className="font-semibold">{feedback.author}</span>
              </div>
              <p className="text-gray-700 italic">"{feedback.content}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;