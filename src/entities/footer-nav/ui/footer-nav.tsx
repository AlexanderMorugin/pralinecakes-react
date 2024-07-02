import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './footer-nav.module.scss';

interface IArray {
  icon: string;
  title: string;
  route: string;
}

interface IFooterNav {
  title: string;
  array: IArray[];
  className?: string;
}

const FooterNav: FC<IFooterNav> = ({ title, array, className }) => {
  return (
    <nav className={`${className} ${styles.footerNav} `}>
      <h3 className={styles.footerNav__title}>{title}</h3>
      <ul>
        {array?.map((item, index) => (
          <li key={index}>
            <Link to={item.route} className={styles.footerNav__link}>
              <img
                src={item.icon}
                alt={item.title}
                className={styles.footerNav__navIcon}
              />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
