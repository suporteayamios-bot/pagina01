
import React from 'react';
import { Check, Gavel } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Justiça e Acordo - Advocacia Lucas Bittencourt" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white shrink-0">
                  <Gavel size={24} />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">Especialista Reconhecido</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Direito do Trabalho</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
              OAB/PR - Advocacia com Excelência
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Dr. Lucas Bittencourt
            </h2>
            <p className="text-lg text-slate-600">
              Advogado especializado em Direito do Trabalho com mais de 15 anos de experiência defendendo os direitos de trabalhadores em todo o Brasil.
            </p>
            <p className="text-slate-600">
              Formado pela Universidade Federal do Paraná (UFPR), com pós-graduação em Direito e Processo do Trabalho, dedico minha carreira a garantir que cada trabalhador receba o que é seu por direito, através de uma atuação ética e incansável.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 py-4">
              {[
                'Mais de 2.500 casos atendidos',
                'Taxa de sucesso superior a 90%',
                'Atendimento humanizado',
                'Estratégias jurídicas assertivas'
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                    <Check size={12} className="text-white font-bold" />
                  </div>
                  <span className="text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a 
              href={CONTACT_INFO.whatsappUrl}
              className="inline-block bg-slate-950 text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl"
            >
              Agende sua Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
