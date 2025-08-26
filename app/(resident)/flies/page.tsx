import { Button } from '@/components/ui/button'
import { Hero } from '@/components/shared/hero'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ControlProcess } from '@/components/shared/control-process'
import { HeroData } from '@/types/residential/hero';
import { HeroSection } from '@/components/shared/OtherHero';

const bedBugHeroData: HeroData = {
  title: (
	<>
	  Buzz Off, Flies
	</>
  ),
  description: 'Professional Fly Control for Homes & Businesses. Flies are more than a nuisance — they spread harmful bacteria and can quickly multiply indoors. At A Star Plus Pest Control, we eliminate fly infestations at the source and help prevent them from coming back.',
  backgroundImage: '/assets/residential/images/hero-image-flies.jpg', 
  overlay: 'bg-black/40', 
};

const signsOfFliesData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: 'Signs of a Fly Infestation',
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/flies/frequently-fly-activity.png',
			title: 'Frequent Fly Activity',
			description:
				'Flies constantly buzzing around windows, trash cans, or drains throughout your space',
		},
		{
			icon: '/assets/residential/icons/flies/fly-droppings.png',
			title: 'Fly Droppings',
			description:
				'Small black specks (droppings) appearing on walls, surfaces, or near food preparation areas',
		},
		{
			icon: '/assets/residential/icons/flies/unpleasant-odours.png',
			title: 'Unpleasant Odours',
			description:
				'Foul smells coming from drains, waste bins, or areas where organic matter accumulates',
		},
		{
			icon: '/assets/residential/icons/flies/buzzing-sounds.png',
			title: 'Buzzing Sounds',
			description:
				'Persistent buzzing sounds, especially in kitchens, dining areas, or near light fixtures',
		},
		{
			icon: '/assets/residential/icons/flies/larvae-maggots.png',
			title: 'Larvae & Maggots',
			description:
				'Discovering maggots or larvae in garbage areas, compost bins, or other moist locations',
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

const flyControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our Fly Treatment Process',
	imageUrl: '/assets/residential/images/pets-control-process-flies.png',
	imageAlt: 'A close-up of a house fly on a white surface.',
	steps: [
		{
			title: 'Detailed Inspection',
			description:
				'We identify fly species, breeding sites (like drains, food waste, or compost), and entry points into your space.',
		},
		{
			title: 'Targeted Elimination',
			description:
				'We use fly-safe baits, traps, and residual sprays in problem areas — kitchens, trash zones, entryways, and more.',
		},
		{
			title: 'Breeding Site Control',
			description:
				'Drain cleaning treatments and organic matter removal to stop the fly lifecycle at its source.',
		},
		{
			title: 'Ongoing Prevention',
			description:
				'We advise on sanitation, sealing, and use discreet fly control systems for long-term protection (especially for restaurants, stores, and food areas).',
		},
	],
}

const whyChooseStarPlusFlyControlData = {
	tagline: 'WHY US',
	title: 'Why Choose A Star Plus Pest Control?',
	items: [
		{
			icon: '/assets/shared/icons/check-circle.png',
			title: 'Discreet Service',
			description: 'Indoor & Outdoor Experts',
		},
		{
			icon: '/assets/shared/icons/check-circle.png',
			title: 'Safe Products',
			description: 'Safe, Non-Toxic Methods',
		},
		{
			icon: '/assets/shared/icons/check-circle.png',
			title: 'Treatment Options',
			description: 'Fast Relief, No Disruption',
		},
		{
			icon: '/assets/shared/icons/check-circle.png',
			title: 'A Bright Future',
			description: 'Licensed Local Technicians',
		},
		{
			icon: '/assets/shared/icons/check-circle.png',
			title: '100% Guarantee',
			description: 'Trusted Across Texas',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

export default function FliesPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />					

			{/* signs */}
			<FeatureGrid
				tagline={signsOfFliesData.tagline}
				title={signsOfFliesData.title}
				description={signsOfFliesData.description}
				items={signsOfFliesData.items}
				variant='circularIcon' // Explicitly set or omit to use default
			/>

			{/* control processes */}
			<ControlProcess
				tagline={flyControlProcessData.tagline}
				title={flyControlProcessData.title}
				imageUrl={flyControlProcessData.imageUrl}
				imageAlt={flyControlProcessData.imageAlt}
				steps={flyControlProcessData.steps}
			/>

			{/* Why: RENDER THE SECOND VARIANT  */}
			{/* Todo adjust the card to display two cols and three  */}
			<FeatureGrid
				tagline={whyChooseStarPlusFlyControlData.tagline}
				title={whyChooseStarPlusFlyControlData.title}
				items={whyChooseStarPlusFlyControlData.items}
				variant='card' // Change the variant to get the other style
				cta={whyChooseStarPlusFlyControlData.cta} // Pass the CTA data
			/>
		</>
	)
}
