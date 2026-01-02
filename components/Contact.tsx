
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  };

  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Entre em Contato</h2>
              <p className="text-slate-400 text-lg">
                Agende sua consulta gratuita e descubra como podemos ajudá-lo a conquistar seus direitos de forma rápida e segura.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-white text-xl font-bold">{CONTACT_INFO.phoneFormatted}</p>
                  <p className="text-xs text-slate-500">Seg a Sex: 8h às 18h</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">E-mail</p>
                  <p className="text-white text-xl font-bold">{CONTACT_INFO.email}</p>
                  <p className="text-xs text-slate-500">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest font-bold">Localização</p>
                  <p className="text-white text-xl font-bold">{CONTACT_INFO.address}</p>
                  <p className="text-xs text-slate-500">Atendimento em todo Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Consulta Gratuita</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Seu nome"
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    required
                    placeholder="seu@email.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Telefone/WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Conte seu caso</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Descreva brevemente sua situação..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-5 rounded-xl transition-all shadow-xl shadow-amber-900/10 flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">
                Seus dados estão protegidos e serão usados apenas para contato.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
