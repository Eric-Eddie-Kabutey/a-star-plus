'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import type { DetailedFeatureGridData } from '@/types/residential/a-start-plus'
import Image from 'next/image'

export function DetailedFeatureGrid({
	tagline,
	title,
	description,
	features,
	id,
}: DetailedFeatureGridData) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
		<section id={id ? `${id}` : ''} className='py-16 md:py-24 bg-white'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<p className='text-red-600 font-bold uppercase tracking-wider text-sm mb-2'>
						{tagline}
					</p>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
						{title}
					</h2>
					<p className='mt-4 text-lg text-gray-600'>{description}</p>
				</div>

				{/* The Grid of Detailed Cards */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col gap-2 md:gap-8 h-full'
							variants={itemVariants}>							
								<Image
									src={feature.icon}
									alt={feature.title}
									width={100}
									height={80}
									className='w-12 h-auto'
								/>
							<h3 className='text-xl font-bold text-gray-900'>
								{feature.title}
							</h3>
							<p className='text-sm text-gray-600'>
								{feature.description}
              </p>
              
              

							{/* Checkmark List */}
							<ul className='space-y-3 '>
								{feature.listItems.map((item, itemIndex) => (
									<li key={itemIndex} className='flex items-start gap-3'>
										{feature.check && (
											<Image
												src='/assets/shared/icons/check-mark.png'
												alt={feature.title}
												width={100}
												height={80}
												className='w-6 h-auto mt-0.5 flex-shrink-0'
											/>
										)}
										<span className='text-sm text-gray-700'>{item}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
