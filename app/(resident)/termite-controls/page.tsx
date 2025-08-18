import { Hero } from '@/components/shared/hero'
import { Button } from '@/components/ui/button'
import { FeatureGridBanner } from '@/components/shared/feature-grid-banner'
import {
	FeatureGridData,
	flyingAntsVsTermitesData,
	termiteInvestmentData,
	termiteSpeciesData,
	termiteSwarmAlertData,
	termiteTreatmentData,
	termiteWarningSignsData,
} from '@/lib/data/residential/termite-control'
import { ComparisonTable } from '@/components/residential/centipedes/comparison-table'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { CommonPestsSection } from '@/components/residential/ants/common-ant-species'
import { NumberedSteps } from '@/components/residential/termite/number-of-steps'
import { HeroData } from '@/types/residential/hero'
import { HeroSection } from '@/components/shared/OtherHero'

const bedBugHeroData: HeroData = {
	title: <>Stop the Silent Damage Before It Starts</>,
	description: 'Termites cause more damage to homes annually than storms and fires combined — and most of the time, it happens without you even noticing. At A Star Plus Pest Control, we specialize in detection, elimination, and prevention of all termite species.',
	backgroundImage: '/assets/residential/images/hero-image-flies.jpg',
	overlay: 'bg-black/40',
}

const termitePreventionTipsData: FeatureGridData = {
	tagline: 'PREVENTION TIPS',
	title: (
		<>
			You can help protect your home by following
			<br />
			these proven tips:
		</>
	),
	items: [
		{
			icon: '/assets/residential/icons/moisture.png',
			title: 'Moisture Control',
			description:
				'Eliminate moisture near the foundation and fix leaking pipes, roofs, and gutters.',
		},
		{
			icon: '/assets/residential/icons/wood.png',
			title: 'Distance Management',
			description: 'Keep firewood and mulch away from your home.',
		},
		{
			icon: '/assets/residential/icons/house.png',
			title: 'Foundation Care',
			description: 'Seal cracks in your foundation and ensure proper drainage.',
		},
		{
			icon: '/assets/residential/icons/search.png',
			title: 'Regular Inspections',
			description: 'Schedule annual termite inspections with professionals.',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

export default function TermiteControlsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />			

			<FeatureGridBanner
				tagline={termiteTreatmentData.tagline}
				title={termiteTreatmentData.title}
				description={termiteTreatmentData.description}
				items={termiteTreatmentData.items}
				bottomNote={termiteTreatmentData.bottomNote}
			/>

			{/* termiteWarningSignsData */}
			<FeatureGridBanner
				tagline={termiteWarningSignsData.tagline}
				title={termiteWarningSignsData.title}
				description={termiteWarningSignsData.description}
				items={termiteWarningSignsData.items}
				bottomNote={termiteWarningSignsData.bottomNote}
				variant='card'
			/>

			<ComparisonTable
				tagline={flyingAntsVsTermitesData.tagline}
				title={flyingAntsVsTermitesData.title}
				description={flyingAntsVsTermitesData.description}
				itemAName={flyingAntsVsTermitesData.itemAName}
				itemBName={flyingAntsVsTermitesData.itemBName}
				data={flyingAntsVsTermitesData.data}
				bottomNote={flyingAntsVsTermitesData.bottomNote}
			/>

			<FeatureGrid
				tagline={termitePreventionTipsData.tagline}
				title={termitePreventionTipsData.title}
				items={termitePreventionTipsData.items}
				cta={termitePreventionTipsData.cta}
				variant='card' // Use the 'card' variant
			/>

			<CommonPestsSection
				tagline={termiteSpeciesData.tagline}
				title={termiteSpeciesData.title}
				pests={termiteSpeciesData.pests}
			/>

			<FeatureGrid
				tagline={termiteSwarmAlertData.tagline}
				title={termiteSwarmAlertData.title}
				description={termiteSwarmAlertData.description}
				items={termiteSwarmAlertData.items}
			/>

			<NumberedSteps
				tagline={termiteInvestmentData.tagline}
				title={termiteInvestmentData.title}
				description={termiteInvestmentData.description}
				steps={termiteInvestmentData.steps}
			/>
		</>
	)
}
