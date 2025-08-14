'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import { cn } from '@/lib/utils'
import type { GuaranteeData } from '@/types/com/service'
import Image from 'next/image'

export function Guarantee({ data }: { data: GuaranteeData }) {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 },
		},
	}
	const itemVariants: Variants = {
		hidden: { y: 40, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
	}

	const colorStyles = {
		blue: {
			border: 'border-blue-800',
			iconBorder: 'border-blue-800',
			iconText: 'text-blue-800',
			bannerBg: 'bg-blue-100/60',
			bannerText: 'text-blue-800',
		},
		green: {
			border: 'border-green-600',
			iconBorder: 'border-green-600',
			iconText: 'text-green-600',
			bannerBg: 'bg-green-100/60',
			bannerText: 'text-green-800',
		},
		purple: {
			border: 'border-purple-500',
			iconBorder: 'border-purple-500',
			iconText: 'text-purple-500',
			bannerBg: 'bg-purple-100/60',
			bannerText: 'text-purple-800',
		},
	}

	return (
		<section className='py-16 md:py-24 bg-white'>
			<div className='container mx-auto px-4'>
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<p className='text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2'>
						{data.tagline}
					</p>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
						{data.title}
					</h2>
					<p className='mt-4 text-lg text-gray-600'>{data.description}</p>
				</div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}>
					{data.guarantees.map((guarantee) => {
						const styles = colorStyles[guarantee.colorScheme]
						return (
							<motion.div
								key={guarantee.title}
								className={cn(
									'bg-white rounded-2xl shadow-lg border-t-4 p-8 flex flex-col gap-4',
									styles.border
								)}
								variants={itemVariants}>
								<Image
									src={guarantee.icon}
									alt={guarantee.title}
									width={100}
									height={100}
									className='w-16 h-16'
								/>
								<h3 className='text-xl font-bold text-gray-900'>
									{guarantee.title}
								</h3>
								<p className='mt-2 text-sm text-gray-600 flex-grow'>
									{guarantee.description}
								</p>
								<div
									className={cn(
										'mt-6 p-3 rounded-lg text-center text-sm font-semibold',
										styles.bannerBg,
										styles.bannerText
									)}>
									{guarantee.bannerText}
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>
		</section>
	)
}
