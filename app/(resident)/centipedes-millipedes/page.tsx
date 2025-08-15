import { Hero } from '@/components/shared/hero'
import { InfoSection } from '@/components/shared/why'
import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ComparisonTable } from '@/components/residential/centipedes/comparison-table'
import { Faq } from '@/components/shared/faq'
import { Testimonials } from '@/components/shared/testimonials'

import { Button } from '@/components/ui/button'

import { beetleData } from '@/lib/data/residential/beetle'
import { centipedeMillipedeData } from '@/lib/data/residential/centipedes-millipede'

interface singsProcessData {
	tagline: string
	title: React.ReactNode
	description: string
	items: {
		icon: string
		title: string
		description: string
	}[]
}

const signsOfCentipedesData: singsProcessData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: (
		<>
			Signs You May Have a Centipede or
			<br />
			Millipede Problem
		</>
	),
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/centipedes/moon.svg',
			title: 'Nighttime Sightings',
			description:
				'Sightings near sinks, tubs, or drains — especially at night',
		},
		{
			icon: '/assets/residential/icons/centipedes/droplet.png',
			title: 'Moisture Attraction',
			description: 'Moist, humid areas in the home attracting insects',
		},
		{
			icon: '/assets/residential/icons/centipedes/search.svg',
			title: 'Shed Evidence',
			description: 'Shed skins or legs found in baseboards or corners',
		},
		{
			icon: '/assets/residential/icons/centipedes/nose.png',
			title: 'Unpleasant Odors',
			description: 'Unpleasant odor when millipedes are crushed',
		},
		{
			icon: '/assets/residential/icons/centipedes/movement.png',
			title: 'Indoor Movement',
			description:
				'Crawling insects with dozens of legs on basement walls or under furniture',
		},
	],
}

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

const centipedeControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: (
		<>
			How We Remove
			<br />
			Centipedes and Millipedes.
			<br />
			Safely and Permanently
		</>
	),
	imageUrl:
		'/assets/residential/images/centipedes-millipedes-control-process.png',
	imageAlt: 'A close-up of a red millipede crawling on soil and leaves.',
	steps: [
		{
			title: 'In-Depth Inspection',
			description:
				'We locate hiding spots, moisture sources, and entry points.',
		},
		{
			title: 'Species Identification',
			description:
				"We confirm whether you're dealing with centipedes, millipedes, or both.",
		},
		{
			title: 'Targeted Treatment',
			description:
				'We apply EPA-approved insecticides in entry zones, moisture pockets, wall voids, and crawl spaces.',
		},
		{
			title: 'Moisture Control',
			description: 'We recommend and implement drying and sealing strategies.',
		},
		{
			title: 'Exclusion & Prevention',
			description:
				'We seal cracks and offer follow-up support to prevent re-entry.',
		},
	],
}

const moisturePestControlData = {
	tagline: 'WHY US',
	title: 'Proven Expertise in Moisture-Driven Pest Control',
	items: [
		{
			icon: '/assets/residential/residential/icons.',
			title: 'Discreet Service',
			description: 'Same-day and discreet service available',
		},
		{
			icon: '/assets/residential/icons.',
			title: 'Safe Products',
			description: 'Safe for kids, pets, and elderly',
		},
		{
			icon: '/assets/residential/icons.',
			title: 'Treatment Options',
			description: 'Moisture assessment included in inspection',
		},
		{
			icon: '/assets/residential/icons.',
			title: '24/7 Availability',
			description: 'Local Texas technicians who know the terrain',
		},
		{
			icon: '/assets/residential/icons.',
			title: 'A Bright Future',
			description: 'Guaranteed results with affordable plans',
		},
		{
			icon: '/assets/residential/icons.',
			title: '100% Skilled Professionals',
			description: 'Licensed, insured, and background-checked professionals',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

const centipedePreventionTipsData = {
	tagline: 'TIPS',
	title: (
		<>
			How to Keep Centipedes
			<br />& Millipedes Out
		</>
	),
	items: [
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Dehumidify',
			description: 'Use a dehumidifier in basements and bathrooms',
		},
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Seal Cracks',
			description: 'Seal cracks around windows, doors, and foundations',
		},
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Fix Leaks',
			description: 'Fix leaky faucets, drains, and pipes',
		},
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Remove Debris',
			description:
				"Keep leaf litter and mulch away from your home's foundation",
		},
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Regular Cleaning',
			description: 'Vacuum dark corners, under sinks, and baseboards regularly',
		},
		{
			icon: '/assets/residential/icons/beetle/store-properly.png',
			title: 'Storage Distance',
			description: 'Store firewood and compost at least 20 feet from your home',
		},
	],
	cta: {
		text: 'Download Our Centipedes & Millipedes Prevention Guide PDF',
		href: '/centipede-millipede-guide.pdf',
	},
}

export default function CentipedesMillipedesPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={
					<>
						Sleepless Nights? Get Ride of
						<br /> Bed Bug Fast, Guaranteed.
					</>
				}
				description='We eliminate ants at the source, fast, safe, and with a satisfaction guarantee.'
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

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={beetleData.tagline}
				title={beetleData.title}
				description={beetleData.description}
				quickFacts={beetleData.quickFacts}
				imageUrl={beetleData.imageUrl}
				imageAlt={beetleData.imageAlt}
				layout='imageLeft'
			/>

			{/* stats table */}
			<ComparisonTable
				tagline={centipedeMillipedeData.tagline}
				title={centipedeMillipedeData.title}
				itemAName={centipedeMillipedeData.itemAName}
				itemBName={centipedeMillipedeData.itemBName}
				data={centipedeMillipedeData.data}
			/>

			{/* signs */}
			<FeatureGrid
				tagline={signsOfCentipedesData.tagline}
				title={signsOfCentipedesData.title}
				description={signsOfCentipedesData.description}
				items={signsOfCentipedesData.items}
				variant='circularIcon'
			/>

			{/* process control */}
			<ControlProcess
				tagline={centipedeControlProcessData.tagline}
				title={centipedeControlProcessData.title}
				imageUrl={centipedeControlProcessData.imageUrl}
				imageAlt={centipedeControlProcessData.imageAlt}
				steps={centipedeControlProcessData.steps}
			/>

			{/* why us:  */}
			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={moisturePestControlData.tagline}
				title={moisturePestControlData.title}
				items={moisturePestControlData.items}
				variant='card'
				cta={moisturePestControlData.cta}
			/>

			{/* testimonials */}
			<Testimonials />

			{/* tips */}
			<FeatureGrid
				tagline={centipedePreventionTipsData.tagline}
				title={centipedePreventionTipsData.title}
				items={centipedePreventionTipsData.items}
				variant='card'
				cta={centipedePreventionTipsData.cta}
			/>

			{/* Faq */}
			<Faq />
		</>
	)
}
