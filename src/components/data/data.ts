import { Product } from '../../types/types';

const data: Product[] = [
  {
    id: 1,
    species: 'с фуа-гра',
    features: ['10 порций', 'мышь в подарок'],
    description: 'Печень утки разварная с артишоками.',
    weight: 0.5,
    availability: 2,
  },
  {
    id: 2,
    species: 'с рыбой',
    features: ['40 порций', '2 мыши в подарок'],
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    weight: 2,
    availability: 2,
  },
  {
    id: 3,
    species: 'с курой',
    features: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    description: 'Филе из цыплят с трюфелями в бульоне.',
    weight: 5,
    availability: 0,
  },
];

export { data };
