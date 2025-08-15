'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';

export interface OverviewProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
}

export function Overview({ tagline, title, description }: OverviewProps) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2"
            variants={itemVariants}
          >
            {tagline}
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}