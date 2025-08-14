'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#fdf8f8' }}>
      <div className="container mx-auto px-4">        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
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
                  <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4 text-red-500">                    
                    <Image src={item.icon} alt='icon' width={100} height={80} className='w-15 h-15' />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              )}

              {/* 
                Variant 2: Card Style Landing Page  / Header dropdown / centipedes-millipedes
                - The icon is now wrapped in a div to create the circular background.
              */}
              {variant === 'card' && (
                <div className="flex items-start gap-4 p-6 border border-red-400 rounded-xl h-full bg-red-100">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-50 border ">                    
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