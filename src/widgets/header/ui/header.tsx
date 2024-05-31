import { FC, useState } from 'react';

import { HeaderConnect, HeaderMenuButton, HeaderNavBar, Logo } from '../../../entities';
import { useResize } from '../../../shared/hooks/useResize';
import { HeaderMobileMenu } from '../../../features';

import styles from './header.module.scss';

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const { isScreenMd } = useResize();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {!isScreenMd && (
          <HeaderMenuButton
            setMenuActive={setMenuActive}
            menuActive={menuActive}
          />
        )}
        <Logo />
        {isScreenMd ? <HeaderNavBar /> : <HeaderConnect />}
        
      </div>
      <HeaderMobileMenu active={menuActive} setActive={setMenuActive} />
    </header>
  );
};

export default Header;
