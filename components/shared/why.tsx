'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import { cn } from '@/lib/utils';

interface InfoSectionProps {
  tagline: string;
  title: string;
  description: string;
  quickFacts: string[];
  imageUrl: string;
  imageAlt: string;
  layout?: 'imageLeft' | 'imageRight'; // Optional prop to control layout
}

export function InfoSection({
  tagline,
  title,
  description,
  quickFacts,
  imageUrl,
  imageAlt,
  layout = 'imageRight', // Default to image on the right
}: InfoSectionProps) {

  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-50 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        {/* Responsive grid: stacks on mobile, two columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <motion.div
            // Use 'cn' to conditionally apply the order class based on layout
            className={cn(
              'border-4 border-blue-500 p-8 rounded-lg',
              layout === 'imageRight' ? 'lg:order-1' : 'lg:order-2'
            )}
            variants={layout === 'imageRight' ? slideInFromLeft : slideInFromRight}
          >
            <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
              {tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 mb-6">
              {description}
            </p>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Quick Facts:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {quickFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            className={cn(
              'relative aspect-square rounded-2xl shadow-2xl overflow-hidden',
              layout === 'imageRight' ? 'lg:order-2' : 'lg:order-1'
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