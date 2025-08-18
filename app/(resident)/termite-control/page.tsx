import { HeroSection } from '@/components/shared/OtherHero'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { InfoSection } from '@/components/residential/termite/info-section'
import { termiteControlData, tickControlData } from '@/lib/data/residential/termite-control'
import { HeroData } from '@/types/residential/hero'

const bedBugHeroData: HeroData = {
	title: <>Protecting Your Property from Hard-to-Detect Threats</>,
	description: 'Some pests don’t bite, they break down your home’s foundation or latch onto your skin unnoticed. Termites and ticks are small but serious, and A Star Plus Pest Control delivers reliable solutions for both.',
	backgroundImage: '/assets/residential/images/hero-image-flies.jpg',
	overlay: 'bg-black/40',
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

export default function MothsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />
			
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
