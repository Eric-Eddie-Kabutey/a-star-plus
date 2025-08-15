import { FeatureGrid } from '@/components/shared/feature-grid'
import { Hero } from '@/components/shared/hero'
import { InfoSection } from '@/components/shared/info-section'
import { Button } from '@/components/ui/button'

interface DetailItem {
	label: string
	text: string
}

interface PestServiceInfoData {
	tagline: string
	title: string
	description: string
	details: DetailItem[]
	imageUrl: string
	imageAlt: string
}

const expertTrustData = {
	tagline: 'WHY US',
	title: (
		<>
			Don&apos;t Trust Just Anyone with Your Comfort,
			<br />
			Trust Texas&apos; Experts
		</>
	),
	items: [
		{
			icon: '/assets/icons/checked.png',
			title: 'Discreet Service',
			description: 'Unmarked service vehicles for your privacy',
		},
		{
			icon: '/assets/icons/checked.png',
			title: 'Safe Products',
			description: 'EPA-registered, pet-safe products',
		},
		{
			icon: '/assets/icons/checked.png',
			title: 'Treatment Options',
			description: 'Heat Treatment or Low-Odor Spray options',
		},
		{
			icon: '/assets/icons/checked.png',
			title: 'Licensed Technicians',
			description: 'Trained and certified professionals',
		},
		{
			icon: '/assets/icons/checked.png',
			title: 'Affordable Financing',
			description: 'Financing options available',
		},
		{
			icon: '/assets/icons/checked.png',
			title: '100% Guarantee',
			description: 'Pest Elimination Guarantee',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

const stingingPestData: PestServiceInfoData = {
	tagline: 'STINGING PESTS',
	title: 'Wasp, Hornet & Bee Control',
	description:
		'Stinging pests threaten family safety and property. We remove nests and apply targeted deterrents — without harming pollinators unnecessarily.',
	details: [
		{
			label: 'Common signs',
			text: 'buzzing around eaves, nests in trees or under siding',
		},
		{
			label: 'Treatment',
			text: 'safe nest removal, repellents, preventive spraying',
		},
		{
			label: 'Why choose us',
			text: 'fast response, trained in sting-safe handling, non-lethal options for bees',
		},
	],
	imageUrl: '/assets/residential/images/stinging-pets-control.png',
	imageAlt: 'A yellow jacket wasp on its nest with a green background.',
}

export default function StingingPetsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={<>Protecting Homes from Pests That Hide, Bite, and Damage</>}
				description='At A Star Plus Pest Control, we specialize in eradicating a wide range of household pests using safe, effective, and science-based solutions. From creepy crawlers to stingers and chewers, we’ve got you covered.'
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
				tagline={stingingPestData.tagline}
				title={stingingPestData.title}
				description={stingingPestData.description}
				details={stingingPestData.details}
				imageUrl={stingingPestData.imageUrl}
				imageAlt={stingingPestData.imageAlt}
				layout='imageLeft'
			/>

			{/* Render the "Expert Trust" section */}
			<FeatureGrid
				tagline={expertTrustData.tagline}
				title={expertTrustData.title}
				items={expertTrustData.items}
				variant='card' // Use the 'card' variant
				cta={expertTrustData.cta}
			/>
		</>
	)
}
