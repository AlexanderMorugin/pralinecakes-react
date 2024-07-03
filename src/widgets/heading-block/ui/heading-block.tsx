import { FC } from 'react';

import styles from './heading-block.module.scss';

interface IHeadingBlock {
  image: string;
  isPage?: boolean;
}

const HeadingBlock: FC<IHeadingBlock> = ({ image, isPage = false }) => {
  return (
    <section className={styles.headingBlock}>
      <img
        src={image}
        alt='О нас'
        className={
          isPage
            ? `${styles.headingBlock__image} ${styles.headingBlock__image_isPage}`
            : styles.headingBlock__image
        }
      />
    </section>
  );
};

export default HeadingBlock;
