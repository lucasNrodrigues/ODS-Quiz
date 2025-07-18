// src/pages/Game.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import { useGame } from '../context/GameContext';
import QuestionCard from '../components/QuestionCard';

export default function Game() {
  const navigate = useNavigate();
  const { setScore, setTotalQuestions } = useGame();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Cores dos ODS (para o cabeçalho)
  const odsColors = {
    1: 'bg-ods-pobreza', 2: 'bg-ods-fome', 3: 'bg-ods-saude', 4: 'bg-ods-educacao',
    5: 'bg-ods-genero', 6: 'bg-ods-agua', 7: 'bg-ods-energia', 8: 'bg-ods-trabalho',
    9: 'bg-ods-industria', 10: 'bg-ods-desigual', 11: 'bg-ods-cidades', 12: 'bg-ods-consumo',
    13: 'bg-ods-clima', 14: 'bg-ods-oceanos', 15: 'bg-ods-terrestre', 16: 'bg-ods-paz',
    17: 'bg-ods-parceria'
  };

  // Define o total de questões no contexto uma vez
  useEffect(() => {
    setTotalQuestions(questions.length);
    console.log("Total de perguntas definido no contexto:", questions.length);
  }, [setTotalQuestions]);

  // Função chamada pelo QuestionCard quando o usuário responde
  const handleAnswerFromCard = useCallback((isCorrect) => {
    if (isCorrect) {
      setUserScore(prev => prev + 1);
      console.log("Resposta correta! Nova pontuação:", userScore + 1);
    } else {
      console.log("Resposta incorreta. Pontuação permanece:", userScore);
    }

    // Verifica se é a última pergunta
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      // Se não for a última, avança para a próxima pergunta
      setCurrentQuestionIndex(nextQuestion);
      console.log("Avançando para a próxima pergunta. Novo índice:", nextQuestion);
    } else {
      // Se for a última pergunta, finaliza o quiz
      setQuizFinished(true);
      console.log("Quiz finalizado! Pontuação final do usuário:", userScore);
    }
  }, [currentQuestionIndex, userScore, questions.length]);

  // Efeito para navegar para a tela de resultados quando o quiz terminar
  useEffect(() => {
    if (quizFinished) {
      setScore(userScore); // Salva a pontuação final no contexto
      navigate('/results'); // Navega para a tela de resultados
    }
  }, [quizFinished, userScore, setScore, navigate]);

  // Se o quiz terminou, não renderiza mais o QuestionCard
  if (quizFinished) {
    return null; // Ou um spinner, ou uma mensagem temporária antes da navegação
  }

  // Se não houver perguntas, exibe uma mensagem
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full">
          <p className="text-gray-700 text-xl font-semibold">Nenhuma pergunta carregada. Por favor, verifique o arquivo de perguntas.</p>
          <Link
            to="/"
            className="mt-6 inline-block bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            VOLTAR AO INÍCIO
          </Link>
        </div>
      </div>
    );
  }

  // Renderiza o QuestionCard para a pergunta atual
  const currentQuestionData = questions[currentQuestionIndex];
  const currentColorClass = odsColors[currentQuestionData.ods] || 'bg-ods-pobreza';
   return (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8 font-sans">
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Cabeçalho com cor do ODS */}
      <div className={`rounded-t-lg py-4 px-6 text-white text-center ${currentColorClass}`}>
        <div className="text-lg font-semibold">ODS {currentQuestionData.ods}</div>
      </div>

      <div className="bg-white p-6 rounded-b-lg shadow-lg text-center space-y-6">
        {/* Contadores de Pergunta, Acertos */}
        <div className="text-sm space-y-1">
          <div>Pergunta {currentQuestionIndex + 1}/{questions.length}</div>
          <div>Acertos: {userScore}</div>
        </div>

        {/* Card da pergunta */}
        <QuestionCard
          question={currentQuestionData}
          onAnswer={handleAnswerFromCard}
        />

        {/* Botão de Sair */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-block text-center py-3 px-8 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-md
                       bg-gradient-to-br from-gray-500 to-gray-700 text-white hover:from-gray-600 hover:to-gray-800"
          >
            SAIR
          </Link>
        </div>
      </div>
    </div>
  </div>
);

}
