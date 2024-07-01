import { FC } from 'react';

import {
  PAGE_CAKES_LINK,
  PAGE_CAKES_TITLE,
  PAGE_PASTRY_LINK,
  PAGE_PASTRY_TITLE,
} from '../../../shared/constants/constants';
import { ProductProps } from '../../../shared/types/types';
import ProductCard from '../../product-card';
import ProductHeading from '../../product-heading';

import styles from './product-block.module.scss';

interface IProductBlock {
  dataPastry?: ProductProps[];
  dataCakes?: ProductProps[];
  routePastry?: string;
  routeCakes?: string;
  isLink?: boolean;
  isCake: boolean;
  isPastry: boolean;
}

const ProductBlock: FC<IProductBlock> = ({
  dataPastry,
  dataCakes,
  routePastry,
  routeCakes,
  isLink,
  isCake,
  isPastry,
}) => {
  return (
    <div className={styles.productBlock}>
      {isCake && (
        <ProductHeading
          title={PAGE_CAKES_TITLE}
          subtitle={PAGE_CAKES_LINK}
          route={routeCakes || '#'}
          isLink={isLink}
          isCake={isCake}
          isPastry={isPastry}
        />
      )}

      {isPastry && (
        <ProductHeading
          title={PAGE_PASTRY_TITLE}
          subtitle={PAGE_PASTRY_LINK}
          route={routePastry || '#'}
          isLink={isLink}
          isCake={isCake}
          isPastry={isPastry}
        />
      )}

      {isCake && (
        <ul className={styles.productBlock__container}>
          {dataCakes?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/cakes/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}

      {isPastry && (
        <ul className={styles.productBlock__container}>
          {dataPastry?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                route={`/products/pastry/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductBlock;
