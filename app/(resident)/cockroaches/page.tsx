import { Hero } from '@/components/shared/hero'
import { InfoSection } from '@/components/shared/why'
import { CommonPestsSection } from '@/components/residential/ants/common-ant-species'
import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'

import { Button } from '@/components/ui/button'

import {
	cockroachData,
	cockroachSpeciesData,
} from '@/lib/data/residential/cockroaches'
import { HeroData } from '@/types/residential/hero'
import { HeroSection } from '@/components/shared/OtherHero'

const bedBugHeroData: HeroData = {
  title: (
	<>
	  Seeing Cockroaches? Let&apos;s Stop the Infestation, Fast.
	</>
  ),
  description: 'We eliminate cockroaches at the source with safe, professional-grade treatments that work and keep them from coming back.',
  backgroundImage: '/assets/residential/images/hero-image-flies.jpg', 
  overlay: 'bg-black/40', 
};

const signsOfRoachesData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: (
		<>
			Think You Have Roaches? Look for
			<br />
			These Signs
		</>
	),
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/cockroach/search-icon.png',
			title: 'Droppings resembling',
			description: 'Droppings resembling black pepper or coffee grounds',
		},
		{
			icon: '/assets/residential/icons/cockroach/search-icon.png',
			title: 'Odour',
			description: 'Musty, oily odour in closed spaces',
		},
		{
			icon: '/assets/residential/icons/cockroach/search-icon.png',
			title: 'Egg cases (oothecae)',
			description: 'Egg cases (oothecae) in corners or behind furniture',
		},
		{
			icon: '/assets/residential/icons/cockroach/search-icon.png',
			title: 'Live or dead roaches',
			description: 'Live or dead roaches at night or when lights are turned on',
		},
		{
			icon: '/assets/residential/icons/cockroach/search-icon.png',
			title: 'Shed skins',
			description: 'Shed skins and parts near cracks and baseboards',
		},
	],
}

const roachControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our Proven Roach Elimination Strategy',
	imageUrl: '/assets/residential/images/pet-control-process-cockroach.png',
	imageAlt: 'A hand holding several large hissing cockroaches.',
	steps: [
		{
			title: 'Inspection',
			description: 'Locate hiding spots, moisture sources, and breeding areas.',
		},
		{
			title: 'Species ID',
			description: 'Determine exact species and extent of infestation.',
		},
		{
			title: 'Targeted Application',
			description:
				'Apply gel baits, dusts, and insect growth regulators (IGRs) in cracks, voids, and entry points.',
		},
		{
			title: 'Sanitation Advice',
			description: 'We help you identify and eliminate roach attractants.',
		},
		{
			title: 'Follow-Up & Monitoring',
			description:
				'Optional monthly or quarterly plans to keep your home protected year-round.',
		},
	],
}

const roachControlExpertsData = {
	tagline: 'WHY US',
	title: "We're Your Roach Control Experts, Right Here in Texas",
	items: [
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Discreet Service',
			description: 'Same-day service for emergencies',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Safe Products',
			description: 'Child and pet-safe treatments',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Treatment Options',
			description: 'Affordable pricing and no hidden fees',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '100% Reliable',
			description: 'Trusted by homeowners, restaurants, and property managers',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Free Packages',
			description: 'Free follow-up on certain plans',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '100% Skilled Professionals',
			description: 'Local knowledge of roach habits and hotspots',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

const roachPreventionTipsData = {
	tagline: 'TIPS',
	title: "Keep Roaches Out, Here's How",
	items: [
		{
			icon: '/assets/residential/icons/light-bulb.png',
			title: 'Proper Storage',
			description: 'Store food in airtight containers',
		},
		{
			icon: '/assets/residential/icons/light-bulb.png',
			title: 'Regular Cleaning',
			description: 'Take out garbage daily and clean trash bins',
		},
		{
			icon: '/assets/residential/icons/light-bulb.png',
			title: 'Fix Cracks',
			description: 'Seal cracks and crevices in walls and baseboards',
		},
		{
			icon: '/assets/residential/icons/light-bulb.png',
			title: 'Fix Leaks',
			description: 'Fix plumbing leaks and wipe up moisture',
		},
		{
			icon: '/assets/residential/icons/light-bulb.png',
			title: 'Appliances Cleaning',
			description: 'Clean under appliances and around stoves',
		},
		{
			icon: '/assets/residential/icons/light-bulb.png',
			title: 'Storage Distance',
			description: "Don't leave pet food out overnight",
		},
	],
	cta: {
		text: 'Download Our Roach-Proofing Checklist PDF',
		href: '/roach-proofing-checklist.pdf',
	},
}

export default function CockroachesPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}			
			<HeroSection {...bedBugHeroData} />

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={cockroachData.tagline}
				title={cockroachData.title}
				description={cockroachData.description}
				quickFacts={cockroachData.quickFacts}
				imageUrl={cockroachData.imageUrl}
				imageAlt={cockroachData.imageAlt}
				layout='imageLeft'
			/>

			{/* known your enemies */}
			<CommonPestsSection
				tagline='KNOW YOUR ENEMY'
				title={
					<>
						Know the Beetles You&apos;re Up <br className='hidden sm:block' />
						Against
					</>
				}
				pests={cockroachSpeciesData}
			/>

			{/* sign */}
			<FeatureGrid
				tagline={signsOfRoachesData.tagline}
				title={signsOfRoachesData.title}
				description={signsOfRoachesData.description}
				items={signsOfRoachesData.items}
				variant='circularIcon'
			/>

			{/* process control */}
			<ControlProcess
				tagline={roachControlProcessData.tagline}
				title={roachControlProcessData.title}
				imageUrl={roachControlProcessData.imageUrl}
				imageAlt={roachControlProcessData.imageAlt}
				steps={roachControlProcessData.steps}
			/>

			{/* why us:  */}
			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={roachControlExpertsData.tagline}
				title={roachControlExpertsData.title}
				items={roachControlExpertsData.items}
				variant='card' 
				cta={roachControlExpertsData.cta} 
			/>

			{/* Testimonial */}
			<Testimonials />

			{/*  */}
			<FeatureGrid
				tagline={roachPreventionTipsData.tagline}
				title={roachPreventionTipsData.title}
				items={roachPreventionTipsData.items}
				variant='card' 
				cta={roachPreventionTipsData.cta} 
			/>
			{/* Faq */}
			<Faq />
		</>
	)
}
