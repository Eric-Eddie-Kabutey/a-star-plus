'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import type { TrustFeaturesData } from '@/types/com/service'
import Image from 'next/image'

export function TrustFeatures({
	tagline,
	title,
	description,
	features,
	id,
}: TrustFeaturesData) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.3 },
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 40, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 100, damping: 20 },
		},
	}

	return (
		<section id={id ? `{id}` : ""} className='py-16 md:py-24 bg-gray-50'>
			<motion.div
				className='container mx-auto px-4 flex flex-col gap-2'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}>
				{/* Section Header */}
				<div className='text-center max-w-4xl mx-auto mb-16 flex flex-col gap-2'>
					<motion.p
						className='text-[#000084] font-bold uppercase tracking-wider text-sm mb-2'
						variants={itemVariants}>
						{tagline}
					</motion.p>
					<motion.h2
						className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'
						variants={itemVariants}>
						{title}
					</motion.h2>
					<motion.p
						className='mt-4 text-lg text-gray-600'
						variants={itemVariants}>
						{description}
					</motion.p>
				</div>

				{/* The Grid of Feature Cards */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col gap-4 items-start h-full'
							variants={itemVariants}>
							<Image
								src={feature.icon}
								alt={feature.title}
								width={100}
								height={100}
								className=' w-15 h-15'
							/>
							<h3 className='text-xl font-bold text-gray-900'>
								{feature.title}
							</h3>
							<p className='mt-2 text-sm text-gray-600 flex-grow'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	)
}
