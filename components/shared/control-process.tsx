'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import { cn } from '@/lib/utils'; 

interface Step {
  title: string;
  description: string;
}

// Define the props for our main component
interface ControlProcessSectionProps {
  tagline: string;
  title: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  steps: Step[];
}

export function ControlProcess({
  tagline,
  title,
  imageUrl,
  imageAlt,
  steps,
}: ControlProcessSectionProps) {
  
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const listItemVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: 'easeOut' },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Image Block */}
          <motion.div
            className="relative aspect-square rounded-2xl shadow-2xl overflow-hidden"
            variants={slideInFromLeft}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text and Process Steps Block */}
          <motion.div variants={slideInFromRight}>
            <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
              {tagline}
            </p>
            <h2 className="max-w-[580px] text-3xl md:text-4xl font-bold tracking-wide leading-10 text-gray-900 mb-8">
              {title}
            </h2>
            
            {/* The Step-by-Step List */}
            <motion.div 
              className="bg-[#FDF5F7] max-w-[486px] p-2 rounded-lg" // Use space-y-0 because margin/padding is handled inside
              variants={listContainerVariants}
            >
              {steps.map((step, index) => (
                <motion.div key={index} className="flex" variants={listItemVariants}>
                  {/* The Timeline: Circle and Line */}
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={cn(
                        'flex items-center justify-center h-8 w-8 rounded-full font-bold text-white',
                        index === steps.length - 1
                          ? 'bg-white border-2 border-gray-300 text-gray-400' // Last item style
                          : 'bg-red-600' // Regular item style
                      )}
                    >
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-red-600 my-1" />
                    )}
                  </div>
                  
                  {/* The Text Content */}
                  <div className="pb-8">
                    <p className="font-bold text-gray-800">
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}