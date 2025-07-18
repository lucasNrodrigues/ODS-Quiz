// src/context/GameContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Cria o contexto. O valor inicial é null, mas será preenchido pelo Provider.
const GameContext = createContext(null);

// Hook personalizado para facilitar o uso do contexto do jogo em outros componentes.
export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

// Provedor do contexto do jogo. Ele envolve os componentes que precisam acessar a pontuação e o total de perguntas.
export function GameProvider({ children }) {
  const [score, setScore] = useState(0); // Estado para a pontuação do usuário, inicializado em 0.
  const [totalQuestions, setTotalQuestions] = useState(0); // Estado para o total de perguntas, inicializado em 0.

  const value = {
    score,
    setScore,
    totalQuestions,
    setTotalQuestions,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}
