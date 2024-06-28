import { FC } from 'react';

import styles from './all-categories.module.scss';
import { categoryData } from '../../../mockData/category-data';
import { Link } from 'react-router-dom';
import Routes from '../../../shared/config/routes/routes';

const AllCategories: FC = () => {
  return (
    <section className={styles.allCategories}>
      <ul className={styles.allCategories__list}>
        {categoryData.map((item) => (
          <li key={item.name}>
            <Link
              to={`${Routes.CATEGORIES}/${item.route}`}
              className={styles.allCategories__button}
            >
              <span className={styles.allCategories__name}>{item.name}</span>
              <img
                src={item.image}
                alt={item.name}
                className={styles.allCategories__image}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllCategories;
