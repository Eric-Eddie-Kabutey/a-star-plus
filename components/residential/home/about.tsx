'use client';

import Image from 'next/image';
import { motion, Variants } from '@/components/module/framer-motion';

// 2. Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Animate children one by one
      ease: 'easeOut'
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  },
};


export function AboutUs() {
  return (    
    <section className="bg-white py-20 sm:py-28 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-20 lg:items-center">
                    
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-base font-semibold leading-7 text-red-600">
              About Us
            </motion.p>
            <motion.h2 variants={itemVariants} className="max-w-[472px] leading-10 mt-2  text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl">
              Say Goodbye to Pests For Good
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8 space-y-6 text-lg text-gray-900">
              <p>
                At A Star Plus Pest Control, we&apos;re more than just exterminators — we&apos;re your neighbors, and we&apos;re committed to protecting your home like it&apos;s our own.
              </p>
              <p>
                Founded with a mission to deliver reliable, affordable, and family-safe pest solutions, we&apos;ve become a trusted name across Gambia. Our team combines years of field experience with cutting-edge techniques to tackle pests of all kinds — from termites and rodents to mosquitoes and bed bugs.
              </p>
              <p>
                Whether you&apos;re dealing with a one-time infestation or looking for year-round protection, A Star Plus is here to help — fast, friendly, and always thorough.
              </p>
              <p>
                Because pest control shouldn&apos;t just work — it should give you peace of mind.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src="/assets/residential/images/pets-control-technician.png" 
              alt="A pest control technician in a protective suit holding a sprayer"
              width={600}
              height={750}
              className="rounded-2xl object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}