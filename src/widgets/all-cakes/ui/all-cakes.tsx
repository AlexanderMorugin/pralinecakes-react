import { FC, useState } from 'react';

import { ProductBlock } from '../../../entities';
import { Pagination } from '../../../features';
import useResize from '../../../shared/hooks/use-resize';
import { cakesData } from '../../../mockData/cakes-data';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  const { isScreenMd } = useResize();

  const cakesDataByPrice = [...cakesData].sort((a, b) => a.price - b.price);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItems = cakesDataByPrice.slice(firstItemsIndex, lastItemsIndex);
  const pageQuantity = cakesDataByPrice.length / itemsPerPage;
  const lastPage = currentPage >= pageQuantity;

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
