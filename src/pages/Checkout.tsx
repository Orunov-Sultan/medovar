import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { ArrowLeft, CheckCircle2, CreditCard, Truck, MapPin, User } from 'lucide-react';

const Checkout = () => {
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ваша корзина пуста</h2>
        <Link to="/shop" className="text-brand-primary font-bold hover:underline">
          Вернуться в магазин
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
    toast.success('Заказ успешно оформлен! Спасибо за доверие.', {
      duration: 5000,
      icon: '🍯',
    });
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-green-500" size={48} />
          </div>
          <h1 className="text-4xl font-bold text-brand-dark mb-6">Заказ успешно оформлен!</h1>
          <p className="text-brand-text/60 text-lg mb-12 leading-relaxed">
            Спасибо за покупку! Наш менеджер свяжется с вами в течение 15 минут для подтверждения деталей доставки. 
            Номер вашего заказа: <span className="text-brand-dark font-bold">#2026-0605</span>
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-brand-dark text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-lg cursor-pointer"
          >
            Вернуться в магазин
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Form */}
          <div className="lg:w-2/3">
            <div className="mb-10">
              <Link 
                to="/cart" 
                className="inline-flex items-center text-brand-text/60 hover:text-brand-dark transition-colors mb-6 group cursor-pointer"
              >
                <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Вернуться в корзину
              </Link>
              <h1 className="text-4xl font-bold text-brand-dark">Оформление заказа</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Contact Info */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <User className="text-brand-primary" size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark">Контактные данные</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Имя</label>
                    <input required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Телефон</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Email</label>
                    <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors" placeholder="hello@example.com" />
                  </div>
                </div>
              </section>

              {/* Delivery Info */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <Truck className="text-brand-primary" size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark">Доставка</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Город</label>
                    <input required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors" placeholder="Москва" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Индекс</label>
                    <input required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors" placeholder="101000" />
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <label className="text-xs font-bold text-brand-text/40 uppercase tracking-widest ml-1">Адрес</label>
                    <input required className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:border-brand-primary outline-none transition-colors" placeholder="ул. Пушкина, д. 10, кв. 5" />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="text-brand-primary" size={18} />
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark">Способ оплаты</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="relative flex items-center p-6 bg-gray-50 border-2 border-transparent rounded-2xl cursor-pointer hover:bg-white hover:border-brand-primary/20 transition-all has-[:checked]:border-brand-primary has-[:checked]:bg-white group">
                    <input type="radio" name="payment" className="hidden peer" defaultChecked />
                    <div className="flex-grow">
                      <div className="font-bold text-brand-dark mb-1">При получении</div>
                      <div className="text-sm text-brand-text/60">Наличными или картой курьеру</div>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 peer-checked:border-brand-primary peer-checked:bg-brand-primary flex items-center justify-center transition-all">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </label>
                  <label className="relative flex items-center p-6 bg-gray-50 border-2 border-transparent rounded-2xl cursor-pointer hover:bg-white hover:border-brand-primary/20 transition-all has-[:checked]:border-brand-primary has-[:checked]:bg-white group">
                    <input type="radio" name="payment" className="hidden peer" />
                    <div className="flex-grow">
                      <div className="font-bold text-brand-dark mb-1">Онлайн</div>
                      <div className="text-sm text-brand-text/60">Банковской картой на сайте</div>
                    </div>
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 peer-checked:border-brand-primary peer-checked:bg-brand-primary flex items-center justify-center transition-all">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </label>
                </div>
              </section>

              <button 
                type="submit" 
                className="w-full bg-brand-dark text-white py-6 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-xl shadow-brand-dark/10 cursor-pointer"
              >
                Подтвердить заказ на {totalPrice} ₽
              </button>
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:w-1/3">
            <div className="bg-brand-cream/30 p-8 rounded-[2.5rem] border border-brand-primary/10 sticky top-32">
              <h2 className="text-2xl font-bold mb-8 text-brand-dark">Ваш заказ</h2>
              
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-brand-dark text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-brand-text/60 mb-1">{item.quantity} шт. × {item.price} ₽</p>
                      <p className="font-bold text-brand-primary text-sm">{item.price * item.quantity} ₽</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-brand-dark/5">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/60">Товары ({totalItems})</span>
                  <span className="font-bold text-brand-dark">{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-text/60">Доставка</span>
                  <span className="font-bold text-green-600">Бесплатно</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-brand-dark/10">
                  <span className="text-lg font-bold text-brand-dark uppercase tracking-tight">Итого</span>
                  <span className="text-2xl font-bold text-brand-primary">{totalPrice} ₽</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/50 rounded-2xl flex gap-3">
                <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-dark" size={18} />
                </div>
                <p className="text-xs text-brand-text/70 leading-relaxed">
                  Мы доставляем заказы по всей России. Срок доставки зависит от вашего региона.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
