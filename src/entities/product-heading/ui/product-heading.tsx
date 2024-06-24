import { FC } from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from '../../../assets/icons/icon-arrow.svg';
import useResize from '../../../shared/hooks/useResize';

import styles from './product-heading.module.scss';

interface IProductHeading {
  title?: string;
  subtitle?: string;
  route?: string;
  isLink?: boolean;
}

const ProductHeading: FC<IProductHeading> = ({
  title,
  subtitle,
  route,
  isLink = false,
}) => {
  const { isScreenLg } = useResize();

  return (
    isLink && (
      <article className={styles.productHeading}>
        <h3 className={styles.productHeading__title}>{title}</h3>
        {isScreenLg && (
          <Link to={route || '#'} className={styles.productHeading__link}>
            {subtitle}
            <img
              src={ArrowIcon}
              alt='Стрелка'
              className={styles.productHeading__arrow}
            />
          </Link>
        )}
      </article>
    )
  );
};

export default ProductHeading;
