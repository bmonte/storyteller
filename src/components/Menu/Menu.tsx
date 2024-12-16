'use client';

import { Fragment } from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MEDIA_QUERY } from '@/constants/media-query';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useMenuStore } from '@/store/useMenuStore';

import { MENU_ITEMS } from './Menu.constants';
import styles from './Menu.module.css';
import { Backdrop } from '../Backdrop';

export function Menu() {
  const { isOpen } = useMenuStore();
  const isMobile = useMediaQuery(MEDIA_QUERY.mobile);

  const isMenuOpen = isOpen && isMobile;

  const currentPath = usePathname();

  return (
    <Backdrop open={isMenuOpen}>
      <aside
        className={clsx(styles.menu, {
          [styles['menu--open']]: isMenuOpen,
        })}
      >
        <nav>
          {MENU_ITEMS.map((group) => (
            <Fragment key={group.name}>
              <div className={styles.separator} />

              <ul className={styles.menu__group}>
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className={clsx(styles.menu__item, {
                      [styles['menu__item--active']]: currentPath === item.link,
                    })}
                  >
                    {item.icon}

                    <Link href={item.link} className={styles.menu__link}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </nav>
      </aside>
    </Backdrop>
  );
}
