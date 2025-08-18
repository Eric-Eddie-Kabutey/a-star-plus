
import { InfoSection } from '@/components/shared/why'
import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { Testimonials } from '@/components/shared/testimonials'
import { Faq } from '@/components/shared/faq'
import { antData, bedBugData } from '@/lib/data/residential/ants'
import { HeroData } from '@/types/residential/hero'

import { HeroSection } from '@/components/shared/OtherHero'


const bedBugHeroData: HeroData = {
  title: (
    <>
      Sleepless Nights? Get Rid of     
      Bed Bugs Fast, Guaranteed.
    </>
  ),
  description: 'Discreet and effective bed bug treatments that eliminate the problem at every stage.',
  backgroundImage: '/assets/residential/images/hero-image-bed-bug.jpg', 
  overlay: 'bg-black/40', 
};

const antControlProcess = {
	tagline: 'OUR ANT CONTROL PROCESS',
	title: (
		<>
			We Don&apos;t Just Kill What You See,
			<br />
			We Eliminate the Entire Infestation
		</>
	),
	imageUrl: '/assets/residential/images/pets-control-process-bed-bug.png',
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

const signsOfBedBugsData = {
	tagline: 'WHAT ARE THE SIGNS',
	title: "Don't Guess, Know the Signs",
	description:
		"Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
	items: [
		{
			icon: '/assets/residential/icons/beetle/bite-patterns.png',
			title: 'Bite Patterns',
			description: 'Red, itchy bites in a straight line or zigzag pattern',
		},
		{
			icon: '/assets/residential/icons/beetle/blood-stains.png',
			title: 'Blood Stains',
			description: 'Small blood stains on sheets or pillows',
		},
		{
			icon: '/assets/residential/icons/beetle/facial-spots.png',
			title: 'Fecal Spots',
			description: 'Dark faecal spots on mattress seams or furniture',
		},
		{
			icon: '/assets/residential/icons/beetle/live-evidence.png',
			title: 'Live Evidence',
			description:
				'Live bugs or molted skins in cracks, baseboards, or mattress folds',
		},
		{
			icon: '/assets/residential/icons/beetle/mostly-odour.png',
			title: 'Musty Odour',
			description: 'Sweet, musty odor in heavily infested rooms',
		},
	],
}

const whyChooseUsData = {
	tagline: 'WHY US',
	title: (
		<>
			Don&apos;t Trust Just Anyone with Your Comfort,
			<br />
			Trust Texas&apos; Experts
		</>
	),
	items: [
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Discreet Service',
			description: 'Unmarked service vehicles for your privacy',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Safe Products',
			description: 'EPA-registered, pet-safe products',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Treatment Options',
			description: 'Heat Treatment or Low-Odor Spray options',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Licensed Technicians',
			description: 'Trained and certified professionals',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: 'Affordable Financing',
			description: 'Financing options available',
		},
		{
			icon: '/assets/residential/icons/checked.png',
			title: '100% Guarantee',
			description: 'Bed Bug Elimination Guarantee',
		},
	],
	cta: {
		text: 'Schedule a Free Inspection',
		href: '/inspection',
	},
}

export default function BedBug() {
	return (
		<>
			<HeroSection {...bedBugHeroData} />
			{/* hero - reuseable with props for specific page */}
			{/* <Hero
				title={
					<>
						Sleepless Nights? Get Ride of Bed Bug Fast, Guaranteed.
					</>
				}
				description='We eliminate ants at the source, fast, safe, and with a satisfaction guarantee.'
				backgroundColor='#fff0f0'
				
			/> */}

			{/* Example 1: Image on the RIGHT (default layout) */}
			<InfoSection
				tagline={antData.tagline}
				title={antData.title}
				description={antData.description}
				quickFacts={antData.quickFacts}
				imageUrl={antData.imageUrl}
				imageAlt={antData.imageAlt}
				layout='imageLeft'
			/>

			{/* why (reusable) ants treatments are serious issues */}
			{/* RENDER THE FIRST VARIANT */}
			<FeatureGrid
				tagline={signsOfBedBugsData.tagline}
				title={signsOfBedBugsData.title}
				description={signsOfBedBugsData.description}
				items={signsOfBedBugsData.items}
				variant='circularIcon'
			/>

      {/* Example 2: Image on the LEFT */}
			<InfoSection
				tagline={bedBugData.tagline}
				title={bedBugData.title}
				description={bedBugData.description}
				quickFacts={bedBugData.quickFacts}
				imageUrl={bedBugData.imageUrl}
				imageAlt={bedBugData.imageAlt}
				layout='imageLeft'
			/>

			{/* what are the signs */}
			<ControlProcess
				tagline={antControlProcess.tagline}
				title={antControlProcess.title}
				imageUrl={antControlProcess.imageUrl}
				imageAlt={antControlProcess.imageAlt}
				steps={antControlProcess.steps}
			/>

			{/* why us */}
			{/* RENDER THE SECOND VARIANT  */}
			<FeatureGrid
				tagline={whyChooseUsData.tagline}
				title={whyChooseUsData.title}
				items={whyChooseUsData.items}
				variant='card'
				cta={whyChooseUsData.cta}
			/>

			{/* testimonials */}
			<Testimonials />

			{/* Faq */}
			<Faq />
		</>
	)
}
