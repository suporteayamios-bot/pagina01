
import React from 'react';
import { 
  FileText, 
  Clock, 
  ShieldCheck, 
  Activity, 
  Users, 
  ArrowRightLeft 
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Verbas Rescisórias',
    description: 'Recuperação de aviso prévio, férias, 13º salário e multa do FGTS não pagos na rescisão.'
  },
  {
    icon: Clock,
    title: 'Horas Extras',
    description: 'Cobrança de horas extras, adicional noturno, banco de horas irregular e intervalos suprimidos.'
  },
  {
    icon: ShieldCheck,
    title: 'FGTS e Seguro-Desemprego',
    description: 'Regularização de depósitos não realizados e liberação de benefícios negados.'
  },
  {
    icon: Activity,
    title: 'Acidente de Trabalho',
    description: 'Indenizações por acidentes, doenças ocupacionais e condições insalubres de trabalho.'
  },
  {
    icon: Users,
    title: 'Assédio e Discriminação',
    description: 'Defesa contra assédio moral, sexual e discriminação no ambiente de trabalho.'
  },
  {
    icon: ArrowRightLeft,
    title: 'Desvio de Função',
    description: 'Reconhecimento e pagamento de diferenças salariais por exercer função superior.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Áreas de Atuação</h2>
          <p className="text-lg text-slate-600">
            Defesa completa dos seus direitos trabalhistas com excelência e comprometimento em cada detalhe do processo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
