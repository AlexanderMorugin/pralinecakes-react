import { FC } from 'react';

import styles from './all-pastry.module.scss';
import { ProductCard } from '../../../entities';
import { pastryData } from '../../../mockData/pastry-data';

const AllPastry: FC = () => {
  return (
    <section className={styles.allCakes}>
      <ul className={styles.allCakes__container}>
        {pastryData.map((cake) => (
          <li key={cake.id}>
            <ProductCard
              route={cake.route}
              image={cake.image_normal}
              title={cake.title}
              description={cake.description}
              price={cake.price}
              quantity={cake.quantity_b}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllPastry;
