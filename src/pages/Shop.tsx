import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import type { Category } from '../types/shared';
import ProductGrid from '../components/products/ProductGrid';

const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Все сорта' },
  { id: 'classic', label: 'Классика' },
  { id: 'fruit', label: 'Ягодные' },
  { id: 'spiced', label: 'Пряные' },
  { id: 'limited', label: 'Лимитированные' },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-12 lg:py-20">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h6 className="text-brand-primary uppercase tracking-[0.3em] font-semibold mb-4">
            Каталог медоварни
          </h6>
          <h1 className="text-4xl lg:text-6xl mb-6">Наши напитки</h1>
          <p className="text-lg text-brand-text/80 leading-relaxed">
            Мы создаем медовуху по старинным рецептам, используя только натуральный мед, 
            родниковую воду и отборные ягоды и травы.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-dark text-white'
                  : 'bg-white text-brand-text hover:bg-brand-cream border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Count and Grid */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-brand-text/60 font-medium">
            Найдено товаров: <span className="text-brand-dark">{filteredProducts.length}</span>
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-xl text-brand-text">В этой категории пока ничего нет.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
