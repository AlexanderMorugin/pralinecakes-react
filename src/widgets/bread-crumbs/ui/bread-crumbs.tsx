import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './bread-crumbs.module.scss';

type TLinks = {
  heading: string;
  route: string;
};

interface IBreadCrumbs {
  links: TLinks[];
}

const Breadcrumbs: FC<IBreadCrumbs> = ({ links }) => {
  return (
    <ul className={styles.breadcrumbs}>
      {links.map((link, index) => {
        return (
          (index !== links.length - 1 && (
            <li key={link.route}>
              <Link to={link.route} className={styles.breadcrumbs__link}>
                {link.heading}
              </Link>
              <span className={styles.breadcrumbs__span}>
                &nbsp;&#8250;&nbsp;
              </span>
            </li>
          )) || <li key={link.route}>{link.heading}</li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
