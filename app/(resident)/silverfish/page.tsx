
import { HeroSection } from '@/components/shared/OtherHero'
import { InfoSection } from '@/components/shared/info-section'
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

const silverfishData: PestServiceInfoData = {
	tagline: 'SILVERFISH',
	title: 'Silent Paper & Fabric Destroyers',
	description:
		'Silverfish thrive in moist, dark areas and feed on books, photos, and clothes. Our team eliminates both the pests and the conditions they love.',
	details: [
		{
			label: 'Common signs',
			text: 'tiny metallic bugs, yellow stains, damaged paper items',
		},
		{
			label: 'Treatment',
			text: 'moisture control, crack sealing, low-toxicity insecticides',
		},
		{
			label: 'Why choose us',
			text: 'non-disruptive treatments, eco-conscious, thorough follow-up',
		},
	],
	imageUrl: '/assets/residential/images/silverfish-destroyer.png',
	imageAlt: 'A silverfish insect crawling on a textured surface.',
}

export default function SilverFishPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />			

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={silverfishData.tagline}
				title={silverfishData.title}
				description={silverfishData.description}
				details={silverfishData.details}
				imageUrl={silverfishData.imageUrl}
				imageAlt={silverfishData.imageAlt}
				layout='imageLeft'
			/>
		</>
	)
}
