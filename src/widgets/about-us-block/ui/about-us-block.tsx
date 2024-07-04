import { FC } from 'react';

import styles from './about-us-block.module.scss';

const AboutUsBlock: FC = () => {
  return (
    <section className={styles.aboutUsBlock}>
      <p className={styles.aboutUsBlock__text}>
        Стабильная команда профессиональных кондитеров обладающих большим опытом
        десерто-приготовления. В десертах используем натуральные ингредиенты.
        Всё готовится исключительно ручным способом, приобретая шарм изысканного
        ресторана.
      </p>
    </section>
  );
};

export default AboutUsBlock;
