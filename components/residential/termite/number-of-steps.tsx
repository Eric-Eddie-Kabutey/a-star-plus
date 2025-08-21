'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';

interface NumberedStepsSectionProps {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  steps: string[];
}

export function NumberedSteps({
  tagline,
  title,
  description,
  steps,
}: NumberedStepsSectionProps) {
  
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2, 
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  const gridContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  };

  return (
    <motion.section
      id="termite-control-investment"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'oklch(88.5% 0.062 18.334)' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 bg-red-200"
          variants={headerVariants}
        >
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600">{description}</p>
          )}
        </motion.div>

        {/* Numbered Steps Grid */}
        <motion.div
          className="max-w-[290px] md:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          variants={gridContainerVariants}
        >
          {steps.map((stepText, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              variants={itemVariants}
            >
              {/* Numbered Circle */}
              <div className="absolute -top-6 left-5 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-red-700 text-white font-bold text-xl border-4 border-white shadow-md">
                {index + 1}
              </div>
              
              {/* Text Box */}
              <div className="bg-gray-50/80 rounded-xl shadow-sm py-14 px-4 h-full">
                <p className="text-gray-700 font-medium">{stepText}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}