import { FC } from 'react';

import styles from './product-expiration.module.scss';

const ProductExpiration: FC = () => {
  return (
    <section className={styles.productExpiration}>
      <article className={styles.productExpiration__article}>
        <span className={styles.productExpiration__span}>Срок годности</span>
        <div className={styles.productExpiration__text}>
        <p>Замороженного продукта при t&deg; -18°С - 6 месяцев</p>
        <p>Охлажденного продукта при t&deg; +2..+4°С - 72 часа</p>
        <p>Готового продукта при t&deg; +20..+22°С - 24 часа</p>
        <p className={styles.productExpiration__accent}>Продукт не подлежит повторному замораживанию</p>
        </div>
      </article>
    </section>
  );
};

export default ProductExpiration;
