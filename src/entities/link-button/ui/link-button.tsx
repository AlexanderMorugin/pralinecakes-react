import { FC } from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from '../../../assets/icons/Icon-arrow-right.svg';

import styles from './link-button.module.scss';

interface ILinkButton {
  route: string;
  text: string;
}

const LinkButton: FC<ILinkButton> = ({ route, text }) => {
  return (
    <li className={styles.linkButton}>
      <Link to={route} className={styles.linkButton__link}>
        <div className={styles.linkButton__arrowBox}>
          <img
            src={ArrowIcon}
            alt='Стрелка'
            className={styles.linkButton__arrow}
          />
        </div>
        <span>{text}</span>
      </Link>
    </li>
  );
};

export default LinkButton;
