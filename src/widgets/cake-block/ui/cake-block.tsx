import { FC } from 'react';

import { cakesData } from '../../../mockData/cakes-data';
import useResize from '../../../shared/hooks/use-resize';
import useShuffleArray from '../../../shared/hooks/use-shuffle-array';
import { ProductBlock, ProductScroll } from '../../../entities';
import Routes from '../../../shared/config/routes/routes';

import styles from './cake-block.module.scss';

const CakeBlock: FC = () => {
  const { isScreenLg, isScreenMd } = useResize();
  const { threeItemsData, fourItemsData, eightItemsData } =
    useShuffleArray(cakesData);

  const cakeDesktopData = isScreenLg ? fourItemsData : threeItemsData;

  return (
    <section className={styles.cakeBlock}>
      {isScreenMd ? (
        <ProductBlock
          dataCakes={cakeDesktopData}
          routeCakes={Routes.CAKES}
          isLink={true}
          isCake={true}
          isPastry={false}
        />
      ) : (
        <ProductScroll
          dataCakes={eightItemsData}
          routeCakes={Routes.CAKES}
          isCake={true}
          isPastry={false}
        />
      )}
    </section>
  );
};

export default CakeBlock;
