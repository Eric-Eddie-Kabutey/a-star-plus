import { Button } from '@/components/ui/button'

import { Hero } from '@/components/shared/hero'
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

export default function HomeServicePage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={<>Complete Home Protection Solutions</>}
				description="More than pest control, we safeguard your home's comfort, efficiency, and structural integrity."
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
