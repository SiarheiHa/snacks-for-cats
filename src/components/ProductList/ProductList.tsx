import { useState } from 'react';
import { Product } from '../../types/types';
import { data } from '../data/data';
import { ProductCard } from '../ProductCard';

import './ProductList.scss';

const ProductList = () => {
  const [products] = useState<Product[]>(data);
  const [cart, setCart] = useState<number[]>([]);

  const handleClick = (id: number) => {
    console.log(id);
    if (cart.includes(id)) {
      setCart(cart.filter((productId) => productId !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <ul className='product-list'>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <ProductCard
              product={product}
              isInCart={cart.includes(product.id)}
              onClick={handleClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { ProductList };
