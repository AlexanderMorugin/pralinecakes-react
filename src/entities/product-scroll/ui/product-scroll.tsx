import { FC } from 'react';

import { Scroll } from '../../../features';
import ProductCard from '../../product-card';
import LinkButton from '../../link-button';
import ProductHeading from '../../product-heading';
import { IProductCard } from '../../product-card/ui/product-card';

import styles from './product-scroll.module.scss';
import {
  PAGE_CAKES_LINK,
  PAGE_CAKES_TITLE,
  PAGE_PASTRY_LINK,
  PAGE_PASTRY_TITLE,
} from '../../../shared/constants/constants';

interface IProductScroll {
  dataPastry?: IProductCard[];
  dataCakes?: IProductCard[];
  routePastry?: string;
  routeCakes?: string;
  isLink?: boolean;
  isCake?: boolean;
  isPastry?: boolean;
}

const ProductScroll: FC<IProductScroll> = ({
  dataPastry,
  dataCakes,
  routePastry,
  routeCakes,
  isLink,
  isCake,
  isPastry,
}) => {
  return (
    <div className={styles.productScroll}>
      {isCake && (
        <ProductHeading
          title={PAGE_CAKES_TITLE}
          subtitle={PAGE_CAKES_LINK}
          route={routeCakes}
          isLink={isLink}
        />
      )}

      {isPastry && (
        <ProductHeading
          title={PAGE_PASTRY_TITLE}
          subtitle={PAGE_PASTRY_LINK}
          route={routePastry}
          isLink={isLink}
        />
      )}

      {isCake && (
        <Scroll>
          {dataCakes?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                className={styles.productScroll__productCard}
                route={`/products/cakes/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
          <LinkButton route={routeCakes || '#'} text={PAGE_CAKES_LINK} />
        </Scroll>
      )}

      {isPastry && (
        <Scroll>
          {dataPastry?.map((cake) => (
            <li key={cake.id}>
              <ProductCard
                className={styles.productScroll__productCard}
                route={`/products/pastry/${cake.route}`}
                image_small={cake.image_small}
                title={cake.title}
                description={cake.description}
                price={cake.price}
                rating={cake.rating}
              />
            </li>
          ))}
          <LinkButton route={routePastry || '#'} text={PAGE_PASTRY_LINK} />
        </Scroll>
      )}
    </div>
  );
};

export default ProductScroll;
