import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { Hero } from '@/components/shared/hero'
import { Button } from '@/components/ui/button'

const signsOfMitesData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: 'Signs of a Mite Infestation',
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/mites/nightime-itching.png',
			title: 'Nighttime Itching',
			description:
				'Unexplained itching or skin rashes that worsen at night, especially when in bed or on furniture',
		},
		{
			icon: '/assets/residential/icons/mites/skin-irritation.png',
			title: 'Skin Irritation',
			description:
				'Red bumps or bite-like marks appearing on skin, particularly in areas that contact bedding or upholstery',
		},
		{
			icon: '/assets/residential/icons/mites/respiratory-issues.png',
			title: 'Respiratory Issues',
			description:
				'Increased allergies, sneezing, or breathing difficulties that seem worse indoors',
		},
		{
			icon: '/assets/residential/icons/mites/dust-build-up.png',
			title: 'Dust Buildup',
			description:
				'Excessive dust accumulation and fabric irritation throughout your living or working space',
		},
		{
			icon: '/assets/residential/icons/mites/microscopic-evidence.png',
			title: 'Microscopic Evidence',
			description:
				'Tiny moving specks visible under magnification - mites are barely visible to the naked eye',
		},
	],
}

interface ControlProcessData {
	tagline: string
	title: string | React.ReactNode
	imageUrl: string
	imageAlt: string
	steps: {
		title: string
		description: string
	}[]
}

const miteControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our Mite Treatment Process',
	imageUrl: '/assets/residential/images/pets-control-process-mites.png',
	imageAlt: 'Multiple mites on a white background.',
	steps: [
		{
			title: 'Comprehensive Inspection',
			description:
				'We inspect bedding, carpets, upholstery, pet areas, and HVAC systems to detect mite hotspots.',
		},
		{
			title: 'Safe Indoor Treatment',
			description:
				'We apply hypoallergenic, low-toxicity treatments to kill mites in mattresses, sofas, rugs, and air systems.',
		},
		{
			title: 'Dust & Allergen Reduction',
			description:
				'Use of HEPA vacuums and mite-targeted cleaning agents to reduce mite habitat and allergen buildup.',
		},
		{
			title: 'Ongoing Defense',
			description:
				'We recommend prevention strategies like dehumidification, mattress covers, and scheduled treatments where necessary.',
		},
	],
}

const whyChooseStarPlusMiteControlData = {
	tagline: 'WHY US',
	title: 'Why Choose A Star Plus Pest Control?',
	items: [
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Discreet Service',
			description: 'Indoor & Outdoor Experts',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Safe Products',
			description: 'Safe, Non-Toxic Methods',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Treatment Options',
			description: 'Fast Relief, No Disruption',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'A Bright Future',
			description: 'Licensed Local Technicians',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '100% Guarantee',
			description: 'Trusted Across Texas and by Clinics',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

export default function MitesPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={<>Invisible Irritation? We Eliminate Mites at the Source</>}
				description='Mites are tiny but mighty pests that can cause skin irritation, allergies, and discomfort in homes and workplaces. A Star Plus Pest Control provides thorough, effective mite removal using safe, science-backed treatments.'
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

			{/* signs */}
			<FeatureGrid
				tagline={signsOfMitesData.tagline}
				title={signsOfMitesData.title}
				description={signsOfMitesData.description}
				items={signsOfMitesData.items}
				variant='circularIcon' // Explicitly set or omit to use default
			/>

			{/* control processes */}
			<ControlProcess
				tagline={miteControlProcessData.tagline}
				title={miteControlProcessData.title}
				imageUrl={miteControlProcessData.imageUrl}
				imageAlt={miteControlProcessData.imageAlt}
				steps={miteControlProcessData.steps}
			/>

			{/* Why: RENDER THE SECOND VARIANT  */}
			{/* Todo adjust the card to display two cols and three  */}
			<FeatureGrid
				tagline={whyChooseStarPlusMiteControlData.tagline}
				title={whyChooseStarPlusMiteControlData.title}
				items={whyChooseStarPlusMiteControlData.items}
				variant='card' // Change the variant to get the other style
				cta={whyChooseStarPlusMiteControlData.cta} // Pass the CTA data
			/>
		</>
	)
}
