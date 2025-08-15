import { Hero } from '@/components/shared/hero'
import { DetailedFeatureGrid } from '@/components/residential/a-start-plus/detialed-feature-grid'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'
import { CtaSection } from '@/components/shared/cta'
import { ContactSection } from '@/components/residential/home-service/contact'

import { Button } from '@/components/ui/button'
import { contactData } from '@/lib/data/residential/homer-sevice'
import { whyChooseUsDetailedData } from '@/lib/data/residential/why-choose-us'
import { redCtaData } from '@/lib/data/shared/cta'

export default function AStarPlusDifferentPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={<>The A Star Plus Difference</>}
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

			{/* WHY CHOOSE US */}
			<DetailedFeatureGrid
				tagline={whyChooseUsDetailedData.tagline}
				title={whyChooseUsDetailedData.title}
				description={whyChooseUsDetailedData.description}
				features={whyChooseUsDetailedData.features}
			/>

			{/* Testimonial */}
			<Testimonials />

			{/* Faq */}
			<Faq />

			{/*CTA: Ready to Experience the A Star Plus Difference? */}			

			{/* Render the RED version */}
      		<CtaSection {...redCtaData} />

			{/* Contact us */}
			<ContactSection
				tagline={contactData.tagline}
				title={contactData.title}
				description={contactData.description}
				contactDetails={contactData.contactDetails}
			/>
		</>
	)
}
