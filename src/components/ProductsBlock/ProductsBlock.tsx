import { ProductList } from '../ProductList';
import './ProductsBlock.scss';

const ProductsBlock = () => {
  return (
    <div className='products-block'>
      <h3 className='products-block__title'>Ты сегодня покормил кота?</h3>
      <ProductList />
    </div>
  );
};

export { ProductsBlock };
