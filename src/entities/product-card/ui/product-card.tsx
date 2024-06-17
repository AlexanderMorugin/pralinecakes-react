import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './product-card.module.scss';

interface IProductCard {
  route?: string;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  quantity?: number | null;
}

const ProductCard: FC<IProductCard> = ({
  route,
  image,
  title,
  description,
  price,
  quantity,
}) => {
  return (
    <Link to={route || '#'} className={styles.productCard}>
      <img src={image} alt={title} className={styles.productCard__image} />
      <article className={styles.productCard__info}>
        <h3 className={styles.productCard__title}>{title}</h3>
        <p className={styles.productCard__description}>{description}</p>
      </article>
      <p className={styles.productCard__price}>
        {quantity && (
          <span className={styles.productCard__span}>от</span>
        )}
        {price} р
      </p>
    </Link>
  );
};

export default ProductCard;
