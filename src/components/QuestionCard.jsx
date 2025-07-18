// src/components/QuestionCard.jsx
import React, { useState, useEffect } from 'react';

export default function QuestionCard({ question, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null); // Opção selecionada pelo usuário
  const [hasAnswered, setHasAnswered] = useState(false); // Se o usuário já respondeu a esta pergunta
  const [timeLeft, setTimeLeft] = useState(15); // Tempo restante para esta pergunta
  const [errorMessage, setErrorMessage] = useState(null); // Mensagem de erro para a UI

  // Reseta o estado quando a pergunta muda (currentQuestionIndex no Game.jsx muda)
  useEffect(() => {
    setSelectedOption(null);
    setHasAnswered(false);
    setTimeLeft(15); // Reseta o tempo para cada nova pergunta
    setErrorMessage(null);
    console.log("QuestionCard montado/atualizado para pergunta:", question.text);
  }, [question]); // Depende da prop 'question'

  // Lógica do temporizador para esta pergunta
  useEffect(() => {
    if (timeLeft > 0 && !hasAnswered) { // Temporizador roda se houver tempo e não tiver respondido
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !hasAnswered) {
      // Se o tempo acabar e não tiver respondido, considera como incorreto e avança
      console.log("Tempo esgotado para a pergunta:", question.text);
      setHasAnswered(true); // Marca como respondido
      setSelectedOption(null); // Nenhuma opção selecionada
      setTimeout(() => {
        onAnswer(false); // Envia false (incorreto) para o Game.jsx
      }, 500); // ALTERADO: Atraso reduzido para 500ms
    }
  }, [timeLeft, hasAnswered, onAnswer, question.text]);

  const handleSelect = (index) => {
    if (!hasAnswered) { // Só permite selecionar se ainda não respondeu
      setSelectedOption(index);
      setErrorMessage(null); // Limpa mensagem de erro ao selecionar
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      setErrorMessage("Por favor, selecione uma opção antes de confirmar.");
      return;
    }

    setErrorMessage(null);
    setHasAnswered(true); // Marca como respondido
    const isCorrect = selectedOption === question.correctAnswer;
    console.log("Resposta confirmada. Correta:", isCorrect);

    // Envia o resultado da resposta para o componente pai (Game.jsx)
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 10); // ALTERADO: Atraso reduzido para 500ms
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center space-y-6">
  <div className="text-sm">Tempo: 0:{timeLeft.toString().padStart(2, '0')}s</div>

  <div className="flex items-center justify-center">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 text-white font-bold ${hasAnswered ? (selectedOption === question.correctAnswer ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}`}>
      {question.ods}
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{question.text}</h3>
  </div>

  <div className="flex flex-col gap-4">
    {question.options.map((option, index) => (
      <div key={index} onClick={() => handleSelect(index)} className="...">
        {/* opção renderizada */}
      </div>
    ))}
  </div>

  {hasAnswered && (
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h4 className="font-semibold text-blue-800 mb-2">Explicação:</h4>
      <p className="text-blue-700">{question.explanation}</p>
    </div>
  )}

  <button
    onClick={handleSubmit}
    disabled={selectedOption === null || hasAnswered}
    className={`mt-6 w-full max-w-md mx-auto py-3 px-6 rounded-lg text-lg font-medium transition-all ${
      selectedOption === null || hasAnswered
        ? 'bg-gray-300 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
    }`}
  >
    {hasAnswered ? 'Carregando próxima pergunta...' : 'Confirmar Resposta'}
  </button>
</div>

  );
}
