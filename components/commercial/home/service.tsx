'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';
import type { KeyReasonsData } from '@/types/com/service';

export function Service({
  tagline,
  title,
  description,
  reasons,
  imageUrl,
  imageAlt,
}: KeyReasonsData) {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background Shape */}
      {/* <div className="absolute -bottom-32 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none" /> */}
      <div className='absolute bottom-0 right-0'>
        <Image src="/assets/com/ellipse-bottom.png" alt='decorated circle' width={100} height={100} className='w-52 h-auto md:w-92 ' />
        {/* w-50 h-50 md:w-96 md:h-96 */}
      </div>

      
      <div className="container mx-auto px-4 z-10 flex flex-col gap-8 md:gap-12">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.p variants={itemVariants} className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-600">
            {description}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: List of Reasons */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <motion.div key={index} className="flex items-start gap-4" variants={itemVariants}>
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                  <Image src={reason.icon} alt={reason.title} width={38} height={38} />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className="text-lg font-bold text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="relative aspect-square rounded-2xl shadow-lg overflow-hidden"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
    </section>
  );
}