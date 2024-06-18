import { FC } from 'react';
import { Link } from 'react-router-dom';

import IconCake from '../../../assets/images/logo/LOGO_3.png';
import Routes from '../../../shared/config/routes/routes';

import styles from './logo.module.scss';

interface ILogo {
  footer?: boolean;
}

const Logo: FC<ILogo> = ({ footer = false }) => {
  return (
    <Link to={Routes.HOME} className={styles.logo}>
      <img
        src={IconCake}
        alt='Logo'
        className={
          footer ? `${styles.logo__iconFooter}` : `${styles.logo__icon}`
        }
      />
      <p
        className={
          footer
            ? `${styles.logo__text} ${styles.logo__text_footer}`
            : `${styles.logo__text}`
        }
      >
        <span>Пралине</span>
        <span
          className={
            footer ? `${styles.logo__spanFooter}` : `${styles.logo__span}`
          }
        >
          кондитерская
        </span>
      </p>
    </Link>
  );
};

export default Logo;
