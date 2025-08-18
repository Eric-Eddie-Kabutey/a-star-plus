'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import CountUp from 'react-countup';
import { motion, Variants } from '@/components/module/framer-motion'; 
import { features, stats } from '@/lib/data/residential/why-choose-us';


const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      staggerChildren: 0.2 // Stagger the headline and images
    } 
  },
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      staggerChildren: 0.2 // Stagger the text, list, and stats
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export function WhyChooseUs() {
  return (    
    <section className="bg-[#F9F5F4] py-20 sm:py-28 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
                    
          <motion.div
            className="flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftColumnVariants}
          >
            <motion.h2 variants={itemVariants} className=" text-3xl font-bold tracking-wide leading-10 text-gray-900 sm:text-4xl">
              Pest Eliminated, <br /> Experience and Happy <br /> Customers.
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8 flex items-center space-x-4">
              <Image src="/assets/residential/images/happy-customer-1.png" alt="Happy customer" width={120} height={120} className="rounded-lg shadow-md border-2 border-red-300" />
              <Image src="/assets/residential/images/happy-customer-2.png" alt="Happy customers" width={160} height={120} className="rounded-lg shadow-md border-2 border-red-300" />
              <Image src="/assets/residential/images/happy-customer-3.png" alt="Happy customer" width={120} height={120} className="rounded-lg shadow-md border-2 border-red-300 hidden sm:block" />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex flex-col gap-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rightColumnVariants}
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700">
                At A Star Plus Pest Control, we provide reliable, eco-friendly pest control service to keep your home and business pest free.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                What sets us apart?
              </p>
              <ul className="mt-6 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-between text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl sm:text-5xl font-bold text-gray-900">
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}