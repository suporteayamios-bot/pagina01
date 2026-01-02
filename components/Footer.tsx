
import React from 'react';
import { Scale, ChevronRight, Heart } from 'lucide-react';
import { NAVIGATION_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Scale className="text-amber-500 w-8 h-8" />
              <div>
                <span className="block font-bold text-xl leading-none">Lucas Bittencourt</span>
                <span className="block text-[10px] tracking-widest uppercase text-slate-500">Advocacia Trabalhista</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Dedicação exclusiva aos direitos dos trabalhadores com excelência e compromisso. Atuação estratégica em todo território nacional.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-500 hover:text-amber-500 text-sm transition-colors flex items-center gap-2">
                    <ChevronRight size={14} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Contato Direto</h4>
            <div className="grid sm:grid-cols-2 gap-8 text-sm text-slate-500">
              <div className="space-y-2">
                <p className="font-bold text-white">Telefone & WhatsApp:</p>
                <p className="text-amber-500 font-bold text-lg">{CONTACT_INFO.phoneFormatted}</p>
                <p>Segunda a Sexta, 8h - 18h</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Canais Digitais:</p>
                <p>{CONTACT_INFO.email}</p>
                <p>Atendimento 100% Online</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Lucas Bittencourt - Advogado. <br className="md:hidden" /> Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[11px] hover:border-amber-500/50 transition-colors">
              feito por <span className="font-bold text-amber-500 uppercase tracking-tighter">ayam digital</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
