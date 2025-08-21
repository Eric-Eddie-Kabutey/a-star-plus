'use client';

import React, { useState } from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Button } from '@/components/ui/button';
import type { SpecialistsSectionData } from '@/types/com/service';
import Image from 'next/image';
import { QuoteDialog } from '../../header/dialog-quote';

export function Specialist({ data }: { data: SpecialistsSectionData }) {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id='trainedSpecialists' className="py-16 md:py-24 bg-gray-50">
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">
            {data.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{data.description}</p>
        </motion.div>

        {/* The Grid of Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={itemVariants}
        >
          {data.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center h-full"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full border border-gray-200 mb-6 flex-shrink-0">             
                <Image src={feature.icon} alt={feature.title} width={100} height={100} className='w-20 h-20' />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          className="mt-16 bg-[#000084] text-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center gap-8"
          variants={itemVariants}
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold">{data.ctaBanner.title}</h3>
            <p className="mt-2 text-indigo-200 max-w-2xl">{data.ctaBanner.description}</p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Button asChild size="lg" className="bg-white text-[#000084] hover:bg-gray-200 text-base py-6 px-8 rounded-lg w-full lg:w-auto">              
              <button onClick={() => setIsQuoteDialogOpen(true)}>{data.ctaBanner.button.text}</button>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}