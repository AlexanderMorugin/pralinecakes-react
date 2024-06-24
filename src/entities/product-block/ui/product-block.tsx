import { FC } from 'react';

import {
  PAGE_CAKES_LINK,
  PAGE_CAKES_TITLE,
} from '../../../shared/constants/constants';
import { IProductCard } from '../../product-card/ui/product-card';
import ProductCard from '../../product-card';
import ProductHeading from '../../product-heading';

import styles from './product-block.module.scss';

interface IProductBlock {
  data?: IProductCard[];
  route?: string;
  isLink?: boolean;
}

const ProductBlock: FC<IProductBlock> = ({ data, route, isLink }) => {
  return (
    <div className={styles.productBlock}>
      <ProductHeading
        title={PAGE_CAKES_TITLE}
        subtitle={PAGE_CAKES_LINK}
        route={route}
        isLink={isLink}
      />
      <ul className={styles.productBlock__container}>
        {data?.map((cake) => (
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
    </div>
  );
};

export default ProductBlock;
