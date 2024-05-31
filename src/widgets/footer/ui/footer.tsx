import { FC } from 'react';

import { Logo } from '../../../entities';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Logo />
      </div>
    </footer>
  );
};

export default Footer;
