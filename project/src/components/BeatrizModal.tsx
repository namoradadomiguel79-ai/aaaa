import React, { useState, useRef } from 'react';
import { Music, ExternalLink } from 'lucide-react';

interface BeatrizModalProps {
  message: string;
  musicUrl: string;
}

export const BeatrizModal: React.FC<BeatrizModalProps> = ({ message, musicUrl }) => {
  const [gameState, setGameState] = useState<'question' | 'completed'>('question');
  const [noButtonStyle, setNoButtonStyle] = useState({ transform: 'translate(0, 0)' });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoClick = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonStyle({ 
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'transform 0.3s ease-out'
    });
  };

  const handleYesClick = () => {
    setGameState('completed');
  };

  const openMusic = () => {
    window.open(musicUrl, '_blank');
  };

  return (
    <div className="text-white space-y-6">
      {/* Mensagem da Beatriz */}
      <div className="text-center space-y-4">
        <pre className="text-xl leading-relaxed whitespace-pre-wrap font-light text-yellow-100" style={{ fontFamily: 'Crimson Text, serif' }}>
          {message}
        </pre>
      </div>

      {/* Ícone da música */}
      <div className="flex justify-center">
        <button
          onClick={openMusic}
          className="flex items-center gap-3 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-400/50 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          <Music size={24} className="text-yellow-400" />
          <span className="text-yellow-100 text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>Kiss Me</span>
          <ExternalLink size={18} className="text-yellow-400" />
        </button>
      </div>

      {/* Brincadeira interativa */}
      <div className="border-t border-yellow-400/20 pt-6">
        {gameState === 'question' ? (
          <div className="text-center space-y-6">
            <h3 className="text-2xl text-yellow-200 font-light" style={{ fontFamily: 'Crimson Text, serif' }}>
              Você é meu escravo submisso?
            </h3>
            <div className="flex justify-center gap-6 relative">
              <button
                ref={noButtonRef}
                onClick={handleNoClick}
                style={noButtonStyle}
                className="bg-blue-600/50 hover:bg-blue-600/70 border border-blue-400/50 rounded-xl px-8 py-4 text-white transition-all duration-200 relative z-10 text-lg" style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Não
              </button>
              <button
                onClick={handleYesClick}
                className="bg-yellow-500/50 hover:bg-yellow-500/70 border border-yellow-400/50 rounded-xl px-8 py-4 text-white transition-all duration-200 text-lg" style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Sim
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-8xl text-yellow-400 animate-bounce">
              :)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};