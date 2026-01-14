import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Erro ao reproduzir:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume > 0) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#2D1810] via-[#3D2210] to-[#2D1810] border-t-4 border-[#FF6B1A] shadow-2xl z-50">
      <audio
        ref={audioRef}
        src="https://stream.zeno.fm/asa9nfcu0a6tv"
        preload="none"
      />

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={togglePlay}
              className="bg-[#FF6B1A] hover:bg-[#FF7B2A] text-white rounded-full p-4 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-110"
              aria-label={isPlaying ? 'Pausar' : 'Tocar'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-0.5" />
              )}
            </button>

            <div className="flex-1 hidden sm:block">
              <div className="text-amber-200 font-semibold text-sm">
                {isPlaying ? 'Tocando agora...' : 'Renegada FM'}
              </div>
              <div className="text-amber-300/70 text-xs">
                Rio Espera, MG
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="text-amber-200 hover:text-[#FF6B1A] transition-colors"
              aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 bg-amber-900/30 rounded-lg appearance-none cursor-pointer accent-[#FF6B1A] hidden md:block"
              aria-label="Volume"
            />
          </div>
        </div>

        <div className="mt-2 sm:hidden text-center">
          <div className="text-amber-200 font-semibold text-xs">
            {isPlaying ? 'Tocando agora...' : 'Clique para ouvir'}
          </div>
        </div>
      </div>
    </div>
  );
}
