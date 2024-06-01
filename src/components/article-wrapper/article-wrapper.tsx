import { FC, PropsWithChildren } from 'react';

import styles from './article-wrapper.module.scss';

const ArticleWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.articleWrapper}>{children}</div>;
};

export default ArticleWrapper;