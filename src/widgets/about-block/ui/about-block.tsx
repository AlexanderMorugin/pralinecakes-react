import { FC } from 'react';

import Image from '../../../assets/images/about-us/about-5.jpg';

import styles from './about-block.module.scss';

const AboutBlock: FC = () => {
  return (
    <section className={styles.aboutBlock}>
      <img src={Image} alt='О нас' className={styles.aboutBlock__image} />
    </section>
  );
};

export default AboutBlock;
