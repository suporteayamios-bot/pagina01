
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Fui demitida sem justa causa e não recebi minhas verbas rescisórias. O Dr. Lucas conseguiu recuperar tudo o que eu tinha direito em apenas 6 meses. Profissional excepcional!",
    author: "Maria Silva",
    role: "Ex-funcionária de logística"
  },
  {
    content: "Trabalhei por 8 anos fazendo horas extras sem receber. Consegui recuperar mais de R$ 40 mil graças ao trabalho dedicado do escritório. Super recomendo!",
    author: "João Santos",
    role: "Operador de produção"
  },
  {
    content: "Sofri assédio moral no trabalho e não sabia o que fazer. O Dr. Lucas me acolheu e lutou pelos meus direitos. Ganhamos a causa e recebi a indenização justa.",
    author: "Ana Paula Costa",
    role: "Atendente de call center"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-slate-600">Depoimentos reais de quem confiou em nosso trabalho e teve seus direitos restabelecidos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:border-amber-200 transition-all shadow-sm">
              <Quote className="absolute top-4 right-4 text-amber-500/10" size={40} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 relative z-10">"{item.content}"</p>
              <div>
                <p className="font-bold text-slate-900">{item.author}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
