'use client';

import { useState } from 'react';

import {
  FaArrowRightArrowLeft,
  FaArrowDown,
  FaArrowUp,
  FaPencil,
  FaRegTrashCan,
} from 'react-icons/fa6';

import { Button } from '@/components/Button';
import { ImageGroup } from '@/components/ImageGroup';
import { StoryTag } from '@/components/StoryTag';
import { Story } from '@/models/stories';
import { formatDate } from '@/utils/formatDate';

import { TABLE_HEADER } from './StoryTable.constants';
import styles from './StoryTable.module.css';

type StoryTableProps = {
  rows: Story[];
};

type Filter = {
  keyToFilter: keyof Story;
  filterOrder: 'asc' | 'desc' | '';
};

const FILTER_ORDER: Array<Filter['filterOrder']> = ['', 'asc', 'desc'];

export function StoryTable({ rows }: StoryTableProps) {
  const [filter, setFilter] = useState<Filter>({
    keyToFilter: 'last_modified',
    filterOrder: '',
  });

  function getNextOrder(order: Filter['filterOrder']) {
    const currentOrder = FILTER_ORDER.indexOf(order);
    const nextOrder = currentOrder + 1;

    if (nextOrder > FILTER_ORDER.length - 1) {
      return FILTER_ORDER[0];
    }

    return FILTER_ORDER[nextOrder];
  }

  function handleColumnSort(key: keyof Story) {
    return setFilter(({ keyToFilter, filterOrder }) => ({
      keyToFilter: key,
      filterOrder: keyToFilter === key ? getNextOrder(filterOrder) : 'asc',
    }));
  }

  function sortTable(rowList: Story[]) {
    const rowKey = filter.keyToFilter;

    if (!filter.filterOrder) {
      return rowList;
    }

    if (filter.filterOrder === 'asc') {
      return [...rowList].sort((a, b) =>
        (a[rowKey] ?? '') > (b[rowKey] ?? '') ? 1 : -1,
      );
    }

    return [...rowList].sort((a, b) =>
      (a[rowKey] ?? '') > (b[rowKey] ?? '') ? -1 : 1,
    );
  }

  function renderArrows(key: string, sortable: boolean) {
    if (!sortable) {
      return null;
    }

    if (!filter.filterOrder || key !== filter.keyToFilter) {
      return (
        <FaArrowRightArrowLeft
          color="var(--secondary-main)"
          style={{ transform: 'rotate(90deg)' }}
        />
      );
    }

    return filter.filterOrder === 'asc' ? <FaArrowUp /> : <FaArrowDown />;
  }

  function renderTitle(title: string, liveDate?: string) {
    return (
      <div className={styles.row__title}>
        <h4>{title}</h4>

        <span>
          (
          {formatDate(liveDate, {
            hideHour: true,
            defaultString: 'No publish date set',
          })}
          )
        </span>
      </div>
    );
  }

  return (
    <section className={styles.table__container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {TABLE_HEADER.map(({ sortable, ...header }) => (
              <th
                key={header.title}
                align={header.align as 'center' | 'left'}
                className={styles.head__item}
                onClick={
                  sortable
                    ? () => handleColumnSort(header.dataKey as keyof Story)
                    : undefined
                }
                style={{ width: `${header.width}%` }}
              >
                {header.title}
                {renderArrows(header.dataKey, sortable)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortTable(rows).map((row) => (
            <tr key={row.id} className={styles.row__item}>
              <td>{renderTitle(row.title, row.live_date)}</td>
              <td>
                <ImageGroup pages={row.pages} />
              </td>
              <td>{formatDate(row.last_modified)}</td>
              <td style={{ textAlign: 'center' }}>
                <StoryTag status={row.status} />
              </td>
              <td>{formatDate(row.live_date)}</td>
              <td>{formatDate(row.end_date)}</td>
              <td>
                <div className={styles.row__actions}>
                  <Button
                    // eslint-disable-next-line no-console
                    onClick={() => console.log(row.id)}
                    color="error"
                    icon={<FaRegTrashCan fontSize={16} />}
                  />

                  <Button
                    // eslint-disable-next-line no-console
                    onClick={() => console.log(row.id)}
                    color="success"
                    icon={<FaPencil fontSize={12} />}
                  >
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
