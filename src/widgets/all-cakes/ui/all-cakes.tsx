import { FC, useState } from 'react';

import { ProductCard } from '../../../entities';
import { Pagination } from '../../../features';
import useResize from '../../../shared/hooks/useResize';
import { cakesData } from '../../../mockData/cakes-data';

import styles from './all-cakes.module.scss';

const AllCakes: FC = () => {
  const { isScreenMd } = useResize();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItems = cakesData.slice(firstItemsIndex, lastItemsIndex);
  const pageQuantity = cakesData.length / itemsPerPage;
  const lastPage = currentPage >= pageQuantity;

  const data = isScreenMd ? currentItems : cakesData;

  return (
    <section className={styles.allCakes}>
      <ul className={styles.allCakes__container}>
        {data.map((cake) => (
          <li key={cake.id}>
            <ProductCard
              route={cake.route}
              image={cake.image_small}
              title={cake.title}
              description={cake.description}
              price={cake.price}
            />
          </li>
        ))}
      </ul>
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
