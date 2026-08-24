export default function AboutPage() {
  const history = [
    {
      year: '627 г.',
      title: 'Основание',
      desc: 'Причиной основания стражей вердикта стали многочисленные нарушения и не соблюдение законов внутри Бремерии, и не способность нынешних государственных структур справится с хаосом, привело к созданию особого отряда людей, в будущем названных "Стражи Вердикта"',
    },
    {
      year: '630 г.',
      title: 'Первый Устав',
      desc: 'Принятие Кодекса Вердикта — свода законов организации, регламентирующего иерархию, права и обязанности каждого стража. Документ скреплён кровью всех действующих Верховных Стражей.',
    },
    {
      year: '847 г.',
      title: 'Временное падение стражей',
      desc: 'Внутренний кризис: треть стражей оказалась куплена знатью для закрытия глаз на их преступления. После болезненной чистки организация оказалась на грани расформирования ',
    },
    {
      year: '857 г.',
      title: 'Расцвет',
      desc: 'Под руководством Верховного Стража Марны Вейль организация смогла полностью восстановить свое былое влияние и изменить внутреннюю структуру во избежания повторного падения стражей',
    },
    {
      year: '954 г.',
      title: 'Сегодня',
      desc: 'Стражи Вердикта продолжают нести службу под руководством Каэля Куроцуки. Угрозы не уменьшились — но и стражи стали сильнее.',
    },
  ];

  const principles = [
    {
      icon: '⚖️',
      title: 'Справедливость',
      desc: 'Закон не имеет лица. Каждое дело рассматривается беспристрастно, вне зависимости от статуса, богатства или связей подозреваемого.',
    },
    {
      icon: '🛡️',
      title: 'Защита',
      desc: 'Первейший долг стража — защита тех, кто не может защитить себя сам. Слабый не должен бояться сильного.',
    },
    {
      icon: '🔍',
      title: 'Истина',
      desc: 'Ни один приговор не выносится без доказательств. Мы ищем правду, даже если она неудобна или опасна.',
    },
    {
      icon: '🤝',
      title: 'Братство',
      desc: 'Страж никогда не останется один. Каждый член организации — часть единого целого, за которое стоит отдать жизнь.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      {/* Page header */}
      <div className="relative py-20 px-4 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-transparent to-purple-950/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">История и ценности</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Об организации
          </h1>
          <div className="w-16 h-0.5 bg-amber-500/40 mx-auto mb-8" />
          <p className="text-stone-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Стражи Вердикта — государственная организация, существующая уже более трёхсот лет.
            Мы — Справедливость.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Наша миссия</span>
              <h2 className="text-3xl font-bold text-white mt-3 mb-6">Для чего мы существуем</h2>
              <div className="space-y-4 text-stone-400 leading-relaxed">
                <p>
                  Стражи Вердикта были созданы в эпоху, когда официальные структуры власти оказались неспособны
                  обеспечить равенство перед законом. Богатые откупались, влиятельные ускользали, а простые люди
                  оставались наедине с несправедливостью.
                </p>
                <p>
                  Наша организация заполняет эту пустоту. Мы расследуем преступления, которые другие боятся трогать.
                  Мы защищаем тех, за кем никто другой не придёт. Мы выносим вердикты там, где официальное правосудие
                  молчит.
                </p>
                <p>
                  Наш приговор — не месть. Наш приговор — восстановление баланса. Именно поэтому мы называемся
                  Стражами <em className="text-amber-400 not-italic">Вердикта</em>.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-purple-500/10 rounded-lg blur-3xl" />
              <div className="relative border border-amber-900/40 rounded-lg p-8 bg-[#0d0d14]">
                <div className="text-center mb-6">
                  <img src="/images/emblem.png" alt="Emblem" className="w-20 h-20 object-contain mx-auto mb-4 opacity-90" />
                  <h3 className="text-amber-400 font-bold text-lg tracking-widest uppercase">Клятва Стража</h3>
                </div>
                <div className="text-stone-300 text-center italic leading-relaxed text-sm">
                  <p className="mb-3">«Я, вступающий в ряды Стражей Вердикта,</p>
                  <p className="mb-3">клянусь защищать невиновных,</p>
                  <p className="mb-3">преследовать виновных без страха и корысти,</p>
                  <p className="mb-3">хранить тайны братства,</p>
                  <p className="mb-3">и до последнего вздоха служить</p>
                  <p className="text-amber-400 font-semibold not-italic">Справедливости — и только ей.»</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="py-20 px-4 bg-[#080810] border-t border-b border-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Кодекс Вердикта</span>
            <h2 className="text-3xl font-bold text-white mt-3">Четыре столпа</h2>
            <div className="w-16 h-0.5 bg-amber-500/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="bg-[#0d0d14] border border-amber-900/30 hover:border-amber-700/50 rounded-lg p-6 text-center transition-all duration-300 group hover:bg-[#111120]">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h3 className="text-amber-400 font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Летопись</span>
            <h2 className="text-3xl font-bold text-white mt-3">История организации</h2>
            <div className="w-16 h-0.5 bg-amber-500/40 mx-auto mt-4" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent transform md:-translate-x-0.5" />

            <div className="space-y-10">
              {history.map((event, i) => (
                <div key={i} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-amber-500 border-2 border-[#0a0a0f] transform -translate-x-1.5 md:-translate-x-2 mt-1.5 z-10 shadow-lg shadow-amber-500/50`} />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-[#0d0d14] border border-amber-900/30 hover:border-amber-800/50 rounded-lg p-6 transition-all duration-300">
                      <span className="text-amber-500 text-sm font-bold tracking-widest">{event.year}</span>
                      <h3 className="text-white font-bold text-lg mt-1 mb-3">{event.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Structure */}
      <div className="py-20 px-4 bg-[#080810] border-t border-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Устройство</span>
            <h2 className="text-3xl font-bold text-white mt-3">Структура организации</h2>
            <div className="w-16 h-0.5 bg-amber-500/40 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Совет Стражей',
                desc: 'Высший орган управления. Состоит из Верховного Стража и старших офицеров. Принимает окончательные решения по делам исключительной важности.',
                icon: '👁️',
              },
              {
                title: 'Оперативный отдел',
                desc: 'Основная боевая и следственная единица. Стражи Вердикта и Следователи, непосредственно работающие «в поле».',
                icon: '⚔️',
              },
              {
                title: 'Разведка и тени',
                desc: 'Агенты, работающие скрытно. Собирают информацию, внедряются в преступные организации, обеспечивают превентивную защиту.',
                icon: '🌑',
              },
            ].map((dep, i) => (
              <div key={i} className="bg-[#0d0d14] border border-amber-900/30 hover:border-amber-700/40 rounded-lg p-8 transition-all duration-300 hover:bg-[#111120] group">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">{dep.icon}</div>
                <h3 className="text-white font-bold text-xl mb-4">{dep.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{dep.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
