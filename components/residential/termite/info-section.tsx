'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import { cn } from '@/lib/utils';
import { MainListItem } from '@/types/residential/termite-control';



interface InfoSectionProps {
  tagline: string;
  title: string;
  description?: string;
  mainList: MainListItem[]; 
  imageUrl: string;
  imageAlt: string;
  layout?: 'imageLeft' | 'imageRight';
}

export function InfoSection({
  tagline,
  title,
  description,
  mainList, 
  imageUrl,
  imageAlt,
  layout = 'imageRight',
}: InfoSectionProps) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
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
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Text Content Block */}
          <motion.div
            className={cn(layout === 'imageRight' ? 'lg:order-1' : 'lg:order-2')}
            variants={layout === 'imageRight' ? slideInFromLeft : slideInFromRight}
          >
            <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
              {tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 mb-6">
              {description}
            </p>
                                    
            <motion.ul
              className="space-y-4"
              variants={listContainerVariants}
            >
              {mainList.map((mainItem, mainIndex) => (
                <motion.li key={mainIndex} variants={listItemVariants}>
                  <div className="flex items-start">
                    <span className="mr-3 mt-1 text-red-600 font-bold">•</span>
                    <p className="font-semibold text-gray-800">{mainItem.text}</p>
                  </div>
                  
                  {/* Conditionally render the sub-list */}
                  {mainItem.subItems && mainItem.subItems.length > 0 && (
                    <ul className="pl-8 mt-2 space-y-2">
                      {mainItem.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-start">
                          <span className="flex-shrink-0 mr-3 text-gray-500">
                            {/* Render a, b, c... for numbered lists, or a bullet for others */}
                            {mainItem.isNumberedSublist ? `${String.fromCharCode(97 + subIndex)}.` : '•'}
                          </span>
                          <p className="text-gray-600">{subItem}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          
          <motion.div
            className={cn(
              'relative aspect-square rounded-2xl shadow-lg overflow-hidden',
              layout === 'imageRight' ? 'lg:order-2' : 'lg-order-1'
            )}
            variants={layout === 'imageRight' ? slideInFromRight : slideInFromLeft}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}