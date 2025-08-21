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
  description: string;
}

export interface BottomNote {    
    text: string;
    style?: 'success' | 'warning';
}

interface FeatureGridBannerProps {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  items: FeatureItem[];
  variant?: 'circularIcon' | 'card';
    bottomNote?: BottomNote;
  cta?: {
    text: string;
    href: string;
  };
  id?: string;
}

export function FeatureGridBanner({ // Renamed for clarity
  tagline,
  title,
  description,
  items,
  variant = 'circularIcon',
  bottomNote, // Added to props
  cta,
  id,
}: FeatureGridBannerProps) {

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
    <section id={id ? `${id}` : ""} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              {variant === 'circularIcon' && (
                <div className="flex flex-col items-center gap-4 text-center p-4">
                  {/* <div className="flex items-center justify-center w-20 h-20 rounded-full border border-red-200 mb-4">
                  </div> */}
                    <Image src={item.icon} alt={`${item.title} icon`} width={100} height={80} className='w-16 h-auto' />
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              )}

              {variant === 'card' && (
                <div className="flex items-start gap-4 p-6 border border-[#A58219] rounded-xl h-full bg-white">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
                    <Image src={item.icon} alt={`${item.title} icon`} width={100} height={80} className='w-12 h-auto' />
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

        {/* --- NEW: RENDER LOGIC FOR THE BOTTOM BANNER --- */}
        {bottomNote && (
          <div className="text-center mt-16 flex justify-center">
            <motion.div
              className={cn("inline-flex items-center gap-3 font-semibold px-6 py-2 rounded-lg", bottomNote.style === 'success' ? "bg-green-100 text-green-800" : "text-red-800 bg-red-100")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >              
              <span>{bottomNote.text}</span>
            </motion.div>
          </div>
        )}

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