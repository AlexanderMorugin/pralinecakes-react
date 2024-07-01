import { useState } from 'react';

import { ProductProps } from '../types/types';

const usePagination = (array: ProductProps[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItems = array.slice(firstItemsIndex, lastItemsIndex);
  const pageQuantity = array.length / itemsPerPage;
  const lastPage = currentPage >= pageQuantity;

  return {
    currentPage,
    setCurrentPage,
    itemsPerPage,
    currentItems,
    lastPage,
  };
};

export default usePagination;
