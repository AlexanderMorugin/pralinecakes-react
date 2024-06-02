import { FC, PropsWithChildren } from 'react';

import styles from './content-wrapper.module.scss';

const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.contentWrapper}>{children}</div>;
};

export default ContentWrapper;