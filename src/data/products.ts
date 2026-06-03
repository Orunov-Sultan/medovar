import type { Product } from '../types/shared';

export const products: Product[] = [
  {
    id: '1',
    name: 'Мёд Липовый',
    description: 'Светлый, ароматный мёд с нежным вкусом. Собран в период цветения липы.',
    price: 850,
    category: 'honey',
    image: '/images/products/honey-linden.png',
    isPopular: true,
    inStock: true,
    weight: '500г'
  },
  {
    id: '2',
    name: 'Мёд Гречишный',
    description: 'Терпкий, насыщенный мёд темного цвета с высоким содержанием железа.',
    price: 750,
    category: 'honey',
    image: '/images/products/honey-buckwheat.png',
    isPopular: true,
    inStock: true,
    weight: '500г'
  },
  {
    id: '3',
    name: 'Мёд Цветочный (Разнотравье)',
    description: 'Собран с различных луговых цветов. Обладает богатым букетом ароматов.',
    price: 650,
    category: 'honey',
    image: '/images/products/honey-flower.png',
    isPopular: false,
    inStock: true,
    weight: '500г'
  },
  {
    id: '4',
    name: 'Прополис натуральный',
    description: 'Природный антибиотик. Обладает мощными бактерицидными свойствами.',
    price: 350,
    category: 'propolis',
    image: '/images/products/propolis.png',
    isPopular: true,
    inStock: true,
    weight: '50г'
  },
  {
    id: '5',
    name: 'Перга пчелиная',
    description: '«Пчелиный хлеб». Уникальный витаминный комплекс, созданный самой природой.',
    price: 1200,
    category: 'perga',
    image: '/images/products/perga.png',
    isPopular: true,
    inStock: true,
    weight: '100г'
  },
  {
    id: '6',
    name: 'Пчелиный воск',
    description: 'Натуральный очищенный воск для изготовления свечей и косметики.',
    price: 400,
    category: 'wax',
    image: '/images/products/wax.png',
    isPopular: false,
    inStock: true,
    weight: '200г'
  },
  {
    id: '7',
    name: 'Мёд в сотах',
    description: 'Мёд в первозданном виде, запечатанный пчелами. Самый полезный продукт.',
    price: 950,
    category: 'honey',
    image: '/images/products/honey-comb.png',
    isPopular: false,
    inStock: true,
    weight: '300г'
  },
  {
    id: '8',
    name: 'Пыльца цветочная',
    description: 'Кладезь аминокислот и микроэлементов. Отличное укрепляющее средство.',
    price: 550,
    category: 'perga',
    image: '/images/products/pollen.png',
    isPopular: false,
    inStock: true,
    weight: '100г'
  },
  {
    id: '9',
    name: 'Подарочный набор «Здоровье»',
    description: 'Набор из трех видов мёда и прополиса в красивой упаковке.',
    price: 2500,
    category: 'gifts',
    image: '/images/products/gift-set.png',
    isPopular: true,
    inStock: true,
    weight: '1500г'
  },
  {
    id: '10',
    name: 'Свечи из вощины',
    description: 'Натуральные свечи ручной работы с тонким медовым ароматом.',
    price: 450,
    category: 'wax',
    image: '/images/products/candles.png',
    isPopular: false,
    inStock: true,
    weight: '2 шт'
  }
];
