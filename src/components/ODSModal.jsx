// src/components/ODSModal.jsx
export default function ODSModal({ odsNumber, onClose }) {
  const odsData = {
    1: {
      title: "Erradicação da Pobreza",
      description: "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
      icon: "📉"
    },
    2: {
      title: "Fome Zero e Agricultura Sustentável",
      description: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição.",
      icon: "🍎"
    },
    // Adicione dados para os outros ODS
    // ... (restante dos seus dados ODS)
  }

  const currentODS = odsData[odsNumber] || {
    title: `ODS ${odsNumber}`,
    description: "Desafio de Desenvolvimento Sustentável",
    icon: "🌍"
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-center"> {/* ALTERADO: text-center aqui */}
        <div className="text-center mb-4">
          <span className="text-5xl">{currentODS.icon}</span>
        </div>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-2">
          ODS {odsNumber}: {currentODS.title}
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          {currentODS.description}
        </p>
        <button 
          onClick={onClose}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Começar Desafio
        </button>
      </div>
    </div>
  )
}
