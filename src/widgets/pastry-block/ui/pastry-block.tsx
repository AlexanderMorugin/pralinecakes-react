import { FC } from 'react';

import useResize from '../../../shared/hooks/use-resize';
import usePastryArray from '../../../shared/hooks/use-pastry-array';
import Routes from '../../../shared/config/routes/routes';
import { ProductBlock, ProductScroll } from '../../../entities';

import styles from './pastry-block.module.scss';

const PastryBlock: FC = () => {
  const { isScreenLg, isScreenMd } = useResize();
  const { fourPastryData, threePastryData, eightPastryData } = usePastryArray();

  const pastryDesktopData = isScreenLg ? fourPastryData : threePastryData;

  return (
    <section className={styles.pastryBlock}>
      {isScreenMd ? (
        <ProductBlock
          dataPastry={pastryDesktopData}
          routePastry={Routes.PASTRY}
          isLink={true}
          isPastry={true}
          isCake={false}
        />
      ) : (
        <ProductScroll
          dataPastry={eightPastryData}
          routePastry={Routes.PASTRY}
          isLink={true}
          isPastry={true}
          isCake={false}
        />
      )}
    </section>
  );
};

export default PastryBlock;
