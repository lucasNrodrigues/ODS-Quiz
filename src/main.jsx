import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import './pwa-install.js'; // 👈 Esse aqui

// Função para registrar o Service Worker
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/pwabuilder-sw.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration.scope);
          
          // Verifica se há atualizações do Service Worker
          registration.update().then(() => {
            console.log('Verificando atualizações do Service Worker...');
          });
        })
        .catch(error => {
          console.log('Falha no registro do Service Worker:', error);
        });
    });
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GameProvider>
        <App />
      </GameProvider>
    </Router>
  </React.StrictMode>,
);

// Registra o Service Worker após o render
registerServiceWorker();