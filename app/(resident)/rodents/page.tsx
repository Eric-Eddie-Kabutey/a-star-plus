import { FeatureGrid } from '@/components/shared/feature-grid'
import { InfoSection } from '@/components/shared/info-section'
import { HeroSection } from '@/components/shared/OtherHero'
import { HeroData } from '@/types/residential/hero'

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

const bedBugHeroData: HeroData = {
	title: <>Protecting Homes from Pests That Hide, Bite, and Damage</>,
	description: 'At A Star Plus Pest Control, we specialize in eradicating a wide range of household pests using safe, effective, and science-based solutions. From creepy crawlers to stingers and chewers, we’ve got you covered.',
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

const rodentRemovalData: PestServiceInfoData = {
	tagline: 'RODENTS',
	title: 'Fast, Humane Rodent Removal',
	description:
		'Mice and rats chew wires, spread disease, and multiply quickly. We combine trapping, sealing, and cleanup to keep your space rodent-free.',
	details: [
		{
			label: 'Common signs',
			text: 'droppings, scratching sounds, chewed wires/food',
		},
		{
			label: 'Treatment',
			text: 'traps, entry point sealing, attic & crawlspace sanitizing',
		},
		{
			label: 'Why choose us',
			text: 'safe for pets, fast response, long-term exclusion plans',
		},
	],
	imageUrl: '/assets/residential/images/rodents-removal.png',
	imageAlt: 'A small gray rat peeking out from under a cardboard box.',
}

export default function RodentsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />			

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={rodentRemovalData.tagline}
				title={rodentRemovalData.title}
				description={rodentRemovalData.description}
				details={rodentRemovalData.details}
				imageUrl={rodentRemovalData.imageUrl}
				imageAlt={rodentRemovalData.imageAlt}
				layout='imageRight'
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
