import React from 'react';
import { StarField } from '../components/StarField';
import { Constellation } from '../components/Constellation';

export const ConstellationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
      <StarField />
      
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