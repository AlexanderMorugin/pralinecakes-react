import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { navBarData } from '../../../mockData/nav-bar-data';

import styles from './header-nav-bar.module.scss';

const HeaderNavBar: FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }): string =>
    isActive
      ? `${styles.headerNavBar__link} ${styles.headerNavBar__link_active}`
      : `${styles.headerNavBar__link}`;

  return (
    <nav>
      <ul className={styles.headerNavBar}>
        {navBarData.map((item, index) => (
          <li key={index}>
            <NavLink to={item.route} className={setActive}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
