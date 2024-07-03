import { FC } from 'react';

// import Image from '../../../assets/images/about-us/cafe-praline-1-1200x779.jpg';
// import Image from '../../../assets/images/about-us/about-2.jpg';
import Image from '../../../assets/images/about-us/about-3.jpg';
import { ArticleWrapper } from '../../../components';

import styles from './about-us.module.scss';

const AboutUs: FC = () => {
  return (
    <section className={styles.aboutUs}>
      <img src={Image} alt='image' className={styles.aboutUs__image} />

      <ArticleWrapper>
        <p>
          Кондитерская «Пралине» готовит десерты уже более 15 лет и
          располагается в западном районе Москвы — Крылатское. В нежных пирожных
          и сочных тортах, наши кондитера стараются передать безупречное
          сочетание оригинальности вкуса. Конечно же в своей продукции мы не
          используем консерванты, стабилизаторы, эмульгаторы и другие усилители
          вкусов. Вся продукция 100% натуральная.
        </p>
      </ArticleWrapper>
    </section>
  );
};

export default AboutUs;
