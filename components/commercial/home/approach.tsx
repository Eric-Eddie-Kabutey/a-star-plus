
'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { ApproachData } from '@/types/com/service';

export function Approach({
  tagline,
  title,
  description,
  steps,
  cta,
}: ApproachData) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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
    <section className="py-16 md:py-24 bg-black text-white">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p variants={itemVariants} className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-2">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="relative mb-6">
                {/* The card containing the details */}
                <div className="bg-white border border-white/10 rounded-2xl py-10 px-2 min-h-[160px] flex items-center justify-center">
                  <ul className="space-y-2 text-sm text-gray-800">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-left">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* The number bubble */}
                <div className="absolute -top-5 -left-2 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 font-bold text-white border-4 border-black">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-base md:text-lg py-6 px-8 rounded-lg">
            <Link href={cta.href}>{cta.text}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}