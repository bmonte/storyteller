'use client';

import { useState, forwardRef, useRef } from 'react';

import { FaSearch } from 'react-icons/fa';

import styles from './InputSearch.module.css';

interface InputSearchProps {
  defaultSearchTerm?: string;
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

function InputSearchComponent(
  { onSearch, defaultSearchTerm, placeholder = 'Search' }: InputSearchProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [value, setValue] = useState(defaultSearchTerm ?? '');

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current?.click();
    }
  }

  return (
    <div className={styles.input__container}>
      <input
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onKeyDown={handleKeyDown}
      />

      <button
        type="button"
        tabIndex={0}
        ref={buttonRef}
        className={styles.input__btn}
        aria-label="Search stories by title"
        onClick={() => onSearch(value)}
      >
        <FaSearch color="var(--white)" fontSize={12} />
      </button>
    </div>
  );
}

export const InputSearch = forwardRef(InputSearchComponent);
