import { FC } from 'react';

import styles from './not-found.module.scss';
import { Link } from 'react-router-dom';
import Routes from '../../../shared/config/routes/routes';

const NotFound: FC = () => {
  return (
    <section className={styles.notFound}>
      <h1 className={styles.notFound__title}>Ошибка 404</h1>
      <p className={styles.notFound__text}>Такая страница не существует!</p>
      <Link to={Routes.HOME}>Перейдите на главную страницу</Link>
    </section>
  );
};

export default NotFound;
