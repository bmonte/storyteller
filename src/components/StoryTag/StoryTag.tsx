'use client';

import clsx from 'clsx';

import type { StoryStatus } from '@/models/stories';

import styles from './StoryTag.module.css';

type StoryTagProps = {
  status: StoryStatus;
};

const STATUS_TRANSFORM: Record<StoryStatus, string> = {
  draft: 'Draft',
  live: 'Live',
  past: 'Past',
  scheduled: 'Scheduled',
};

export function StoryTag({ status }: StoryTagProps) {
  return (
    <span className={clsx(styles.tag, styles[`tag--${status}`])}>
      {STATUS_TRANSFORM[status]}
    </span>
  );
}
