'use client'

import React from 'react'
import { motion, Variants } from '@/components/module/framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import type { BusinessProtectionData } from '@/types/com/service'

export function BusinessProtection({
	tagline,
	title,
	cta,
	listHeading,
	listItems,
	imageUrl,
	imageAlt,
}: BusinessProtectionData) {
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
	const imageVariants: Variants = {
		hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
	}

	return (
		<section className='py-16 md:py-24' style={{ backgroundColor: '#f3f4ff' }}>
			<div className='container mx-auto px-4'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}>
					<motion.p
						variants={itemVariants}
						className='font-bold uppercase tracking-wider text-sm mb-4'
						style={{ color: '#5252ff' }}>
						{tagline}
					</motion.p>
					<motion.h2
						variants={itemVariants}
						className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight'>
						{title}
					</motion.h2>
				</motion.div>

				{/* THE FIX: Use 'items-start' to align columns to the top. This makes the image feel taller. */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-20'>
					{/* Left Side: Text Content */}
					<motion.div
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.2 }}>
						<motion.div variants={itemVariants} className=''>
							<Button
								asChild
								size='lg'
								className='bg-indigo-700 hover:bg-indigo-800 text-base py-6 px-8 rounded-full'>
								<Link href={cta.href}>{cta.text}</Link>
							</Button>
						</motion.div>

						<motion.div variants={itemVariants} className='mt-12'>
							<h3 className='text-xl font-bold text-gray-800'>{listHeading}</h3>
							<ul className='mt-6 space-y-4'>
								{listItems.map((item, index) => (
									<li key={index} className='flex items-center gap-3'>
										<CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0' />
										<span className='text-gray-700'>{item}</span>
									</li>
								))}
							</ul>
						</motion.div>
					</motion.div>

					{/* Right Side: Image */}
					<motion.div
						className='relative h-[400px] rounded-2xl shadow-lg overflow-hidden'
            variants={imageVariants}             
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
						<Image
							src={imageUrl}
							alt={imageAlt}
							fill
							className='object-fill'
							sizes='(max-width: 1024px) 100vw, 50vw'
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
