import { FC } from 'react';

import styles from './page-heading.module.scss';
import { PAGE_SUBTITLE } from '../../../shared/constants/constants';

interface IPageHeading {
  title: string;
}

const PageHeading: FC<IPageHeading> = ({ title }) => {
  return (
    <article className={styles.pageHeading}>
      <h1 className={styles.pageHeading__title}>{title}</h1>
      <p className={styles.pageHeading__subtitle}>{PAGE_SUBTITLE}</p>
    </article>
  );
};

export default PageHeading;
