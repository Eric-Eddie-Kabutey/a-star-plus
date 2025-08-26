'use client'

import React, { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { CtaData } from '@/types/share/cta'
import { QuoteDialog } from './nav/dialog-quote'


export function CtaSection({
	title,
	description,
	taglineItems,
	primaryAction,
	secondaryAction,
	colorScheme = 'red', // Default to red
}: CtaData) {
	const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)	

	const containerVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: 'easeOut',
				staggerChildren: 0.2,
			},
		},
	}
	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	}

	return (
		<section className='py-12 md:py-20 bg-gray-900'>
			<QuoteDialog
					open={isQuoteDialogOpen}
					onOpenChange={setIsQuoteDialogOpen}
				/>

			<div className='container lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 mx-auto'>
				<motion.div
					className={cn(
						'rounded-xl p-8 md:p-16 text-center flex flex-col items-center',
						colorScheme === 'red' ? 'bg-red-600' : 'bg-[#000084]'
					)}
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}>
					{/* Main Title */}
					<motion.h2
						className='text-3xl md:text-4xl font-bold text-white max-w-2xl'
						variants={itemVariants}>
						{title}
					</motion.h2>

					{/* --- CONDITIONAL CONTENT: Description OR Tagline --- */}
					{description && (
						<motion.p
							className='mt-4 text-lg text-white/80'
							variants={itemVariants}>
							{description}
						</motion.p>
					)}

					{taglineItems && (
						<motion.div
							className='mt-4 flex items-center gap-2 text-white/80'
							variants={itemVariants}>
							<div className='flex items-center gap-2 text-sm font-medium'>
								{taglineItems.map((item, index) => (
									<React.Fragment key={item}>
										<span>{item}</span>
										{index < taglineItems.length - 1 && (
											<span className='opacity-50'>|</span>
										)}
									</React.Fragment>
								))}
							</div>
						</motion.div>
					)}

					{/* Action Buttons */}
					<motion.div
						className='mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'
						variants={itemVariants}>
						<Button
							asChild
							size='lg'
							variant='outline'
							className={cn(
								'text-white border-white/50 hover:bg-white/10 hover:text-white w-full sm:w-auto',
								colorScheme === 'red'
									? 'text-red-700 hover:bg-red-700 hover:text-white'
									: 'bg-[#000084] text-white hover:bg-white hover:text-[#000084]'
							)}>
							<button onClick={() => setIsQuoteDialogOpen(true)}>
								{primaryAction.text}
							</button>
						</Button>
						<Button
							asChild
							size='lg'
							className={cn(
								'bg-white hover:bg-gray-200 w-full sm:w-auto',
								colorScheme === 'red'
									? 'text-red-700 hover:bg-red-700 hover:text-white'
									: 'text-[#000084] hover:bg-[#0000] hover:text-white'
							)}>
							<Link href={secondaryAction.href}>{secondaryAction.text}</Link>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
