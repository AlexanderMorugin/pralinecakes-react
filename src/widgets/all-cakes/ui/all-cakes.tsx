import { FC } from 'react';

import { ProductBlock } from '../../../entities';
import { Pagination } from '../../../features';
import useResize from '../../../shared/hooks/use-resize';
import usePagination from '../../../shared/hooks/use-pagination';
import { cakesData } from '../../../mockData/cakes-data';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  const { isScreenMd } = useResize();

  const cakesDataByPrice = [...cakesData].sort((a, b) => a.price - b.price);

  // пагинация
  const { currentPage, setCurrentPage, itemsPerPage, currentItems, lastPage } =
    usePagination(cakesDataByPrice);

  const dataCakes = isScreenMd ? currentItems : cakesDataByPrice;

  return (
    <section className={styles.allCakes}>
      <ProductBlock dataCakes={dataCakes} isCake={true} isPastry={false} />
      {isScreenMd && (
        <Pagination
          totalItems={cakesData.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )}
    </section>
  );
};

export default AllCakes;
