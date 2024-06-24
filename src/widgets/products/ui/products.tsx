import { FC } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../../shared/config/routes/routes';

import styles from './products.module.scss'

const Products: FC = () => {
  return (
    <section className={styles.products}>
      
      <Link to={Routes.CAKES}>Торты</Link>
      <Link to={Routes.PASTRY}>Пирожные</Link>
    </section>
  );
};

export default Products;
