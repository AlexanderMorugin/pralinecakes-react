import { FC } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../../shared/config/routes/routes';
import {
  CATEGORY_BERRY,
  CATEGORY_BISQUIT,
  CATEGORY_CHEESE,
  CATEGORY_CHOCOLATE,
  CATEGORY_CREAM,
  CATEGORY_FRUIT,
  CATEGORY_HONEY,
  CATEGORY_NUT,
  CATEGORY_POPPY,
  CATEGORY_PUFF,
  CATEGORY_SAND,
  CATEGORY_STRUDEL,
  CATEGORY_SUFLE,
  CATEGORY_YOGURT,
} from '../../../shared/constants/constants';

import styles from './category-block.module.scss';

type TCategory = {
  name: string;
  route: string;
};

interface ICategoryBlock {
  category: TCategory[];
}

const CategoryBlock: FC<ICategoryBlock> = ({ category }) => {
  const categoryItem = category.map((item) => item);

  const chocolateItem = categoryItem.filter(
    (item) => item.name === CATEGORY_CHOCOLATE
  );
  const honeyItem = categoryItem.filter((item) => item.name === CATEGORY_HONEY);
  const strudelItem = categoryItem.filter(
    (item) => item.name === CATEGORY_STRUDEL
  );
  const fruitItem = categoryItem.filter((item) => item.name === CATEGORY_FRUIT);
  const berryItem = categoryItem.filter((item) => item.name === CATEGORY_BERRY);
  const sandItem = categoryItem.filter((item) => item.name === CATEGORY_SAND);
  const puffItem = categoryItem.filter((item) => item.name === CATEGORY_PUFF);
  const bisquitItem = categoryItem.filter(
    (item) => item.name === CATEGORY_BISQUIT
  );
  const poppyItem = categoryItem.filter((item) => item.name === CATEGORY_POPPY);
  const nutItem = categoryItem.filter((item) => item.name === CATEGORY_NUT);
  const creamItem = categoryItem.filter((item) => item.name === CATEGORY_CREAM);
  const yogurtItem = categoryItem.filter(
    (item) => item.name === CATEGORY_YOGURT
  );
  const sufleItem = categoryItem.filter((item) => item.name === CATEGORY_SUFLE);
  const cheeseItem = categoryItem.filter(
    (item) => item.name === CATEGORY_CHEESE
  );

  return (
    <div className={styles.categoryBlock}>
      <h3 className={styles.categoryBlock__title}>Смотрите другие пирожные</h3>
      <ul className={styles.categoryBlock__list}>
        {chocolateItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}

        {honeyItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {strudelItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {fruitItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {berryItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {sandItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {puffItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {bisquitItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {poppyItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {nutItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {creamItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {yogurtItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {sufleItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
        {cheeseItem.map((item) => (
          <li key={item.route}>
            <Link to={`${Routes.CATEGORIES}/${item.route}`} className={styles.categoryBlock__button}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryBlock;
