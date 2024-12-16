import Image from 'next/image';

import { Story } from '@/models/stories';

import styles from './ImageGroup.module.css';

const MAX_PAGES = 6;

type ImageGroupProps = {
  pages: Story['pages'];
};

export function ImageGroup({ pages }: ImageGroupProps) {
  const totalPages = pages.length;

  function renderCounter() {
    const rest = totalPages - MAX_PAGES;

    return (
      <div className={styles.images__counter}>
        <p>+{rest}</p>
      </div>
    );
  }

  if (!totalPages) {
    return '-';
  }

  return (
    <section className={styles.images__container}>
      {[...pages].slice(0, MAX_PAGES).map((page, index) => (
        <Image
          key={page.download_url}
          src={page.download_url}
          alt={`Page story number ${index}`}
          width={28}
          height={54}
          unoptimized
        />
      ))}

      {totalPages > 6 && renderCounter()}
    </section>
  );
}
