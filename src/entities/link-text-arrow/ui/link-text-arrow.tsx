import { FC } from 'react';
import { Link } from 'react-router-dom';

import ArrowIcon from '../../../assets/icons/icon-arrow.svg';

import styles from './link-text-arrow.module.scss';

interface ILinkTextArrow {
  route: string;
  subtitle: string;
  className?: string;
}

const LinkTextArrow: FC<ILinkTextArrow> = ({ route, subtitle, className }) => {
  return (
    <Link to={route} className={`${className} ${styles.linkTextArrow}`}>
      {subtitle}
      <img
        src={ArrowIcon}
        alt='Стрелка'
        className={styles.linkTextArrow__arrow}
      />
    </Link>
  );
};

export default LinkTextArrow;
