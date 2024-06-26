import { FC } from 'react';
import { Outlet } from 'react-router';

import { Footer, Header } from '../../widgets';
import { ScrollToTop } from '../../components';

import styles from './root-page.module.scss';

const RootPage: FC = () => {
  return (
    <div className={styles.rootPage}>
      <ScrollToTop />
      <Header />
      <main className={styles.rootPage__main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootPage;
