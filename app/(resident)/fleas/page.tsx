import { Button } from '@/components/ui/button'
import { Hero } from '@/components/shared/hero'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ControlProcess } from '@/components/shared/control-process'

const signsOfFleasData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: 'Signs of a Flea Infestation',
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/fleas/pet-behavior-change.png',
			title: 'Pet Behavior Changes',
			description:
				'Pets constantly scratching or biting themselves, showing unusual restlessness or discomfort indoors',
		},
		{
			icon: '/assets/residential/icons/fleas/human-bites.png',
			title: 'Human Bites',
			description:
				'Small red, itchy bites around your ankles or legs that appear in clusters',
		},
		{
			icon: '/assets/residential/icons/fleas/visible-fleas.png',
			title: 'Visible Fleas',
			description:
				'Fleas visibly jumping on carpets, pet bedding, or furniture surfaces',
		},
		{
			icon: '/assets/residential/icons/fleas/flea-dirt.png',
			title: 'Flea Dirt',
			description:
				'Black specks (flea dirt) found in pet fur or on fabric that turns red-brown when wet',
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

const fleaControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our Flea Treatment Process',
	imageUrl: '/assets/residential/images/pets-control-process-fleas.png',
	imageAlt: 'A close-up of a flea on human skin.',
	steps: [
		{
			title: 'Inspection',
			description:
				'We inspect your home, furniture, pet zones, and outdoor spaces to determine the scale of infestation.',
		},
		{
			title: 'Pet-Safe Indoor Treatment',
			description:
				'We apply low-odor, family- and pet-safe treatments to carpets, furniture, and floor crevices to kill adult fleas and larvae.',
		},
		{
			title: 'Outdoor Barrier Control',
			description:
				'We treat shady, moist areas in your yard where fleas thrive — like under decks, pet houses, and flower beds',
		},
		{
			title: 'Lifecycle Disruption',
			description:
				'Follow-up visits ensure we eliminate eggs and break the flea cycle completely.',
		},
	],
}

const whyChooseStarPlusPestControlData = {
	tagline: 'WHY US',
	title: 'Why Choose A Star Plus Pest Control?',
	items: [
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Discreet Service',
			description: 'Local Experts',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Safe Products',
			description: 'Safe for Pets & Kids',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Treatment Options',
			description: 'Fast Relief',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'A Bright Future',
			description: 'Eco-Conscious',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '100% Guarantee',
			description: 'Satisfaction Guaranteed',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}
export default function FleasPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={
					<>Say Goodbye to Fleas, Fast, Safe & Pet-Friendly Flea Control</>
				}
				description='Fleas don’t just bother pets , they bite humans, spread fast, and invade your entire home. At A Star Plus Pest Control, we offer powerful, family-safe solutions to eliminate fleas from your home, yard, and pet zones for good.'
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
				tagline={signsOfFleasData.tagline}
				title={signsOfFleasData.title}
				description={signsOfFleasData.description}
				items={signsOfFleasData.items}
				variant='circularIcon' // Explicitly set or omit to use default
			/>

			{/* control processes */}
			<ControlProcess
				tagline={fleaControlProcessData.tagline}
				title={fleaControlProcessData.title}
				imageUrl={fleaControlProcessData.imageUrl}
				imageAlt={fleaControlProcessData.imageAlt}
				steps={fleaControlProcessData.steps}
			/>

			{/* Why: RENDER THE SECOND VARIANT  */}			
			<FeatureGrid
				tagline={whyChooseStarPlusPestControlData.tagline}
				title={whyChooseStarPlusPestControlData.title}
				items={whyChooseStarPlusPestControlData.items}
				variant='card'
				cta={whyChooseStarPlusPestControlData.cta}
			/>
		</>
	)
}
