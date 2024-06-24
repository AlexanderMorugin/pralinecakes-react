import { FC } from 'react';
import { Link } from 'react-router-dom';

import HitSign from '../../hit-sign';

import styles from './product-card.module.scss';

export interface IProductCard {
  className?: string;
  id?: number;
  route?: string;
  image_small?: string;
  image_normal?: string;
  image_large?: string;
  title?: string;
  description?: string;
  ingredients?: string;
  protein?: number;
  fat?: number;
  carbohydrates?: number;
  calories?: number;
  quantity?: number | null;
  quantity_b?: number;
  weight?: number;
  weight_b?: number;
  price?: number;
  price_b?: number;
  rating?: number;
  category?: string;
}

const ProductCard: FC<IProductCard> = ({
  className,
  route,
  image_small,
  title,
  description,
  price,
  quantity,
  rating,
}) => {
  return (
    <Link to={route || '#'} className={`${className} ${styles.productCard}`}>
      <img src={image_small} alt={title} className={styles.productCard__image} />
      <article className={styles.productCard__info}>
        <h3 className={styles.productCard__title}>{title}</h3>
        <p className={styles.productCard__description}>{description}</p>
      </article>
      <p className={styles.productCard__price}>
        {quantity && <span className={styles.productCard__span}>от</span>}
        {price} р
      </p>
      {rating === 10 && <HitSign />}
    </Link>
  );
};

export default ProductCard;
