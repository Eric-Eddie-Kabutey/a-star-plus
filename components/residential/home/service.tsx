'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ServiceCard } from './service-card'; 
import { servicesData } from '@/lib/data/residential/service';


const headerLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const headerRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function Services() {
  return (    
    <section className="bg-white py-20 sm:py-28 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">          
          <motion.div
            className="flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerLeftVariants}
          >
            <p className="text-base font-semibold leading-7 text-red-600">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-wide leading-10 text-gray-900 sm:text-4xl">
              Tailored Pest Control <br /> Solutions For Every Needs
            </h2>
          </motion.div>
          
          <motion.div
            className="flex flex-col justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerRightVariants}
          >
            <p className="text-lg leading-8 text-gray-900">
              Whether you need preventive treatments or urgent pest removal, A star Plus pest control has got you covered. Protect your property today with our trusted pest control solutions!
            </p>
            <div className="mt-6">
              <Link href="#" className="inline-flex items-center text-base font-semibold text-red-600 hover:text-red-700 group">
                All Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      
        <motion.div
          className="mt-20 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardsContainerVariants}
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              variants={cardItemVariants} // Pass the variants to the child
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}