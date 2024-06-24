import { FC } from 'react';

import useResize from '../../../shared/hooks/useResize';
import { cakesData } from '../../../mockData/cakes-data';
import { ProductBlock, ProductScroll } from '../../../entities';

import styles from './cake-block.module.scss';
import Routes from '../../../shared/config/routes/routes';

const CakeBlock: FC = () => {
  const { isScreenLg } = useResize();

  const cakeDesktopData = [...cakesData]
    .sort((a, b) => a.rating - b.rating)
    .slice(0, 4);
  const cakeMobileData = [...cakesData]
    .sort((a, b) => a.rating - b.rating)
    .slice(0, 8);

  return (
    <section className={styles.cakeBlock}>
      {isScreenLg ? (
        <ProductBlock
          data={cakeDesktopData}
          route={Routes.CAKES}
          isLink={true}
        />
      ) : (
        <ProductScroll
          data={cakeMobileData}
          route={Routes.CAKES}
          isLink={true}
        />
      )}
    </section>
  );
};

export default CakeBlock;
