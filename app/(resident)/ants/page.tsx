import { Hero } from '@/components/shared/hero'
import { InfoSection } from '@/components/shared/why'
import { CommonPestsSection } from '@/components/residential/ants/common-ant-species'
import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'

import { DesktopAntBackground } from '@/components/residential/ants/ant-background'
import { antData, antSpeciesData } from '@/lib/data/residential/ants'
import { Button } from '@/components/ui/button'

// --- Data for the first section ("Why Us") ---
const whyUsData = {
	tagline: 'WHY A STAR PLUS',
	title: 'What Makes Us the #1 Choice for Ant Removal',
	description:
		'When it comes to ants, DIY sprays only scratch the surface. We eliminate the entire colony — not just the ants you see.',
	items: [
		{
			icon: '/assets/residential/icons/ants/licensed-experienced.png',
			title: 'Licensed, Experienced Technicians',
			description:
				'Certified professionals with years of ant control experience',
		},
		{
			icon: '/assets/residential/icons/ants/kids-pet-friendly.png',
			title: 'Kid & Pet Friendly Treatments',
			description: 'Safe, effective solutions that protect your family',
		},
		{
			icon: '/assets/residential/icons/ants/customized-for-hotel-or-business.png',
			title: 'Customized for Home or Business',
			description:
				'Tailored solutions for residential and commercial properties',
		},
		{
			icon: '/assets/residential/icons/ants/fast-response.png',
			title: 'Fast Response & Same-Day Service',
			description: 'Quick scheduling when you need help most',
		},
		{
			icon: '/assets/residential/icons/ants/full-guarantee.png',
			title: 'Full Guarantee',
			description: 'We come back if they do — your satisfaction guaranteed',
		},
	],
}

// --- Data for the second section ("Tips") ---
const tipsData = {
	tagline: 'TIPS',
	title: 'Tips to Keep Ants Out After Treatment',
	items: [
		{
			icon: '/assets/residential/icons/ants/customized-for-hotel-or-business.png',
			title: 'Keep Food Sealed',
			description:
				'Store food in airtight containers and clean up crumbs immediately',
		},
		{
			icon: '/assets/residential/icons/ants/customized-for-hotel-or-business.png',
			title: 'Daily Trash Removal',
			description: 'Take out the trash daily and keep bins sealed',
		},
		{
			icon: '/assets/residential/icons/ants/customized-for-hotel-or-business.png',
			title: 'Fix Water Issues',
			description: 'Repair leaky pipes and eliminate standing water',
		},
		{
			icon: '/assets/residential/icons/ants/customized-for-hotel-or-business.png',
			title: 'Seal Entry Points',
			description: 'Close cracks in walls and around windows',
		},
		{
			icon: '/assets/residential/icons/ants/customized-for-hotel-or-business.png',
			title: 'Pet Food Storage',
			description: "Don't leave pet food out overnight",
		},
	],
	cta: {
		text: 'Download Our Free Ant Prevention Checklist',
		href: '/checklist.pdf',
	},
}

const antControlProcess = {
	tagline: 'OUR ANT CONTROL PROCESS',
	title: (
		<>
			How We Get Rid of Ants, And
			<br />
			Keep Them Out
		</>
	),
	imageUrl: '/assets/residential/images/pets-control-process.png',
	imageAlt: 'A close-up of a black carpenter ant on a flower.',
	steps: [
		{
			title: 'Thorough Inspection',
			description: 'We identify the species, entry points, and nesting areas.',
		},
		{
			title: 'Targeted Treatment Plan',
			description:
				'Based on ant type and severity, we choose the best solution.',
		},
		{
			title: 'Safe Application',
			description:
				'Family- and pet-safe products applied by trained technicians.',
		},
		{
			title: 'Colony Elimination',
			description:
				'Baits, sprays, and barriers to kill the queen and stop reproduction.',
		},
		{
			title: 'Long-Term Prevention',
			description:
				'We seal entry points and provide tips to keep ants from returning.',
		},
	],
}

export default function AntsPage() {
	return (
		<>
			{/* hero - reuseable with props for specific page */}
			<Hero
				title={
					<>
						Tired of Ants Invading Your Home or Business?
					</>
				}
				description='We eliminate ants at the source, fast, safe, and with a satisfaction guarantee.'
				background={<DesktopAntBackground />}
				backgroundColor='#fff0f0'				
			/>
			{/* why (reusable) ants treatments are serious issues */}
			{/* Example 1: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={antData.tagline}
				title={antData.title}
				description={antData.description}
				quickFacts={antData.quickFacts}
				imageUrl={antData.imageUrl}
				imageAlt={antData.imageAlt}
			/>

			{/* know your enemy - reusable*/}
			<CommonPestsSection
				tagline='KNOW YOUR ENEMY'
				title={
					<>
						Common Ant Species
						<br className='hidden sm:block' />
						in Texas
					</>
				}
				pests={antSpeciesData}
			/>

			{/* control process */}
			<ControlProcess
				tagline={antControlProcess.tagline}
				title={antControlProcess.title}
				imageUrl={antControlProcess.imageUrl}
				imageAlt={antControlProcess.imageAlt}
				steps={antControlProcess.steps}
			/>

			{/* why us */}
			{/* RENDER THE FIRST VARIANT */}
			<FeatureGrid
				tagline={whyUsData.tagline}
				title={whyUsData.title}
				description={whyUsData.description}
				items={whyUsData.items}
				variant='circularIcon'
				iconBorder={true}
			/>

			{/* testimonials */}
			<Testimonials />

			{/* tips: RENDER THE SECOND VARIANT */}
			<FeatureGrid
				tagline={tipsData.tagline}
				title={tipsData.title}
				items={tipsData.items}
				variant='card'
				cta={tipsData.cta}
			/>

			{/* FAQ */}
			<Faq />
		</>
	)
}
