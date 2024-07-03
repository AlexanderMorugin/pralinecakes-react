import { FC } from 'react';

import { PAGE_SUBTITLE } from '../../../shared/constants/constants';

import styles from './page-heading.module.scss';

interface IPageHeading {
  title: string;
  isPage?: boolean;
}

const PageHeading: FC<IPageHeading> = ({ title, isPage = false }) => {
  return (
    <article
      className={
        isPage
          ? `${styles.pageHeading} ${styles.pageHeading_isPage}`
          : styles.pageHeading
      }
    >
      <h1 className={styles.pageHeading__title}>{title}</h1>
      <p className={styles.pageHeading__subtitle}>{PAGE_SUBTITLE}</p>
    </article>
  );
};

export default PageHeading;
