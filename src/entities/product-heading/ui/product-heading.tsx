import { FC } from 'react';
import { Link } from 'react-router-dom';

import useResize from '../../../shared/hooks/use-resize';
import Routes from '../../../shared/config/routes/routes';

import styles from './product-heading.module.scss';
import LinkTextArrow from '../../link-text-arrow';

interface IProductHeading {
  title: string;
  subtitle: string;
  route: string;
  isLink?: boolean;
  isCake: boolean;
  isPastry: boolean;
}

const ProductHeading: FC<IProductHeading> = ({
  title,
  subtitle,
  route,
  isLink = false,
  isCake,
  isPastry,
}) => {
  const { isScreenMd } = useResize();

  return (
    isLink && (
      <article className={styles.productHeading}>
        <div className={styles.productHeading__titleBox}>
          <h3 className={styles.productHeading__title}>{title}</h3>
          {isPastry && !isCake && (
            <Link
              to={Routes.CATEGORIES}
              className={styles.productHeading__category}
            >
              по категориям
            </Link>
          )}
        </div>

        {isScreenMd && <LinkTextArrow route={route} subtitle={subtitle} />}
      </article>
    )
  );
};

export default ProductHeading;
