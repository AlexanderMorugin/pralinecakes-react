import { FC } from 'react';

import { footerInfoData } from '../../../mockData/footer-info-data';
import { footerCatalogData } from '../../../mockData/footer-catalog-data';
import { AddressBlock, FooterNav, Logo } from '../../../entities';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logoBox}>
          <Logo footer={true} />
          <p className={styles.footer__logoText}>2024 © ООО «Пралинэ»</p>
          <p className={styles.footer__logoText}>Создание и поддержка сайта ООО «Пралинэ»</p>
        </div>

        <FooterNav
          title='Информация'
          array={footerInfoData}
          className={styles.footer__information}
        />

        <FooterNav
          title='Каталог'
          array={footerCatalogData}
          className={styles.footer__catalog}
        />

        <AddressBlock footer={true} className={styles.footer__address} />
      </div>
    </footer>
  );
};

export default Footer;
