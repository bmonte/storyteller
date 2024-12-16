'use client';

import { memo } from 'react';

import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number, perPage: number) => void;
  pageSize: number;
  pageCount: number;
};

const PAGE_SIZE = [5, 10, 20];

function PaginationComponent({
  currentPage,
  pageSize = 0,
  pageCount = 0,
  onPageChange,
}: PaginationProps) {
  function onNext() {
    onPageChange(currentPage + 1, pageSize);
  }

  function onPrevious() {
    onPageChange(currentPage - 1, pageSize);
  }

  return (
    <section className={styles.pagination}>
      <p>
        Page {currentPage} of {pageCount}
      </p>

      <select
        className={styles.pagination__select}
        defaultValue={10}
        onChange={(event) => onPageChange(currentPage, +event.target.value)}
      >
        {PAGE_SIZE.map((size) => (
          <option key={size} value={size}>
            {size} Rows
          </option>
        ))}
      </select>

      <ul className={styles.pagination__list}>
        <li>
          <button
            type="button"
            tabIndex={0}
            className={styles.pagination__btn}
            aria-disabled={currentPage === 1}
            disabled={currentPage === 1}
            aria-label="Previous page"
            onClick={onPrevious}
          >
            <FaLongArrowAltLeft />
          </button>
        </li>

        <li>
          <button
            type="button"
            tabIndex={0}
            className={styles.pagination__btn}
            aria-disabled={currentPage === pageCount}
            aria-label="Next page"
            disabled={currentPage === pageCount}
            onClick={onNext}
          >
            <FaLongArrowAltRight />
          </button>
        </li>
      </ul>
    </section>
  );
}

export const Pagination = memo(PaginationComponent);
