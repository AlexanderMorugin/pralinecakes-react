import { FC, PropsWithChildren } from 'react';

import styles from './main-content-wrapper.module.scss';

const MainContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.mainContentWrapper}>{children}</div>;
};

export default MainContentWrapper;
