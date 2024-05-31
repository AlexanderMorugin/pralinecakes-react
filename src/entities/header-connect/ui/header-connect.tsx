import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-connect.module.scss';

type TData = {
  title: string;
  icon: string;
  link: string;
};

interface IHeaderConnect {
  data: TData[];
}

const HeaderConnect: FC<IHeaderConnect> = ({ data }) => {
  return (
    <ul className={styles.headerConnect}>
      {data.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>
            <img
              src={item.icon}
              alt={item.title}
              className={styles.headerConnect__icon}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderConnect;
