'use client';

import React, { useState } from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { QuoteDialog } from '../residential/nav/dialog-quote';
import Link from 'next/link';

interface HeroProps {
  title: string | React.ReactNode;
  description: string;    
  background?: React.ReactNode;  
  backgroundColor?: string;
}

export function Hero({
  title,
  description,  
  background, 
  backgroundColor = '#fff0f0', // Default background color
}: HeroProps) {
 const [ isAccountDialogOpen, setIsAccountDialogOpen ] = useState(false);
   const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);  
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center py-20 md:pt-42 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: backgroundColor }}
    >

       
            {/* --- DIALOGS --- */}
                  <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
                  <QuoteDialog
                    open={isAccountDialogOpen}
                    onOpenChange={setIsAccountDialogOpen}
                    title="Create an account"
                    description="Get access to your account details and manage your services."
                  />
      {/* 
        This component renders whatever background is passed to it making it pure and super reusable throughout the site        
      */}
      {background}

      <motion.div
        className="relative z-10 text-center container max-w-3xl  flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d333f] leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-xl"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div className="mt-8 w-full sm:w-auto flex flex-col items-center gap-4" variants={itemVariants}>
          <button   
              onClick={() => { setIsQuoteDialogOpen(true); }}  
                className="w-full sm:w-auto text-center rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
              >
                Book a Free Ant Inspection
          </button>
          <Link href="tel:1234567890" className='w-full border-1 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 text-lg py-2 rounded-lg'>Call Now: (123) 456-7890</Link>
          
        </motion.div>
      </motion.div>
    </section>
  );
}