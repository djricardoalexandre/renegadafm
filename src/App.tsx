import { useState, useEffect } from 'react';
import Header from './components/Header';
import AudioPlayer from './components/AudioPlayer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => console.log('Service Worker registrado'))
        .catch((error) => console.error('Erro ao registrar Service Worker:', error));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1A0F08]">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <main>
        {currentPage === 'home' ? <Home /> : <Sobre />}
      </main>

      <AudioPlayer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
