import { FC } from 'react';

import Image from '../../../assets/images/delivery/delivery.jpg';

import styles from './delivery-block.module.scss';

import { PAGE_DELIVERY_TITLE } from '../../../shared/constants/constants';
import useResize from '../../../shared/hooks/use-resize';
import { LinkTextArrow } from '../../../entities';
import Routes from '../../../shared/config/routes/routes';

const DeliveryBlock: FC = () => {
  const { isScreenMd } = useResize();
  return (
    <section className={styles.deliveryBlock}>
      <img src={Image} alt='Доставка' className={styles.deliveryBlock__image} />

      <div className={styles.deliveryBlock__container}>
        <article className={styles.deliveryBlock__textBlock}>
          <div className={styles.deliveryBlock__titleBox}>
            <h3 className={styles.deliveryBlock__title}>
              {PAGE_DELIVERY_TITLE}
            </h3>
            <LinkTextArrow
              route={Routes.DELIVERY}
              subtitle='подробнее'
              className={styles.deliveryBlock__linkTextArrow}
            />
          </div>
          <p className={styles.deliveryBlock__text}>
            Доставляем пирожные и торты по Москве и ближайшие пригородные
            районы. Привезем десерты бесплатно, бережно, качественно и вовремя!
          </p>
          {isScreenMd && (
            <p className={styles.deliveryBlock__text}>
              Вся продукция доставляется в замороженом виде, а наши автомобили
              оборудованы специальными морозильными камерами.
            </p>
          )}
          {isScreenMd && (
            <p className={styles.deliveryBlock__text}>
              Доставка осуществляется на следующий день после заказа.
            </p>
          )}
        </article>
      </div>
    </section>
  );
};

export default DeliveryBlock;
