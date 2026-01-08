export default function HeroLogo() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#3D2210] via-[#2D1810] to-[#1A0F08] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B1A] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-8 animate-pulse">
            <div className="absolute inset-0 bg-[#FF6B1A] blur-3xl opacity-40 rounded-full -z-10"></div>
            <img
              src="/renegada_fm.png.png"
              alt="Renegada FM"
              className="h-80 w-auto drop-shadow-2xl filter brightness-125 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#FF6B1A] mb-4 drop-shadow-lg">
            RENEGADA FM
          </h2>

          <div className="text-center space-y-2">
            <p className="text-amber-200 text-xl md:text-2xl font-bold">
              A Sertaneja do Brasil
            </p>
            <p className="text-amber-300 text-lg md:text-xl">
              O melhor do Sertanejo, Forró e Piseiro!
            </p>
            <p className="text-amber-400/70 text-base md:text-lg">
              Rio Espera, Minas Gerais
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="bg-amber-900/40 rounded-lg px-6 py-3 backdrop-blur-sm border border-amber-700/50">
              <p className="text-amber-100 text-sm font-semibold">24/7</p>
              <p className="text-amber-300 text-xs">Transmissão Ao Vivo</p>
            </div>
            <div className="bg-amber-900/40 rounded-lg px-6 py-3 backdrop-blur-sm border border-amber-700/50">
              <p className="text-amber-100 text-sm font-semibold">100% Sertanejo</p>
              <p className="text-amber-300 text-xs">Raiz, Universitário & Forró</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
