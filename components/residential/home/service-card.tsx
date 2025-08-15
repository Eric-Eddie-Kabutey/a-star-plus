'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion';

export interface ServiceCardData {
  imageSrc: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

interface ServiceCardProps {
  service: ServiceCardData;  
  variants: Variants; 
}

const cardHoverVariants: Variants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Add variants to the motion.div
export function ServiceCard({ service, variants }: ServiceCardProps) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-lg shadow-lg h-full"
      whileHover="hover"
      variants={{ ...variants, ...cardHoverVariants }} // Combine variants
    >
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={service.imageSrc}
          alt={service.title}
          width={400}
          height={192}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          <p className="mt-3 text-base text-gray-500">{service.description}</p>
        </div>
        <div className="mt-6">
          <Link
            href={service.learnMoreLink}
            className="inline-flex items-center text-base font-semibold text-gray-800 hover:text-red-600 group"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}