import { Documentation } from '@/components/commercial/commercial-service/a-star-plus-difference/documentation'
import { Guarantee } from '@/components/commercial/commercial-service/a-star-plus-difference/guarantee'
import { FeatureSection } from '@/components/commercial/commercial-service/a-star-plus-difference/feature-section'
import { Specialist } from '@/components/commercial/commercial-service/a-star-plus-difference/specialist'
import { Contact } from '@/components/shared/contact'
import { Faq } from '@/components/shared/faq'
import { documentationAndTrainingData, nationalAccountsData, qaProgramData, specialistsData, tripleGuaranteeData } from '@/lib/data/com/a-star-plus-difference'
import { contactData } from '@/lib/data/shared/contact'
import { HeroSection } from '@/components/shared/hero-section'
import { HeroProps } from '@/types/share/hero'
import { faqDataAStartPlus } from '@/lib/data/shared/faq'

const commercialHeroData: HeroProps = {
  title: (
    <>
      We Don&apos;t Just Control Pests, We Raise the Bar for Business Protection
    </>
  ),
  description: 'Elevate pest control into a strategic asset for your business with our rigorous standards, smart tools, and highly trained team.',
  backgroundImage: '/assets/com/images/commercial-service-hero.jpg', 
  overlay: 'bg-black/60', // A slightly darker overlay
  action: ['Schedule Inspection', '(233) 123-456-7890'],
};

export default function ASartPlusDifferencePage() {
	return (
		<>
            {/* Hero - reusable */}
            <HeroSection {...commercialHeroData} />

			{/* our difference */}

            {/* our promise */}
            <Guarantee data={tripleGuaranteeData} />

            {/* our assurance */}
            {/* EXAMPLE 1: Default layout with image on the RIGHT */}
            <FeatureSection data={qaProgramData} />

            {/* our team */}
            <Specialist data={specialistsData} />

            {/* national service */}
            {/* EXAMPLE 2: Flipped layout with image on the LEFT */}
            <FeatureSection data={nationalAccountsData} imagePosition="left" />

			{/* documentation */}
            <Documentation data={documentationAndTrainingData} />

			{/* faq */}
			<Faq page="commercial" title={<>Commercial Pest <br /> Control FAQ</>} faqItems={faqDataAStartPlus} />

			{/* contact  */}
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
