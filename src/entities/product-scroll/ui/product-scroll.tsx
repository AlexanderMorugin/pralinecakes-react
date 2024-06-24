import { FC } from 'react';

import { Scroll } from '../../../features';
import ProductCard from '../../product-card';
import LinkButton from '../../link-button';
import ProductHeading from '../../product-heading';
import { IProductCard } from '../../product-card/ui/product-card';

import styles from './product-scroll.module.scss';

interface IProductScroll {
  data?: IProductCard[];
  route?: string;
  isLink?: boolean;
}

const ProductScroll: FC<IProductScroll> = ({ data, isLink, route }) => {
  return (
    <div className={styles.productScroll}>
      <ProductHeading
        title='Торты'
        subtitle='все торты'
        route={route}
        isLink={isLink}
      />

      <Scroll>
        {data?.map((cake) => (
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
        <LinkButton route={route || '#'} text='все торты' />
      </Scroll>
    </div>
  );
};

export default ProductScroll;
