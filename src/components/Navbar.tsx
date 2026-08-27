import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  // 1. Возвращаем все ссылки в массив
  const links = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Об организации' },
    { id: 'members', label: 'Участники' },
    { id: 'ranks', label: 'Звания' },
    { id: 'sub', label: 'Оставить заявку', href: 'https://guardian-request-zeta.vercel.app/' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/emblem.png" 
              alt="Emblem" 
              className="w-9 h-9 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-200"
            />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-amber-400 font-bold text-sm tracking-widest uppercase">Стражи</span>
              <span className="text-amber-200/70 text-xs tracking-wider">Вердикта</span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  // Исправленная логика клика
                  if (link.id === 'sub' && link.href) {
                    window.open(link.href, '_blank');
                  } else {
                    onNavigate(link.id as any);
                  }
                }}
                className={`px-4 py-2 rounded text-sm font-medium tracking-wide transition-all duration-200 ${
                  currentPage === link.id
                    ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                    : 'text-stone-400 hover:text-amber-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-stone-400 hover:text-amber-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 border-t border-amber-900/30 px-4 py-3 space-y-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                if (link.id === 'sub' && link.href) {
                  window.open(link.href, '_blank');
                } else {
                  onNavigate(link.id as any);
                }
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 rounded text-sm font-medium tracking-wide transition-all duration-200 ${
                currentPage === link.id
                  ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                  : 'text-stone-400 hover:text-amber-300 hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
