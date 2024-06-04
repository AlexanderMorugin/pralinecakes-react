import { FC } from 'react';

import { CakeCard } from '../../../entities';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  return (
    <section className={styles.allCakes}>
      <div className={styles.allCakes__container}>
      <CakeCard />
      <CakeCard />
      <CakeCard />
      <CakeCard />
      </div>
    </section>
  );
};

export default AllCakes;
