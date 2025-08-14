'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';

interface HeroProps {
  title: string | React.ReactNode;
  description: string;
  buttons: React.ReactNode;  
  background?: React.ReactNode;  
  backgroundColor?: string;
}

export function Hero({
  title,
  description,
  buttons,
  background, // Replaced backgroundImageUrl
  backgroundColor = '#fff0f0', // Default background color
}: HeroProps) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center py-20 md:pt-42 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* 
        This component renders whatever background is passed to it making it pure and super reusable throughout the site        
      */}
      {background}

      <motion.div
        className="relative z-10 text-center max-w-[59rem] flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d333f] leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-xl"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div className="mt-8 w-full sm:w-auto" variants={itemVariants}>
          {buttons}
        </motion.div>
      </motion.div>
    </section>
  );
}