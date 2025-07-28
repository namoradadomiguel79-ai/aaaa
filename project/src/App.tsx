import React, { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { TransitionPage } from './pages/TransitionPage';
import { ConstellationPage } from './pages/ConstellationPage';

type AppState = 'login' | 'transition' | 'constellation';

function App() {
  const [currentPage, setCurrentPage] = useState<AppState>('login');

  const handlePasswordCorrect = () => {
    setCurrentPage('transition');
  };

  const handleTransitionComplete = () => {
    setCurrentPage('constellation');
  };

  return (
    <div className="min-h-screen">
      {currentPage === 'login' && (
        <LoginPage onPasswordCorrect={handlePasswordCorrect} />
      )}
      
      {currentPage === 'transition' && (
        <TransitionPage onComplete={handleTransitionComplete} />
      )}
      
      {currentPage === 'constellation' && (
        <ConstellationPage />
      )}
    </div>
  );
}

export default App;