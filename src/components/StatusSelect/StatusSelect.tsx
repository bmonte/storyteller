'use client';

import { forwardRef } from 'react';

import styles from './StatusSelect.module.css';

type StatusSelectProps = {
  onChange: (status: string) => void;
  defaultValue?: string;
};

const STATUS_LIST = {
  draft: 'Draft',
  live: 'Live',
  past: 'Past',
  scheduled: 'Scheduled',
};

function SelectComponent(
  { onChange, defaultValue }: StatusSelectProps,
  ref: React.Ref<HTMLSelectElement>,
) {
  return (
    <select
      ref={ref}
      className={styles.select}
      defaultValue={defaultValue}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">All Statuses</option>

      {Object.entries(STATUS_LIST).map(([key, title]) => (
        <option key={key} value={key}>
          {title}
        </option>
      ))}
    </select>
  );
}

export const StatusSelect = forwardRef(SelectComponent);
