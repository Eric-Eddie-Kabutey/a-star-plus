import { AboutUs } from '@/components/residential/home/about'
import { Faq } from '@/components/shared/faq'
import { Hero } from '@/components/residential/home/hero'
import { PestTypes } from '@/components/residential/home/pets-types'
import { Services } from '@/components/residential/home/service'
import { Testimonials } from '@/components/shared/testimonials'
import { WhyChooseUs } from '@/components/residential/home/why-choose-us'
import { faqItems } from '@/lib/data/shared/faq'

export default function Home() {
	return (
		<>
			{/* hero section */}
			<Hero />

			{/* our service section */}
			<Services />

			{/* pets list section */}
			<PestTypes />

			{/* about us section */}
			<AboutUs />

			{/* client's testimonials */}
			<Testimonials />

			{/* why choose us - happy customers */}
			<WhyChooseUs />

			{/* FAQ */}
			<Faq
				title={<>Everything You Need <br /> to Know</>}
				hint='All Questions'
				faqItems={faqItems}
			/>
		</>
	)
}
