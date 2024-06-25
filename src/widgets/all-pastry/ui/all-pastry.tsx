import { FC, useState } from 'react';

import { ProductBlock } from '../../../entities';
import useResize from '../../../shared/hooks/use-resize';
import { pastryData } from '../../../mockData/pastry-data';
import { Pagination } from '../../../features';

import styles from './all-pastry.module.scss';


const AllPastry: FC = () => {
  const { isScreenMd } = useResize();

  // const chokoPastry = pastryData.filter(item => item.category === 'шоколадное' )

  const pastryDataByPrice = [...pastryData].sort((a, b) => a.price - b.price);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItems = pastryDataByPrice.slice(firstItemsIndex, lastItemsIndex);
  const pageQuantity = pastryDataByPrice.length / itemsPerPage;
  const lastPage = currentPage >= pageQuantity;

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
