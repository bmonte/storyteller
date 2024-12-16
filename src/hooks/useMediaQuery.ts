import { useEffect, useState } from 'react';

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = false,
  }: UseMediaQueryOptions = {},
): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }

    return defaultValue;
  });

  function getMatches(_query: string): boolean {
    return window.matchMedia(_query).matches;
  }

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    handleChange();

    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
