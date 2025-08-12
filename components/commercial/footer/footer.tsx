'use client';

import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, Variants } from '@/components/module/framer-motion'; 
import { TikTokIcon } from '@/components/icons/tiktok-icon';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { QuoteDialog } from '@/components/nav/dialog-quote';
import { useState } from 'react';
import Image from 'next/image';

// --- Data (remains the same) ---
const footerLinks = {
  // ... (all link data from the previous step)
  services: [ { name: 'Pest Control', href: '#' }, { name: 'Termite Control', href: '#' }, { name: 'Home Services', href: '#' }, ], pestLibrary: [ { name: 'Browse All Pests', href: '#' }, ], aStarPlus: [ { name: 'Expert Training', href: '#' }, { name: 'Environmental Responsibility', href: '#' }, { name: 'Commitment to Education', href: '#' }, { name: 'Community Involvement', href: '#' }, { name: 'Franchise Opportunity', href: '#' }, { name: 'Press and Media', href: '#' }, { name: 'Company History', href: '#' }, { name: 'Ask A Star Plus', href: '#' }, { name: 'FAQs', href: '#' }, { name: 'Customer Reviews', href: '#' }, ], customerCare: [ { name: 'My Account', href: '#' }, { name: 'Pay Bill', href: '#' }, { name: 'Contact Us', href: '#' }, { name: 'Product Labels', href: '#' }, { name: 'Subscribe to Our Newsletter', href: '#' }, ],
};
const socialLinks = [ { name: 'LinkedIn', href: '#', icon: Linkedin }, { name: 'TikTok', href: '#', icon: TikTokIcon }, { name: 'Twitter', href: '#', icon: Twitter }, { name: 'Instagram', href: '#', icon: Instagram }, { name: 'WhatsApp', href: '#', icon: WhatsAppIcon }, ];

// --- Animation Variants ---
const footerContentVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1, // This will animate children one by one
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

// --- Main Component ---
export function Footer() {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);

  return (
    <>
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
      
      <footer className="bg-black text-white overflow-hidden"> {/* Add overflow-hidden to contain the animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible, only once
          variants={footerContentVariants}
        >
          {/* Top CTA Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s solve your pest control problems.
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-8">
              <button
                onClick={() => setIsQuoteDialogOpen(true)}
                className="inline-flex items-center gap-x-2 rounded-md bg-[#000084] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#000089] transition-colors"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
              {/* Main Footer Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Column 1: Logo and About */}
                <motion.div variants={itemVariants} className="lg:col-span-2">                                  
                                  <Image src="/assets/logos/logo-simple.png" alt='a start logo' width={150} height={50} />
                  <p className="mt-6 text-sm text-gray-400 max-w-sm">
                    Whether you are struggling with rodents, termites, cockroaches, or other unwanted guests, we have got you covered...
                  </p>
                  <div className="mt-6 flex space-x-4">
                    {socialLinks.map((item) => (
                      <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                {/* Columns 2, 3, 4: Links */}
                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold leading-6">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerLinks.services.map((item) => ( <li key={item.name}><a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">{item.name}</a></li> ))}
                  </ul>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold leading-6">Pest Library</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerLinks.pestLibrary.map((item) => ( <li key={item.name}><a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">{item.name}</a></li> ))}
                  </ul>
                  <h3 className="text-sm font-semibold leading-6 mt-10">A Star Plus Differences</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerLinks.aStarPlus.map((item) => ( <li key={item.name}><a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">{item.name}</a></li> ))}
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold leading-6">Customer care</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerLinks.customerCare.map((item) => ( <li key={item.name}><a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">{item.name}</a></li> ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - can be animated separately or not at all for stability */}
        <div className="bg-[#000084] py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} A Star Plus Pest Control</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/terms" className="hover:underline">Terms of use</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/careers" className="hover:underline">Careers</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}