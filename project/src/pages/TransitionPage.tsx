import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface TransitionPageProps {
  onComplete: () => void;
}

export const TransitionPage: React.FC<TransitionPageProps> = ({ onComplete }) => {
  const [showText, setShowText] = useState(false);
  const [showAge, setShowAge] = useState(false);
  const [currentAge, setCurrentAge] = useState(17);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      // Wait a bit, then show "Feliz Aniversário"
      setTimeout(() => setShowText(true), 500);
      
      // Show initial age
      setTimeout(() => setShowAge(true), 1500);
      
      // Transform age from 17 to 18
      setTimeout(() => setCurrentAge(18), 2500);
      
      // Trigger confetti
      setTimeout(() => {
        setShowConfetti(true);
        
        // Multiple confetti bursts
        const colors = ['#f8d613', '#fbfcfc', '#0248c1'];
        
        // First burst
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: colors
        });
        
        // Second burst (delayed)
        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: 0.3, y: 0.7 },
            colors: colors
          });
        }, 300);
        
        // Third burst (delayed)
        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: 0.7, y: 0.7 },
            colors: colors
          });
        }, 600);
        
      }, 3000);
      
      // Redirect to main page
      setTimeout(onComplete, 5000);
    };

    sequence();
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 flex items-center justify-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Feliz Aniversário */}
        <div className={`mb-8 transition-all duration-1000 ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-light text-yellow-400 animate-pulse" style={{ fontFamily: 'Playfair Display, serif' }}>
            Feliz Aniversário
          </h1>
        </div>

        {/* Age transformation */}
        <div className={`transition-all duration-1000 ${showAge ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="text-9xl md:text-[12rem] font-light text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span 
              className={`inline-block transition-all duration-1000 ${
                currentAge === 18 ? 'text-yellow-400 animate-bounce' : ''
              }`}
              style={{
                transform: currentAge === 18 ? 'scale(1.2)' : 'scale(1)',
                textShadow: currentAge === 18 ? '0 0 30px #f8d613' : 'none'
              }}
            >
              {currentAge}
            </span>
          </div>
        </div>

        {/* Loading indicator */}
        <div className={`mt-12 transition-opacity duration-500 ${showConfetti ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};