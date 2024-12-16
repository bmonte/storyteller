'use client';

import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdHelp } from 'react-icons/md';

import { Avatar } from '@/components/Avatar';
import { IconButton } from '@/components/IconButton';
import { MEDIA_QUERY } from '@/constants/media-query';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useMenuStore } from '@/store/useMenuStore';

import styles from './Header.module.css';

export function Header() {
  const { isOpen, openMenu, closeMenu } = useMenuStore();

  const isMobile = useMediaQuery(MEDIA_QUERY.mobile);

  function renderMenuBtn() {
    if (isOpen) {
      return (
        <IconButton onClick={closeMenu}>
          <FaTimes color="var(--white)" fontSize={24} />
        </IconButton>
      );
    }

    return (
      <IconButton onClick={openMenu}>
        <FaBars color="var(--white)" fontSize={24} />
      </IconButton>
    );
  }

  return (
    <header className={styles.header}>
      <section className={styles.header__items}>
        {isMobile && renderMenuBtn()}

        <Image
          src="/logo.svg"
          width="186"
          height="38"
          alt="Storyteller logo"
          priority
        />
      </section>

      <section className={styles.header__items}>
        <IconButton>
          <MdHelp color="var(--white)" fontSize={20} />
        </IconButton>

        <Avatar alt="Brunno Rodrigues" />
      </section>
    </header>
  );
}
