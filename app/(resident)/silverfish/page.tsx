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
