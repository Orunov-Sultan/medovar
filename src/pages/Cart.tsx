import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-brand-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="text-brand-primary" size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Ваша корзина пуста</h1>
          <p className="text-brand-text/60 mb-10">
            Кажется, вы еще не добавили ни одного товара в корзину. 
            Самое время выбрать что-нибудь вкусное и полезное!
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-brand-dark text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300"
          >
            В магазин
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
              <h1 className="text-3xl font-bold">Корзина</h1>
              <span className="text-brand-text/60 font-medium">{totalItems} товаров</span>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-white rounded-2xl border border-gray-100 group hover:shadow-sm transition-shadow"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="text-lg font-bold text-brand-dark mb-1">{item.name}</h3>
                    <p className="text-sm text-brand-text/60 mb-2">{item.weight}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-4">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-50 transition-colors text-brand-text cursor-pointer"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold text-brand-dark">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors text-brand-text cursor-pointer"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 transition-colors p-2 cursor-pointer"
                        title="Удалить"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-xl font-bold text-brand-dark">{item.price * item.quantity} ₽</p>
                    <p className="text-xs text-brand-text/40">{item.price} ₽ / шт.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link 
                to="/shop" 
                className="inline-flex items-center text-brand-dark hover:text-brand-primary font-bold uppercase tracking-widest text-xs transition-colors group"
              >
                <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                Вернуться к покупкам
              </Link>
            </div>
          </div>

          {/* Sidebar / Summary */}
          <div className="lg:w-1/3">
            <div className="bg-brand-cream/50 p-8 rounded-3xl border border-brand-primary/10 sticky top-32">
              <h2 className="text-2xl font-bold mb-8 text-brand-dark">Итого</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-brand-text/70 font-medium">
                  <span>Товары ({totalItems})</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between text-brand-text/70 font-medium">
                  <span>Доставка</span>
                  <span className="text-green-600">Бесплатно</span>
                </div>
                <div className="pt-4 border-t border-brand-dark/10 flex justify-between items-end">
                  <span className="text-lg font-bold text-brand-dark uppercase tracking-tight">К оплате</span>
                  <span className="text-3xl font-bold text-brand-primary">{totalPrice} ₽</span>
                </div>
              </div>

              <Link 
                to="/checkout" 
                className="block w-full bg-brand-dark text-white text-center py-5 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-dark/10"
              >
                Оформить заказ
              </Link>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-xs text-brand-text/60">
                  <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                  <span>Оплата при получении или онлайн</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-brand-text/60">
                  <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
                  <span>Доставка в день заказа (до 18:00)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
