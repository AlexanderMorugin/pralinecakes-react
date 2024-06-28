import { FC } from 'react';

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
  PAGE_CATEGORIES_LINK,
} from '../../../shared/constants/constants';
import LinkButton from '../../link-button';
import CategoryButton from '../../category-button';

import styles from './category-block.module.scss';
import { Scroll } from '../../../features';

type TCategory = {
  name: string;
  route: string;
  image: string;
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
      {/* <div className={styles.categoryBlock__titleBox}> */}
        <h3 className={styles.categoryBlock__title}>
          Пирожные похожих категорий
        </h3>
        {/* <div className={styles.categoryBlock__figure}></div> */}
      {/* </div> */}
      <Scroll>
        {chocolateItem &&
          chocolateItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {honeyItem &&
          honeyItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {strudelItem &&
          strudelItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {fruitItem &&
          fruitItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {berryItem &&
          berryItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {sandItem &&
          sandItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {puffItem &&
          puffItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {bisquitItem &&
          bisquitItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {poppyItem &&
          poppyItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {nutItem &&
          nutItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {creamItem &&
          creamItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {yogurtItem &&
          yogurtItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {sufleItem &&
          sufleItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        {cheeseItem &&
          cheeseItem.map((item) => (
            <li key={item.route}>
              <CategoryButton
                route={`${Routes.CATEGORIES}/${item.route}`}
                name={item.name}
                image={item.image}
              />
            </li>
          ))}
        <LinkButton
          route={Routes.CATEGORIES}
          text={PAGE_CATEGORIES_LINK}
          className={styles.categoryBlock__linkButton}
        />
      </Scroll>
    </div>
  );
};

export default CategoryBlock;
