import { FC, PropsWithChildren } from 'react';

import styles from './article-wrapper.module.scss';

const ArticleWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.articleWrapper}>
      <article className={styles.articleWrapper__container}>{children}</article>
    </div>
  );
};

export default ArticleWrapper;
