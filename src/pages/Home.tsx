import { Music, MapPin, Heart, Radio, Play, Flame } from 'lucide-react';
import HeroLogo from '../components/HeroLogo';

export default function Home() {
  const topSongs = [
    { position: 1, title: 'Evidências', artist: 'Patinha e Mateus', genre: 'Sertanejo Raiz' },
    { position: 2, title: 'Largado às Traças', artist: 'Mamonas Assassinas', genre: 'Sertanejo Raiz' },
    { position: 3, title: 'Festa Loka', artist: 'Zé Neto e Cristiano', genre: 'Sertanejo Universitário' },
    { position: 4, title: 'Bebidinhas Fedidas', artist: 'Murilo Huff e Mateus', genre: 'Sertanejo Universitário' },
    { position: 5, title: 'Forró do Bem', artist: 'Téo Marques', genre: 'Forró' },
    { position: 6, title: 'Piseiro da Pinguça', artist: 'Zé Felipe', genre: 'Piseiro' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F08] via-[#2D1810] to-[#1A0F08] pb-32">
      <HeroLogo />

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30">
            <div className="text-center">
              <div className="inline-block bg-[#FF6B1A] rounded-full p-4 mb-4 shadow-lg">
                <Radio className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FF6B1A] mb-4">
                No Ar Agora!
              </h2>
              <p className="text-amber-200 text-lg mb-6">
                A melhor programação sertaneja do Brasil
              </p>
              <div className="bg-amber-900/30 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-amber-100 text-base md:text-lg leading-relaxed">
                  Ouça ao vivo as melhores músicas de <span className="font-bold text-[#FF6B1A]">Sertanejo Raiz</span>,
                  <span className="font-bold text-[#FF6B1A]"> Sertanejo Universitário</span>,
                  <span className="font-bold text-[#FF6B1A]"> Forró</span> e
                  <span className="font-bold text-[#FF6B1A]"> Piseiro</span>!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-2xl p-6 shadow-xl border border-[#FF6B1A]/20 hover:border-[#FF6B1A]/50 transition-all duration-300 hover:scale-105">
            <div className="bg-[#FF6B1A] rounded-full p-3 w-fit mb-4">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#FF6B1A] mb-3">
              Programação 24/7
            </h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Música de qualidade o dia todo, todos os dias, sem parar!
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-2xl p-6 shadow-xl border border-[#FF6B1A]/20 hover:border-[#FF6B1A]/50 transition-all duration-300 hover:scale-105">
            <div className="bg-[#FF6B1A] rounded-full p-3 w-fit mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#FF6B1A] mb-3">
              Rio Espera, MG
            </h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Transmitindo direto do coração de Minas Gerais para todo o Brasil!
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-2xl p-6 shadow-xl border border-[#FF6B1A]/20 hover:border-[#FF6B1A]/50 transition-all duration-300 hover:scale-105">
            <div className="bg-[#FF6B1A] rounded-full p-3 w-fit mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#FF6B1A] mb-3">
              Sua Rádio
            </h3>
            <p className="text-amber-200 text-sm leading-relaxed">
              Peça sua música preferida pelo WhatsApp e participe da programação!
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30 mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flame className="w-8 h-8 text-[#FF6B1A]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#FF6B1A]">
              Top Sertanejas
            </h2>
            <Flame className="w-8 h-8 text-[#FF6B1A]" />
          </div>

          <div className="space-y-3">
            {topSongs.map((song) => (
              <div
                key={song.position}
                className="bg-amber-900/30 rounded-2xl p-4 border border-amber-700/30 hover:border-[#FF6B1A]/50 hover:bg-amber-900/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF6B1A]/20 group-hover:bg-[#FF6B1A]/40 transition-colors flex-shrink-0">
                    {song.position === 1 ? (
                      <Flame className="w-6 h-6 text-[#FF6B1A]" />
                    ) : (
                      <span className="text-[#FF6B1A] font-bold text-lg">{song.position}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-amber-100 font-bold text-sm md:text-base truncate">
                      {song.title}
                    </p>
                    <p className="text-amber-300/70 text-xs md:text-sm truncate">
                      {song.artist}
                    </p>
                  </div>

                  <div className="hidden sm:block text-right flex-shrink-0">
                    <p className="text-amber-400/60 text-xs md:text-sm font-semibold">
                      {song.genre}
                    </p>
                  </div>

                  <button className="bg-[#FF6B1A] hover:bg-[#FF7B2A] text-white rounded-full p-2 transition-all duration-300 flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                    <Play className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-amber-200 text-sm italic">
              Essas são as sertanejas que mais rolam na Renegada FM!
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#FF6B1A] mb-8">
            Nossa Localização
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border-2 border-[#FF6B1A]/30 shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.184898693265!2d-42.94888!3d-20.38889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sRio%20Espera%2C%20MG!2sBrazil!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-6">
              <div className="bg-amber-900/30 rounded-2xl p-6 border border-amber-700/30">
                <h3 className="text-xl font-bold text-[#FF6B1A] mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Rio Espera - MG
                </h3>
                <p className="text-amber-100 leading-relaxed mb-4">
                  Localizada no interior de Minas Gerais, Rio Espera é uma cidade que respira história e tradição sertaneja. É daqui que transmitimos para todo o Brasil!
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-amber-200 font-semibold text-sm">Coordenadas:</p>
                    <p className="text-amber-300/70 text-sm">20.38889° S, 42.94888° W</p>
                  </div>
                  <div>
                    <p className="text-amber-200 font-semibold text-sm">Estado:</p>
                    <p className="text-amber-300/70 text-sm">Minas Gerais, Brasil</p>
                  </div>
                  <div>
                    <p className="text-amber-200 font-semibold text-sm">Altitude:</p>
                    <p className="text-amber-300/70 text-sm">Aproximadamente 850 metros</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-2xl p-6 border border-amber-700/30">
                <h3 className="text-lg font-bold text-[#FF6B1A] mb-3">
                  Venha Nos Conhecer!
                </h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-4">
                  Visite Rio Espera e conheça a cidade que respira sertanejo. Temos um acervo cultural rico e paisagens lindas do interior mineiro.
                </p>
                <button className="w-full bg-[#FF6B1A] hover:bg-[#FF7B2A] text-white font-bold py-2 rounded-lg transition-all duration-300">
                  Mais Informações
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#FF6B1A] mb-6">
            Estilos Musicais
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Sertanejo Raiz', emoji: '🤠' },
              { name: 'Sertanejo Universitário', emoji: '🎸' },
              { name: 'Forró', emoji: '🪗' },
              { name: 'Piseiro', emoji: '💃' }
            ].map((style) => (
              <div
                key={style.name}
                className="bg-amber-900/30 rounded-xl p-4 text-center hover:bg-amber-900/50 transition-all duration-300 border border-amber-700/30 hover:border-[#FF6B1A]/50"
              >
                <div className="text-4xl mb-2">{style.emoji}</div>
                <p className="text-amber-100 font-semibold">{style.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <div className="bg-gradient-to-r from-transparent via-[#FF6B1A]/20 to-transparent h-px mb-6"></div>
          <p className="text-amber-300 text-sm">
            Renegada FM - A voz da bota, do chapéu e do arame farpado
          </p>
          <p className="text-amber-400/60 text-xs mt-2">
            Rio Espera, Minas Gerais
          </p>
        </section>

        <section className="mt-16 flex justify-center">
          <a
            href="https://www.radios.com.br/aovivo/rede-rc-sat/263180"
            target="_blank"
            rel="noopener noreferrer"
            className="group hover:scale-110 transition-transform duration-300"
          >
            <img
              src="/image.png"
              alt="RadiosNet"
              className="h-20 w-auto drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
            />
          </a>
        </section>
      </div>
    </div>
  );
}
