import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-mobile-menu.module.scss';
import { navBarData } from '../../../mockData/nav-bar-data';

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
                <Link to={item.route} onClick={() => setActive(false)} className={styles.headerMobileMenu__link}>
                  <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.headerMobileMenu__linkIcon}
                  />
                  <span className={styles.headerMobileMenu__linkTitle}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
