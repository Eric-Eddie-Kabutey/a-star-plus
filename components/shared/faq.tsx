'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from '@/lib/data/shared/faq';


const leftColumnVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const rightColumnVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Faq() {
  return (    
    <section className="bg-white py-20 sm:py-28 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
                    
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftColumnVariants}
          >
            <div>
              <p className="text-base font-semibold leading-7 text-red-600">FAQ</p>
              <h2 className="max-w-[457px] mt-2 text-3xl font-bold tracking-wide leading-10 text-gray-900 sm:text-4xl">
                Everything You Need to Know
              </h2>
              <div className="mt-10">
                <Link href="/faq" className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-red-600 group">
                  All Questions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rightColumnVariants}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}