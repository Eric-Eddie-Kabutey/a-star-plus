'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from '@/components/module/framer-motion';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { commercialNavigationData } from '@/lib/data/com/nav';

import { MegaMenu } from './mega-menu';
import { QuoteDialog } from './dialog-quote';


export function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [isAccountDialogOpen, setIsAccountDialogOpen] = useState(false);

  const activeSubMenu = commercialNavigationData.find(item => item.label === activeHover)?.submenu;

  return (
    <>
      {/* --- DIALOGS --- */}
      <QuoteDialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen} />
      <QuoteDialog
        open={isAccountDialogOpen}
        onOpenChange={setIsAccountDialogOpen}
        title="Create an account"
        description="Get access to your account details and manage your services."
      />

      {/* --- HEADER --- */}
      <div 
        className="relative w-full bg-white shadow-md"
        onMouseLeave={() => setActiveHover(null)}
      >
        <div className="container lg:max-w-5xl xl:max-w-7xl mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/commercial">
            <Image src="/assets/shared/logos/logo.png" alt="Logo" width={100} height={100} className='h-14 w-auto md:h-16 lg:h-20' />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {commercialNavigationData.map((item) => (
              <div 
                key={item.label} 
                className="relative" 
                onMouseEnter={() => setActiveHover(item.label)}
              >
                <Link href={item.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
                {activeHover === item.label && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#000084]"
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/login" className="lg:hidden text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Login
            </Link>
            <button onClick={() => setIsAccountDialogOpen(true)} className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-red-50 transition-colors">
              Create an account
            </button>
            <button onClick={() => setIsQuoteDialogOpen(true)} className="rounded-lg bg-[#000084] px-4 py-2 text-sm font-semibold text-white hover:bg-[#000089] transition-colors">
              Free Inspection
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent>
                
                <nav className="px-2 py-4 mt-8 flex h-full flex-col">
                  <ScrollArea className='flex-grow h-0 pr-4'>
                    <Accordion type="single" collapsible className="w-full">
                      {commercialNavigationData.map((item) => item.submenu ? (
                        <AccordionItem value={item.label} key={item.label}>
                          <AccordionTrigger className="text-lg">
                            {item.label}
                          </AccordionTrigger>
                          {/* Wrap the main navigation content in a ScrollArea */}
                            <AccordionContent>
                          <ScrollArea className="max-h-[60vh] pr-2">
                              <div className="flex flex-col space-y-3 p-4">
                                {item.submenu.columns.flatMap(col => col.links).map(link => (
                                  <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 hover:bg-[#000089]">{link.label}</Link>
                                ))}
                              </div>
                        <ScrollBar orientation="vertical" className="w-2 bg-gray-300 rounded-full" /> 
                          </ScrollArea>
                            </AccordionContent>
                        </AccordionItem>
                      ) : null)}
                    </Accordion>
                      <ScrollBar
											orientation='vertical'
											className='w-2 bg-gray-300 rounded-full'
										/>
                  </ScrollArea>
                    <div className="mt-auto flex flex-col space-y-4 pt-6 border-t">
                      <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-center text-gray-700 hover:bg-[#000089]">Login</Link>
                      <button onClick={() => { setIsAccountDialogOpen(true); setIsMobileMenuOpen(false); }} className="rounded-lg border bg-[#000084] py-2.5 text-lg font-semibold  hover:bg-blue-50">Create an account</button>
                      <button onClick={() => { setIsQuoteDialogOpen(true); setIsMobileMenuOpen(false); }} className="rounded-lg bg-[#000084] py-2.5 text-lg font-semibold text-white hover:bg-[#000089]">Get a Quote</button>
                    </div>
                  </nav>                                 
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {/* Desktop MegaMenu Container */}
        <AnimatePresence>
          {activeSubMenu && (
            <MegaMenu key={activeHover} submenu={activeSubMenu} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}