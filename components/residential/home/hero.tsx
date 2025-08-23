'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';
import { QuoteDialog } from '../nav/dialog-quote';
import { GuaranteedUnderline } from '@/components/icons/guarantee-badge';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function Hero() {  
  const [ isAccountDialogOpen, setIsAccountDialogOpen ] = useState(false);
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);    
  return (
    <section className="relative w-full h-[calc(100vh)] min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"> 
      
      {/* --- DIALOGS --- */}
            <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
            <QuoteDialog
              open={isAccountDialogOpen}
              onOpenChange={setIsAccountDialogOpen}
              title="Create an account"
              description="Get access to your account details and manage your services."
            />
      {/* 1. Background Image remove -136px */}
      <div className="absolute inset-0 z-[-2]">
        <Image
          src="/assets/residential/images/hero_home.jpg"
          alt="Pest control technician spraying outdoors"
          fill
          className="object-cover"
          priority // Load this image first as it's above the fold
        />
      </div>

      {/* 2. Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-[-1] bg-black/40" />

      {/* 3. Content Container */}
      <div className="container lg:max-w-5xl xl:max-w-7xl mx-auto pt-8 px-4 sm:px-6 h-full">
        <div className="relative h-full flex items-center">
          
          {/* Main Text & Buttons Block */}
          <motion.div
            className="max-w-3xl text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Protect Your Home & Family From Pests –{' '}
              <span className="relative inline-block">
                Guaranteed.
                              <GuaranteedUnderline className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-auto" />                              
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-gray-200"
            >
              Reliable pest control services for homes and businesses in Texas.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <button   
              onClick={() => { setIsQuoteDialogOpen(true); }}  
                className="w-full sm:w-auto text-center rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                Get a Quote
              </button>
              <button
                onClick={() => { setIsAccountDialogOpen(true); }}
                className="w-full sm:w-auto text-center rounded-md bg-white px-8 py-3 text-base font-semibold text-gray-800 shadow-sm hover:bg-gray-200 transition-colors"
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>

          {/* 4. Premium Badge */}
          <div className="absolute bottom-8 right-4 sm:-right-4 w-20 h-20 md:w-24 md:h-24 hidden sm:block">
            <Image
                src="/assets/residential/icons/premium-badge.png"
                alt="Premium Quality Guaranteed Badge"
                width={100}
                height={100}
                className="opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}