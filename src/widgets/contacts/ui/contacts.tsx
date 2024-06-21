import { FC } from 'react';

import styles from './contacts.module.scss';
import { ArticleWrapper } from '../../../components';

const Contacts: FC = () => {
  return (
    <section className={styles.contacts}>
      <ArticleWrapper>
        <p>
          Адрес: Рублевское шоссе, 52А. Мы находимся в ТЦ «Западный» на втором
          этаже (посмотреть в Яндекс.Картах).
        </p>

        <p>Телефоны: 8-495-729-50-51, 8-495-580-70-48, 8-977-138-82-64.</p>

        <p>Пишите в WhatsApp: +7-977-138-82-64.</p>

        <p>Email: info@praline-tort.ru</p>

        <p>График работы: Ежедневно с 10:00 до 22:00.</p>
      </ArticleWrapper>
    </section>
  );
};

export default Contacts;
