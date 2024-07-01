import { FC } from 'react';

import { ProductBlock } from '../../../entities';
import useResize from '../../../shared/hooks/use-resize';
import usePagination from '../../../shared/hooks/use-pagination';
import { pastryData } from '../../../mockData/pastry-data';
import { Pagination } from '../../../features';

import styles from './all-pastry.module.scss';

const AllPastry: FC = () => {
  const { isScreenMd } = useResize();

  const pastryDataByPrice = [...pastryData].sort((a, b) => a.price - b.price);

  // пагинация
  const { currentPage, setCurrentPage, itemsPerPage, currentItems, lastPage } =
    usePagination(pastryDataByPrice);

  const dataPastry = isScreenMd ? currentItems : pastryDataByPrice;

  return (
    <section className={styles.allCakes}>
      <ProductBlock dataPastry={dataPastry} isCake={false} isPastry={true} />

      {isScreenMd && (
        <Pagination
          totalItems={pastryData.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )}
    </section>
  );
};

export default AllPastry;
