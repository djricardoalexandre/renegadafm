import { Radio } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-[#2D1810] via-[#3D2210] to-[#2D1810] shadow-lg sticky top-0 z-40 py-3">
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-[#FF6B1A] drop-shadow-lg flex items-center justify-center gap-2">
            <Radio className="w-6 h-6" />
            Renegada FM
          </h1>
          <p className="text-amber-300 text-xs mt-0.5">A Sertaneja do Brasil</p>
        </div>

        <nav className="flex justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              currentPage === 'home'
                ? 'bg-[#FF6B1A] text-white shadow-lg shadow-orange-500/50'
                : 'bg-amber-900/30 text-amber-200 hover:bg-amber-900/50'
            }`}
          >
            Início
          </button>
          <button
            onClick={() => onNavigate('sobre')}
            className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 ${
              currentPage === 'sobre'
                ? 'bg-[#FF6B1A] text-white shadow-lg shadow-orange-500/50'
                : 'bg-amber-900/30 text-amber-200 hover:bg-amber-900/50'
            }`}
          >
            Sobre Nós
          </button>
        </nav>
      </div>
    </header>
  );
}
