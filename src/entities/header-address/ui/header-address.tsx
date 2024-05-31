import { FC } from 'react';

import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
} from '../../../shared/constants/constants';

import styles from './header-address.module.scss';

const HeaderAddress: FC = () => {
  return (
    <address className={styles.headerAddress}>
      <span>{ADDRESS}</span>
      <span>телефон: +{PHONE_NUMBER}</span>
      <span>почта: {EMAIL}</span>
    </address>
  );
};

export default HeaderAddress;
