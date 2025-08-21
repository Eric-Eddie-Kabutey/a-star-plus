'use client';

import React from 'react';
import { motion, Variants } from '@/components/module/framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';


// Define the type for a single comparison row
interface ComparisonRow {
  trait: string;
  itemA: string;
  itemB: string;
}

// Define the props for our main component
interface ComparisonTableSectionProps {
  tagline: string;
  title: React.ReactNode;
  description?: string; // Added description
  itemAName: string;
  itemBName: string;
  data: ComparisonRow[];
  bottomNote?: {     
    text: string;
    style?: 'success' | 'warning';
  };
  id?: string
}

export function ComparisonTable({
  tagline,
  title,
  description,
  itemAName,
  itemBName,
  data,
  bottomNote,
  id
}: ComparisonTableSectionProps) {

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.1,
      },
    },
  };
  
  const rowVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.section
      id={id ? `${id}` : ""}
      className="py-16 md:py-24"
      style={{ backgroundColor: '#fdf8f8' }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12 flex flex-col gap-2">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600">{description}</p>
          )}
        </div>

        {/* Shadcn/UI Table */}
        <div className="overflow-hidden shadow-lg border border-gray-200">
          <Table>
            <TableHeader>
              <TableRow className="bg-red-600 hover:bg-red-600 rounded-lg">
                <TableHead className="w-1/3 text-base md:text-lg font-neutral md:font-bold text-white py-2 md:py-4 px-2 md:px-4">Trait</TableHead>
                <TableHead className="w-1/3 text-base md:text-lg font-neutral md:font-bold text-white">{itemAName}</TableHead>
                <TableHead className="w-1/3 text-base md:text-lg font-neutral md:font-bold text-white">{itemBName}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <motion.tr
                  key={row.trait}
                  className="bg-white even:bg-red-50/50"
                  variants={rowVariants}
                >
                  <TableCell className="text-base md:tex-lg py-4 px-4  text-gray-800">{row.trait}</TableCell>
                  <TableCell className="text-base md:tex-lg py-4 px-4 text-gray-800">{row.itemA}</TableCell>
                  <TableCell className="text-base md:tex-lg py-4 px-4 text-gray-800">{row.itemB}</TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </div>

        
        {/* --- RENDER LOGIC FOR THE BOTTOM BANNER --- */}
        {bottomNote && (
          <div className="text-center mt-8 flex justify-center">
            <motion.div
              className={cn(
                'inline-flex items-center gap-3 font-semibold px-4 py-2 rounded-lg text-sm',
                bottomNote.style === 'warning'
                  ? 'bg-red-100/50 text-red-700'
                  : 'bg-green-100 text-green-800'
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >             
              <span>{bottomNote.text}</span>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
}