import { FC, useState } from 'react';

import {
  AddressBlock,
  HeaderConnect,
  HeaderMenuButton,
  HeaderNavBar,
  Logo,
} from '../../../entities';
import { useResize } from '../../../shared/hooks/useResize';
import { HeaderMobileMenu } from '../../../features';
import { connectData } from '../../../mockData/connect-data';

import styles from './header.module.scss';

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { isScreenMd } = useResize();

  const headerConnectData = connectData.filter((items) =>
    items.category.includes('header')
  );

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {!isScreenMd && (
          <HeaderMenuButton
            setMenuActive={setMenuActive}
            menuActive={menuActive}
          />
        )}
        <Logo footer={false} />
        {isScreenMd ? (
          <div className={styles.header__nav}>
            <AddressBlock footer={false} />
            <HeaderNavBar />
          </div>
        ) : (
          <HeaderConnect data={headerConnectData} />
        )}
      </div>
      <HeaderMobileMenu active={menuActive} setActive={setMenuActive} />
    </header>
  );
};

export default Header;
