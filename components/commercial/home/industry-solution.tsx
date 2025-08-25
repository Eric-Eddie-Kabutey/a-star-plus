'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import type { IndustrySolutionsData } from '@/types/com/service';


export function IndustrySolutions({
  tagline,
  title,
  description,
  industries,
}: IndustrySolutionsData) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background Shape */}     
      <div className='absolute top-0 right-0'>
          <Image src="/assets/com/ellipse-top.png" alt='decorated circle' width={100}  height={100} className='w-54 h-auto md:w-96' />
      </div>
      
      <div className="container lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 mx-auto z-10 relative">
        {/* Section Header with Split Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div className="max-w-xl">
            <p className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
              {tagline}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-md lg:text-right">
            {description}
          </p>
        </div>

        {/* The Grid of Industry Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              variants={itemVariants}
            >
              <div className="relative aspect-video">
                <Image
                  src={industry.imageUrl}
                  alt={industry.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}