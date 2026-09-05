import { useEffect, useState } from 'react';

function getMatch() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;
}

export function useIsDesktopPointer() {
  const [isDesktop, setIsDesktop] = useState(getMatch);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isDesktop;
}
