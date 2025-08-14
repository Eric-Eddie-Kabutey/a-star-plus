'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { VersatileHeroData } from '@/types/com/hero'
import { QuoteDialog } from '../header/dialog-quote'
import { Phone } from 'lucide-react'

// Helper component for the corner border
const CornerBorder = ({
	position,
}: {
	position: VersatileHeroData['cornerBorderPosition']
}) => {
	const positionClasses = {
		topLeft: 'top-0 left-0 rounded-tl-2xl border-t-4 border-l-4',
		topRight: 'top-0 right-0 rounded-tr-2xl border-t-4 border-r-4',
		bottomLeft: 'bottom-0 left-0 rounded-bl-2xl border-b-4 border-l-4',
		bottomRight: 'bottom-0 right-0 rounded-br-2xl border-b-4 border-r-4',
	}
	if (!position) return null

	return (
		<div
			className={cn(
				'absolute w-24 h-24 md:w-32 md:h-32 border-blue-500 pointer-events-none hidden sm:block',
				positionClasses[position]
			)}
		/>
	)
}

export function Hero({
	title,
	description,
	actions,
	imageUrl,
	imageAlt,
	features,
	cornerBorderPosition,
}: VersatileHeroData) {
	const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.2 },
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<section className='relative min-h-screen bg-black text-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
			<CornerBorder position={cornerBorderPosition} />
			<QuoteDialog
				open={isQuoteDialogOpen}
				onOpenChange={setIsQuoteDialogOpen}
			/>

			<div className='container mx-auto z-10 pt-28 md:pt-40'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* Left Side: Content */}
					<motion.div
						className='text-center lg:text-left'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.3 }}>
						<motion.h1
							className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'
							variants={itemVariants}>
							{title}
						</motion.h1>
						<motion.p
							className='mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0'
							variants={itemVariants}>
							{description}
						</motion.p>

						<motion.p
							className='mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0'
							variants={itemVariants}>
							{description}
						</motion.p>

						{/* Action buttons are passed in as children */}
						<motion.div
							className='mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'
							variants={itemVariants}>
							<button
								onClick={() => {
									setIsQuoteDialogOpen(true)
								}}
								className='bg-[#000084] hover:bg-[#000080] text-lg py-4 px-10 rounded-lg w-full sm:w-auto'>
								{actions[0]}
							</button>

							{actions.length > 1 && (
								<button className='border border-white bg-transparent text-white hover:bg-white/10 hover:text-white text-lg py-4 px-10 rounded-lg w-full sm:w-auto'>
									<a
										href='tel:2331234567890'
										className='flex items-center gap-2'>
										<Phone className='w-5 h-5' />
										{actions[1]}
									</a>
								</button>
							)}
						</motion.div>

						{/* Optional Feature Boxes */}
						{features && features.length > 0 && (
							<motion.div
								className='mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
								variants={itemVariants}>
								{features.map((feature) => (
									<div
										key={feature.title}
										className='border border-gray-700 rounded-lg p-4 flex-1'>
										<h3 className='font-bold text-white'>{feature.title}</h3>
										<p className='text-sm text-gray-400 mt-1'>
											{feature.description}
										</p>
									</div>
								))}
							</motion.div>
						)}
					</motion.div>

					{/* Right Side: Image (Hidden on mobile) */}
					<motion.div
						className='hidden lg:flex justify-center'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: 'easeOut' }}>
						<div className='relative w-[500px] h-[600px]'>
							<Image
								src={imageUrl}
								alt={imageAlt}
								fill
								className='object-cover rounded-2xl'
								sizes='50vw'
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
