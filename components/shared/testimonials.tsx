'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion'; 
import { GoogleIcon } from '@/components/icons/google-icon'; 
import { cn } from '@/lib/utils';
import { testimonials } from '@/lib/data/residential/testimonials';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut'
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
};

export function Testimonials() {
  const options: EmblaOptionsType = { loop: true, align: 'start' };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  return (
    // Add overflow-hidden to contain any visual artifacts during animation
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      {/* 3. Wrap the main content in a motion.div to control the staggered animation */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* 4. Animate the Section Header */}
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Client&apos;s Testimonials
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Here are some of our client&apos;s review
          </p>
        </motion.div>
        
        <motion.div className="mt-20 bg-black rounded-2xl p-8 sm:p-10 lg:p-12" variants={itemVariants}>
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full flex flex-col justify-between bg-gradient-to-br from-white to-gray-100 rounded-xl p-6 shadow-md border border-gray-200/50">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Image src={testimonial.avatar} alt={testimonial.name} width={44} height={44} className="rounded-full" />
                          <div>
                            <p className="font-semibold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.date}</p>
                          </div>
                        </div>
                        <GoogleIcon className="w-6 h-6" />
                      </div>
                      <div className="flex mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={cn("w-5 h-5", i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')} />
                        ))}
                      </div>
                      <p className="mt-6 text-gray-600">{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn("w-2.5 h-2.5 rounded-full transition-all duration-300", index === selectedIndex ? 'bg-white w-4' : 'bg-gray-600 hover:bg-gray-400')}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}