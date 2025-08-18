import { HeroSection } from '@/components/shared/OtherHero'
import { InfoSection } from '@/components/shared/why'
import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ComparisonTable } from '@/components/residential/centipedes/comparison-table'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'

import {
	antVsTermiteData,
	carpenterAntData,
} from '@/lib/data/residential/carpenter-ants'
import { HeroData } from '@/types/residential/hero'
import { carpenterAntFaqData } from '@/lib/data/shared/faq'

const bedBugHeroData: HeroData = {
  title: (
	<>
	  Think You Have Carpenter Ants? Act Before They Wreck Your Woodwork.
	</>
  ),
  description: 'We find, treat, and eliminate carpenter ants before they destroy your property — without compromising your safety or comfort.',
  backgroundImage: '/assets/residential/images/hero-image-flies.jpg', 
  overlay: 'bg-black/40', 
};

const signsOfCarpenterAntsData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: (
		<>
			6 Signs You Might Have Carpenter
			<br />
			Ants
		</>
	),
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/carpenter-ants/frass.png',
			title: 'Frass (Sawdust)',
			description: 'Sawdust-like shavings near wooden structures',
		},
		{
			icon: '/assets/icons/carpenter-ants/unusual-sounds.png',
			title: 'Unusual Sounds',
			description: 'Rustling or tapping noises from inside walls',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/winged-ants.png',
			title: 'Winged Ants',
			description: 'Swarmers appearing in spring or early summer',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/soft-wood.png',
			title: 'Soft Wood',
			description: 'Hollow-sounding or soft wood when tapped',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/discarded-wings.png',
			title: 'Discarded Wings',
			description: 'Wings near windows or baseboards',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/ant-trails.png',
			title: 'Ant Trails',
			description: 'Trails around moisture-damaged wood or trees',
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

const carpenterAntControlProcessData: ControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our 5-Step Strategy for Eliminating Carpenter Ants',
	imageUrl: '/assets/residential/images/control-process-carpenter-ants.png',
	imageAlt: 'A group of carpenter ants inside a nest in wood.',
	steps: [
		{
			title: 'Inspection & Detection',
			description:
				'Locate main and satellite nests, track trails, and assess damage',
		},
		{
			title: 'Species Confirmation',
			description:
				'Confirm it’s carpenter ants and not termites or another species',
		},
		{
			title: 'Targeted Application',
			description:
				'Apply non-repellent insecticides, baiting systems, and perimeter barriers',
		},
		{
			title: 'Nest Destruction',
			description:
				'Penetrate wall voids and wood to destroy active nesting sites',
		},
		{
			title: 'Ongoing Protection',
			description: 'Optional quarterly service plans to prevent reinfestation',
		},
	],
}

const carpenterAntRemovalData = {
	tagline: 'WHY US',
	title: "Texas's Trusted Choice for Carpenter Ant Removal",
	items: [
		{
			icon: '/assets/residential/icons/carpenter-ants/fast-service.png',
			title: 'Fast Service',
			description: 'Same-day inspections and treatment',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/advanced-detection.png',
			title: 'Advanced Detection',
			description: 'Tools to find hidden nests',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/safe-solutions.png',
			title: 'Safe Solutions',
			description: 'Child-safe and pet-friendly treatments',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/local-experts.png',
			title: 'Local Experts',
			description: 'Understanding Texas pest behavior',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/transparent-pricing.png',
			title: 'Transparent Pricing',
			description: 'No surprise fees',
		},
		{
			icon: '/assets/residential/icons/carpenter-ants/guaranteed-results.png',
			title: 'Guaranteed Results',
			description: 'Follow-up options available',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

export default function CarpenterAntsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />			

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={carpenterAntData.tagline}
				title={carpenterAntData.title}
				description={carpenterAntData.description}
				quickFacts={carpenterAntData.quickFacts}
				imageUrl={carpenterAntData.imageUrl}
				imageAlt={carpenterAntData.imageAlt}
			/>

			{/* signs */}
			<FeatureGrid
				tagline={signsOfCarpenterAntsData.tagline}
				title={signsOfCarpenterAntsData.title}
				description={signsOfCarpenterAntsData.description}
				items={signsOfCarpenterAntsData.items}
				variant='circularIcon'
			/>

			{/* control processes */}
			<ControlProcess
				tagline={carpenterAntControlProcessData.tagline}
				title={carpenterAntControlProcessData.title}
				imageUrl={carpenterAntControlProcessData.imageUrl}
				imageAlt={carpenterAntControlProcessData.imageAlt}
				steps={carpenterAntControlProcessData.steps}
			/>

			{/* comparison table */}
			<ComparisonTable
				tagline={antVsTermiteData.tagline}
				title={antVsTermiteData.title}
				itemAName={antVsTermiteData.itemAName}
				itemBName={antVsTermiteData.itemBName}
				data={antVsTermiteData.data}
			/>

			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={carpenterAntRemovalData.tagline}
				title={carpenterAntRemovalData.title}
				items={carpenterAntRemovalData.items}
				variant='card'
				cta={carpenterAntRemovalData.cta}
			/>

			{/* testimonials */}
			<Testimonials />

			{/* Faq */}
			<Faq title={<>FAQs About<br /> Carpenter Ant <br />Control </>} faqItems={carpenterAntFaqData} />
		</>
	)
}
