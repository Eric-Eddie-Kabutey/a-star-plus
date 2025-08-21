import { TrustFeatures } from '@/components/commercial/industries/trust-features'
import { CoreServices } from '@/components/commercial/pest-control-service/core-services'
import { InfoSection } from '@/components/commercial/pest-control-service/info-section'
import { Contact } from '@/components/shared/contact'
import { HeroSection } from '@/components/shared/hero-section'
import { Testimonials } from '@/components/shared/testimonials'

import {
	commercialTermiteData,
	coreServicesData,
} from '@/lib/data/com/pest-control-service'
import { contactData } from '@/lib/data/shared/contact'
import { TrustFeaturesData } from '@/types/com/service'
import { HeroProps } from '@/types/share/hero'


// --- Define the data for the hero section ---
const commercialHeroData: HeroProps = {
  title: (
	<>
	  Protecting Your Business, Inside and Out
	</>
  ),
  description: 'At A Star Plus, we offer specialized, industry-compliant pest control solutions to ensure your commercial spaces stay safe, sanitary, and pest-free.',
  backgroundImage: '/assets/com/images/pest-control-service-hero.jpg', 
  overlay: 'bg-black/50', // A slightly darker overlay
  action: ['Schedule Inspection', '(233) 123-456-7890'],
};

// why us 
const whyChooseUsCommercialData: TrustFeaturesData = {
  tagline: 'WHY US',
  title: 'Why Choose A Star Plus?',
  description: 'Industry-leading expertise with a commitment to safety and results',
  features: [
    {
      icon: "/assets/shared/icons/expert-technicians.png",
      title: 'Expert Technicians',
      description: 'Our team undergoes rigorous training and certification to handle all commercial pest scenarios with precision.',
    },
    {
      icon: "/assets/shared/icons/industry-compliance.png",
      title: 'Industry Compliance',
      description: 'We meet all regulatory requirements for food service, healthcare, hospitality, and other sensitive industries.',
    },
    {
      icon: "/assets/shared/icons/guaranteed-results.png",
      title: 'Guaranteed Results',
      description: 'We stand behind our work with satisfaction guarantees and follow-up services to ensure long-term protection.',
    },
  ],
};

export default function PetControlsPage() {
	return (
		<>
			{/* hero */}
			<HeroSection {...commercialHeroData} />

			{/* OUR SERVICES Explore Our Core Services */}
			<CoreServices
				tagline={coreServicesData.tagline}
				title={coreServicesData.title}
				description={coreServicesData.description}
				services={coreServicesData.services}
			/>

			{/* Commercial-Grade Termite Defence */}
			<InfoSection
				tagline={commercialTermiteData.tagline}
				title={commercialTermiteData.title}
				description={commercialTermiteData.description}
				features={commercialTermiteData.features} 
				imageUrl={commercialTermiteData.imageUrl}
				imageAlt={commercialTermiteData.imageAlt}
				cta={commercialTermiteData.cta} 
				layout='imageRight'
				id="termite-control"
			/>

      {/* WHY US Why Choose A Star Plus? */}
      <TrustFeatures
              tagline={whyChooseUsCommercialData.tagline}
              title={whyChooseUsCommercialData.title}
              description={whyChooseUsCommercialData.description}
              features={whyChooseUsCommercialData.features}
              />

			{/* Testimonial */}
			<Testimonials />

			{/* contact */}
			{/* Render the BLUE version on another page or section */}
			{/* Render the BLUE version on another page or section */}
			<Contact
				tagline={contactData.tagline}
				title={contactData.title}
				description={contactData.description}
				contactDetails={contactData.contactDetails}
				variant='blue'
			/>			
		</>
	)
}
