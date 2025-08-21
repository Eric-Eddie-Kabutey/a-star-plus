'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import { Check } from 'lucide-react'
import type { IndustryProtectionData } from '@/types/com/service'
import Image from 'next/image'

export function IndustryProtectionS({
	tagline,
	title,
	description,
	industries,
}: IndustryProtectionData) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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
		<section id="our-industries" className='py-16 md:py-24 bg-gray-50'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16 flex flex-col gap-2'>
					<p className='text-[#000084] font-bold uppercase tracking-wider text-sm mb-2'>
						{tagline}
					</p>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
						{title}
					</h2>
					{description && (
						<p className='mt-4 text-lg text-gray-600'>{description}</p>
					)}
				</div>

				{/* The Grid of Industry Cards */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}>
					{industries.map((industry, index) => (
						<motion.div
							key={index}
							className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col'
							variants={itemVariants}>
							{/* Card Header */}
							<div className='bg-[#000084] text-white p-4 flex flex-col gap-4'>
								<Image
									src={industry.icon}
									alt={industry.title}
									width={100}
									height={100}
									className='w-6 h-6'
								/>
								<h3 className='text-lg font-bold'>{industry.title}</h3>
							</div>

							{/* Card Body */}
							<div className='p-6 flex flex-col flex-grow'>
								<h4 className='text-md font-bold text-gray-800'>
									{industry.subtitle}
								</h4>
								<p className='mt-2 text-sm text-gray-600 flex-grow'>
									{industry.description}
								</p>

								{/* Checkmark List */}
								<ul className='mt-6 space-y-3 pt-6 border-t border-gray-100'>
									{industry.listItems.map((item, itemIndex) => (
										<li key={itemIndex} className='flex items-start gap-3'>
											<Check className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
											<span className='text-sm text-gray-700'>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
