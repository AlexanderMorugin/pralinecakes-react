import { FC } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../../shared/config/routes/routes';

import styles from './cooperation-block.module.scss';

const CooperationBlock: FC = () => {
  return (
    <section className={styles.cooperationBlock}>
      <p className={styles.cooperationBlock__text}>
        <span className={styles.cooperationBlock__marksFirst}>„</span>
        Приглашаем к сотрудничеству кафе, театры, детские развлекательные зоны,
        комплексы, кейтеринговые службы, кофейни, рестораны, бары, пекарни.
        Становитесь клиентом "Пралине", приобретайте качественные десерты по
        выгодной стоимости...&nbsp;
        <Link to={Routes.COOPERATION} className={styles.cooperationBlock__link}>
          подробнее
        </Link>
        <span className={styles.cooperationBlock__marksLast}>“</span>
      </p>
    </section>
  );
};

export default CooperationBlock;
