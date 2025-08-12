'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import type { BusinessProtectionData } from '@/types/com/service';

export function BusinessProtection({
  tagline,
  title,
  cta,
  listHeading,
  listItems,
  imageUrl,
  imageAlt,
}: BusinessProtectionData) {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#f0f2f5' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={itemVariants} className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-2">
              {tagline}
            </motion.p>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg py-6 px-8 rounded-full">
                <Link href={cta.href}>{cta.text}</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-xl font-bold text-gray-800">{listHeading}</h3>
              <ul className="mt-6 space-y-4">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side: Image. The grid layout ensures this div stretches to match the height of the left column. */}
          <motion.div
            className="relative h-full min-h-[400px] lg:min-h-0 rounded-2xl shadow-lg overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}