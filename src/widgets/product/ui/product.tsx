import { FC } from 'react';

import PageHeading from '../../page-heading';
import { ArticleWrapper, HelmetMeta } from '../../../components';
import {
  ProductDescribe,
  ProductExpiration,
  ProductNutritions,
  ProductPrice,
} from '../../../entities';
import { CAKE_PACK } from '../../../shared/constants/constants';

import styles from './product.module.scss';
import Routes from '../../../shared/config/routes/routes';

export interface IProduct {
  id: number;
  route: string;
  image_normal: string;
  image_large: string;
  title: string;
  description: string;
  ingredients: string;
  protein: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  weight: number;
  price: number;
  category: string;
}

const Product: FC<IProduct> = ({ ...item }) => {
  return (
    <section className={styles.product}>
      <PageHeading title={`${item.title} торт`} />
      <div className={styles.product__container}>
        <img
          src={item.image_large}
          alt={item.title}
          className={styles.product__image}
        />
        <ArticleWrapper>
          <div className={styles.product__description}>
            <span className={styles.product__span}>Описание</span>
            <p>{item.description}</p>
          </div>

          <ProductDescribe title='Упаковка' text={CAKE_PACK} />
          <ProductDescribe title='Состав' text={item.ingredients} />
          <ProductNutritions
            protein={item.protein}
            fat={item.fat}
            carbohydrates={item.carbohydrates}
            calories={item.calories}
          />
          <ProductPrice weight={item.weight} price={item.price} />
        </ArticleWrapper>
      </div>

      <ProductExpiration />

      <HelmetMeta
        title={`${item.title} торт от кондитерской Пралине`}
        description={item.description}
        image={item.image_normal}
        route={`${Routes.BASE_URL}${Routes.CAKES}/${item.route}`}
      />
    </section>
  );
};

export default Product;
