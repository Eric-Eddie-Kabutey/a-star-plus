'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import type { CommercialApproachData, FeatureDetailItem } from '@/types/com/service';
import Image from 'next/image';

// A small, reusable sub-component for the feature list items
const FeatureItem = ({ icon, title, description, iconBg }: FeatureDetailItem & { iconBg: string, iconColor: string }) => (
  <div className="flex items-start gap-4">
    <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full ${iconBg}`}>            
            <Image src={icon} alt={title} width={100} height={100} className='w-8 h-auto' />
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

export function CommercialApproach({ data }: { data: CommercialApproachData }) {
  
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
    <section id="commercial-approach" className="py-16 md:py-24 bg-gray-50">
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Left Column */}
        <motion.div variants={itemVariants} className='flex flex-col justify-between'>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            {data.mainTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{data.mainDescription}</p>
          
          <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-100 p-8 space-y-6">
            {data.processSteps.map((step) => (
              <FeatureItem key={step.title} {...step} iconBg="bg-indigo-100/60" iconColor="text-indigo-600" />
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div className="space-y-8" variants={itemVariants}>
          {/* Why Choose Us Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{data.whyChooseUs.title}</h3>
            <div className="space-y-6">
              {data.whyChooseUs.items.map((item) => (
                <FeatureItem key={item.title} {...item} iconBg="bg-[#000084]" iconColor="text-white" />
              ))}
            </div>
          </div>

          {/* Compliance Card */}
          <div className="bg-indigo-50/70 rounded-xl shadow-md border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900">{data.compliance.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{data.compliance.description}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {data.compliance.items.map((item) => (
                <div key={item} className="flex items-center gap-2">                  
                  <Image src="/assets/shared/icons/green-checked.png" alt={data.mainTitle} width={100} height={80} className='w-4 h-auto md:w-6' />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}