'use client';

import React, { useState } from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import Image from 'next/image';
import type { ApproachData } from '@/types/com/service';
import { QuoteDialog } from '../header/dialog-quote';

export function Approach({
  tagline,
  title,
  description,
  steps,
  cta,
}: ApproachData) {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-black text-white">
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />


      <motion.div
        className="container lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p variants={itemVariants} className="font-bold uppercase tracking-wider text-sm mb-2" style={{ color: '#5252ff' }}>
            {tagline}
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold">
            {title}
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-lg text-gray-400">
            {description}
          </motion.p>
        </div>

        {/* The Grid of Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6 md:gap-10 items-center text-center relative"
              variants={itemVariants}
            >
              {/* The number bubble */}
              <div className="absolute -top-5 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 font-bold text-white border-4 border-black z-10">
                {index + 1}
              </div>
              
              {/* The card containing the image and details */}             
                <div className="relative mb-4 w-full max-w-xs h-42">
                  <Image 
                    src={step.image} 
                    alt={`${step.title} illustration`} 
                    width={100}
                  height={100}
                  className='object-cover w-full h-auto'                    
                  />
                </div>                
                  <h3 className="text-lg font-semibold text-white mt-6">{step.title}</h3>
              
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          {/* <Button onClick={() => setIsQuoteDialogOpen(true)} asChild size="lg" className="bg-indigo-700 hover:bg-indigo-800 text-base md:text-lg py-6 px-8 rounded-lg">
            <Link href={cta.href}>{cta.text}</Link>                     
          </Button> */}

          <button onClick={() => { setIsQuoteDialogOpen(true); }} className="bg-[#000084] hover:bg-[#000080] text-base md:text-lg py-2.5 px-8 rounded-lg">{cta.text}</button>
        </motion.div>
      </motion.div>
    </section>
  );
}