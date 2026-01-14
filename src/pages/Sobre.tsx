import { Mountain, Radio, Users, Heart } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0F08] via-[#2D1810] to-[#1A0F08] pb-32">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FF6B1A] mb-12">
            Nossa História
          </h1>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FF6B1A] rounded-full p-3">
                  <Mountain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#FF6B1A]">
                  Sobre Rio Espera - MG
                </h2>
              </div>

              <div className="space-y-4 text-amber-100 leading-relaxed">
                <p>
                  Rio Espera, aninhada no interior de Minas Gerais, é uma cidade que respira história e tradição.
                  Muito antes de se chamar Rio Espera, estas terras foram habitadas por indígenas das etnias
                  <span className="font-semibold text-amber-200"> Croatas e Puris</span>.
                </p>

                <p>
                  A cidade preserva o autêntico modo de viver mineiro, simples e sossegado, e é famosa por abrigar
                  a histórica imagem de <span className="font-semibold text-amber-200">Nossa Senhora da Piedade</span>,
                  uma obra atribuída aos mestres Aleijadinho e Piranga, um verdadeiro patrimônio cultural local.
                </p>

                <p>
                  A comunidade é unida e a vida gira em torno de valores rurais e familiares, o cenário perfeito
                  para a música sertaneja.
                </p>
              </div>

              <div className="mt-6 bg-amber-900/30 rounded-xl p-6 border border-amber-700/30">
                <p className="text-amber-200 text-center italic">
                  "Um pedaço de Minas onde a tradição e a cultura se encontram"
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FF6B1A] rounded-full p-3">
                  <Radio className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#FF6B1A]">
                  O Nascimento da Renegada FM
                </h2>
              </div>

              <div className="space-y-4 text-amber-100 leading-relaxed">
                <p>
                  A <span className="font-bold text-[#FF6B1A]">Renegada FM - A Sertaneja do Brasil</span> nasce
                  do desejo de resgatar e celebrar a autêntica cultura sertaneja que pulsa forte em Rio Espera e
                  em todo o Brasil.
                </p>

                <p>
                  O nome <span className="font-bold text-[#FF6B1A]">"Renegada"</span> representa a força e a
                  resistência de um gênero musical que nunca se rende às modas passageiras. Somos a voz da bota,
                  do chapéu e do arame farpado, transmitindo a verdadeira essência da música raiz e o melhor do
                  forró e piseiro.
                </p>

                <p>
                  Nossa missão é ser a principal rádio sertaneja do Brasil, conectando gerações e mantendo viva
                  a chama da nossa cultura, com o sotaque e o coração mineiro.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="bg-amber-900/30 rounded-xl p-6 border border-amber-700/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[#FF6B1A]" />
                    <h3 className="font-bold text-amber-200">Nossa Missão</h3>
                  </div>
                  <p className="text-amber-100 text-sm">
                    Ser a principal rádio sertaneja do Brasil, conectando gerações através da música autêntica.
                  </p>
                </div>

                <div className="bg-amber-900/30 rounded-xl p-6 border border-amber-700/30">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-[#FF6B1A]" />
                    <h3 className="font-bold text-amber-200">Nossos Valores</h3>
                  </div>
                  <p className="text-amber-100 text-sm">
                    Tradição, autenticidade e o amor pela cultura sertaneja que nos define como brasileiros.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-gradient-to-br from-[#3D2210] to-[#2D1810] rounded-3xl p-8 shadow-2xl border-2 border-[#FF6B1A]/30">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#FF6B1A] mb-6">
                O Que Tocamos
              </h2>

              <div className="grid gap-4">
                {[
                  {
                    title: 'Sertanejo Raiz',
                    description: 'A música que mantém viva a tradição das duplas que fizeram história, com viola caipira e letras que contam a vida do campo.'
                  },
                  {
                    title: 'Sertanejo Universitário',
                    description: 'O melhor da nova geração sertaneja, com energia e modernidade, mas sempre respeitando nossas raízes.'
                  },
                  {
                    title: 'Forró',
                    description: 'O som que faz o pé balançar e o coração acelerar, do tradicional ao eletrônico, sempre com muita sanfona.'
                  },
                  {
                    title: 'Piseiro',
                    description: 'O ritmo que conquistou o Brasil, com batida envolvente e letras que todo mundo canta junto.'
                  }
                ].map((genre) => (
                  <div
                    key={genre.title}
                    className="bg-amber-900/30 rounded-xl p-6 border border-amber-700/30 hover:border-[#FF6B1A]/50 transition-all duration-300"
                  >
                    <h3 className="font-bold text-[#FF6B1A] text-lg mb-2">
                      {genre.title}
                    </h3>
                    <p className="text-amber-100 text-sm leading-relaxed">
                      {genre.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 text-center">
            <div className="bg-gradient-to-r from-transparent via-[#FF6B1A]/20 to-transparent h-px mb-6"></div>
            <p className="text-[#FF6B1A] font-bold text-xl mb-2">
              Renegada FM - A Sertaneja do Brasil
            </p>
            <p className="text-amber-300 text-sm">
              De Rio Espera para o mundo, levando a cultura sertaneja com orgulho e tradição
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
