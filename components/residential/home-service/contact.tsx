'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { ContactSectionData } from '@/types/residential/contact';
import Image from 'next/image';

export function ContactSection({
  tagline,
  title,
  description,
  contactDetails,
}: ContactSectionData) {
  
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
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side: Info */}
        <motion.div variants={itemVariants}>
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-lg">{description}</p>

          <div className="mt-10 space-y-8">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-100">                        
                        <Image src={detail.icon} alt={detail.title} width={100} height={100} className="w-auto h-auto" />
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
              <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                Submit
              </Button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}