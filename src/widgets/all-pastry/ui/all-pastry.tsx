import { FC, useState } from 'react';

import { ProductCard } from '../../../entities';
import useResize from '../../../shared/hooks/useResize';
import { pastryData } from '../../../mockData/pastry-data';
import { Pagination } from '../../../features';

import styles from './all-pastry.module.scss';

const AllPastry: FC = () => {
  const { isScreenMd } = useResize();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const lastItemsIndex = currentPage * itemsPerPage;
  const firstItemsIndex = lastItemsIndex - itemsPerPage;
  const currentItems = pastryData.slice(firstItemsIndex, lastItemsIndex);
  const pageQuantity = pastryData.length / itemsPerPage;
  const lastPage = currentPage >= pageQuantity;

  const data = isScreenMd ? currentItems : pastryData;

  return (
    <section className={styles.allCakes}>
      <ul className={styles.allCakes__container}>
        {data.map((cake) => (
          <li key={cake.id}>
            <ProductCard
              route={cake.route}
              image={cake.image_normal}
              title={cake.title}
              description={cake.description}
              price={cake.price}
              quantity={cake.quantity_b}
            />
          </li>
        ))}
      </ul>
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
