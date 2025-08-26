'use client';

import React, { useState } from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { QuoteDialog } from '../residential/nav/dialog-quote';

interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

interface FeatureGridSectionProps {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  items: FeatureItem[];
  variant?: 'circularIcon' | 'card';
  iconBorder?: boolean;
  cta?: {
    text: string;
    href: string;    
  };  
  id?: string;
}

export function FeatureGrid({
  tagline,
  title,
  description,
  items,
  variant = 'circularIcon',
  iconBorder,
  cta,  
  id,
}: FeatureGridSectionProps) {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    // #fdf8f8
    <section id={id ? `${id}` : ""} className="py-16 md:py-24" style={{ backgroundColor: '#fff' }}>
      <QuoteDialog
              open={isQuoteDialogOpen}
              onOpenChange={setIsQuoteDialogOpen}
            />
      <div className="container lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6">        
        <div className="text-center mb-12 max-w-4xl mx-auto flex flex-col gap-2 md-gap-4">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide leading-10 text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600">{description}</p>
          )}
        </div>

        {/* Feature Items Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-sm"
              variants={itemVariants}
            >
              {/* === RENDER LOGIC FOR DIFFERENT VARIANTS === */}
              
              {/* Variant 1: Circular Icon Style */}
              {variant === 'circularIcon' && (
                <div className="flex flex-col items-center text-center py-4">
                  <div className={cn( "flex items-center justify-center  mb-4", iconBorder ? " w-20 h-20 rounded-full border-2 border-red-600 " : "")}>                    
                    <Image src={item.icon} alt='icon' width={100} height={80} className='w-10 h-auto' />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              )}

              {/* 
                Variant 2: Card Style Landing Page  / Header dropdown / centipedes-millipedes
                - The icon is now wrapped in a div to create the circular background.background: #FDF5F7;#D5012C

              */}
              {variant === 'card' && (
                <div className="flex items-start gap-4 py-6 px-4 border border-red-400 rounded-xl h-full w-full bg-[#FDF5F7] min-h-40">
                  <div className="flex-shrink-0 flex items-center justify-center w-15 h-15  rounded-full bg-[#FDF5F7] border border-red-500">                    
                    <Image src={item.icon} alt='icon' width={100} height={100} className='w-auto h-auto ' />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA Button (No change here) */}
        {cta && (
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-base md:text-lg py-6 px-4 md:px-8 rounded-lg">
              <button
							onClick={() => {
								setIsQuoteDialogOpen(true)
							}}
							className=' text-center rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors'>
							Schedule a Free Inspection
						</button>          
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}