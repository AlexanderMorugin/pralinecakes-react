import { FC } from 'react';

import { ProductBlock } from '../../../entities';
import { Pagination } from '../../../features';
import useResize from '../../../shared/hooks/use-resize';
import useShuffle from '../../../shared/hooks/use-shuffle';
import { ProductProps } from '../../../shared/types/types';
import usePagination from '../../../shared/hooks/use-pagination';

import styles from './category.module.scss';

interface ICategory {
  data: ProductProps[];
}

const Category: FC<ICategory> = ({ data }) => {
  const { isScreenMd } = useResize();
  const shuffledData = useShuffle(data);

  // пагинация
  const { currentPage, setCurrentPage, itemsPerPage, currentItems, lastPage } =
    usePagination(shuffledData);

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
