interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]/60" />

        {/* Decorative lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl scale-150" />
              <img
                src="/images/emblem.png"
                alt="Emblem of Verdict Guard"
                className="relative w-28 h-28 object-contain drop-shadow-2xl animate-pulse"
                style={{ animationDuration: '4s' }}
              />
            </div>
          </div>

          <div className="mb-3">
            <span className="text-amber-500/80 text-xs tracking-[0.4em] uppercase font-light">Орден справедливости</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
            <span className="text-white">Стражи</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Вердикта
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8" />

          <p className="text-stone-300/90 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            Организация, стоящая на страже справедливости с тех пор, как законы перестали защищать слабых.
            Мы — последний щит между миром и хаосом.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-semibold rounded text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              Об организации
            </button>
            <button
              onClick={() => onNavigate('members')}
              className="px-8 py-3.5 border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 font-semibold rounded text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
            >
              Состав отряда
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500">
          <span className="text-xs tracking-widest uppercase">Прокрутите</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-500/50 to-transparent animate-bounce" style={{ animationDuration: '2s' }} />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#0a0a0f] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-amber-900/20 rounded-lg overflow-hidden border border-amber-900/30">
            {[
              { value: '300+', label: 'Лет истории' },
              { value: '50+', label: 'Активных стражей' },
              { value: '1 200+', label: 'Закрытых дел' },
              { value: '12', label: 'Регионов влияния' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0d0d14] p-8 text-center hover:bg-[#111120] transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                <div className="text-stone-500 text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-[#0a0a0f] pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Наши ряды</span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">Известные Стражи</h3>
            <div className="w-16 h-0.5 bg-amber-500/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Кассиан Дорр',
                rank: 'Верховный Страж',
                img: '/images/char-commander.jpg',
                color: 'from-amber-600/30 to-amber-800/10',
                border: 'border-amber-500/40',
              },
              {
                name: 'Элара Нийт',
                rank: 'Страж Вердикта',
                img: '/images/char-mage.jpg',
                color: 'from-violet-600/30 to-violet-800/10',
                border: 'border-violet-500/40',
              },
              {
                name: 'Сельвира Ирт',
                rank: 'Страж Вердикта',
                img: '/images/char-paladin.jpg',
                color: 'from-cyan-600/20 to-cyan-800/10',
                border: 'border-cyan-500/40',
              },
            ].map((char, i) => (
              <div
                key={i}
                onClick={() => onNavigate('members')}
                className={`relative overflow-hidden rounded-lg border ${char.border} bg-gradient-to-b ${char.color} cursor-pointer group hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={char.img}
                    alt={char.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-stone-400 text-xs tracking-widest uppercase mb-1">{char.rank}</div>
                  <div className="text-white font-bold text-xl">{char.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('members')}
              className="px-8 py-3 border border-amber-500/30 hover:border-amber-500 text-amber-500/70 hover:text-amber-400 rounded text-sm tracking-widest uppercase transition-all duration-300 hover:bg-amber-500/5"
            >
              Смотреть всех участников →
            </button>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-[#080810] py-20 px-4 border-t border-amber-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl text-amber-600/40 mb-4">"</div>
          <blockquote className="text-xl md:text-2xl text-stone-300 font-light italic leading-relaxed mb-6">
            Когда закон умолкает, мы говорим. Когда правосудие слепнет, мы видим.
            Когда мир рушится — мы стоим.
          </blockquote>
          <div className="text-amber-500/60 text-sm tracking-widest uppercase">— Устав Стражей Вердикта, стр. 1</div>
        </div>
      </div>
    </div>
  );
}
