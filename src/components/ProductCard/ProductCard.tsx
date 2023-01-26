import { Product } from '../../types/types';
import classNames from 'classnames';

import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onClick: (id: number) => void;
}

const BOTTOM_TEXT = 'Чего сидишь? Порадуй котэ, ';
const BOTTOM_BTN_TEXT = 'купи.';
const SLOGAN = 'Сказочное заморское яство';
const BRAND = 'Нямушка';

const ProductCard = ({ product, isInCart, onClick }: ProductCardProps) => {
  const { availability, description, features, id, species, weight } = product;
  const notAvaibleText = `Печалька, ${species} закончился.`;

  const classes = classNames(
    styles.card,
    availability ? '' : styles.disabled,
    isInCart ? styles.active : '',
  );

  const handleClick = () => {
    if (!availability) return;
    onClick(id);
  };

  return (
    <div onClick={handleClick} className={classes}>
      <div className={styles.poligon}>
        {availability > 0 ? null : <div className={styles.shadow}></div>}
        <div className={styles.inner}>
          <h5 className={styles.slogan}>{SLOGAN}</h5>
          <h2 className={styles.brand}>{BRAND}</h2>
          <h3 className={styles.species}>{species}</h3>
          <ul>
            {features.map((feature, i) => (
              <li key={i} className={styles.feature}>
                {feature}
              </li>
            ))}
          </ul>
          <div className={styles.circle}>
            <span className={styles.weight}>{weight}</span>
            <span className={styles.unit}>кг</span>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {isInCart && <span className={styles.bottom_text}>{description}</span>}
        {!availability && <span className={styles.warning}>{notAvaibleText}</span>}
        {Boolean(availability) && !isInCart && (
          <>
            <span className={styles.bottom_text}>{BOTTOM_TEXT}</span>
            <button onClick={handleClick} className={styles.btn}>
              {BOTTOM_BTN_TEXT}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export { ProductCard };
