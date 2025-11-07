
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { CloseIcon, InstagramIcon, StarIcon, WhatsAppIcon, DownloadIcon, ContractIcon, DateReserveIcon, CreditCardIcon, UsersIcon } from './Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-black border border-stone-700/50 rounded-2xl shadow-2xl shadow-stone-500/20 w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'fade-in-scale 0.3s forwards' }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors">
          <CloseIcon />
        </button>
        {children}
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
         @keyframes simple-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-simple-fade-in {
            animation: simple-fade-in 0.5s ease-in-out;
        }
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .animate-shake {
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>
    </div>
  );
};

export const AboutModalContent: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="text-neutral-300 space-y-6 text-center transition-all duration-500">
            <h2 className="text-4xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent">
                Nossa Arte
            </h2>
            <p className="text-base md:text-lg italic text-neutral-300/80 leading-relaxed">
                "Transformamos eventos em experiências memoráveis, onde cada drink conta uma história."
            </p>
            <div className="border-t border-stone-700/50 w-1/4 mx-auto my-2"></div>
            
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-400 text-center">
                <p>À frente da <strong className="font-semibold text-stone-200">Milano Bartenders</strong>, os fundadores <strong className="font-semibold text-stone-200">Victor Glitz e Thalisson Santos</strong> unem técnica e criatividade para criar momentos únicos há mais de uma década.</p>
                <p>Especialistas em celebrações de alto padrão, somos referência em requinte com inovações como o <strong className="font-semibold text-stone-200">Welcome Drink personalizado e bolhas aromáticas</strong>.</p>
            </div>

            {/* Collapsible Content */}
            <div 
                className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-400 pt-4 text-center">
                     <p>Com um olhar atento a cada detalhe, dedicam-se à arte da coquetelaria com excelência e sofisticação.</p>
                     <p>Mais do que servir coquetéis, nossa missão é criar atmosferas, despertar sensações e elevar cada evento à sua melhor versão. Seja em casamentos, aniversários, formaturas ou eventos corporativos, oferecemos serviços de bar exclusivos com drinks autorais e apresentação impecável.</p>
                </div>
            </div>

            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="text-stone-300 hover:text-white font-semibold transition-colors duration-300"
            >
                {isExpanded ? 'Ler menos' : 'Ler mais...'}
            </button>
            
            <div className="border-t border-stone-700/50 w-1/4 mx-auto my-2"></div>
            <p className="text-xl md:text-2xl font-display text-stone-200 pt-2">
                ✨ Milano Bartenders — a arte de brindar com elegância.
            </p>
        </div>
    );
};


export const LocationModalContent: React.FC = () => (
    <div className="space-y-4">
        <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent text-center">Nossa Localização</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-stone-600/50">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0573661483227!2d-50.12865152462135!3d-25.099919377773684!2m3!1f0!2f0!3f0!3m2!1i1024!i768!4f13.1!3m3!1m2!s0x94e81b20e21af7e9%3A0x550c38e968d1ce69!2sMilano%20Bartenders!5e0!3m2!1spt-BR!2sbr!4v1762472151598!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <p className="text-center text-neutral-400">R. Siqueira Campos, 761 - Uvaranas, Ponta Grossa - PR, 84940-000</p>
        <a 
            href="https://www.google.com/maps/dir/?api=1&destination=Milano+Bartenders+Ponta+Grossa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
            Ver no Google Maps
        </a>
    </div>
);

export const BookingModalContent: React.FC<{onClose: () => void}> = ({onClose}) => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        eventType: '',
        guests: '',
        observations: '',
    });
    const [isAdult, setIsAdult] = useState(false);
    const [showAgeWarning, setShowAgeWarning] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = () => {
        if (!isAdult) {
            setShowAgeWarning(true);
            return;
        }

        const message = `
*Solicitação de Orçamento - Milano Bartenders*

*Nome:* ${formData.name}
*Data do Evento:* ${new Date(formData.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}
*Local:* ${formData.location}
*Tipo de Evento:* ${formData.eventType}
*Nº de Convidados (+8 anos):* ${formData.guests}
*Observações:* ${formData.observations || 'Nenhuma'}
        `.trim().replace(/\n\s*\n/g, '\n\n');

        const whatsappUrl = `https://wa.me/5542999118913?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        onClose();
    };
    
    const steps = [
        {
            title: "Qual seu nome?",
            field: <input type="text" name="name" value={formData.name} placeholder="Seu nome completo" required className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 text-neutral-300" onChange={handleChange} />,
            isValid: formData.name.trim() !== ''
        },
        {
            title: "Qual a data do evento?",
            field: <input type="date" name="date" value={formData.date} required className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 text-neutral-300" onChange={handleChange} />,
            isValid: formData.date !== ''
        },
        {
            title: "Onde será o evento?",
            field: <input type="text" name="location" value={formData.location} placeholder="Cidade e local" required className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 text-neutral-300" onChange={handleChange} />,
            isValid: formData.location.trim() !== ''
        },
        {
            title: "Qual o tipo de evento?",
            field: <select name="eventType" value={formData.eventType} required className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 appearance-none text-neutral-300" onChange={handleChange} style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a8a29e' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
                <option value="" className="bg-stone-900 text-neutral-500">Selecione...</option>
                <option className="bg-stone-900 text-white">Casamento</option>
                <option className="bg-stone-900 text-white">15 anos</option>
                <option className="bg-stone-900 text-white">Formatura</option>
                <option className="bg-stone-900 text-white">Evento Corporativo</option>
                <option className="bg-stone-900 text-white">Outro</option>
            </select>,
            isValid: formData.eventType !== ''
        },
        {
            title: "Quantos convidados?",
            field: <input type="number" name="guests" value={formData.guests} placeholder="Acima de 8 anos" required className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 text-neutral-300" onChange={handleChange} />,
            isValid: formData.guests !== '' && parseInt(formData.guests, 10) > 0
        },
        {
            title: "Alguma observação?",
            field: <textarea name="observations" value={formData.observations} placeholder="(Opcional)" rows={3} className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 text-neutral-300" onChange={handleChange}></textarea>,
            isValid: true // Optional field
        },
    ];

    if (showAgeWarning) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold font-display text-red-500 mb-4">Atenção!</h2>
                <p className="text-neutral-300 mb-6">Apenas maiores de 18 anos podem solicitar orçamentos. Peça a um responsável para entrar em contato.</p>
                <button onClick={() => { setShowAgeWarning(false); onClose(); }} className="bg-stone-700 hover:bg-stone-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                    Entendi
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-6 text-neutral-300">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent">Contato WhatsApp</h2>
            </div>
            {step < steps.length ? (
                <div key={step} className="space-y-6 animate-simple-fade-in text-center">
                    <label className="text-lg text-neutral-300">{steps[step].title}</label>
                    {steps[step].field}
                    <div className="flex justify-between items-center pt-2">
                        <button onClick={handleBack} disabled={step === 0} className="text-stone-400 hover:text-white transition-colors disabled:opacity-50 disabled:hover:text-stone-400">Voltar</button>
                        <button onClick={handleNext} disabled={!steps[step].isValid} className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Prosseguir</button>
                    </div>
                </div>
            ) : (
                <div key="summary" className="space-y-4 animate-simple-fade-in">
                    <h3 className="text-xl font-bold font-display text-stone-200 text-center">Resumo do Pedido</h3>
                    <div className="p-4 bg-black/30 rounded-lg border border-stone-700 space-y-2 text-sm text-neutral-300">
                       <p><strong>Nome:</strong> {formData.name}</p>
                       <p><strong>Data:</strong> {new Date(formData.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</p>
                       <p><strong>Local:</strong> {formData.location}</p>
                       <p><strong>Evento:</strong> {formData.eventType}</p>
                       <p><strong>Convidados:</strong> {formData.guests}</p>
                       <p><strong>Obs:</strong> {formData.observations || 'Nenhuma'}</p>
                    </div>
                     <div className="flex items-center space-x-2 pt-2">
                        <input type="checkbox" id="ageCheck" checked={isAdult} onChange={(e) => setIsAdult(e.target.checked)} className="h-4 w-4 rounded border-stone-500 bg-stone-700 text-green-600 focus:ring-green-500" />
                        <label htmlFor="ageCheck" className="text-neutral-400 text-sm">Confirmo que sou maior de 18 anos.</label>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                        <button onClick={handleBack} className="text-stone-400 hover:text-white transition-colors">Voltar</button>
                        <button onClick={handleSubmit} disabled={!isAdult} className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-green-500/30 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                            <WhatsAppIcon />
                            <span>Solicitar Orçamento</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export const ReviewModalContent: React.FC<{onClose: () => void}> = ({onClose}) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [feedbackStep, setFeedbackStep] = useState(false);

    const handleRatingClick = (rate: number) => {
        setRating(rate);
        if (rate === 5) {
            window.open('https://search.google.com/local/writereview?placeid=ChIJ6fca4iAb6JQRac7RaOk4DFU', '_blank');
            onClose();
        } else {
            setFeedbackStep(true);
        }
    };

    if (feedbackStep) {
        return (
             <form action="https://formsubmit.co/your-email@example.com" method="POST"> {/* TODO: Add formsubmit email */}
                <h2 className="text-2xl font-bold font-display text-red-500 mb-4 text-center">Que pena!</h2>
                <p className="text-neutral-300 mb-4 text-center">Lamentamos não ter atendido 100% suas expectativas. Por favor, conte-nos como podemos melhorar.</p>
                <textarea name="feedback" placeholder="Sua sugestão é muito importante para nós..." rows={4} className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 mb-4"></textarea>
                <input type="hidden" name="_next" value="https://milano-bartenders-linktree.netlify.app/thank-you" /> {/* TODO: Create a thank you page */}
                <button type="submit" className="w-full bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                    Enviar Feedback
                </button>
            </form>
        )
    }

    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent mb-4">Sua Opinião Importa</h2>
            <p className="text-neutral-300 mb-6">Como você avalia nosso serviço?</p>
            <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className={`w-8 h-8 md:w-10 md:h-10 cursor-pointer transition-colors duration-200 ${(hoverRating || rating) >= star ? 'text-stone-300 fill-stone-300' : 'text-stone-700 stroke-stone-600'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export const DeveloperModalContent: React.FC = () => {
    const [name, setName] = useState('');
    const [showNameInput, setShowNameInput] = useState(false);

    const handleWhatsAppClick = () => {
        if (!showNameInput) {
            setShowNameInput(true);
            return;
        }
        if (name.trim() === '') {
            alert('Por favor, insira seu nome.');
            return;
        }
        const message = `Olá, meu nome é ${name}! Vi o link da Milano Bartenders e quero um site incrível como esse! 🚀`;
        const whatsappUrl = `https://wa.me/5541988710303?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }
    
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent mb-2">InteligenciArte.IA</h2>
            <p className="text-neutral-500 mb-6">Desenvolvimento Web com Inteligência Artificial</p>
            
            <div className="flex justify-center space-x-6 mb-8">
                <a href="https://www.instagram.com/inteligenciarte.ia" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors flex flex-col items-center space-y-2">
                    <InstagramIcon />
                    <span>Instagram</span>
                </a>
            </div>

            <div className="space-y-4">
                {showNameInput && (
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Qual seu nome?"
                        className="w-full p-3 bg-black/40 rounded-md border border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all text-neutral-300"
                    />
                )}
                <button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                    <WhatsAppIcon />
                    <span>{showNameInput ? 'Confirmar e Chamar no WhatsApp' : 'Quer um site incrível como esse?'}</span>
                </button>
            </div>
        </div>
    )
};

export const BudgetCodeModalContent: React.FC<{ onCodeSuccess: () => void }> = ({ onCodeSuccess }) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const validCodes = ['7DIAS', 'MILANO2025', 'EXCLUSIVO', 'BAR2025', 'PROMO2025'];

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validCodes.includes(code.toUpperCase())) {
            onCodeSuccess();
        } else {
            setError('Código inválido. Tente novamente.');
        }
    };

    return (
        <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent">
                Acesso ao Orçamento
            </h2>
            <p className="text-neutral-300">
                Insira o código que você recebeu para visualizar os detalhes do orçamento de 2025.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => {
                        setCode(e.target.value);
                        if (error) setError('');
                    }}
                    placeholder="Seu código de acesso"
                    className={`w-full p-3 bg-black/40 rounded-md border ${error ? 'border-red-500 animate-shake' : 'border-stone-700'} focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-stone-400'} text-neutral-300 text-center transition-all`}
                    aria-invalid={!!error}
                    aria-describedby={error ? "code-error" : undefined}
                />
                {error && <p id="code-error" className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!code}
                >
                    Acessar Orçamento
                </button>
            </form>
        </div>
    );
};

export const BudgetModalContent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'gold' | 'diamond' | 'addons'>('gold');
    const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);

    const TabButton: React.FC<{ tab: 'gold' | 'diamond' | 'addons'; label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-lg transition-all duration-300 ${activeTab === tab ? 'bg-red-800 text-white shadow-md' : 'bg-black/30 border border-stone-700/60 hover:bg-black/50 hover:border-stone-500 text-neutral-300'}`}
        >
            {label}
        </button>
    );

    const goldPlans = [
        { name: 'Gold Standart', price: 'R$50,00', brands: ['Vodka Bacco ou Smirnoff', 'Gin Bacco ou Gordons', 'Rum Montila', 'Tequila brasileira', 'Energetico Baly ou Red Horse*'] },
        { name: 'Gold Plus', price: 'R$60,00', brands: ['Vodka Absolut ou Stolichnaya', 'Gin Tanqueray ou Bombay', 'Rum Bacardi', 'Tequila José Cuervo', 'Energetico Baly ou Red horse*'] },
        { name: 'Gold Premium', price: 'R$75,00', brands: ['Vodka Grey Goose ou Ciroc', 'Gin Tanqueray Ten', 'Rum Havana Club', 'Tequila El Jimador', 'Energético Red Bull*', 'Plus de Soda italiana e vodka com energético'] }
    ];

    const diamondPlans = [
        { name: 'Diamond Standart', price: 'R$60,00', brands: ['Vodka Bacco ou Smirnoff', 'Gin Bacco ou Gordons', 'Rum Montila', 'Tequila brasileira', 'Whiskey Jim Beam ou Red Label', 'Energetico Red Bull*'] },
        { name: 'Diamond Plus', price: 'R$70,00', brands: ['Vodka Absolut ou Stolichnaya', 'Gin Tanqueray ou Bombay', 'Rum Bacardi', 'Tequila José Cuervo', 'Whiskey Jack Daniels', 'Energético Red Bull*'] },
        { name: 'Diamond Premium', price: 'R$85,00', brands: ['Vodka Grey Goose ou Ciroc', 'Gin Tanqueray Ten', 'Rum Havana Club', 'Tequila El Jimador', 'Whiskey Jack Daniels ou Chivas 12', 'Energético Red Bull*', 'Plus de Soda italiana e vodka com energético'] }
    ];

    const PlanCard: React.FC<{ plan: { name: string; price: string; brands: string[] } }> = ({ plan }) => (
        <div className="bg-black/40 border border-stone-700/80 rounded-xl p-4 flex flex-col space-y-3 transition-transform duration-300 hover:scale-105 hover:border-stone-500">
            <h3 className="text-xl font-bold font-display text-stone-200 text-center">{plan.name}</h3>
            <p className="text-3xl font-bold text-red-600 text-center">{plan.price}</p>
            <p className="text-xs text-neutral-400 text-center -mt-2">por convidado</p>
            <div className="border-t border-stone-700 pt-3">
                <p className="text-sm font-semibold text-neutral-300 mb-2">Marcas utilizadas:</p>
                <ul className="text-xs text-neutral-400 space-y-1">
                    {plan.brands.map((brand, i) => <li key={i} className="flex items-start"><span className="text-red-500 mr-2 mt-1">◆</span>{brand}</li>)}
                </ul>
            </div>
        </div>
    );
    
    return (
        <div className="space-y-6 text-neutral-300">
            <div className="text-center">
                <h2 className="text-4xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent">
                    Orçamento 2025
                </h2>
                 <a
                    href="/portfolio-milano-2025.pdf"
                    download="portfolio-milano-2025.pdf"
                    className="inline-flex items-center justify-center space-x-2 text-sm text-stone-400 hover:text-white transition-colors duration-300 mt-2"
                >
                    <div className="h-5 w-5"><DownloadIcon /></div>
                    <span>Baixar Portfólio Completo</span>
                </a>
            </div>

            <div className="flex justify-center items-center space-x-2 md:space-x-4">
                <TabButton tab="gold" label="Planos Gold" />
                <TabButton tab="diamond" label="Planos Diamond" />
                <TabButton tab="addons" label="Adicionais" />
            </div>

            <div className="pt-2">
                {activeTab === 'gold' && (
                    <div className="space-y-4 animate-simple-fade-in">
                        <p className="text-center text-sm text-neutral-400 italic">Nosso plano de entrada, mas que já conta com um mix super completo de cocktails para você surpreender seus convidados.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {goldPlans.map(plan => <PlanCard key={plan.name} plan={plan} />)}
                        </div>
                    </div>
                )}

                {activeTab === 'diamond' && (
                    <div className="space-y-4 animate-simple-fade-in">
                        <p className="text-center text-sm text-neutral-400 italic">Nosso plano mais completo, fique a vontade para escolher 6 drinks do plano que preferir.</p>
                         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {diamondPlans.map(plan => <PlanCard key={plan.name} plan={plan} />)}
                        </div>
                    </div>
                )}
                
                {activeTab === 'addons' && (
                     <div className="space-y-4 animate-simple-fade-in">
                         <p className="text-center text-sm text-neutral-400 italic">Inove e surpreenda seus convidados com nossas experiências exclusivas.</p>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="bg-black/40 border border-stone-700/80 rounded-xl p-4 space-y-2">
                                 <h3 className="text-xl font-bold font-display text-stone-200">Welcome Drink</h3>
                                 <p className="text-xs text-neutral-400">Gelo translúcido personalizado com barman servindo:</p>
                                 <div className="text-sm text-neutral-300 space-y-1 pt-1">
                                    <p><strong>Clericot:</strong> R$1.500,00</p>
                                    <p><strong>Aperol Spritz:</strong> R$2.000,00</p>
                                    <p><strong>Lillet Spritz:</strong> R$2.500,00</p>
                                 </div>
                             </div>
                             <div className="bg-black/40 border border-stone-700/80 rounded-xl p-4 flex flex-col justify-center">
                                 <h3 className="text-xl font-bold font-display text-stone-200">Pistola de Bolha Aromática</h3>
                                 <p className="text-2xl font-bold text-red-600">a partir de R$500,00</p>
                             </div>
                              <div className="bg-black/40 border border-stone-700/80 rounded-xl p-4 flex flex-col justify-center md:col-span-2">
                                 <h3 className="text-xl font-bold font-display text-stone-200">Fonte de Bebidas</h3>
                                 <p className="text-2xl font-bold text-red-600">a partir de R$800,00</p>
                             </div>
                         </div>
                     </div>
                )}
            </div>
            
            {(activeTab === 'gold' || activeTab === 'diamond') && (
                <div className="bg-black/20 border border-stone-800 rounded-lg p-4 mt-6 text-center space-y-3 animate-simple-fade-in">
                    <p className="text-base font-semibold text-green-400">10% OFF fechando dentro de 7 dias</p>
                    <p className="text-sm text-neutral-400"><strong className="text-neutral-300">Carga horária:</strong> Até 7 horas de open bar</p>
                    <p className="text-sm text-neutral-400"><strong className="text-neutral-300">Forma de Pagamento:</strong> Entrada de R$300,00 e o restante até 1 dia antes do evento.</p>
                    <p className="text-sm text-yellow-400/80 italic pt-2 border-t border-stone-700/50">Novidades em breve: Havenas Vodka e Gin, fique ligado!</p>
                </div>
            )}
            
            <div className="py-4">
                <a
                    href="/orcamento-promo-2025.pdf"
                    download="orcamento-promo-2025.pdf"
                    className="w-full flex items-center justify-center space-x-3 text-center bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-red-900/40"
                >
                    <div className="h-6 w-6"><DownloadIcon /></div>
                    <span>Baixar Orçamento Detalhado</span>
                </a>
            </div>

            <div className="border-t border-stone-700/50 pt-4">
                <button onClick={() => setIsDetailsExpanded(!isDetailsExpanded)} className="w-full text-center text-stone-400 hover:text-white transition-colors text-sm font-semibold">
                    {isDetailsExpanded ? 'Ocultar' : 'Ver'} detalhes e observações importantes {isDetailsExpanded ? '▲' : '▼'}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isDetailsExpanded ? 'max-h-screen pt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-neutral-400">
                        <div>
                            <h4 className="font-bold text-base text-stone-300 mb-2">Tudo que está incluso</h4>
                            <ul className="space-y-2">
                                <li>- Mão de obra de 2 barmans a cada 50 pessoas.</li>
                                <li>- Todas as bebidas, frutas e insumos.</li>
                                <li>- Balcão para trabalho, se necessário.</li>
                                <li>- Bebidas de alta qualidade.</li>
                                <li>- Gelo e local para armazenamento.</li>
                                <li>- Drinks feitos na hora.</li>
                                <li>- Copos, taças e canequinhas para cada drink.</li>
                                <li>- Drink personalizado com logomarca ou brasão.</li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-bold text-base text-stone-300 mb-2">Observações Importantes</h4>
                             <ul className="space-y-2">
                                <li>- Convidados a partir de 8 anos são contabilizados.</li>
                                <li>- Drinks não alcoólicos sempre disponíveis.</li>
                                <li>- Para eventos fora de Ponta Grossa, consultar deslocamento.</li>
                                <li>- Hora-extra: +12% sobre o valor total.</li>
                                <li>- Com bar, o consumo de outras bebidas reduz de 30% a 40%.</li>
                                <li>- Proposta válida por 7 dias.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const faqData = [
    {
        question: "Posso alterar o pacote depois de fechar o contrato?",
        answer: "Sim! O mais importante é garantir a data para não correr o risco de ficarmos sem disponibilidade. O pacote e a escolha dos drinks podem ser definidos até uma semana antes do evento, mantendo os valores do orçamento original.",
        icon: <ContractIcon />
    },
    {
        question: "Como faço para reservar minha data?",
        answer: "É bem simples. Com uma entrada de apenas R$300,00, elaboramos o contrato e sua data fica garantida. O pagamento final é realizado somente na semana do evento.",
        icon: <DateReserveIcon />
    },
    {
        question: "Quais são as formas de pagamento?",
        answer: "Aceitamos parcelamento no cartão de crédito (com repasse da taxa da máquina) ou pagamentos parcelados via PIX/transferência até a data do evento, com cada pagamento validado por comprovante.",
        icon: <CreditCardIcon />
    },
    {
        question: "O que acontece se o número de convidados mudar?",
        answer: "Não se preocupe. O valor final é ajustado na semana do evento, após a confirmação do número de convidados, de forma proporcional ao valor combinado.",
        icon: <UsersIcon />
    },
    {
        question: "Como funciona a contagem de convidados?",
        answer: "Contabilizamos todos os convidados acima de 8 anos. Nossa proposta já considera a variação de consumo entre eles. Oferecemos um cardápio completo com drinks não alcoólicos para que todos possam aproveitar.",
        icon: <UsersIcon />
    }
];

const FAQItem: React.FC<{
    item: { question: string; answer: string; icon: React.ReactNode };
    isOpen: boolean;
    onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-stone-800/80 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-stone-900/30 rounded-t-lg transition-colors duration-200"
                aria-expanded={isOpen}
            >
                <div className="flex items-center space-x-4">
                    <div className={`transition-transform duration-300 ease-in-out ${isOpen ? 'scale-110' : 'scale-100'}`}>
                        <div className="w-6 h-6 text-red-600">{item.icon}</div>
                    </div>
                    <span className="text-base font-medium text-neutral-200">{item.question}</span>
                </div>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-black/20 rounded-b-lg p-4 pl-12 border-t border-stone-800/80">
                    <p className="text-neutral-400 text-sm leading-relaxed text-justify">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};


export const FAQModalContent: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleItemClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            <h2 className="text-3xl font-bold font-display bg-gradient-to-r from-stone-200 to-rose-200 animated-gradient bg-clip-text text-transparent text-center mb-4">
                Dúvidas Frequentes
            </h2>
            <div className="space-y-2">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
