import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

// Placeholder Pages
const Shop = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl">Магазин</h1></div>;
const About = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl">О нас</h1></div>;
const Contact = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl">Контакты</h1></div>;
const Cart = () => <div className="container-custom py-20 text-center"><h1 className="text-4xl">Корзина</h1></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
