import { FC, useEffect, useState } from 'react';

import {
  AddressBlock,
  HeaderConnect,
  HeaderMenuButton,
  HeaderNavBar,
  Logo,
} from '../../../entities';
import useResize from '../../../shared/hooks/useResize';
import { HeaderMobileMenu } from '../../../features';
import { connectData } from '../../../mockData/connect-data';

import styles from './header.module.scss';

const Header: FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { isScreenMd } = useResize();
  const headerConnectData = connectData.filter((items) =>
    items.category.includes('header')
  );

  // свайп бокового меню
  useEffect(() => {
    let startTouchX = 0;
    let endTouchX = 0;
    let startTouchY = 0;
    let endTouchY = 0;

    document.addEventListener('touchstart', (e) => {
      startTouchX = e.changedTouches[0].pageX;
      startTouchY = e.changedTouches[0].pageY;
    });

    document.addEventListener('touchend', (e) => {
      endTouchX = e.changedTouches[0].pageX;
      endTouchY = e.changedTouches[0].pageY;

      // появление меню свайпом слева направо
      // if (
      //   startTouchX < 100 &&
      //   Math.abs(endTouchY - startTouchY) < 40 &&
      //   endTouchX > startTouchX
      // )
      //   setMenuActive(true);

      // убирание меню свайпом справа налево
      if (
        startTouchX < 440 &&
        Math.abs(endTouchY - startTouchY) < 40 &&
        endTouchX < startTouchX
      )
        setMenuActive(false);
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {!isScreenMd && (
          <HeaderMenuButton
            setMenuActive={setMenuActive}
            menuActive={menuActive}
            onBlur={() => setMenuActive(false)}
          />
        )}

        {!isScreenMd && (
          <HeaderMobileMenu active={menuActive} setActive={setMenuActive} />
        )}

        <Logo />

        {isScreenMd ? (
          <div className={styles.header__nav}>
            <AddressBlock />
            <HeaderNavBar />
          </div>
        ) : (
          <HeaderConnect data={headerConnectData} />
        )}
      </div>
    </header>
  );
};

export default Header;
