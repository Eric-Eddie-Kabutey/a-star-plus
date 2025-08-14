'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import { cn } from '@/lib/utils';

interface DetailItem {
  label: string;
  text: string;
}

interface InfoSectionProps {
  tagline: string;
  title: string;
  description: string;
  details: DetailItem[];
  imageUrl: string;
  imageAlt: string;
  layout?: 'imageLeft' | 'imageRight';
}

export function InfoSection({
  tagline,
  title,
  description,
  details, 
  imageUrl,
  imageAlt,
  layout = 'imageRight',
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
      className="py-16 md:py-24 bg-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Block */}
          <motion.div
            className={cn(
              // Removed decorative border to match new UI
              layout === 'imageRight' ? 'lg:order-1' : 'lg:order-2'
            )}
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
                        
            <ul className="space-y-3 text-gray-600">
              {details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mr-3 mt-1 text-red-600 font-bold">•</span>
                  <div>
                    <strong className="text-gray-800 font-semibold">{item.label}:</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            className={cn(
              'relative aspect-square rounded-2xl shadow-lg overflow-hidden',
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