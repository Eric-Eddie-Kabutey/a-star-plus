'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import type { HeroData } from '@/types/residential/hero'
import Link from 'next/link'
import { QuoteDialog } from '../residential/nav/dialog-quote'
import { cn } from '@/lib/utils'

export function HeroSection({
	title,
	description,
	backgroundImage,
	overlay = 'bg-black/60', // A darker default overlay
}: HeroData) {
	const [isAccountDialogOpen, setIsAccountDialogOpen] = useState(false)
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
		<section className='relative md:pt-40 w-full min-h-screen flex items-center justify-center overflow-hidden'>
			{/* --- DIALOGS --- */}
			<QuoteDialog
				open={isQuoteDialogOpen}
				onOpenChange={setIsQuoteDialogOpen}
			/>
			<QuoteDialog
				open={isAccountDialogOpen}
				onOpenChange={setIsAccountDialogOpen}
				title='Create an account'
				description='Get access to your account details and manage your services.'
			/>

			{/* Background Image using Next.js Image for optimization */}
			<Image
				src={backgroundImage}
				alt='Hero background'
				fill
				priority
				quality={80}
				className='object-cover z-0'
			/>

			{/* Overlay */}
			<div className={`absolute inset-0 ${overlay} z-1`} />

			{/* Content */}
			<div className='relative z-10 container mx-auto px-4 text-center text-white'>
				<motion.div
					className='max-w-4xl mx-auto flex flex-col items-center'
					variants={containerVariants}
					initial='hidden'
					animate='visible'>
					<motion.h1
						className={cn('text-4xl sm:text-5xl lg:text-6xl max-w-2xl mx-auto font-bold leading-tight drop-shadow-lg', )}
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
						className='w-full md:max-w-2xl mt-8 flex flex-col md:flex-row items-center gap-4'
						variants={itemVariants}>
						<button
							onClick={() => {
								setIsQuoteDialogOpen(true)
							}}
							className='w-full text-center rounded-md bg-red-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors'>
							Book a Free Ant Inspection
						</button>
						<Link
							href='tel:4698770769'
							className='w-full bg-white border-1 border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 text-lg py-2 rounded-lg'>
							Call Now: 4698770769
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
