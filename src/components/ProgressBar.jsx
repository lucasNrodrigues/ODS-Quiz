// src/components/ProgressBar.jsx
export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100
  
  return (
    <div className="mb-8 text-center"> {/* ALTERADO: text-center aqui */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Progresso
        </span>
        <span className="text-sm font-semibold text-green-600">
          {Math.round(percentage)}% Completo
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">Início</span>
        <span className="text-xs text-gray-500">ODS {current} de {total}</span>
        <span className="text-xs text-gray-500">Conclusão</span>
      </div>
    </div>
  )
}
