'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'

export interface ServiceCardData {
	icon: string
	title: string
	subtitle: string
	description: string
	accordionTitle: string
	accordionContent: string[]
	footerNote?: string
}

export interface ComprehensiveServicesProps {
	tagline: string
	title: string
	services: ServiceCardData[]
}

export function ComprehensiveServices({
	tagline,
	title,
	services,
}: ComprehensiveServicesProps) {	
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	}

	const itemVariants: Variants = {
		hidden: { y: 30, opacity: 0, scale: 0.95 },
		visible: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}

	return (
		<section id='#comprehensive-service' className='py-16 md:py-24 bg-white'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<p className='text-red-600 font-bold uppercase tracking-wider text-sm mb-2'>
						{tagline}
					</p>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900'>
						{title}
					</h2>
				</div>

				{/* Services Grid */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.1 }}>
					{services.map((service, index) => (
						<motion.div
							key={index}
							className='flex flex-col bg-gray-50/80 p-8 rounded-2xl border border-gray-200 shadow-sm'
							variants={itemVariants}>
							<div className='flex-grow'>
								<div className='flex items-center gap-4 mb-4'>
									<div className='flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600'>
										<Image
											src={service.icon}
											alt={service.accordionTitle}
											width={100}
											height={80}
											className='w-6 h-6'
										/>
									</div>
									<div>
										<h3 className='text-lg font-bold text-gray-900'>
											{service.title}
										</h3>
										<p className='text-sm font-semibold text-gray-700'>
											{service.subtitle}
										</p>
									</div>
								</div>
								<p className='text-sm text-gray-600 mb-4'>
									{service.description}
								</p>

								<Accordion type='single' collapsible className='w-full'>
									<AccordionItem
										value={`item-${index}`}
										className='border-none'>
										<AccordionTrigger className='text-sm font-bold text-red-600 hover:no-underline py-2'>
											{service.accordionTitle}
										</AccordionTrigger>
										<AccordionContent className='pt-2'>
											<ul className='list-disc list-inside space-y-1 text-sm text-gray-600'>
												{service.accordionContent.map((item, i) => (
													<li key={i}>{item}</li>
												))}
											</ul>
											<div>
												{/* Optional Footer Note */}
												{service.footerNote && (
													<p className='mt-6 text-xs text-gray-500 italic'>
														{service.footerNote}
													</p>
												)}
											</div>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
