import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Results from './pages/Results';
import { GameProvider } from './context/GameContext';
import { messaging } from './firebase-config';
import { getToken } from 'firebase/messaging';

function App() {
  useEffect(() => {
    // Solicita permissão para notificações
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey: 'BBA_e68Z1KZeb0c6dg6XBM6UV0tny_VOS2AulN-cNjI2E6WGOEScxYo5lGRR0tjclNaF9mll6WTQb4J0o'
        })
          .then(currentToken => {
            if (currentToken) {
              console.log('Token FCM:', currentToken);
              // Você pode enviar esse token para seu backend se quiser
            } else {
              console.warn('Token não disponível');
            }
          })
          .catch(err => {
            console.error('Erro ao obter token FCM:', err);
          });
      } else {
        console.warn('Permissão de notificação negada');
      }
    });
  }, []);

  return (
    <GameProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </GameProvider>
  );
}

export default App;
