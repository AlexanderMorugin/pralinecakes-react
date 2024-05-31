import { FC } from 'react';

import styles from './header-menu-button.module.scss';

interface IHeaderMenuButton {
  setMenuActive: (menuActive: boolean) => void;
  menuActive: boolean;
}

const HeaderMenuButton: FC<IHeaderMenuButton> = ({
  setMenuActive,
  menuActive,
}) => {
  return (
    <button
      className={
        menuActive
          ? `${styles.headerMenuButton} ${styles.headerMenuButton_active}`
          : `${styles.headerMenuButton}`
      }
      onClick={() => setMenuActive(!menuActive)}
    >
      <span
        className={
          menuActive
            ? `${styles.headerMenuButton__span} ${styles.headerMenuButton__span_active}`
            : `${styles.headerMenuButton__span}`
        }
      ></span>
    </button>
  );
};

export default HeaderMenuButton;
