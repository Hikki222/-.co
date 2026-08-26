import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MembersPage from './components/MembersPage';
import RanksPage from './components/RanksPage';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'members' | 'ranks' | 'sub';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'members' && <MembersPage />}
        {currentPage === 'ranks' && <RanksPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
