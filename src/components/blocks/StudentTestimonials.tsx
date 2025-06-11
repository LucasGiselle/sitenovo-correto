import React, { useState, useEffect } from 'react';

const StudentTestimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      text: "Eu não tinha experiência nenhuma com hennas, mas consegui abrir meu próprio negócio após dominar as técnicas do ebook!",
      name: "Marina Silva",
      title: "Designer de Sobrancelhas"
    },
    {
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
      text: "As misturas que aprendi nesse material são perfeitas. Nunca mais errei uma coloração!",
      name: "Camila Mendes",
      title: "Esteticista"
    },
    {
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      text: "O método é simples e eficaz. Minhas clientes estão encantadas com os resultados.",
      name: "Ana Paula Fernandes",
      title: "Proprietária de Salão"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-6">
          <span className="text-gray-300">Eu não vou te prometer milagres ou dizer que só com esse eBook sua vida vai mudar.</span>
          <span className="text-gold"> Mas se você aplicar o que está aqui, os resultados podem te surpreender.</span>
        </h2>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="relative overflow-hidden bg-dark-lighter rounded-lg shadow-xl border border-gold/20 p-6 md:p-10"
            style={{ minHeight: '300px' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`
                  absolute top-0 left-0 w-full h-full p-6 md:p-10
                  transition-all duration-700 ease-in-out
                  flex flex-col md:flex-row items-center gap-6
                  ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
              >
                <div className="md:w-1/3 flex justify-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gold"
                  />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <p className="text-lg md:text-xl italic mb-4 text-gray-300">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-gold' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;