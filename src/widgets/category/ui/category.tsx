import { FC, useState } from 'react';

import { IProduct } from '../../product/ui/product';

import styles from './category.module.scss';
import { ProductBlock } from '../../../entities';
import { Pagination } from '../../../features';
import useResize from '../../../shared/hooks/use-resize';
import useShuffle from '../../../shared/hooks/use-shuffle';

interface ICategory {
  data: IProduct[];
}

const Category: FC<ICategory> = ({ data }) => {
  const { isScreenMd } = useResize();
  const shuffledData = useShuffle(data);

  // пагинация
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItems = shuffledData.slice(firstItemsIndex, lastItemsIndex);
  const pageQuantity = shuffledData.length / itemsPerPage;
  const lastPage = currentPage >= pageQuantity;

  const dataPastry = isScreenMd ? currentItems : shuffledData;

  return (
    <section className={styles.category}>
      <ProductBlock dataPastry={dataPastry} isCake={false} isPastry={true} />
      {data.length >= 5 && isScreenMd && (
        <Pagination
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      )}
    </section>
  );
};

export default Category;
