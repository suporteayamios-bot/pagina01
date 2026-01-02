
import React from 'react';
// Added Scale to the lucide-react imports
import { CheckCircle2, MessageSquare, Scale } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-slate-950 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Atendimento em Todo Brasil
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Seus Direitos <br />
              <span className="text-amber-500">Trabalhistas</span> <br />
              Garantidos
            </h1>

            <p className="text-lg text-slate-300 max-w-xl">
              Especialista em recuperar verbas rescisórias, horas extras, FGTS e indenizações. 
              Mais de 15 anos defendendo trabalhadores em todo o país com excelência e dedicação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={CONTACT_INFO.whatsappUrl} 
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded font-bold text-lg transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)]"
              >
                Consulta Gratuita
                <MessageSquare size={20} />
              </a>
              <a 
                href="#sobre" 
                className="flex items-center justify-center border border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded font-bold text-lg transition-all"
              >
                Conheça o Advogado
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={18} />
                Sem custos iniciais
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={18} />
                Atendimento online
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={18} />
                Resultados comprovados
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-1000">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Você foi prejudicado?</h3>
              <ul className="space-y-4">
                {[
                  'Demitido sem receber verbas rescisórias',
                  'Horas extras não pagas',
                  'FGTS não depositado',
                  'Acidente de trabalho',
                  'Assédio moral ou discriminação',
                  'Desvio de função'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                  <Scale className="text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-bold">Lucas Bittencourt</p>
                  <p className="text-xs text-slate-400">OAB/PR 123.456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
