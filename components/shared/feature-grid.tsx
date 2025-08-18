'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
}

export function FeatureGrid({
  tagline,
  title,
  description,
  items,
  variant = 'circularIcon',
  iconBorder,
  cta,  
}: FeatureGridSectionProps) {

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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#fff' }}>
      <div className="container mx-auto px-4">        
        <div className="text-center mb-12 max-w-xl mx-auto flex flex-col gap-2">
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
                <div className="flex flex-col items-center text-center p-4">
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
                <div className="flex items-start gap-4 p-6 border border-red-400 rounded-xl h-full bg-[#FDF5F7] min-h-40">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#FDF5F7] border ">                    
                    <Image src={item.icon} alt='icon' width={100} height={40} className='w-10 h-10' />
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
              <Link href={cta.href}>{cta.text}</Link>              
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}