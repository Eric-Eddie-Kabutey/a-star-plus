'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Quote } from 'lucide-react';
import type { WhyUsData } from '@/types/com/service';
import Image from 'next/image';

interface WhyUsProps {
  data: WhyUsData;
  id?: string;
}

export function WhyUs({ data, id }: WhyUsProps) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id={id ? `${id}` : ""} className="py-16 md:py-24 bg-white">
      <motion.div
        className="container lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Left Column: Features */}
        <motion.div variants={itemVariants}>
          <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">
            {data.tagline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{data.description}</p>
          
          <div className="mt-10 space-y-8">
            {data.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50/70">                        
                        <Image src={feature.icon} alt={ feature.title} width={100} height={80} className='w-6 h-auto' />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Testimonials */}
        <motion.div
          className="bg-indigo-50/50 rounded-2xl p-8 md:p-10"
          variants={itemVariants}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">{data.testimonials.title}</h3>
          <div className="space-y-6">
            {data.testimonials.items.map((testimonial, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900 text-white">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                  <p className="mt-2 text-sm font-semibold text-gray-800 text-right">{testimonial.attribution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}