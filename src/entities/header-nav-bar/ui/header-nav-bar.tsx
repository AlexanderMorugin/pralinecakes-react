import { FC } from 'react';
import { Link } from 'react-router-dom';

import { navBarData } from '../../../mockData/nav-bar-data';
// import { useResize } from '../../../shared/hooks/useResize';

import styles from './header-nav-bar.module.scss';

const HeaderNavBar: FC = () => {
  // const { isScreenLg } = useResize();
  return (
    <nav>
      <ul className={styles.headerNavBar}>
        {navBarData.map((item, index) => (
          <li key={index}>
            <Link to={item.route} className={styles.headerNavBar__link}>
              {/* {isScreenLg && (
                <img
                  src={item.icon}
                  alt={item.title}
                  className={styles.headerNavBar__icon}
                />
              )} */}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
