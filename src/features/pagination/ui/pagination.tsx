import { KeyboardEvent, FC } from 'react';

import ArrowIcon from '../../../assets/icons/icon-arrow.svg';

import styles from './pagination.module.scss';

interface IPagination {
  totalItems: number;
  itemsPerPage: number;
  setCurrentPage: (e: number) => void;
  currentPage: number;
  lastPage: boolean;
}

const Pagination: FC<IPagination> = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  lastPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleKeyDown = (e: KeyboardEvent, page: number) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setCurrentPage(page);
    }
  };

  const prevKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      handlePrev();
    }
  };

  const nextKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div role='list' className={styles.pagination}>
      <div
        role='button'
        tabIndex={0}
        onKeyDown={(e) => prevKeyDown(e)}
        className={
          currentPage > 1
            ? styles.pagination__button
            : `${styles.pagination__button} ${styles.pagination__button_disable}`
        }
        onClick={handlePrev}
      >
        <img
          src={ArrowIcon}
          alt='arrow prev'
          className={styles.pagination__arrowPrev}
        />
      </div>

      <ul className={styles.pagination__list}>
        {pages.map((page, index) => (
          <li
            key={index}
            role='button'
            onKeyDown={(e) => handleKeyDown(e, page)}
            tabIndex={0}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? `${styles.pagination__button} ${styles.pagination__button_active}`
                : styles.pagination__button
            }
          >
            {page}
          </li>
        ))}
      </ul>

      <div
        role='button'
        tabIndex={0}
        onKeyDown={(e) => nextKeyDown(e)}
        className={
          !lastPage
            ? styles.pagination__button
            : `${styles.pagination__button} ${styles.pagination__button_disable}`
        }
        onClick={handleNext}
      >
        <img
          src={ArrowIcon}
          alt='arrow next'
          className={styles.pagination__arrowNext}
        />
      </div>
    </div>
  );
};

export default Pagination;
