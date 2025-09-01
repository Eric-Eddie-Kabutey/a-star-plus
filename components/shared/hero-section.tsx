'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import type { HeroProps } from '@/types/share/hero'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { QuoteDialog } from '../commercial/header/dialog-quote'

export function HeroSection({
	title,
	description,
	backgroundImage,
	overlay = 'bg-black/50', // A sensible default overlay
	action,
}: HeroProps) {
    const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.3 },
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 100 },
		},
	}

	return (
        <section className='relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden'>
            <QuoteDialog
                            open={isQuoteDialogOpen}
                            onOpenChange={setIsQuoteDialogOpen}
                        />
			{/* Background Image using Next.js Image for optimization */}
			<Image
				src={backgroundImage}
				alt='Hero background'
				fill
				priority
				quality={80}
				className='object-cover z-10'
			/>

			{/* Overlay */}
			<div className={`absolute inset-0 ${overlay} z-1`} />

			<div className='relative z-10 container mx-auto text-center text-white pt-30 px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='max-w-3xl mx-auto flex flex-col items-center'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					<motion.h1
						className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md'
						variants={itemVariants}>
						{title}
					</motion.h1>
					<motion.p
						className='mt-4 text-lg md:text-xl text-gray-200 max-w-xl drop-shadow-md'
						variants={itemVariants}>
						{description}
					</motion.p>

					{/* Buttons are rendered directly from the prop */}
					<motion.div
						className='mt-8 w-full max-w-sm sm:max-w-none'
						variants={itemVariants}>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
							<button onClick={() => {
									setIsQuoteDialogOpen(true)
								}} className='bg-[#000084] hover:bg-[#000080] w-full sm:w-auto text-base py-4 px-10 rounded-lg'>
								{action[0]}
							</button>
							<button className='text-white bg-transparent border border-white/50 hover:bg-white/10 hover:text-white w-full sm:w-auto text-base py-4 px-10 rounded-lg'>
								<Link href='tel:4698770769' className='flex items-center justify-center gap-2'>
									<Phone className='mr-2 h-5 w-5' />
									4698770769
								</Link>
							</button>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
