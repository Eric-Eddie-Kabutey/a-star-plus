'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from '@/components/module/framer-motion'
import { cn } from '@/lib/utils'

interface ContentBlock {
	subheading?: string
	text: string
}

interface ContentSectionProps {
	tagline: string
	title: string
	imageUrl: string
	imageAlt: string
	content: ContentBlock[]
	layout?: 'imageLeft' | 'imageRight'
}

export function ContentSection({
	tagline,
	title,
	imageUrl,
	imageAlt,
	content,
	layout = 'imageRight',
}: ContentSectionProps) {
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

	return (
		<motion.section
			className='py-16 md:py-24 bg-white overflow-hidden'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			transition={{ staggerChildren: 0.2 }}>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					<motion.div
						className={cn(
							'relative aspect-square rounded-2xl shadow-2xl overflow-hidden',
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
					<motion.div
						className={cn(
							'space-y-6',
							layout === 'imageRight' ? 'lg:order-1' : 'lg:order-2'
						)}
						variants={
							layout === 'imageRight' ? slideInFromLeft : slideInFromRight
						}>
						<div>
							<p className='text-red-600 font-bold uppercase tracking-wider text-sm mb-2'>
								{tagline}
							</p>
							<h2 className='text-3xl md:text-4xl font-extrabold text-gray-900'>
								{title}
							</h2>
						</div>
						{content.map((block, index) => (
							<div key={index}>
								{block.subheading && (
									<h3 className='text-xl font-bold text-gray-800 mb-2'>
										{block.subheading}
									</h3>
								)}
								<p className='text-gray-600'>{block.text}</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.section>
	)
}
