interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#080810] border-t border-amber-900/20 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <img src="/images/emblem.png" alt="Emblem" className="w-12 h-12 object-contain opacity-80" />
            <div>
              <div className="text-amber-400 font-bold tracking-widest uppercase text-sm">Стражи Вердикта</div>
              <div className="text-stone-600 text-xs mt-0.5">Орден справедливости</div>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'about', label: 'Об организации' },
              { id: 'members', label: 'Участники' },
              { id: 'ranks', label: 'Звания' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-stone-500 hover:text-amber-400 text-sm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-amber-900/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-xs tracking-wide">
            © {new Date().getFullYear()} Стражи Вердикта. Все права защищены вердиктом.
          </p>
          <p className="text-stone-700 text-xs italic">
            «Справедливость — не привилегия. Это право каждого.»
          </p>
        </div>
      </div>
    </footer>
  );
}
