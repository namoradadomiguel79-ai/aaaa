import React from 'react';
import { StarField } from '../components/StarField';
import { Constellation } from '../components/Constellation';

export const ConstellationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
      <StarField />
      
      {/* Elegant title repositioned to avoid star collision */}
      <div className="absolute top-8 left-8 z-10 text-left max-w-md">
        <h1 className="text-4xl md:text-5xl font-light text-yellow-400 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Constelação de Amizade
        </h1>
        <div className="w-24 h-px bg-gradient-to-r from-yellow-400 to-transparent mb-6"></div>
        <p className="text-yellow-200/80 text-lg font-light leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
          Clique nas estrelas para descobrir mensagens especiais
        </p>
        <div className="mt-6 text-yellow-300/60 text-sm italic" style={{ fontFamily: 'Crimson Text, serif' }}>
          "Todas as estrelas brilham para aqueles que sonham"
        </div>
      </div>

      {/* Constellation */}
      <div className="pt-8">
        <Constellation />
      </div>

      {/* Enhanced cosmic effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-40 h-40 bg-yellow-400/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-blue-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-yellow-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 right-1/4 w-28 h-28 bg-yellow-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
    </div>
  );
};