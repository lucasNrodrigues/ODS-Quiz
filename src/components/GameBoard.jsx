import { useState } from 'react'
import QuestionCard from './QuestionCard'

export default function GameBoard({ ods, questions, onAnswer }) {
  const odsQuestions = questions.filter(q => q.ods === ods)
  
  if (odsQuestions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <p className="text-gray-700">Nenhuma pergunta encontrada para este ODS.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`p-6 text-white bg-ods-${ods}`}>
        <h2 className="text-xl font-bold">ODS {ods}</h2>
      </div>
      
      <QuestionCard 
        question={odsQuestions[0]} 
        onAnswer={onAnswer}
      />
    </div>
  )
}