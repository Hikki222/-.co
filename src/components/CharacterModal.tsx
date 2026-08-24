import { useEffect } from 'react';
import { Character, rankBorder, rankColors, rankGlow } from '../data/characters';

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const statusLabel: Record<string, { label: string; color: string }> = {
  active: { label: 'Активен', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30' },
  inactive: { label: 'Неактивен', color: 'text-stone-400 bg-stone-400/10 border-stone-500/30' },
  missing: { label: 'Пропал без вести', color: 'text-red-400 bg-red-400/10 border-red-500/30' },
};

export default function CharacterModal({ character, onClose }: CharacterModalProps) {
  const border = rankBorder[character.rank];
  const glow = rankGlow[character.rank];
  const gradient = rankColors[character.rank];
  const status = statusLabel[character.status];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border ${border} bg-[#0d0d14] shadow-2xl shadow-${glow}`}
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#78350f #0d0d14' }}
      >
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient}`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-stone-400 hover:text-white transition-all border border-white/10"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="md:w-2/5 relative">
            <div className="relative h-64 md:h-full min-h-64 overflow-hidden rounded-tl-lg rounded-bl-lg">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0d0d14]/60" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="md:w-3/5 p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className={`inline-block text-xs tracking-widest uppercase font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  {character.rank}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded border ${status.color}`}>
                  {status.label}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-1">{character.name}</h2>
              <p className="text-stone-500 text-sm">{character.specialization}</p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Раса', value: character.race },
                { label: 'Возраст', value: `${character.age} лет` },
                { label: 'Происхождение', value: character.origin },
                { label: 'Год вступления', value: `${character.joinedYear} г.` },
              ].map((item, i) => (
                <div key={i} className="bg-black/20 rounded p-3 border border-white/5">
                  <div className="text-stone-600 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-stone-300 text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h3 className="text-amber-500/70 text-xs tracking-widest uppercase mb-3">Биография</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{character.bio}</p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="text-amber-500/70 text-xs tracking-widest uppercase mb-3">Навыки</h3>
              <div className="flex flex-wrap gap-2">
                {character.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1.5 rounded border bg-gradient-to-r ${gradient} bg-opacity-10 border-opacity-30 text-stone-300`}
                    style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h3 className="text-amber-500/70 text-xs tracking-widest uppercase mb-3">Достижения</h3>
              <ul className="space-y-2">
                {character.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stone-400">
                    <span className="text-amber-500 mt-0.5 shrink-0">◆</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>

            {/* Motto */}
            <div className={`border-l-2 pl-4 bg-gradient-to-r ${gradient}`} style={{ borderImageSlice: 1 }}>
              <div className="border-l border-amber-600/40 pl-4 py-2">
                <p className="text-stone-300 text-sm italic">{character.motto}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
