import { FC } from 'react';

import useResize from '../../../shared/hooks/use-resize';
import useCakeArray from '../../../shared/hooks/use-cake-array';
import { ProductBlock, ProductScroll } from '../../../entities';
import Routes from '../../../shared/config/routes/routes';

import styles from './cake-block.module.scss';

const CakeBlock: FC = () => {
  const { isScreenLg, isScreenMd } = useResize();
  const { fourCakeData, threeCakeData, eightCakeData } = useCakeArray();

  const cakeDesktopData = isScreenLg ? fourCakeData : threeCakeData;

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
          dataCakes={eightCakeData}
          routeCakes={Routes.CAKES}
          isLink={true}
          isCake={true}
          isPastry={false}
        />
      )}
    </section>
  );
};

export default CakeBlock;
