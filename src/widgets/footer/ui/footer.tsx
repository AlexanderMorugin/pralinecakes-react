import { FC } from 'react';
import { Link } from 'react-router-dom';

import { AddressBlock, Logo } from '../../../entities';
import { FooterWrapper } from '../../../components';
import { navBarData } from '../../../mockData/nav-bar-data';

import styles from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logoBox}>
          <Logo footer={true} />
          <p>2024 © ООО «Пралинэ»</p>
          <p>Создание и поддержка сайта ООО «Пралинэ»</p>
        </div>

        <FooterWrapper
          title='Информация'
          className={styles.footer__information}
        >
          {navBarData.map((item, index) => (
            <li key={index}>
              <Link to={item.route} className={styles.footer__link}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={styles.footer__navIcon}
                />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </FooterWrapper>

        <FooterWrapper title='Каталог' className={styles.footer__catalog}>
          <li className={styles.footer__link}>
            Здесь будут ссылки на виды продукции
          </li>
        </FooterWrapper>

        <FooterWrapper
          title='Для бизнеса'
          className={styles.footer__cooperation}
        >
          <li className={styles.footer__link}>
            Здесь будут ссылки о сотрудничестве
          </li>
        </FooterWrapper>

        <AddressBlock footer={true} className={styles.footer__address} />
      </div>
    </footer>
  );
};

export default Footer;
