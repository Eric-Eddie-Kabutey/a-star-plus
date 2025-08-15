import { FeatureGrid } from '@/components/shared/feature-grid'
import { Hero } from '@/components/shared/hero'
import { Button } from '@/components/ui/button'
import { InfoSection } from '@/components/residential/termite/info-section'
import { termiteControlData, tickControlData } from '@/lib/data/residential/termite-control'

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

export default function MothsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={<>Protecting Your Property from Hard-to-Detect Threats</>}
				description='Some pests don’t bite, they break down your home’s foundation or latch onto your skin unnoticed. Termites and ticks are small but serious, and A Star Plus Pest Control delivers reliable solutions for both.'
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
				tagline={termiteControlData.tagline}
				title={termiteControlData.title}				
				mainList={termiteControlData.mainList}
				imageUrl={termiteControlData.imageUrl}
				imageAlt={termiteControlData.imageAlt}
				layout='imageRight'
            />
            
            {/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={tickControlData.tagline}
				title={tickControlData.title}
				description={tickControlData.description}
				mainList={tickControlData.mainList}
				imageUrl={tickControlData.imageUrl}
				imageAlt={tickControlData.imageAlt}
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
