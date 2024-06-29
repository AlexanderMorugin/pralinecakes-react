import { FC } from 'react';

import Routes from '../../../shared/config/routes/routes';
import { PAGE_CATEGORIES_LINK } from '../../../shared/constants/constants';
import LinkButton from '../../link-button';
import CategoryButton from '../../category-button';
import { Scroll } from '../../../features';
import useCategoryItem from '../../../shared/hooks/use-category-item';

import styles from './category-block.module.scss';

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
  const {
    chocolateItem,
    honeyItem,
    strudelItem,
    fruitItem,
    berryItem,
    sandItem,
    puffItem,
    bisquitItem,
    poppyItem,
    nutItem,
    creamItem,
    yogurtItem,
    sufleItem,
    cheeseItem,
  } = useCategoryItem(categoryItem);

  return (
    <div className={styles.categoryBlock}>
      <h3 className={styles.categoryBlock__title}>
        Пирожные похожих категорий
      </h3>

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
