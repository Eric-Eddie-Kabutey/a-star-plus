'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FacilityServicesData } from '@/types/com/service'
import Image from 'next/image'

export function FacilityServices({
	tagline,
	title,
	description,
	services,
}: FacilityServicesData) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.3 },
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 40, opacity: 0, scale: 0.95 },
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: { type: 'spring', stiffness: 100, damping: 20 },
		},
	}

	return (
		<section className='py-16 md:py-24 bg-gray-50'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<p className='text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2'>
						{tagline}
					</p>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
						{title}
					</h2>
					<p className='mt-4 text-lg text-gray-600'>{description}</p>
				</div>

				{/* The Grid of Service Cards */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className={cn(
								'rounded-2xl shadow-lg border h-full flex flex-col',
								service.isHighlighted
									? 'bg-indigo-900 text-white border-indigo-700'
									: 'bg-white text-gray-900 border-gray-100'
							)}
							variants={itemVariants}>
							<div className='p-8'>
								<div
									className={cn(
										'flex items-center justify-center w-16 h-16 rounded-full mb-6 flex-shrink-0',
										service.isHighlighted
											? 'bg-white/10 border-white/20'
											: 'bg-blue-50 border-blue-100 border'
									)}>
									<Image
										src={service.icon}
										alt={service.title}
										width={100}
										height={80}
										className='w-8 h-8'
									/>
								</div>
								<h3 className='text-xl font-bold'>{service.title}</h3>
								<p
									className={cn(
										'mt-2 text-sm flex-grow',
										service.isHighlighted ? 'text-indigo-200' : 'text-gray-600'
									)}>
									{service.description}
								</p>
							</div>

							{/* Conditional Content: Checkmark List, Summary, or Nested Card */}
							<div className='p-8 mt-auto pt-6 border-t'>
								{service.features && (
									<ul className='space-y-3'>
										{service.features.map((item, itemIndex) => (
											<li key={itemIndex} className='flex items-start gap-3'>
												<Check className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
												<span className='text-sm'>{item}</span>
											</li>
										))}
									</ul>
								)}
								{service.summary && (
									<p
										className={cn(
											'text-sm font-semibold',
											service.isHighlighted
												? 'text-indigo-300'
												: 'text-indigo-700'
										)}>
										{service.summary}
									</p>
								)}
								{service.nestedCard && (
									<div
										className={cn(
											'p-6 rounded-xl',
											service.isHighlighted ? 'bg-indigo-800' : 'bg-gray-100'
										)}>
										<h4 className='font-bold'>{service.nestedCard.title}</h4>
										<ul className='mt-4 space-y-3'>
											{service.nestedCard.items.map((item, itemIndex) => (
												<li key={itemIndex} className='flex items-start gap-3'>
													<Check className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
													<span className='text-sm'>{item}</span>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
