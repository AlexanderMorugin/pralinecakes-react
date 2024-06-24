import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ArticleWrapper } from '../../../components';
import {
  ADDRESS,
  EMAIL,
  PHONE_LINK,
  PHONE_NUMBER,
  PHONE_NUMBER_SECOND,
  PHONE_SECOND_LINK,
  WHATSAPP_LINK,
  WORK_HOURS,
} from '../../../shared/constants/constants';
import useResize from '../../../shared/hooks/useResize';

import styles from './contacts.module.scss';

const Contacts: FC = () => {
  const { isScreenMd } = useResize();
  return (
    <section className={styles.contacts}>
      <ArticleWrapper>
        <div className={styles.contacts__grid}>
          <span className={styles.contacts__name}>Адрес:</span>
          <p className={styles.contacts__text}>
            <span>{ADDRESS}.&nbsp;</span>
            <span>Мы находимся в ТЦ «Западный» на третьем этаже</span>
          </p>
        </div>
        <div className={styles.contacts__grid}>
          <span className={styles.contacts__name}>Телефоны:</span>
          <div className={styles.contacts__text}>
            <Link to={PHONE_LINK} className={styles.contacts__color}>
              {PHONE_NUMBER}
            </Link>
            {isScreenMd && <span>,&nbsp;</span>}
            <Link to={PHONE_SECOND_LINK} className={styles.contacts__color}>
              {PHONE_NUMBER_SECOND}
            </Link>
          </div>
        </div>
        <div className={styles.contacts__grid}>
          <span className={styles.contacts__name}>WhatsApp:</span>
          <Link to={WHATSAPP_LINK} className={styles.contacts__text}>
            {PHONE_NUMBER}
          </Link>
        </div>
        <div className={styles.contacts__grid}>
          <span className={styles.contacts__name}>Email:</span>
          <p
            onClick={() => (window.location = 'mailto:info@pralinecakes.ru')}
            className={`${styles.contacts__text} ${styles.contacts__text_link}`}
          >
            {EMAIL}
          </p>
        </div>
        <div className={styles.contacts__grid}>
          <span className={styles.contacts__name}>График работы:</span>
          <p className={styles.contacts__text}>Ежедневно {WORK_HOURS}</p>
        </div>
      </ArticleWrapper>
    </section>
  );
};

export default Contacts;
