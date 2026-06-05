import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck, RotateCcw, Plus, Minus, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Товар не найден</h2>
        <Link to="/shop" className="text-brand-primary font-bold hover:underline">
          Вернуться в магазин
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="py-12 lg:py-20">
      <div className="container-custom">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-brand-text/60 hover:text-brand-dark mb-10 transition-colors group cursor-pointer"
        >
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Назад
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 bg-brand-primary text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Натуральный продукт
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-sm text-brand-text/40 font-medium">(12 отзывов)</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">{product.name}</h1>
              <p className="text-xl text-brand-text/60 font-medium mb-6">{product.weight}</p>
              <div className="text-3xl font-bold text-brand-primary mb-8">{product.price} ₽</div>
              <p className="text-brand-text/70 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <div className="flex items-center border-2 border-gray-100 rounded-xl p-1 bg-gray-50/50">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-brand-dark cursor-pointer"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-lg transition-colors text-brand-dark cursor-pointer"
                >
                  <Plus size={18} />
                </button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-brand-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-brand-dark/10 cursor-pointer"
              >
                <ShoppingCart size={20} />
                В корзину
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <ShieldCheck className="text-brand-primary" size={24} />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark mb-1">Качество</h4>
                  <p className="text-xs text-brand-text/60">100% натурально</p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <Truck className="text-brand-primary" size={24} />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark mb-1">Доставка</h4>
                  <p className="text-xs text-brand-text/60">От 3000 ₽ бесплатно</p>
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                <RotateCcw className="text-brand-primary" size={24} />
                <div>
                  <h4 className="font-bold text-sm text-brand-dark mb-1">Возврат</h4>
                  <p className="text-xs text-brand-text/60">В течение 14 дней</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex border-b border-gray-100 mb-10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all relative cursor-pointer ${activeTab === 'description' ? 'text-brand-dark' : 'text-brand-text/40'}`}
            >
              Описание
              {activeTab === 'description' && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary"></div>}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all relative cursor-pointer ${activeTab === 'specs' ? 'text-brand-dark' : 'text-brand-text/40'}`}
            >
              Характеристики
              {activeTab === 'specs' && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary"></div>}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all relative cursor-pointer ${activeTab === 'reviews' ? 'text-brand-dark' : 'text-brand-text/40'}`}
            >
              Отзывы
              {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-primary"></div>}
            </button>
          </div>

          <div className="max-w-3xl leading-relaxed text-brand-text/70">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <p>{product.fullDescription}</p>
              </div>
            )}
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <p>{product.characteristics}</p>
              </div>
            )}
            {activeTab === 'reviews' && <p>Отзывов пока нет.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
