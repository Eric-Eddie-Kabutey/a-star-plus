'use client';

import { useEffect, useState } from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

function AnimatedPill() {
  return (
    <motion.span
      layoutId="header-banner-pill"
      className="absolute inset-0 z-0 rounded-full bg-[#000084]"
      transition={{ type: 'spring', stiffness: 350, damping: 35 }}
    />
  );
}

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

type Tab = 'residential' | 'commercial';

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative w-32 rounded-ful px-4 py-1.5 text-sm font-medium transition-colors duration-200',
        isActive ? 'text-white' : 'text-black hover:text-gray-700'
      )}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {isActive && <AnimatedPill />}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

// Main component, now simplified
export function HeaderBanner() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<Tab>('residential');

  useEffect(() => {
    if (pathname.startsWith('/commercial')) {
      setActiveTab('commercial')
    } else {
      setActiveTab('residential')
    }
  }, [ pathname ])
  

  
  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab)

    if (tab === 'residential') {
      router.push("/") // Home Page
    } else {
      router.push("/commercial")
    }
    
  }
  // Animation for the inner content
  const contentVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  return (
    <div className="w-full bg-black">
      <motion.div
        initial="initial"
        animate="animate"
        variants={contentVariants}
        className="container mx-auto flex h-14 items-center justify-center px-4 md:justify-between"
      >
        {/* Left Spacer */}
        <div className="hidden flex-1 md:flex" />

        {/* Center: Toggle Switch */}
        <motion.div variants={contentVariants} className="flex justify-center md:flex-1">
          <div className="flex items-center space-x-1 rounded-full bg-white p-1 shadow-sm">
            <Tab
              label="Residential"
              isActive={activeTab === 'residential'}
              onClick={() => handleTabClick('residential')}
            />
            <Tab
              label="Commercial"
              isActive={activeTab === 'commercial'}
              onClick={() => handleTabClick('commercial')}
            />
          </div>
        </motion.div>

        {/* Right: Help Text */}
        <motion.p
          variants={contentVariants}
          className="hidden flex-1 justify-end whitespace-nowrap text-sm text-gray-300 md:flex"
        >
          Need Help? <span className="ml-1 font-medium text-white">Dial (855) 485-6300</span>
        </motion.p>
      </motion.div>
    </div>
  );
}