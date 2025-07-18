// src/pages/Results.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export default function Results() {
  const { score, totalQuestions, setScore, setTotalQuestions } = useGame();

  const handleRestartGame = () => {
    setScore(0);
    setTotalQuestions(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-4 font-sans text-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full text-center text-gray-800"> {/* ALTERADO: text-center aqui */}
        <h1 className="text-4xl font-bold mb-6 text-purple-700">Resultados do Quiz</h1>
        
        <p className="text-3xl font-semibold mb-4">
          Sua Pontuação: <span className="text-green-600">{score}</span> de <span className="text-blue-600">{totalQuestions}</span>
        </p>

        {score === totalQuestions && (
          <p className="text-xl text-yellow-600 font-bold mb-6">
            Parabéns! Você acertou todas as perguntas! 🎉
          </p>
        )}
        {score > totalQuestions / 2 && score < totalQuestions && (
          <p className="text-xl text-blue-600 font-bold mb-6">
            Muito bom! Você tem um ótimo conhecimento! 👍
          </p>
        )}
        {score <= totalQuestions / 2 && (
          <p className="text-xl text-red-600 font-bold mb-6">
            Continue estudando! Você consegue melhorar! 💪
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/game"
            onClick={handleRestartGame}
            className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg max-w-xs"
          >
            JOGAR NOVAMENTE
          </Link>
          <Link
            to="/"
            className="flex-1 text-center bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg max-w-xs"
          >
            VOLTAR AO INÍCIO
          </Link>
        </div>
      </div>
    </div>
  );
}
