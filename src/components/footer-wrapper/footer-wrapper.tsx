import { FC, ReactNode } from 'react';

import styles from './footer-wrapper.module.scss';

interface IFooterWrapper {
  title: string;
  children: ReactNode;
  className?: string;
}

const FooterWrapper: FC<IFooterWrapper> = ({ title, children, className }) => {
  return (
    <div className={`${className} ${styles.footerWrapper} `}>
      <h3 className={styles.footerWrapper__title}>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default FooterWrapper;
