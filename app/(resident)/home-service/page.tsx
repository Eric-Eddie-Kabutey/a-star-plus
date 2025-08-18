import { HeroSection } from '@/components/shared/OtherHero'
import { Overview } from '@/components/residential/home-service/overview'
import { InfoPackage } from '@/components/residential/home-service/info-package'
import { ComprehensiveServices } from '@/components/residential/home-service/comprehensive-service'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'

import { homeServiceWhyUsData } from '@/lib/data/residential/card-data'
import {
	comprehensiveServicesData,
	homeServiceOverviewData,
	newHomeownerPackageData,
} from '@/lib/data/residential/homer-sevice'
import { HeroData } from '@/types/residential/hero'

const bedBugHeroData: HeroData = {
	title: <>Complete Home Protection Solutions</>,
	description: "More than pest control, we safeguard your home's comfort, efficiency, and structural integrity.",
	backgroundImage: '/assets/residential/images/hero-image-flies.jpg',
	overlay: 'bg-black/40',
}

export default function HomeServicePage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />				

			<Overview
				tagline={homeServiceOverviewData.tagline}
				title={homeServiceOverviewData.title}
				description={homeServiceOverviewData.description}
			/>

			{/* Pets prevention */}
			<InfoPackage
				tagline={newHomeownerPackageData.tagline}
				title={newHomeownerPackageData.title}
				description={newHomeownerPackageData.description}
				listHeading={newHomeownerPackageData.listHeading}
				includedItems={newHomeownerPackageData.includedItems}
				bonusNote={newHomeownerPackageData.bonusNote}
			/>

			{/* our comprehensive services */}
			<ComprehensiveServices
				tagline={comprehensiveServicesData.tagline}
				title={comprehensiveServicesData.title}
				services={comprehensiveServicesData.services}
			/>

			{/* WHY US: card */}
			<FeatureGrid
				tagline={homeServiceWhyUsData.tagline}
				title={homeServiceWhyUsData.title}
				items={homeServiceWhyUsData.items}
				variant='card' // Explicitly set or omit to use default
			/>

			{/* Testimonial */}
			<Testimonials />
			<Faq />
		</>
	)
}
