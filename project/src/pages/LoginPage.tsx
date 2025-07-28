import React, { useState } from 'react';
import { StarField } from '../components/StarField';

interface LoginPageProps {
  onPasswordCorrect: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const correctPassword = 'miguel18'; // Defina a senha desejada

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      onPasswordCorrect();
    } else {
      // Shake animation on wrong password
      const input = document.getElementById('password-input');
      if (input) {
        input.classList.add('animate-bounce');
        setTimeout(() => input.classList.remove('animate-bounce'), 500);
      }
      setPassword('');
    }
  };

  const gameUrls = [
    'https://residentcacapalavras.netlify.app/',
    'https://fodasecccypher.netlify.app/',
    '#' // Terceira URL será adicionada depois
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 flex flex-col items-center justify-center relative overflow-hidden">
      <StarField />
      
      {/* Elegant login container */}
      <div className="z-10 text-center space-y-12 p-8">
        {/* Mystical title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-light text-yellow-400 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            ✦ Portal Cósmico ✦
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            id="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-blue-950/30 backdrop-blur-sm border-2 border-yellow-400/40 rounded-2xl px-8 py-4 text-white text-2xl text-center focus:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/20 transition-all duration-500 placeholder-yellow-200/40 shadow-2xl"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.3em',
              boxShadow: '0 0 30px rgba(248, 214, 19, 0.1), inset 0 0 20px rgba(17, 24, 53, 0.8)'
            }}
            placeholder="• • • • • •"
            autoFocus
          />
        </form>

        {/* Elegant game buttons */}
        <div className="flex justify-center space-x-8 mt-16">
          {gameUrls.map((url, index) => (
            <button
              key={index}
              onClick={() => url !== '#' && window.open(url, '_blank')}
              disabled={url === '#'}
              className={`w-16 h-16 rounded-full border-2 transition-all duration-500 flex items-center justify-center text-2xl relative group ${
                url === '#' 
                  ? 'border-gray-600/50 text-gray-600 cursor-not-allowed' 
                  : 'border-yellow-400/60 text-yellow-300 hover:border-yellow-400 hover:bg-yellow-400/20 hover:scale-110 hover:shadow-2xl'
              }`}
              style={{
                boxShadow: url !== '#' ? '0 0 20px rgba(248, 214, 19, 0.2)' : 'none',
                backdropFilter: 'blur(10px)',
                background: url !== '#' ? 'rgba(17, 24, 53, 0.4)' : 'rgba(75, 85, 99, 0.2)'
              }}
            >
              <span className={url !== '#' ? 'group-hover:animate-pulse' : ''}>
                {index === 0 && '★'}
                {index === 1 && '✦'}
                {index === 2 && '◦'}
              </span>
              {url !== '#' && (
                <div className="absolute inset-0 rounded-full bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced particles overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
        <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '5s' }} />
      </div>
    </div>
  );
};