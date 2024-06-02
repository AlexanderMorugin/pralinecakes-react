import { FC } from 'react';
import { Link } from 'react-router-dom';

import { navBarData } from '../../../mockData/nav-bar-data';
import { ADDRESS, COMPANY_NAME, PHONE_NUMBER } from '../../../shared/constants/constants';

import styles from './header-mobile-menu.module.scss';

interface IHeaderMobileMenu {
  active: boolean;
  setActive: (active: boolean) => void;
}

const HeaderMobileMenu: FC<IHeaderMobileMenu> = ({ active, setActive }) => {
  return (
    <div
      className={
        active
          ? `${styles.headerMobileMenu} ${styles.headerMobileMenu_active}`
          : `${styles.headerMobileMenu}`
      }
    >
      <div className={styles.headerMobileMenu__blur}>
        <div className={styles.headerMobileMenu__content}>
          <ul>
            {navBarData.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.route}
                  onClick={() => setActive(false)}
                  className={styles.headerMobileMenu__link}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.headerMobileMenu__linkIcon}
                  />
                  <span className={styles.headerMobileMenu__linkTitle}>
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <address className={styles.headerMobileMenu__address}>
            <span>{COMPANY_NAME}</span>
            <span>{ADDRESS}</span>
            <span>{PHONE_NUMBER}</span>
          </address>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
