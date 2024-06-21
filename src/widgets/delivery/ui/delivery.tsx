import { FC } from 'react';

import Image from '../../../assets/images/content-woman-working-couri.jpg';
import ImageSquareOne from '../../../assets/images/background/back-square-one.png';
import ImageSquareTwo from '../../../assets/images/background/back-square-two.png';
import useResize from '../../../shared/hooks/useResize';

import styles from './delivery.module.scss';

const Delivery: FC = () => {
  const { isScreenMd } = useResize();

  return (
    <section className={styles.delivery}>
      <img src={Image} alt='Доставка' className={styles.delivery__image} />

      <ul className={styles.delivery__container}>
        <li
          className={`${styles.delivery__block} ${styles.delivery__block_theme_one}`}
        >
          <img
            src={ImageSquareTwo}
            alt='Background'
            className={styles.delivery__squareOne}
          />
          {isScreenMd && (
            <div
              className={`${styles.delivery__circle} ${styles.delivery__circle_theme_one}`}
            >
              1
            </div>
          )}

          <article className={styles.delivery__article}>
            <h3 className={styles.delivery__title}>Довезем в лучшем виде!</h3>
            <p>
              Вся продукция доставляется в замороженом виде, а наши автомобили
              оборудованы специальными морозильными камерами. Мы соблюдаем
              температурный режим транспортировки и несем полную гарантию
              качества своей продукции.
            </p>
          </article>
        </li>

        <li
          className={`${styles.delivery__block} ${styles.delivery__block_theme_two}`}
        >
          <img
            src={ImageSquareOne}
            alt='Background'
            className={styles.delivery__squareTwo}
          />
          {isScreenMd && (
            <div
              className={`${styles.delivery__circle} ${styles.delivery__circle_theme_two}`}
            >
              2
            </div>
          )}

          <article className={styles.delivery__article}>
            <h3 className={styles.delivery__title}>До куда хватит горючки?</h3>
            <p>
              Доставляем пирожные и торты по Москве и ближайшие пригородные
              районы. Привезем десерты бесплатно, бережно, качественно и
              вовремя! Условия доставки для более дальних клиентов оговариваются
              дополнительно.
            </p>
          </article>
        </li>

        <li
          className={`${styles.delivery__block} ${styles.delivery__block_theme_three}`}
        >
          <img
            src={ImageSquareOne}
            alt='Background'
            className={styles.delivery__squareThree}
          />
          {isScreenMd && (
            <div
              className={`${styles.delivery__circle} ${styles.delivery__circle_theme_three}`}
            >
              3
            </div>
          )}

          <article className={styles.delivery__article}>
            <h3 className={styles.delivery__title}>Берем недорого!</h3>
            <p>
              Доставка осуществляется на следующий день после заказа, но только
              в будние дни и при сумме свыше 7000 рублей. Не стесняйтесь,
              заказывайте побольше, замороженные десерты хранятся долго!
            </p>
          </article>
        </li>

        <li
          className={`${styles.delivery__block} ${styles.delivery__block_theme_four}`}
        >
          <img
            src={ImageSquareTwo}
            alt='Background'
            className={styles.delivery__squareFour}
          />
          {isScreenMd && (
            <div
              className={`${styles.delivery__circle} ${styles.delivery__circle_theme_four}`}
            >
              4
            </div>
          )}

          <article className={styles.delivery__article}>
            <h3 className={styles.delivery__title}>Отдадим в хорошие руки!</h3>
            <p>
              Если десерты требуются срочно или в день заказа - их можно забрать
              самовывозом. Сумма заказа в этом случае значения не имеет, но
              имейте ввиду, что самовывоз возможен в часы работы кондитерской.
            </p>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Delivery;
