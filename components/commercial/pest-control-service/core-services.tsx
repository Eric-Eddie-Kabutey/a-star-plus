'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import type { CoreServicesData } from '@/types/com/service';
import Image from 'next/image';

export function CoreServices({
  tagline,
  title,
  description,
  services,
}: CoreServicesData) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="our-core-services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>

        {/* The Grid of Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 border border-blue-100 mb-6 flex-shrink-0">                      
                      <Image src={service.icon} alt={service.title} width={100} height={80} className='w-8 h-8' />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-grow">{service.description}</p>
              
              {/* Checkmark List */}
              <ul className="mt-6 space-y-3 pt-6 border-t border-gray-100">
                {service.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}