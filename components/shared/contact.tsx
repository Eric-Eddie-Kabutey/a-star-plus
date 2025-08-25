'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { ContactSectionData } from '@/types/share/contact'; 
import Image from 'next/image';
import { cn } from '@/lib/utils'; 

interface ContactProps extends ContactSectionData {
  variant?: 'red' | 'blue'; // Add the variant prop
}

export function Contact({
  tagline,
  title,
  description,
  contactDetails,
  variant = 'red', // Default to 'red'
}: ContactProps) {
  
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
    const formVariants: Variants = { 
      hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
   };

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <motion.div
        className="container lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side: Info */}
        <motion.div variants={itemVariants}>
          <p className={cn(
            'font-bold uppercase tracking-wider text-sm mb-2',
            variant === 'red' ? 'text-red-600' : 'text-[#000084]'
          )}>
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">{description}</p>

          <div className="mt-10 space-y-8">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={cn(
                  'flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full',
                  variant === 'red' ? 'bg-red-100' : 'bg-blue-100'
                )}>
                  <Image src={detail.icon} alt={detail.title} width={24} height={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{detail.title}</h3>
                  {detail.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-gray-600">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 md:p-10"
          variants={formVariants}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <Input id="name" name="name" type="text" className="mt-1 bg-gray-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <Input id="email" name="email" type="email" className="mt-1 bg-gray-50" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input id="phone" name="phone" type="tel" className="mt-1 bg-gray-50" />
            </div>
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700">Your Question or Service Needed</label>
              <Textarea id="question" name="question" rows={5} className="mt-1 bg-gray-50 min-h-[120px]" />
            </div>
            <div>
              <Button type="submit" size="lg" className={cn(
                'w-full',
                variant === 'red' 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-[#000084] hover:bg-[#000080]'
              )}>
                Submit
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}