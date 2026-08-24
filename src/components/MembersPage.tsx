import { useState } from 'react';
import { characters, Rank } from '../data/characters';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';

const ALL = 'Все';
const ranks: (Rank | typeof ALL)[] = [ALL, 'Верховный Страж', 'Страж Вердикта', 'Следователь', 'Разведчик', 'Новобранец'];

export default function MembersPage() {
  const [selectedChar, setSelectedChar] = useState<number | null>(null);
  const [filterRank, setFilterRank] = useState<Rank | typeof ALL>(ALL);
  const [search, setSearch] = useState('');

  const filtered = characters.filter((c) => {
    const matchRank = filterRank === ALL || c.rank === filterRank;
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.specialization.toLowerCase().includes(search.toLowerCase()) ||
      c.race.toLowerCase().includes(search.toLowerCase());
    return matchRank && matchSearch;
  });

  const selected = characters.find((c) => c.id === selectedChar);

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">
      {/* Header */}
      <div className="relative py-20 px-4 overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-amber-950/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-amber-500/60 text-xs tracking-[0.4em] uppercase">Личные дела</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Состав отряда</h1>
          <div className="w-16 h-0.5 bg-amber-500/40 mx-auto mb-8" />
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Каждый страж — отдельная история. Каждая анкета — летопись службы.
            Нажмите на карточку, чтобы открыть полное личное дело.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-amber-900/20 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Поиск по имени, расе, специализации..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#0d0d14] border border-amber-900/30 focus:border-amber-600/50 rounded text-stone-300 text-sm outline-none placeholder-stone-600 transition-colors"
            />
          </div>

          {/* Rank filter */}
          <div className="flex flex-wrap gap-2">
            {ranks.map((rank) => (
              <button
                key={rank}
                onClick={() => setFilterRank(rank)}
                className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-all duration-200 ${
                  filterRank === rank
                    ? 'bg-amber-600 text-black'
                    : 'bg-white/5 text-stone-400 hover:text-amber-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {rank}
              </button>
            ))}
          </div>

          {/* Count */}
          <div className="text-stone-600 text-sm shrink-0">
            {filtered.length} из {characters.length}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                onClick={() => setSelectedChar(char.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-stone-500 text-lg">Никого не найдено</p>
            <p className="text-stone-600 text-sm mt-2">Попробуйте изменить фильтры</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <CharacterModal character={selected} onClose={() => setSelectedChar(null)} />
      )}
    </div>
  );
}
