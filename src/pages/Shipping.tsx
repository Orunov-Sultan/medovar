import React from 'react';
import { Truck, CreditCard, Clock, MapPin, ShieldCheck, Zap } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="py-20 bg-brand-cream">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-brand-dark">Доставка и оплата</h1>
          <p className="text-brand-text/60 max-w-2xl mx-auto">
            Мы заботимся о том, чтобы наш мёд попал к вам в целости и сохранности. 
            Узнайте подробнее о способах получения и оплаты вашего заказа.
          </p>
        </div>
      </section>

      {/* Delivery Methods */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="text-brand-primary" size={32} />,
                title: "Курьерская доставка",
                desc: "Доставка до двери в течение 1-2 дней. Доступно в крупных городах."
              },
              {
                icon: <MapPin className="text-brand-primary" size={32} />,
                title: "Пункты выдачи",
                desc: "СДЭК, Boxberry или Почта России. Заберите заказ в удобное для вас время."
              },
              {
                icon: <Zap className="text-brand-primary" size={32} />,
                title: "Экспресс-доставка",
                desc: "Доставка в день заказа при оформлении до 14:00 (только по городу)."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 bg-brand-cream w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-brand-text/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-brand-dark text-white rounded-[3rem] mx-4 lg:mx-10 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Способы оплаты</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl h-fit">
                    <CreditCard className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Онлайн на сайте</h4>
                    <p className="text-white/60 text-sm">Принимаем карты Visa, MasterCard, МИР. Безопасные платежи через защищенный шлюз.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white/10 p-4 rounded-xl h-fit">
                    <ShieldCheck className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">При получении</h4>
                    <p className="text-white/60 text-sm">Оплачивайте наличными или картой курьеру после проверки целостности упаковки.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-brand-primary" size={28} />
                <h3 className="text-2xl font-bold">Важно знать</h3>
              </div>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Бесплатная доставка при заказе от 3500 ₽.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Мы используем специальную противоударную упаковку для стеклянной тары.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Вы можете вернуть товар в течение 14 дней, если упаковка не была вскрыта.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
