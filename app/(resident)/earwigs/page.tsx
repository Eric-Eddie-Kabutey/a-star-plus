import { Button } from '@/components/ui/button'

import { Hero } from '@/components/shared/hero'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { ControlProcess } from '@/components/shared/control-process'
import { ContentSection } from '@/components/residential/earwigs/infosection'

import { earwigData } from '@/lib/data/residential/earwigs'
import { HeroData } from '@/types/residential/hero'
import { HeroSection } from '@/components/shared/OtherHero'

const bedBugHeroData: HeroData = {
  title: (
	<>
	  Earwig Pest Control
	</>
  ),
  description: 'Professional Earwig Elimination & Prevention Services',
  backgroundImage: '/assets/residential/images/hero-image-cricket.jpg', 
  overlay: 'bg-black/40', 
};

const earwigIdGuideData = {
	tagline: 'HOW TO KNOW',
	title: 'Identification Guide',
	items: [
		{
			icon: '/assets/residential/icons/earwigs/appearance.png',
			title: 'Appearance',
			description:
				'Brown to black coloration, slender body with distinctive forceps-like pincers at the rear',
		},
		{
			icon: '/assets/residential/icons/earwigs/size.png',
			title: 'Size',
			description:
				'Typically 5-25mm in length, varying by species and maturity',
		},
		{
			icon: '/assets/residential/icons/earwigs/habitat.png',
			title: 'Habitat',
			description:
				'Bathrooms, kitchens, mulch beds, basements, and other moisture-rich environments',
		},
		{
			icon: '/assets/residential/icons/earwigs/activity.png',
			title: 'Activity',
			description: 'Primarily nocturnal, most active during nighttime hours',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

const signsOfEarwigsData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: 'Signs of Earwig Infestation',
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/danger.png',
			title: 'Indoor Spotting',
			description:
				'Earwigs spotted indoors, especially in bathrooms or laundry areas',
		},
		{
			icon: '/assets/residential/icons/danger.png',
			title: 'Damaged Plants',
			description:
				'Damaged garden plants, seedlings, or unexplained plant deterioration',
		},
		{
			icon: '/assets/residential/icons/danger.png',
			title: 'Pincer Marks',
			description: 'Pincer-like damage marks on organic materials',
		},
		{
			icon: '/assets/residential/icons/danger.png',
			title: 'Musty Areas',
			description: 'Musty or damp-smelling areas with small insect clusters',
		},
	],
}

const earwigControlProcessData = {
	tagline: 'OUR CONTROL PROCESS',
	title: 'Our Proven 4-Step Earwigs Control Process',
	imageUrl: '/assets/residential/images/pets-control-process-earwigs.png',
	imageAlt: 'An earwig with its distinctive pincers on a white background.',
	steps: [
		{
			title: 'Comprehensive Inspection',
			description:
				'We thoroughly locate indoor hiding spots and identify exterior entry points to understand the full scope of your earwig problem.',
		},
		{
			title: 'Moisture Control',
			description:
				'We implement targeted strategies to dry out high-humidity areas that attract and sustain earwig populations.',
		},
		{
			title: 'Barrier Treatment',
			description:
				'Application of pet-safe, EPA-approved insecticides around doors, windows, and foundation perimeters for maximum protection.',
		},
		{
			title: 'Follow-Up Monitoring',
			description:
				'Ongoing monitoring and treatment reinforcement to prevent recurrence and ensure long-lasting results.',
		},
	],
}

const whyChooseStarPlusData = {
	tagline: 'WHY US',
	title: 'Why Choose A Star Plus?',
	items: [
		{
			icon: '/assets/residential/icons/earwigs/fast-response-time.png',
			title: 'Fast Response Time',
			description:
				'Quick scheduling and emergency service when you need it most',
		},
		{
			icon: '/assets/residential/icons/earwigs/family-safe-methods.png',
			title: 'Family-Safe Methods',
			description:
				'Pet and child-friendly treatments that protect your loved ones',
		},
		{
			icon: '/assets/residential/icons/earwigs/long-lasting-protection.png',
			title: 'Long-Lasting Protection',
			description: 'Comprehensive solutions that prevent future infestations',
		},
		{
			icon: '/assets/residential/icons/earwigs/local-expertise.png',
			title: 'Local Expertise',
			description: 'Technicians who understand regional pest behavior patterns',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}
export default function EarwigsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<HeroSection {...bedBugHeroData} />						

			{/* Why centipedes: Image on the RIGHT (default layout) */}
			<ContentSection
				tagline={earwigData.tagline}
				title={earwigData.title}
				imageUrl={earwigData.imageUrl}
				imageAlt={earwigData.imageAlt}
				content={earwigData.content}
				layout='imageLeft' 
			/>

			{/* RENDER THE SECOND VARIANT  */}
			{/* Todo adjust the card to display two cols and three  */}
			<FeatureGrid
				tagline={earwigIdGuideData.tagline}
				title={earwigIdGuideData.title}
				items={earwigIdGuideData.items}
				variant='card'
				cta={earwigIdGuideData.cta}
			/>

      {/* Why: RENDER THE FIRST VARIANT  */}
			{/* signs */}
			<FeatureGrid
				tagline={signsOfEarwigsData.tagline}
				title={signsOfEarwigsData.title}
				description={signsOfEarwigsData.description}
				items={signsOfEarwigsData.items}
				variant='circularIcon'
			/>

			{/* control processes */}
			<ControlProcess
				tagline={earwigControlProcessData.tagline}
				title={earwigControlProcessData.title}
				imageUrl={earwigControlProcessData.imageUrl}
				imageAlt={earwigControlProcessData.imageAlt}
				steps={earwigControlProcessData.steps}
			/>

			{/* Why: RENDER THE SECOND VARIANT  */}
			{/* Todo adjust the card to display two cols and three  */}
			<FeatureGrid
				tagline={whyChooseStarPlusData.tagline}
				title={whyChooseStarPlusData.title}
				items={whyChooseStarPlusData.items}
				variant='card' 
				cta={whyChooseStarPlusData.cta} 
			/>
		</>
	)
}
