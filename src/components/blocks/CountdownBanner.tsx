import React, { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

const CountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 horas em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          return 24 * 60 * 60; // Reinicia para 24 horas quando chega ao zero
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: secs.toString().padStart(2, '0')
    };
  };

  const time = formatTime(timeLeft);

  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-4 shadow-lg border-b border-gold/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-gold/20 rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-gold/30 rounded-full animate-ping" style={{ top: '60%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gold/25 rounded-full animate-ping" style={{ top: '40%', left: '60%', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 relative z-10">
        <div className="flex items-center gap-3 animate-pulse">
          <div className="bg-gradient-to-r from-gold to-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
            2º LOTE
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            78% DAS VAGAS PREENCHIDAS
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 animate-spin text-gold" style={{ animationDuration: '3s' }} />
          <span className="font-semibold text-gold">TERMINA EM:</span>
          
          <div className="flex items-center gap-1 bg-gray-800/70 backdrop-blur-sm px-4 py-2 rounded-lg border border-gold/30 shadow-lg">
            <div className="bg-gradient-to-b from-gold to-yellow-600 text-black px-3 py-2 rounded font-bold text-xl min-w-[3rem] text-center transform hover:scale-110 transition-transform shadow-md">
              {time.hours}
            </div>
            <span className="text-gold font-bold text-xl animate-pulse">:</span>
            <div className="bg-gradient-to-b from-gold to-yellow-600 text-black px-3 py-2 rounded font-bold text-xl min-w-[3rem] text-center transform hover:scale-110 transition-transform shadow-md">
              {time.minutes}
            </div>
            <span className="text-gold font-bold text-xl animate-pulse">:</span>
            <div className="bg-gradient-to-b from-gold to-yellow-600 text-black px-3 py-2 rounded font-bold text-xl min-w-[3rem] text-center transform hover:scale-110 transition-transform shadow-md">
              {time.seconds}
            </div>
          </div>
        </div>
        
        <div className="text-sm font-medium text-gold flex items-center gap-2 animate-bounce">
          <Zap className="w-4 h-4" />
          ÚLTIMAS VAGAS DISPONÍVEIS!
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;