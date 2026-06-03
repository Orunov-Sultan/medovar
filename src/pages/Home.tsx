import { ArrowRight, ShieldCheck, Sun, Truck, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';

const Home = () => {
  const popularProducts = products.filter(p => p.isPopular).slice(0, 4);
  const advantages = [
    {
      icon: <ShieldCheck className="text-brand-primary" size={32} />,
      title: "100% Натурально",
      description: "Никаких добавок, консервантов или сахара. Только чистый мёд."
    },
    {
      icon: <Sprout className="text-brand-primary" size={32} />,
      title: "Своя пасека",
      description: "Мы контролируем каждый этап — от цветения до упаковки."
    },
    {
      icon: <Sun className="text-brand-primary" size={32} />,
      title: "Традиции",
      description: "Бережное пчеловодство, передаваемое из поколения в поколение."
    },
    {
      icon: <Truck className="text-brand-primary" size={32} />,
      title: "Доставка",
      description: "Бережная упаковка и быстрая доставка к вашему столу."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-10 lg:pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-xl order-2 lg:order-1">
              <h6 className="text-brand-primary uppercase tracking-[0.3em] font-semibold mb-6">
                Продукты пчеловодства
              </h6>
              <h1 className="text-5xl lg:text-7xl mb-8 leading-[1.1]">
                Природа в каждой <br /> 
                <span className="text-brand-primary italic">капле мёда</span>
              </h1>
              <p className="text-lg text-brand-text/80 mb-10 leading-relaxed">
                Откройте для себя чистый вкус натурального мёда, собранного на нашей семейной пасеке в экологически чистом районе. Без добавок, только то, что дала природа.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/shop" 
                  className="bg-brand-dark text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-brand-primary transition-all duration-500 flex items-center justify-center group"
                >
                  В каталог
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link 
                  to="/about" 
                  className="border border-brand-dark/20 text-brand-dark px-10 py-5 uppercase tracking-widest text-sm font-bold hover:border-brand-dark transition-all duration-500 text-center"
                >
                  О пасеке
                </Link>
              </div>
            </div>

            {/* Image Container with Animation */}
            <div className="relative order-1 lg:order-2 group">
              <div className="relative z-10 transition-all duration-700 ease-in-out transform group-hover:scale-[1.02] group-hover:rotate-0 rotate-2">
                <img 
                  src="/images/banner-image1.png" 
                  alt="Натуральный мёд Медовар" 
                  className="w-full h-auto object-cover rounded-[40px] shadow-2xl transition-all duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-brand-dark font-bold text-sm uppercase tracking-widest">100% Натурально</p>
                </div>
                <p className="text-brand-text/60 text-xs mt-1 text-center">Собрано вручную</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/15 rounded-full blur-3xl -z-0 group-hover:bg-brand-primary/20 transition-colors duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-6 p-5 bg-white rounded-2xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{adv.title}</h3>
                <p className="text-brand-text/70 leading-relaxed text-sm">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h6 className="text-brand-primary uppercase tracking-[0.3em] font-semibold mb-4">
                Наш выбор
              </h6>
              <h2 className="text-4xl lg:text-5xl">Популярные сорта</h2>
            </div>
            <Link 
              to="/shop" 
              className="group flex items-center text-brand-dark font-bold uppercase tracking-widest text-sm hover:text-brand-primary transition-colors"
            >
              Смотреть всё
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          <ProductGrid products={popularProducts} />
        </div>
      </section>

      <hr className="container-custom border-brand-dark/5" />
    </div>
  );
};

export default Home;
