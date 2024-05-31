import { FC } from 'react';
import { Link } from 'react-router-dom';

import { headerConnectData } from '../../../mockData/header-connect-data';

import styles from './header-connect.module.scss'

const HeaderConnect: FC = () => {
  return (
    <ul className={styles.headerConnect}>
      {headerConnectData.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>
            <img src={item.icon} alt={item.title} className={styles.headerConnect__icon}/>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderConnect;
