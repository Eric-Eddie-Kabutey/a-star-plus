'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';

interface InfoPackageProps {
  tagline: string;
  title: string;
  description: string;
  listHeading: string;
  includedItems: string[];
  bonusNote?: {    
    text: string;
  };
}

export function InfoPackage({
  tagline,
  title,
  description,
  listHeading,
  includedItems,
  bonusNote,
}: InfoPackageProps) {
    
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24"
      style={{ backgroundColor: '#fdf8f8' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>

        {/* The Info Card */}
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10"
          variants={cardVariants}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">{listHeading}</h3>

          <ul className="space-y-3">
            {includedItems.map((item, index) => (
              <motion.li key={index} className="flex items-start" variants={listItemVariants}>
                <span className="flex-shrink-0 mr-3 mt-1 text-red-600 font-bold">•</span>
                <p className="text-gray-700">{item}</p>
              </motion.li>
            ))}
          </ul>

          {bonusNote && (
            <motion.div
              className="mt-6 flex items-center gap-4 bg-amber-100/60 p-4 border-l-4 border-amber-400 rounded-r-md"
              variants={listItemVariants}
            >              
              <p className="text-amber-800 font-semibold text-sm">{bonusNote.text}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}