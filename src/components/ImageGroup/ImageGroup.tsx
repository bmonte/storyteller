import Image from 'next/image';

import { MEDIA_QUERY } from '@/constants/media-query';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Story } from '@/models/stories';

import styles from './ImageGroup.module.css';

type ImageGroupProps = {
  pages: Story['pages'];
};

export function ImageGroup({ pages }: ImageGroupProps) {
  const isMobile = useMediaQuery(MEDIA_QUERY.mobile);

  const maxPages = isMobile ? 4 : 6;
  const totalPages = pages.length;

  function renderCounter() {
    const rest = totalPages - maxPages;

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
      {[...pages].slice(0, maxPages).map((page, index) => (
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
