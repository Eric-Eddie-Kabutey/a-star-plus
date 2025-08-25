'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from '@/components/module/framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface DetailItem {
	label: string
	text: string
}

interface InfoSectionProps {
	tagline: string
	title: string
	description: string
	details?: DetailItem[] // For labeled lists
	features?: string[] // For simple bullet lists
	imageUrl: string
	imageAlt: string
	layout?: 'imageLeft' | 'imageRight'
	cta?: {
		// Optional CTA button
		text: string
		href: string
	}
	id?: string
}

export function InfoSection({
	tagline,
	title,
	description,
	details,
	features,
	imageUrl,
	imageAlt,
	layout = 'imageRight',
	cta,
	id,
}: InfoSectionProps) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}
	const slideInFromLeft: Variants = {
		hidden: { x: -50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	}
	const slideInFromRight: Variants = {
		hidden: { x: 50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] },
		},
	}
	const itemVariants: Variants = {
		hidden: { opacity: 0, x: 20 },
		visible: { opacity: 1, x: 0 },
	}

	return (
		<motion.section
			id={id ? `${id}` : ""}
			className='py-16 md:py-24 bg-white overflow-hidden'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}>
			<div className='container lg:max-w-5xl xl:max-w-7xl px-4 sm:px-6 mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* Text Content Block */}
					<motion.div
						className={cn(
							layout === 'imageRight' ? 'lg:order-1' : 'lg:order-2'
						)}
						variants={
							layout === 'imageRight' ? slideInFromLeft : slideInFromRight
						}
						transition={{ staggerChildren: 0.1 }}>
						<motion.p
							variants={itemVariants}
							className='text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2'>
							{tagline}
						</motion.p>
						<motion.h2
							variants={itemVariants}
							className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4'>
							{title}
						</motion.h2>
						<motion.p variants={itemVariants} className='text-gray-600 mb-6'>
							{description}
						</motion.p>

						{/* --- NEW: CONDITIONAL LIST RENDERING --- */}
						{details && (
							<ul className='space-y-3 text-gray-600 mb-8'>
								{details.map((item) => (
									<motion.li
										key={item.label}
										variants={itemVariants}
										className='flex items-start'>
										<span className='flex-shrink-0 mr-3 mt-1 text-indigo-600 font-bold'>
											•
										</span>
										<div>
											<strong className='text-gray-800 font-semibold'>
												{item.label}:
											</strong>{' '}
											{item.text}
										</div>
									</motion.li>
								))}
							</ul>
						)}

						{features && (
							<ul className='space-y-3 text-gray-600 mb-8'>
								{features.map((feature, index) => (
									<motion.li
										key={index}
										variants={itemVariants}
										className='flex items-start'>
										<span className='flex-shrink-0 mr-3 mt-1 text-indigo-600 font-bold'>
											•
										</span>
										<span>{feature}</span>
									</motion.li>
								))}
							</ul>
						)}

						{/* --- NEW: CONDITIONAL CTA BUTTON --- */}
						{cta && (
							<motion.div variants={itemVariants}>
								<Button
									asChild
									size='lg'
									className='bg-indigo-900 hover:bg-indigo-800 text-base py-6 px-8 rounded-lg'>
									<Link href={cta.href}>{cta.text}</Link>
								</Button>
							</motion.div>
						)}
					</motion.div>

					<motion.div
						className={cn(
							'relative aspect-square rounded-2xl shadow-lg overflow-hidden',
							layout === 'imageRight' ? 'lg:order-2' : 'lg:order-1'
						)}
						variants={
							layout === 'imageRight' ? slideInFromRight : slideInFromLeft
						}>
						<Image
							src={imageUrl}
							alt={imageAlt}
							fill
							className='object-cover'
							sizes='(max-width: 1024px) 100vw, 50vw'
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}
