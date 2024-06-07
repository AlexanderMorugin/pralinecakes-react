import { FC } from 'react';

import { ProductCard } from '../../../entities';
import { cakesData } from '../../../mockData/cakes-data';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  return (
    <section className={styles.allCakes}>
      <ul className={styles.allCakes__container}>
        {cakesData.map((cake) => (
          <li key={cake.id}>
            <ProductCard
              route={cake.route}
              image={cake.image_normal}
              title={cake.title}
              description={cake.description}
              price={cake.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllCakes;
