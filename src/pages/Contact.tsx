import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, Share2, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="py-20 bg-brand-cream">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-dark">Контакты</h1>
          <p className="text-brand-text/60 max-w-2xl mx-auto">
            Остались вопросы? Мы всегда рады общению! Свяжитесь с нами любым удобным способом 
            или оставьте заявку, и мы перезвоним вам.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-8 text-brand-dark">Как нас найти</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="text-brand-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-text/40 uppercase font-bold tracking-widest mb-1">Телефон</p>
                      <a href="tel:+79001234567" className="text-lg font-bold text-brand-dark hover:text-brand-primary transition-colors">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-brand-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-text/40 uppercase font-bold tracking-widest mb-1">Email</p>
                      <a href="mailto:hello@medovar.ru" className="text-lg font-bold text-brand-dark hover:text-brand-primary transition-colors">
                        hello@medovar.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-brand-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-text/40 uppercase font-bold tracking-widest mb-1">Адрес пасеки</p>
                      <p className="text-lg font-bold text-brand-dark">
                        Алтайский край, с. Солонешное, ул. Луговая, 15
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="text-brand-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-brand-text/40 uppercase font-bold tracking-widest mb-1">Режим работы</p>
                      <p className="text-lg font-bold text-brand-dark">
                        Ежедневно: 09:00 — 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-brand-dark">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  {[
                    { icon: <Globe size={20} />, label: 'Website' },
                    { icon: <MessageCircle size={20} />, label: 'WhatsApp' },
                    { icon: <Share2 size={20} />, label: 'Social' }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="w-12 h-12 bg-brand-dark text-white rounded-xl flex items-center justify-center hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-dark/5"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-brand-dark/5">
                <h2 className="text-2xl font-bold mb-8 text-brand-dark">Напишите нам</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-brand-dark uppercase tracking-widest ml-1">Имя</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-brand-dark uppercase tracking-widest ml-1">Телефон</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-brand-dark uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors"
                      placeholder="hello@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-brand-dark uppercase tracking-widest ml-1">Сообщение</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-brand-primary transition-colors resize-none"
                      placeholder="Расскажите, чем мы можем вам помочь..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-brand-dark text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-brand-dark/10"
                  >
                    Отправить сообщение
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
