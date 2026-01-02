
import React from 'react';
import { Zap, Shield, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Atendimento Ágil',
    description: 'Resposta rápida e comunicação clara durante todo o processo.'
  },
  {
    icon: Shield,
    title: 'Sem Custos Iniciais',
    description: 'Você só paga se ganhar a causa. Sem surpresas ou taxas escondidas.'
  },
  {
    icon: Award,
    title: 'Experiência Comprovada',
    description: 'Anos de atuação com resultados expressivos para nossos clientes.'
  },
  {
    icon: Globe,
    title: 'Atuação Nacional',
    description: 'Atendemos casos em todo o Brasil de forma online e presencial.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher Nosso Escritório?</h2>
          <p className="text-slate-400 text-lg">Compromisso com resultados e transparência em cada etapa do processo jurídico.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
