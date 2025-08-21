
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { QaProgramData } from '@/types/com/service';

// --- UPDATED PROPS INTERFACE ---
interface QaProgramSectionProps {
  data: QaProgramData;
  /** Controls the position of the image on large screens. Defaults to 'right'. */
  imagePosition?: 'left' | 'right';
}

export function FeatureSection({
  data,
  imagePosition = 'right', // Default to image on the right
}: QaProgramSectionProps) {
  
  // Animation variants (no changes needed here)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const slideInFromLeft: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const slideInFromRight: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const listContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };
  
  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Text Content Column */}
        <motion.div
          // THE FIX: Conditionally set order and animation based on imagePosition
          className={cn(imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2')}
          variants={imagePosition === 'right' ? slideInFromLeft : slideInFromRight}
        >
          <p className="text[#000084] font-bold uppercase tracking-wider text-sm mb-2">
            {data.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{data.description}</p>
          
          <motion.ul
            className="mt-8 space-y-6"
            variants={listContainerVariants}
          >
            {data.features.map((feature, index) => (
              <motion.li key={index} className="flex items-start" variants={listItemVariants}>
                <span className="flex-shrink-0 mr-4 mt-1 w-2 h-2 rounded-full bg-[#000084]" />
                <div>
                  <h3 className="font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          // THE FIX: Conditionally set order and animation based on imagePosition
          className={cn(
            'relative aspect-[4/3] rounded-2xl shadow-lg overflow-hidden',
            imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
          )}
          variants={imagePosition === 'right' ? slideInFromRight : slideInFromLeft}
        >
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}