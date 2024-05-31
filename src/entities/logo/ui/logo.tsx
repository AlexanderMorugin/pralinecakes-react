import { FC } from 'react';
import { Link } from 'react-router-dom';

import IconCake from '../../../assets/icons/icon-cake.svg';
import Routes from '../../../shared/config/routes/routes';

import styles from './logo.module.scss';

const Logo: FC = () => {
  return (
    <Link to={Routes.HOME} className={styles.logo}>
      <img src={IconCake} alt='Logo' className={styles.logo__icon} />
      <p className={styles.logo__text}>
        <span>Пралине</span>
        <span className={styles.logo__span}>кондитерская</span>
      </p>
    </Link>
  );
};

export default Logo;
