'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, Variants } from '@/components/module/framer-motion';
import { HeaderBanner } from './header-banner';
import { MainHeader } from './main-header';

export function SiteHeader() {
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  // Controls visibility when scrolling down
  const [isHidden, setIsHidden] = useState(false);
  // Controls banner visibility based on being at the top of the page
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const isScrollingDown = y > lastY.current;
    
    // Rule 1: Hide header if scrolling down past a threshold (e.g., 150px)
    if (isScrollingDown && y > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    // Rule 2: Track if we are at the very top of the page
    setIsAtTop(y <= 20); // Use a small buffer

    lastY.current = y;
  });

  // Variants for the banner container
  const bannerVariants: Variants = {
    visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    hidden: { y: '-100%', transition: { duration: 0.3, ease: 'easeIn' } },
  };

  // Variants for the main header container
  const headerVariants: Variants = {
    visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    // This pushes the header up to hide it completely
    hidden: { y: '-100%', transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <>
      <motion.div
        variants={bannerVariants}
        // Animate based on two conditions:
        // 1. Is the page scrolled past the top?
        // 2. Is the main header hidden due to scrolling down?
        animate={!isAtTop || isHidden ? 'hidden' : 'visible'}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <HeaderBanner />
      </motion.div>
      
      <motion.div
        variants={headerVariants}
        // Animate based only on the scroll-down `isHidden` state
        animate={isHidden ? 'hidden' : 'visible'}
        // We use `initial={false}` to prevent the hiding animation on initial page load
        initial={false}
        // The top position is dynamic: it sits below the banner when visible, otherwise at the top.
        className="fixed left-0 right-0 z-40"
        style={{
          top: isAtTop && !isHidden ? '56px' : '0px', // 56px is the height of the banner (h-14)
          transition: 'top 0.3s ease-out'
        }}
      >
        <MainHeader />
      </motion.div>
    </>
  );
}