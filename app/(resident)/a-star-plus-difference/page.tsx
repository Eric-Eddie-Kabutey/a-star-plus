import { HeroSection } from '@/components/shared/OtherHero'
import { DetailedFeatureGrid } from '@/components/residential/a-start-plus/detialed-feature-grid'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'
import { CtaSection } from '@/components/shared/cta'
import { ContactSection } from '@/components/residential/home-service/contact'
import { contactData } from '@/lib/data/residential/homer-sevice'
import { whyChooseUsDetailedData } from '@/lib/data/residential/why-choose-us'
import { redCtaData } from '@/lib/data/shared/cta'
import { HeroData } from '@/types/residential/hero'

const bedBugHeroData: HeroData = {
	title: <>The A Star Plus Difference</>,
	description: "More Than Pest Control. We're Your Trusted Protection Partner.",
	backgroundImage: '/assets/residential/images/hero-image-flies.jpg',
	overlay: 'bg-black/40',
}

export default function AStarPlusDifferentPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />				

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
