
import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, FileDown } from 'lucide-react';
import { NAVIGATION_LINKS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    setIsOpen(false);
    // Pequeno delay para garantir que menus mobile fechem antes da captura
    window.setTimeout(() => {
      window.print();
    }, 250);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'} print:hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Scale className={`w-8 h-8 ${scrolled ? 'text-amber-600' : 'text-amber-500'}`} />
            <div>
              <span className={`block font-bold text-xl leading-none ${scrolled ? 'text-slate-800' : 'text-white'}`}>Lucas Bittencourt</span>
              <span className={`block text-[10px] tracking-widest uppercase ${scrolled ? 'text-slate-500' : 'text-slate-300'}`}>Advocacia Trabalhista</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Botão de PDF conforme pedido: Apenas Ícone */}
            <button 
              onClick={handlePrint}
              className={`p-2.5 border rounded-full transition-all flex items-center justify-center hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 ${scrolled ? 'border-slate-200 text-slate-600' : 'border-white/20 text-white'}`}
              title="Exportar para PDF"
              aria-label="Baixar PDF"
            >
              <FileDown size={20} />
            </button>

            <a
              href={CONTACT_INFO.whatsappUrl}
              className="bg-amber-600 text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-amber-700 transition-all shadow-lg shadow-amber-900/10"
            >
              Contato
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={handlePrint} 
              className={`p-2 rounded-full border ${scrolled ? 'text-slate-600 border-slate-200' : 'text-white border-white/20'}`}
              title="Baixar PDF"
            >
              <FileDown size={22} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-slate-800' : 'text-white'}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 border-b border-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CONTACT_INFO.whatsappUrl}
              className="mt-4 block w-full text-center bg-amber-600 text-white px-6 py-4 rounded font-bold text-base"
              onClick={() => setIsOpen(false)}
            >
              Consulta Gratuita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
