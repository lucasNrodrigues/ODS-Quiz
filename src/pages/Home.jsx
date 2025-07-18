import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;

      const installButton = document.getElementById('installBtn');
      if (installButton) {
        installButton.style.display = 'block';

        installButton.addEventListener('click', () => {
          installButton.style.display = 'none';
          deferredPrompt.prompt();

          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('Usuário aceitou a instalação');
            } else {
              console.log('Usuário recusou a instalação');
            }
            deferredPrompt = null;
          });
        });
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-start px-4 py-8"
    >
      <div className="w-full max-w-xs">
        {/* Cabeçalho com animação */}
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-800">ODS QUIZ</h1>
          <p className="text-xs text-gray-600 mt-1">Sua jornada rumo a um mundo sustentável começa aqui!</p>
        </motion.div>

        {/* Card com descrição */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm p-4 mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <ul className="text-xs space-y-1.5 mb-3 text-gray-700">
            <motion.li className="flex items-center" whileHover={{ x: 5 }}>
              <span className="text-green-500 mr-1">🌍</span>
              <span>Desvende os 17 Objetivos que estão transformando nosso planeta</span>
            </motion.li>
            <motion.li className="flex items-center" whileHover={{ x: 5 }}>
              <span className="text-blue-500 mr-1">💡</span>
              <span>Teste seu conhecimento e descubra como você pode fazer a diferença</span>
            </motion.li>
            <motion.li className="flex items-center" whileHover={{ x: 5 }}>
              <span className="text-yellow-500 mr-1">🏆</span>
              <span>Supere desafios e torne-se um herói da sustentabilidade</span>
            </motion.li>
          </ul>

          {/* 🔽 Botão de Instalar App */}
          <button
            id="installBtn"
            className="w-full mt-4 px-4 py-2 bg-green-600 text-white rounded text-sm font-medium shadow-md"
            style={{ display: 'none' }}
          >
            Instalar App
          </button>
        </motion.div>

        {/* Botão para iniciar */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="text-center">
          <Link 
            to="/game" 
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs rounded-lg shadow-lg w-full transition-all duration-300 hover:shadow-xl"
          >
            Iniciar Minha Jornada
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

        {/* Rodapé */}
        <motion.p 
          className="text-[0.6rem] text-center text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          "O futuro pertence aos que acreditam na beleza de seus sonhos" - Eleanor Roosevelt<br />
          Projeto Extensão ODS © {new Date().getFullYear()}
        </motion.p>
      </div>
    </motion.div>
  );
}
