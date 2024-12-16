'use client';

import { useEffect, useState } from 'react';

import { FaPlus } from 'react-icons/fa';

import { Button } from '@/components/Button';
import { InputSearch } from '@/components/InputSearch';
import { Pagination } from '@/components/Pagination';
import { StatusSelect } from '@/components/StatusSelect';
import { StoryTable } from '@/components/StoryTable';
import { MEDIA_QUERY } from '@/constants/media-query';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { Story, StoryStatus } from '@/models/stories';
import { getStories } from '@/service/stories';

import styles from './page.module.css';

interface Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

type Filters = {
  title?: string;
  status?: StoryStatus | '';
};

export default function Home() {
  const isDesktop = useMediaQuery(MEDIA_QUERY.desktop);

  const [rows, setRows] = useState<Story[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    per_page: 10,
    total: 1,
    total_pages: 1,
  });

  const [filters, setFilters] = useState<Filters>({
    status: '',
  });

  useEffect(() => {
    getAllStories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.status, filters.title, pagination.page, pagination.per_page]);

  async function getAllStories() {
    const { items, ...restPagination } = await getStories({
      ...(filters.status && { status: filters.status }),
      ...(filters.title && { title: filters.title }),
      page: pagination.page,
      per_page: pagination.per_page,
    });

    setRows(items);
    setPagination(() => ({
      ...restPagination,
      page: restPagination.page || 1,
    }));
  }

  function renderPaginationHelper(_pagination: Pagination) {
    const { page, per_page, total } = _pagination;
    const min = (page - 1) * per_page;

    return (
      <p>
        Showing {min || 1} to {Math.min(page * per_page, total)} of {total}
      </p>
    );
  }

  return (
    <article className={styles.dashboard}>
      <section className={styles.dashboard__header}>
        <h1>Stories</h1>

        <div className={styles['dashboard__header--actions']}>
          <InputSearch
            onSearch={(text) =>
              setFilters((prevState) => ({
                ...prevState,
                title: text,
              }))
            }
          />

          <StatusSelect
            defaultValue={filters.status}
            onChange={(status) =>
              setFilters((prevState) => ({
                ...prevState,
                status: status as Filters['status'],
              }))
            }
          />

          {!!pagination.total &&
            isDesktop &&
            renderPaginationHelper(pagination)}
        </div>

        <Button color="success" icon={<FaPlus />} onClick={() => null}>
          New Story
        </Button>
      </section>

      <StoryTable rows={rows} />

      {!!pagination.total && (
        <div className={styles.dashboard__pagination}>
          <Pagination
            currentPage={pagination.page}
            onPageChange={(page, perPage) =>
              setPagination((prevState) => ({
                page,
                per_page: perPage,
                total: prevState?.total ?? 1,
                total_pages: prevState?.total_pages ?? 1,
              }))
            }
            pageCount={pagination.total_pages}
            pageSize={pagination.per_page}
          />
        </div>
      )}
    </article>
  );
}
