'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import type { DocumentationAndTrainingData } from '@/types/com/service';

export function Documentation({ data }: { data: DocumentationAndTrainingData }) {
  
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
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Left Column: Documentation */}
        <motion.div variants={itemVariants}>
          <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">
            {data.documentation.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {data.documentation.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{data.documentation.description}</p>
          
          <ul className="mt-8 space-y-6">
            {data.documentation.features.map((feature) => (
              <li key={feature.title} className="flex items-start">
                <span className="flex-shrink-0 mr-4 mt-1 w-2 h-2 rounded-full bg-indigo-600" />
                <div>
                  <h3 className="font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Training */}
        <motion.div className="space-y-8" variants={itemVariants}>
          <div>
            <p className="text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">
              {data.training.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {data.training.title}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{data.training.description}</p>
          </div>
          
          {/* Options Card */}
          <div className="bg-gray-100/70 rounded-xl p-6">
            <h3 className="font-bold text-gray-800">{data.training.optionsCard.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{data.training.optionsCard.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {data.training.optionsCard.tags.map((tag) => (
                <span key={tag} className="bg-green-100/60 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Pro Tip Banner */}
          <div className="bg-green-100 text-green-800 text-sm font-semibold p-4 rounded-lg flex items-start gap-3">
            <Image src={data.training.proTip.icon} alt="Pro tip icon" width={16} height={16} className="mt-0.5"/>
            <span>{data.training.proTip.text}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}