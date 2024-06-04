import { FC } from 'react';

import image from '../../../assets/images/cakes/cake-bavarskii-muss-normal.jpg';

import styles from './cake-card.module.scss';

const CakeCard: FC = () => {
  return (
    <div className={styles.cakeCard}>
      <img src={image} alt='image' className={styles.cakeCard__image} />
      <article className={styles.cakeCard__info}>
        <h3 className={styles.cakeCard__title}>Наполеон</h3>
        <p className={styles.cakeCard__description}>
          Торт представляет собой довольно необычный десерт, состоящий из
          воздушного и мягкого бисквита красного цвета. Оригинальность данному
          изделию придает и белоснежный сливочный крем. Упакован в цветную
          картонную коробку с окошком
        </p>
        <p className={styles.cakeCard__price}>1580р</p>
      </article>
    </div>
  );
};

export default CakeCard;
