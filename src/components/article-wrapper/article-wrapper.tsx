import { FC, PropsWithChildren } from 'react';

import styles from './article-wrapper.module.scss';

const ArticleWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.articleWrapper}>
      <div className={styles.articleWrapper__container}>{children}</div>
    </div>
  );
};

export default ArticleWrapper;
