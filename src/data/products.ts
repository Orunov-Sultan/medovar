import { Product } from '../types/shared';

export const products: Product[] = [
  {
    id: '1',
    name: 'Традиционный мед',
    description: 'Классический вкус натурального брожения с мягким медовым послевкусием.',
    price: 450,
    category: 'classic',
    image: '/images/products/classic-1.png',
    isPopular: true,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '2',
    name: 'Липовый цвет',
    description: 'Светлый медовуха с тонким ароматом липы и легкой цветочной горчинкой.',
    price: 480,
    category: 'classic',
    image: '/images/products/classic-2.png',
    isPopular: false,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '3',
    name: 'Малиновый закат',
    description: 'Насыщенный ягодный вкус с ярким ароматом лесной малины.',
    price: 520,
    category: 'fruit',
    image: '/images/products/fruit-1.png',
    isPopular: true,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '4',
    name: 'Черная смородина',
    description: 'Терпкий и глубокий вкус садовой смородины с приятной кислинкой.',
    price: 520,
    category: 'fruit',
    image: '/images/products/fruit-2.png',
    isPopular: false,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '5',
    name: 'Пряный имбирь',
    description: 'Согревающий напиток с добавлением свежего корня имбиря и пряностей.',
    price: 550,
    category: 'spiced',
    image: '/images/products/spiced-1.png',
    isPopular: true,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '6',
    name: 'Корица и яблоко',
    description: 'Классическое сочетание яблок и ароматной корицы в медовом исполнении.',
    price: 550,
    category: 'spiced',
    image: '/images/products/spiced-2.png',
    isPopular: false,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '7',
    name: 'Дубовая бочка',
    description: 'Выдержанная медовуха с древесными нотами и сложным букетом.',
    price: 750,
    category: 'limited',
    image: '/images/products/limited-1.png',
    isPopular: true,
    inStock: true,
    volume: '0.75л'
  },
  {
    id: '8',
    name: 'Горный гречишный',
    description: 'Густой и ароматный напиток на основе темного гречишного меда.',
    price: 600,
    category: 'classic',
    image: '/images/products/classic-3.png',
    isPopular: false,
    inStock: false,
    volume: '0.5л'
  },
  {
    id: '9',
    name: 'Вишневый сад',
    description: 'Классическая вишневая медовуха с глубоким рубиновым цветом.',
    price: 520,
    category: 'fruit',
    image: '/images/products/fruit-3.png',
    isPopular: false,
    inStock: true,
    volume: '0.5л'
  },
  {
    id: '10',
    name: 'Мята и хвоя',
    description: 'Освежающий лесной микс с легким холодком мяты и ароматом хвои.',
    price: 580,
    category: 'spiced',
    image: '/images/products/spiced-3.png',
    isPopular: false,
    inStock: true,
    volume: '0.5л'
  }
];
