import { FC } from 'react';

import {
  ADDRESS,
  EMAIL,
  PHONE_NUMBER,
  WORK_HOURS,
} from '../../../shared/constants/constants';

import styles from './address-block.module.scss';

interface IAddressBlock {
  footer: boolean;
  className?: string;
}

const AddressBlock: FC<IAddressBlock> = ({ footer, className }) => {
  return (
    <address
      className={
        footer
          ? `${className} ${styles.addressBlock} ${styles.addressBlock_footer}`
          : `${styles.addressBlock}`
      }
    >
      <span>{ADDRESS}</span>
      <span>{PHONE_NUMBER}</span>
      <span>{EMAIL}</span>
      <span>{WORK_HOURS}</span>
    </address>
  );
};

export default AddressBlock;
