import { Hero } from '@/components/shared/hero'
import { InfoSection } from '@/components/shared/why'
import { CommonPestsSection } from '@/components/residential/ants/common-ant-species'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ControlProcess } from '@/components/shared/control-process'
import { Faq } from '@/components/shared/faq'
import { Testimonials } from '@/components/shared/testimonials'

import { Button } from '@/components/ui/button'
import { beetleData, beetleSpeciesData } from '@/lib/data/residential/beetle'

interface ControlProcessData {
	tagline: string
	title: React.ReactNode
	imageUrl: string
	imageAlt: string
	steps: {
		title: string
		description: string
	}[]
}

const beetleControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: (
		<>
			How We Eliminate Beetles,
			<br />
			and Keep Them Gone
		</>
	),
	imageUrl: '/assets/residential/images/pets-control-beetle.png',
	imageAlt: 'A close-up of a beetle on a bright red and orange leaf.',
	steps: [
		{
			title: 'Detailed Inspection',
			description:
				'We assess your home or facility to identify species, activity zones, and nesting areas',
		},
		{
			title: 'Customized Plan',
			description:
				'Based on beetle type and severity, we create a targeted treatment strategy',
		},
		{
			title: 'Treatment Application',
			description:
				'May include heat treatments, residual sprays, insect growth regulators, or fumigation',
		},
		{
			title: 'Sanitation & Exclusion',
			description:
				'We clean infested zones, seal entry points, and advise on prevention',
		},
		{
			title: 'Follow-Up & Monitoring',
			description:
				'Ongoing treatment if needed, with traps or scheduled checks',
		},
	],
}

const signsOfBeetlesData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: 'Warning Signs of a Beetle Problem',
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/tiny-rounded-hole.png',
			title: 'Tiny round holes',
			description: 'Tiny round holes in wood, furniture, or floors',
		},
		{
			icon: '/assets/residential/icons/tiny-rounded-hole.png',
			title: 'Powdery residue (frass)',
			description: 'Powdery residue (frass) near damaged wood',
		},
		{
			icon: '/assets/residential/icons/tiny-rounded-hole.png',
			title: 'Damaged/thinning areas',
			description: 'Damaged or thinning areas in rugs, clothing, or upholstery',
		},
		{
			icon: '/assets/residential/icons/tiny-rounded-hole.png',
			title: 'Live or dead beetles',
			description: 'Live or dead beetles in cabinets or around windowsills',
		},
		{
			icon: '/assets/residential/icons/tiny-rounded-hole.png',
			title: 'Foul odors',
			description: 'Foul odors or spoiled pantry items',
		},
		{
			icon: '/assets/residential/icons/tiny-rounded-hole.png',
			title: 'Beetle larvae crawling',
			description: 'Beetle larvae crawling on walls or baseboards',
		},
	],
}

const expertProtectionData = {
	tagline: 'WHY US',
	title: 'Your Property Deserves Expert Protection',
	items: [
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Discreet Service',
			description: 'Licensed Technicians with Structural Pest Expertise',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Safe Products',
			description: 'Safe for Pets and Children',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Treatment Options',
			description: 'Flexible Residential & Commercial Plans',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '24/7 Availability',
			description: 'Same-Day or Emergency Appointments Available',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'A Bright Future',
			description: 'Long-Term Monitoring & Prevention',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '100% Guarantee',
			description: 'Full Guarantee on All Treatments',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

const beetlePreventionTipsData = {
	tagline: 'TIPS',
	title: (
		<>
			Keep Beetles Out for
			<br />
			Good
		</>
	),
	items: [
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Store Properly',
			description: 'Store food in airtight containers',
		},
		{
			icon: '/assets/residential/icons/beetle/vacuum-regularly.png',
			title: 'Vacuum Regularly',
			description: 'Especially under furniture and in closets',
		},
		{
			icon: '/assets/residential/icons/beetle/inspect-items.png',
			title: 'Inspect Items',
			description: 'Check second-hand furniture before bringing indoors',
		},
		{
			icon: '/assets/residential/icons/beetle/seal-cracks.png',
			title: 'Seal Cracks',
			description: 'Around windows, doors, and baseboards',
		},
		{
			icon: '/assets/residential/icons/beetle/control-climate.png',
			title: 'Control Climate',
			description: 'Keep storage areas cool and dry',
		},
		{
			icon: '/assets/residential/icons/beetle/treat-wood.png',
			title: 'Treat Wood',
			description: 'Use sealants for exposed timber',
		},
	],
	cta: {
		text: 'Download Our Beetle Prevention Guide PDF',
		href: '/beetle-prevention-guide.pdf',
	},
}

export default function BeetlePage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={<>Stop Beetles Before They Wreck Your Property.</>}
				description='Protect your home or business from fabric, wood, and food destroying beetles with expert pest control that works, guaranteed.'
				backgroundColor='#fff0f0'
				buttons={
					<div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-xs mx-auto'>
						<Button
							size='lg'
							className='w-full bg-red-600 hover:bg-red-700 text-lg py-6'>
							Book a Free Ant Inspection
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='w-full border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 text-lg py-6'>
							Call Now: (123) 456-7890
						</Button>
					</div>
				}
			/>

			{/* Example 1: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={beetleData.tagline}
				title={beetleData.title}
				description={beetleData.description}
				quickFacts={beetleData.quickFacts}
				imageUrl={beetleData.imageUrl}
				imageAlt={beetleData.imageAlt}
			/>

			{/* know you enemy - beetle */}
			<CommonPestsSection
				tagline='KNOW YOUR ENEMY'
				title={
					<>
						Know the Beetles You&apos;re Up <br className='hidden sm:block' />
						Against
					</>
				}
				pests={beetleSpeciesData}
			/>

			<FeatureGrid
				tagline={signsOfBeetlesData.tagline}
				title={signsOfBeetlesData.title}
				description={signsOfBeetlesData.description}
				items={signsOfBeetlesData.items}
				variant='circularIcon'
			/>

			{/* control process for beetle */}
			<ControlProcess
				tagline={beetleControlProcessData.tagline}
				title={beetleControlProcessData.title}
				imageUrl={beetleControlProcessData.imageUrl}
				imageAlt={beetleControlProcessData.imageAlt}
				steps={beetleControlProcessData.steps}
			/>

			{/* why us */}
			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={expertProtectionData.tagline}
				title={expertProtectionData.title}
				items={expertProtectionData.items}
				variant='card'
				cta={expertProtectionData.cta}
			/>

			{/* testimonial */}
			<Testimonials />
			
			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={beetlePreventionTipsData.tagline}
				title={beetlePreventionTipsData.title}
				items={beetlePreventionTipsData.items}
				variant='card'
				cta={beetlePreventionTipsData.cta}
			/>

			{/* Faq */}
			<Faq />
		</>
	)
}
