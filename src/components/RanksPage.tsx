import { rankColors, rankBorder, Rank } from '../data/characters';

const ranksData: { rank: Rank; icon: string; description: string; duties: string[]; perks: string[]; count: number }[] = [
  {
    rank: 'Верховный Страж',
    icon: '👑',
    description:
      'Глава всей организации. Верховный Страж избирается пожизненно путём тайного голосования Совета Стражей и несёт ответственность за все принятые решения. Его слово — закон внутри ордена.',
    duties: [
      'Руководство Советом Стражей',
      'Принятие стратегических решений',
      'Назначение и снятие офицеров',
      'Вынесение приговоров высшей меры',
      'Представление организации перед властями',
    ],
    perks: [
      'Полный доступ ко всем архивам',
      'Личная охрана из трёх Стражей',
      'Право вето на любое решение Совета',
      'Почётный титул во всех регионах',
    ],
    count: 1,
  },
  {
    rank: 'Страж Вердикта',
    icon: '⚔️',
    description:
      'Элита организации. Стражи Вердикта — опытные оперативники, прошедшие суровый отбор и доказавшие свою преданность делу годами безупречной службы. Они ведут наиболее сложные дела.',
    duties: [
      'Ведение дел особой важности',
      'Наставничество над Следователями и Новобранцами',
      'Участие в Совете при необходимости',
      'Самостоятельное принятие тактических решений',
    ],
    perks: [
      'Доступ к засекреченным архивам',
      'Право привлекать ресурсы организации',
      'Ношение Знака Вердикта',
      'Голос на внутренних выборах',
    ],
    count: 12,
  },
  {
    rank: 'Следователь',
    icon: '🔍',
    description:
      'Основная рабочая единица организации. Следователи занимаются расследованием преступлений, сбором улик, допросами и подготовкой дел для вынесения Вердикта. Каждый Следователь специализируется в своей области.',
    duties: [
      'Расследование преступлений',
      'Сбор и анализ улик',
      'Ведение протоколов допроса',
      'Взаимодействие с местными властями',
      'Подготовка отчётов для Совета',
    ],
    perks: [
      'Доступ к открытым архивам',
      'Право на запрос поддержки',
      'Официальные полномочия для расследований',
      'Ношение знака Следователя',
    ],
    count: 20,
  },
  {
    rank: 'Разведчик',
    icon: '🌑',
    description:
      'Тени организации. Разведчики действуют скрытно, собирают информацию, ведут слежку и обеспечивают оперативными данными остальных членов. Их личности засекречены даже внутри ордена.',
    duties: [
      'Сбор разведывательной информации',
      'Слежка за подозреваемыми',
      'Внедрение в преступные структуры',
      'Обеспечение безопасности операций',
    ],
    perks: [
      'Анонимность внутри организации',
      'Специальное снаряжение',
      'Право отказа от задания без объяснений',
      'Особые условия оплаты',
    ],
    count: 9,
  },
  {
    rank: 'Новобранец',
    icon: '🌱',
    description:
      'Вновь принятые члены организации, проходящие испытательный срок длиной в один год. В этот период новобранец обучается, выполняет вспомогательные задания и доказывает своё право называться Стражем.',
    duties: [
      'Обучение у наставника',
      'Выполнение вспомогательных заданий',
      'Изучение Кодекса Вердикта',
      'Ежемесячная оценка успехов',
    ],
    perks: [
      'Кров и питание в штабе',
      'Базовое снаряжение',
      'Защита организации',
      'Наставник из числа опытных стражей',
    ],
    count: 5,
  },
];

export default function RanksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      {/* Header */}
      <div className="relative py-20 px-4 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-transparent to-amber-950/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Иерархия</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Звания и должности</h1>
          <div className="w-16 h-0.5 bg-amber-500/40 mx-auto mb-8" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Иерархия Стражей Вердикта строится на заслугах, опыте и преданности делу.
            Каждое звание несёт особые обязанности и права.
          </p>
        </div>
      </div>

      {/* Hierarchy pyramid visual */}
      <div className="py-16 px-4 bg-[#080810] border-b border-amber-900/20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-stone-600 text-xs tracking-widest uppercase">Структура иерархии</span>
          </div>
          <div className="space-y-2">
            {ranksData.map((r, i) => {
              const widths = ['w-1/5', 'w-2/5', 'w-3/5', 'w-4/5', 'w-full'];
              return (
                <div key={i} className="flex justify-center">
                  <div
                    className={`${widths[i]} flex items-center justify-between px-4 py-3 rounded border ${rankBorder[r.rank]} bg-[#0d0d14] transition-all hover:bg-[#111120] group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{r.icon}</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${rankColors[r.rank]} bg-clip-text text-transparent tracking-wide`}>
                        {r.rank}
                      </span>
                    </div>
                    <span className="text-stone-600 text-xs">{r.count} чел.</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ranks detail */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {ranksData.map((r, i) => (
            <div
              key={i}
              className={`rounded-lg border ${rankBorder[r.rank]} bg-[#0d0d14] overflow-hidden hover:bg-[#111120] transition-all duration-300`}
            >
              {/* Top accent */}
              <div className={`h-0.5 bg-gradient-to-r ${rankColors[r.rank]}`} />

              <div className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="text-4xl">{r.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className={`text-2xl font-bold bg-gradient-to-r ${rankColors[r.rank]} bg-clip-text text-transparent`}>
                        {r.rank}
                      </h2>
                      <span className="text-xs px-2 py-1 rounded bg-white/5 text-stone-500 border border-white/10">
                        {r.count} {r.count === 1 ? 'человек' : r.count < 5 ? 'человека' : 'человек'}
                      </span>
                    </div>
                    <p className="text-stone-400 leading-relaxed">{r.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Duties */}
                  <div>
                    <h3 className="text-amber-500/70 text-xs tracking-widest uppercase mb-4">Обязанности</h3>
                    <ul className="space-y-2">
                      {r.duties.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-stone-400">
                          <span className={`shrink-0 mt-0.5 bg-gradient-to-r ${rankColors[r.rank]} bg-clip-text text-transparent font-bold`}>◆</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perks */}
                  <div>
                    <h3 className="text-amber-500/70 text-xs tracking-widest uppercase mb-4">Привилегии</h3>
                    <ul className="space-y-2">
                      {r.perks.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-stone-400">
                          <span className="text-emerald-500/70 shrink-0 mt-0.5">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotion section */}
      <div className="py-20 px-4 bg-[#080810] border-t border-amber-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Путь наверх</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-8">Как получить повышение</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                step: '01',
                title: 'Выслуга и опыт',
                desc: 'Каждый год безупречной службы учитывается при рассмотрении кандидатуры на повышение.',
              },
              {
                step: '02',
                title: 'Закрытые дела',
                desc: 'Успешно завершённые расследования — главный критерий для оценки Следователей и Стражей.',
              },
              {
                step: '03',
                title: 'Рекомендация Совета',
                desc: 'Финальное решение о повышении принимается тайным голосованием старших членов организации.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d0d14] border border-amber-900/30 rounded-lg p-6">
                <div className="text-amber-800 text-4xl font-bold mb-4 opacity-50">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
