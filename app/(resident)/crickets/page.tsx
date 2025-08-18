import { Hero } from '@/components/shared/hero'
import { InfoSection } from '@/components/shared/why'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ControlProcess } from '@/components/shared/control-process'
import { CommonPestsSection } from '@/components/residential/ants/common-ant-species'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'

import { cricketInfoData } from '@/lib/data/residential/crickets'
import { HeroData } from '@/types/residential/hero'
import { HeroSection } from '@/components/shared/OtherHero'

const bedBugHeroData: HeroData = {
  title: (
	<>
	  Constant Chirping? Crickets Might Be Invading Your Home.
	</>
  ),
  description: 'Our expert team identifies, controls, and eliminates cricket infestations — fast, safe, and guaranteed in homes and businesses across Texas.',
  backgroundImage: '/assets/residential/images/hero-image-cricket.jpg', 
  overlay: 'bg-black/40', 
};

const signsOfCricketsData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: (
		<>
			Spot the Signs Before They
			<br />
			Multiply
		</>
	),
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/residential/residential/icons/crickets/persistent-chirping.png',
			title: 'Persistent Chirping',
			description:
				'Continuous chirping sounds at night, especially from basements, garages, or dark corners',
		},
		{
			icon: '/assets/residential/residential/residential/icons/crickets/live-cricket-sightings.png',
			title: 'Live Cricket Sightings',
			description:
				'Crickets seen around lights, in basements, garages, or other warm indoor areas',
		},
		{
			icon: '/assets/residential/residential/residential/icons/crickets/fabric-damage.png',
			title: 'Fabric Damage',
			description:
				'Holes or damage in furniture, clothes, drapes, or other fabric materials',
		},
		{
			icon: '/assets/residential/residential/residential/icons/crickets/fecal-pellets.png',
			title: 'Fecal Pellets',
			description:
				'Small droppings found around baseboards, in dark corners, or near cricket hiding spots',
		},
		{
			icon: '/assets/residential/residential/residential/icons/crickets/egg-deposits.png',
			title: 'Egg Deposits',
			description:
				'Eggs laid in damp or protected indoor areas, indicating breeding activity',
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

const cricketControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our Proven 4-Step Cricket Control Process',
	imageUrl: '/assets/residential/images/pets-control-process-cricket.png',
	imageAlt: 'A brown cricket perched on top of a dry twig.',
	steps: [
		{
			title: 'Thorough Inspection',
			description:
				'Identify cricket species and hotspots both inside and outside the structure.',
		},
		{
			title: 'Customized Treatment Plan',
			description:
				'Based on location and severity, we use targeted residual sprays, baits, and exclusion techniques.',
		},
		{
			title: 'Entry Point Sealing',
			description:
				'We help seal off common cricket entry points like vents, weep holes, and door thresholds.',
		},
		{
			title: 'Follow-Up Monitoring',
			description:
				'Optional service plans to keep crickets from returning seasonally.',
		},
	],
}

// Todo types
const cricketSpeciesData = {
	tagline: 'KNOW YOUR ENEMY',
	title: (
		<>
			We Handle All Cricket
			<br />
			Types Found in Texas
		</>
	),
	pests: [
		{
			name: 'House Crickets',
			description:
				'Yellowish-brown, chirp often, attracted to warmth and light. Most common indoor cricket species.',
			imageUrl: '/assets/residential/images/house-crickets.png',
		},
		{
			name: 'Field Crickets',
			description:
				'Black or dark brown, typically enter homes during seasonal changes. Very loud chirpers.',
			imageUrl: '/assets/residential/images/field-crickets.png',
		},
		{
			name: 'Cave Crickets',
			description:
				'Wingless, humpbacked, found in cool damp places like crawlspaces. Silent but damaging.',
			imageUrl: '/assets/residential/images/cave-crickets.png',
		},
		{
			name: 'Mole Crickets',
			description:
				'Rare indoors but can cause lawn damage in gardens and yards. Destructive to turf.',
			imageUrl: '/assets/residential/images/mole-crickets.png',
		},
	],
}

// Todo types
const cricketFreeLivingData = {
	tagline: 'WHY US',
	title: 'Cricket-Free Living Starts Here',
	items: [
		{
			icon: '/assets/residential/icons/crickets/same-day-inspection.png',
			title: 'Same-Day Inspections',
			description: 'Available when you need us most',
		},
		{
			icon: '/assets/residential/icons/crickets/child-safe-eco-friendly.png',
			title: 'Child-Safe & Eco-Friendly',
			description: 'Products safe for your family and pets',
		},
		{
			icon: '/assets/residential/icons/crickets/texas-based-licensed-technicians.png',
			title: 'Texas-Based Licensed Technicians',
			description: 'Local experts who know Texas pests',
		},
		{
			icon: '/assets/residential/icons/crickets/affordable-plans.png',
			title: 'Affordable Plans',
			description: 'One-time or seasonal treatment options',
		},
		{
			icon: '/assets/residential/icons/crickets/guarantee-satisfaction.png',
			title: 'Guaranteed Satisfaction',
			description: 'Follow-up options included',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

export default function CricketsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />			

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={cricketInfoData.tagline}
				title={cricketInfoData.title}
				description={cricketInfoData.description}
				quickFacts={cricketInfoData.quickFacts}
				imageUrl={cricketInfoData.imageUrl}
				imageAlt={cricketInfoData.imageAlt}
				layout='imageLeft'
			/>

			{/* signs */}
			<FeatureGrid
				tagline={signsOfCricketsData.tagline}
				title={signsOfCricketsData.title}
				description={signsOfCricketsData.description}
				items={signsOfCricketsData.items}
				variant='circularIcon' 
			/>

			{/* control processes */}
			<ControlProcess
				tagline={cricketControlProcessData.tagline}
				title={cricketControlProcessData.title}
				imageUrl={cricketControlProcessData.imageUrl}
				imageAlt={cricketControlProcessData.imageAlt}
				steps={cricketControlProcessData.steps}
			/>

			{/* known your enemies */}
			<CommonPestsSection
				tagline='KNOW YOUR ENEMY'
				title={
					<>
						We Handle All Cricket
						<br className='hidden sm:block' />
						Types Found in Texas
					</>
				}
				pests={cricketSpeciesData.pests}
			/>

			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={cricketFreeLivingData.tagline}
				title={cricketFreeLivingData.title}
				items={cricketFreeLivingData.items}
				variant='card' 
				cta={cricketFreeLivingData.cta}
			/>

			{/* testimonials */}
			<Testimonials />

			{/* Faq */}
			<Faq />
		</>
	)
}
