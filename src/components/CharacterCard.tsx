import { Character, rankBorder, rankColors, rankGlow } from '../data/characters';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const statusLabel: Record<string, { label: string; color: string }> = {
  active: { label: 'Активен', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/30' },
  inactive: { label: 'Неактивен', color: 'text-stone-400 bg-stone-400/10 border-stone-500/30' },
  missing: { label: 'Пропал без вести', color: 'text-red-400 bg-red-400/10 border-red-500/30' },
};

export default function CharacterCard({ character, onClick }: CharacterCardProps) {
  const border = rankBorder[character.rank];
  const glow = rankGlow[character.rank];
  const gradient = rankColors[character.rank];
  const status = statusLabel[character.status];

  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer rounded-lg border ${border} bg-[#0d0d14] hover:bg-[#111120] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:${glow}`}
    >
      {/* Gradient overlay top */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-black/30 to-transparent" />

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs px-2 py-1 rounded border ${status.color} tracking-wide`}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rank */}
        <div className={`inline-block text-xs tracking-widest uppercase font-semibold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {character.rank}
        </div>

        {/* Name */}
        <h3 className="text-white font-bold text-xl mb-1">{character.name}</h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-stone-500 text-xs mb-4">
          <span>{character.race}</span>
          <span>•</span>
          <span>{character.age} лет</span>
          <span>•</span>
          <span>{character.specialization}</span>
        </div>

        {/* Bio preview */}
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {character.bio}
        </p>

        {/* Skills preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {character.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="text-xs px-2 py-0.5 rounded bg-white/5 text-stone-400 border border-white/10">
              {skill}
            </span>
          ))}
          {character.skills.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-stone-500">
              +{character.skills.length - 3}
            </span>
          )}
        </div>

        <div className="text-amber-500/60 text-xs tracking-wide group-hover:text-amber-400 transition-colors">
          Читать анкету →
        </div>
      </div>
    </div>
  );
}
