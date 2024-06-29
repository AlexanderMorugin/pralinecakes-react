import { FC } from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from '../../../assets/icons/icon-arrow.svg';
import useResize from '../../../shared/hooks/use-resize';

import styles from './product-heading.module.scss';
import Routes from '../../../shared/config/routes/routes';

interface IProductHeading {
  title?: string;
  subtitle?: string;
  route?: string;
  isLink?: boolean;
  isPastry?: boolean;
}

const ProductHeading: FC<IProductHeading> = ({
  title,
  subtitle,
  route,
  isLink = false,
  // isCake,
  isPastry,
}) => {
  const { isScreenMd } = useResize();

  return (
    isLink && (
      <article className={styles.productHeading}>
        <div className={styles.productHeading__titleBox}>
          <h3 className={styles.productHeading__title}>{title}</h3>
          {isPastry && (
            <Link
              to={Routes.CATEGORIES}
              className={styles.productHeading__category}
            >
              по категориям
            </Link>
          )}
        </div>

        {isScreenMd && (
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
