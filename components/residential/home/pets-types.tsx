'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion'; 
import { pestTypes } from '@/lib/data/residential/pets-types';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export function PestTypes() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-xl p-8 sm:p-10 lg:p-12 border border-gray-800">          
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {pestTypes.map((pest) => (              
              <motion.a
                key={pest.name}
                href={pest.href}
                variants={itemVariants}
                className="group flex items-center space-x-2 text-white text-base md:text-lg font-medium hover:text-gray-300 transition-colors"
              >
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <Link href={pest.href}>
                  <span>{pest.name}</span>
                </Link>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}