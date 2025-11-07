import React, { useState } from 'react';
import { InstagramIcon, LocationIcon, AboutIcon, ReviewIcon, WhatsAppIcon, CalendarIcon } from './components/Icons';
import { Modal, AboutModalContent, BookingModalContent, LocationModalContent, ReviewModalContent, DeveloperModalContent, BudgetModalContent } from './components/Modal';

type ModalType = 'none' | 'about' | 'booking' | 'location' | 'review' | 'developer' | 'budget';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>('none');
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);

  const handleLogoClick = () => {
    if (isLogoAnimating) return;
    setIsLogoAnimating(true);
  };


  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return <AboutModalContent />;
      case 'booking':
        return <BookingModalContent onClose={() => setActiveModal('none')} />;
      case 'location':
        return <LocationModalContent />;
      case 'review':
        return <ReviewModalContent onClose={() => setActiveModal('none')} />;
      case 'developer':
        return <DeveloperModalContent />;
      case 'budget':
        return <BudgetModalContent />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-black bg-gradient-to-br from-black via-red-950/60 to-black animated-gradient text-white flex flex-col items-center justify-center p-4">
      <main 
        className="w-full max-w-md mx-auto bg-black bg-opacity-40 backdrop-blur-xl rounded-3xl shadow-2xl shadow-red-900/30 border border-stone-700/50 p-6 md:p-8 flex flex-col items-center space-y-6"
        style={{ animation: 'fadeInDown 0.8s ease-out forwards' }}
      >
        <div className="profile text-center">
          <img
            src="/logo.png"
            alt="Milano Bartenders Logo"
            className={`w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover border-4 border-stone-500/80 shadow-lg shadow-stone-400/20 cursor-pointer ${isLogoAnimating ? 'animate-coin-flip' : ''}`}
            onClick={handleLogoClick}
            onAnimationEnd={() => {
              if (isLogoAnimating) {
                setIsLogoAnimating(false);
                setActiveModal('about');
              }
            }}
          />
          <h1 className="text-3xl md:text-4xl font-bold mt-4 font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent">
            Milano Bartenders
          </h1>
          <p className="text-base md:text-lg text-neutral-300 mt-1">Os melhores cocktails do mundo🍸</p>
        </div>

        <div className="links w-full flex flex-col space-y-4">
          <LinkButton icon={<AboutIcon />} text="Quem Somos?" onClick={handleLogoClick} />
          <LinkButton icon={<CalendarIcon />} text="Orçamento 2025" onClick={() => setActiveModal('budget')} />
          <LinkButton icon={<WhatsAppIcon />} text="Contato WhatsApp" onClick={() => setActiveModal('booking')} />
          <a href="https://www.instagram.com/milano_bartenders/" target="_blank" rel="noopener noreferrer" className="w-full">
            <LinkButton icon={<InstagramIcon />} text="Instagram" />
          </a>
          <LinkButton icon={<LocationIcon />} text="Localização" onClick={() => setActiveModal('location')} />
          <LinkButton icon={<ReviewIcon />} text="Avalie-nos" onClick={() => setActiveModal('review')} />
        </div>
      </main>

      <footer className="text-center mt-8 text-sm text-neutral-500">
        <p>
          Desenvolvido por{' '}
          <button onClick={() => setActiveModal('developer')} className="font-semibold text-stone-400 hover:text-white transition-colors duration-300">
            InteligenciArte.IA ✨
          </button>
        </p>
      </footer>
      
      <Modal isOpen={activeModal !== 'none'} onClose={() => setActiveModal('none')}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

interface LinkButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="relative w-full bg-black/30 backdrop-blur-sm border border-stone-700/60 hover:border-stone-400/80 text-neutral-200 hover:text-white font-medium py-3 px-4 rounded-xl shadow-md hover:shadow-stone-400/20 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-opacity-75"
  >
    <div className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6">{icon}</div>
    <span className="text-center text-sm md:text-base">{text}</span>
  </button>
);

export default App;