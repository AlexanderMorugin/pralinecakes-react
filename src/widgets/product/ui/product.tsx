import { FC } from 'react';

import PageHeading from '../../page-heading';
import { ArticleWrapper, HelmetMeta } from '../../../components';
import {
  CategoryBlock,
  ProductDefrost,
  ProductDescribe,
  ProductExpiration,
  ProductNutritions,
  ProductPrice,
  ProductPrices,
} from '../../../entities';
import { CAKE_PACK, PASTRY_PACK } from '../../../shared/constants/constants';

import styles from './product.module.scss';
import Routes from '../../../shared/config/routes/routes';

export interface IProduct {
  id: number;
  route: string;
  image_normal: string;
  image_large: string;
  title: string;
  description: string;
  condition: string;
  ingredients: string;
  protein: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  quantity: number;
  quantity_b: number;
  weight: number;
  weight_b: number;
  price: number;
  price_b: number;
  category: string;

  cake?: boolean;
  pastry?: boolean;
}

const Product: FC<IProduct> = ({
  cake,
  pastry,
  route,
  title,
  image_normal,
  // image_large,
  description,
  condition,
  ingredients,
  protein,
  fat,
  carbohydrates,
  calories,
  quantity,
  quantity_b,
  weight,
  weight_b,
  price,
  price_b,
  category,
}) => {



  return (
    <section className={styles.product}>
      {cake && <PageHeading title={`Торт "${title}"`} />}
      {pastry && <PageHeading title={`Пирожное "${title}"`} />}
      <div className={styles.product__container}>
        <img src={image_normal} alt={title} className={styles.product__image} />
        <ArticleWrapper>
          <div className={styles.product__description}>
            <span className={styles.product__span}>Описание</span>
            <p>{description}</p>
            <p className={styles.product__condition}>{condition}</p>
          </div>

          <ProductDescribe
            title='Упаковка'
            text={cake ? CAKE_PACK : PASTRY_PACK}
          />
          <ProductDescribe title='Состав' text={ingredients} />
          <ProductNutritions
            protein={protein}
            fat={fat}
            carbohydrates={carbohydrates}
            calories={calories}
          />
          {quantity > 1 ? (
            <ProductPrices
              quantity={quantity}
              quantity_b={quantity_b}
              weight={weight}
              weight_b={weight_b}
              price={price}
              price_b={price_b}
            />
          ) : (
            <ProductPrice weight={weight} price={price} />
          )}
        </ArticleWrapper>
      </div>

      <div className={styles.product__grid}>
        <ProductExpiration />
        <ProductDefrost />
      </div>

      {pastry && <CategoryBlock category={category} />}




      {cake && (
        <HelmetMeta
          title={`${title} торт от кондитерской Пралине`}
          description={description}
          image={image_normal}
          route={`${Routes.BASE_URL}${Routes.CAKES}/${route}`}
        />
      )}

      {pastry && (
        <HelmetMeta
          title={`${title} пирожное от кондитерской Пралине`}
          description={description}
          image={image_normal}
          route={`${Routes.BASE_URL}${Routes.PASTRY}/${route}`}
        />
      )}
    </section>
  );
};

export default Product;
