import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useIsDesktopPointer } from '../hooks/useIsDesktopPointer';

export default function CustomCursor() {
  const isDesktop = useIsDesktopPointer();
  const prefersReducedMotion = useReducedMotion();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 320, mass: 0.4 });
  // Trailing ring lags slightly behind the dot for a soft trailing feel.
  const trailX = useSpring(cursorX, { damping: 22, stiffness: 120, mass: 0.6 });
  const trailY = useSpring(cursorY, { damping: 22, stiffness: 120, mass: 0.6 });

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    document.documentElement.classList.add('cursor-enabled');

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const over = (e) => {
      const target = e.target.closest('a, button, [data-cursor-hover]');
      setIsHovering(Boolean(target));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);

    return () => {
      document.documentElement.classList.remove('cursor-enabled');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [isDesktop, prefersReducedMotion, cursorX, cursorY, isVisible]);

  if (!isDesktop || prefersReducedMotion || !isVisible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-(--color-brass)"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 10 : 7,
          height: isHovering ? 10 : 7,
        }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-(--color-brass)/50"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 46 : 28,
          height: isHovering ? 46 : 28,
          opacity: isHovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </>
  );
}
