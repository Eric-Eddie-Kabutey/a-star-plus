'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';

interface Pest {
  name: string;
  description: string;
  imageUrl: string;
}

// Define the props for our main component
interface CommonPestsSectionProps {
  tagline: string;
  title: React.ReactNode; // Use ReactNode to allow for <br /> tags
  pests: Pest[];
  id?: string;
}

export function CommonPestsSection({ tagline, title, pests, id }: CommonPestsSectionProps) {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id={id ? `${id}` : ""} className="py-16 md:py-24" style={{ backgroundColor: '#fdf8f8' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-start md:text-center mb-12 flex flex-col gap-2">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-wide leading-10 text-gray-900">
            {title}
          </h2>
        </div>

        {/* Grid of Pest Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pests.map((pest) => (
            <motion.div
              key={pest.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              variants={itemVariants}
            >
              <div className="relative aspect-video">
                <Image
                  src={pest.imageUrl}
                  alt={pest.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="py-6 px-2 text-start">
                <h3 className="text-xl font-semibold text-gray-900">{pest.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{pest.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}