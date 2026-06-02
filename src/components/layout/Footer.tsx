import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src="/images/logo.png" alt="Медовар" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-white/60 leading-relaxed">
              Натуральный мёд с нашей пасеки. Мы сохраняем традиции пчеловодства, чтобы вы могли наслаждаться чистым и полезным продуктом.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-widest text-brand-primary">Магазин</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/shop" className="hover:text-white transition-colors">Весь каталог</Link></li>
              <li><Link to="/shop?category=honey" className="hover:text-white transition-colors">Мёд</Link></li>
              <li><Link to="/shop?category=beauty" className="hover:text-white transition-colors">Косметика</Link></li>
              <li><Link to="/shop?category=gifts" className="hover:text-white transition-colors">Подарки</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-widest text-brand-primary">Информация</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-widest text-brand-primary">Контакты</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3"><MapPin size={18} /> ул. Пасечная, д. 1, с. Медовое</li>
              <li className="flex items-center gap-3"><Phone size={18} /> +7 (999) 123-45-67</li>
              <li className="flex items-center gap-3"><Mail size={18} /> hello@medovar.ru</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Медовар. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
