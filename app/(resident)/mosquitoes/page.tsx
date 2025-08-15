import { ControlProcess } from '@/components/shared/control-process'
import { FeatureGrid } from '@/components/shared/feature-grid'
import { Hero } from '@/components/shared/hero'
import { Button } from '@/components/ui/button'

 const signsOfMosquitoesData = {
  tagline: 'WHAT ARE THE SIGNS',
  title: 'Signs of a Mosquito Problem',
  description: "Early detection is key. If you notice any of the following, it's time to call for a professional inspection:",
  items: [
    {
      icon: "/assets/residential/icons/mosquitoes/evening-odours-discomfort.png",
      title: 'Evening Outdoor Discomfort',
      description: 'Constant buzzing and swatting outdoors, especially in the evening when mosquitoes are most active.',
    },
    {
      icon: "/assets/residential/icons/mosquitoes/mosquito-mites.png",
      title: 'Mosquito Bites',
      description: 'Itchy red bumps appearing frequently, often around arms, legs, and ankles after spending time outside.',
    },
    {
      icon: "/assets/residential/icons/mosquitoes/water-source-activity.png",
      title: 'Water Source Activity',
      description: 'Mosquitoes hovering around standing water or shady areas in your yard and garden spaces.',
    },
    {
      icon: "/assets/residential/icons/mosquitoes/visible-larvae.png",
      title: 'Visible Larvae',
      description: 'Wigglers (larvae) spotted in stagnant water like buckets, plant trays, gutters, or bird baths.',
    },
    {
      icon: "/assets/residential/icons/mosquitoes/seasonal-increases.png",
      title: 'Seasonal Increases',
      description: 'Heightened mosquito activity during warmer months or immediately following rain periods.',
    },
  ],
  // This section does not have a CTA button.
};

 const mosquitoControlProcessData = {
  tagline: 'OUR CONTROL PROCESS',
  title: 'Our Mosquito Treatment Process',
  imageUrl: '/assets/residential/images/pets-control-process-mosquitoes.png', 
  imageAlt: 'A close-up of a mosquito with striped legs on human skin.',
  steps: [
    {
      title: 'Property Assessment',
      description: 'We inspect your yard, drains, and shaded areas to find breeding sites and high-activity zones.',
    },
    {
      title: 'Breeding Site Elimination',
      description: 'We treat or remove stagnant water sources and apply larvicides where needed to stop mosquito development.',
    },
    {
      title: 'Yard Barrier Spray',
      description: 'We apply a pet- and kid-safe mosquito repellent around shrubs, fences, patios, and common entry points.',
    },
    {
      title: 'Seasonal & Event Protection',
      description: 'Ongoing treatments available during peak mosquito season or before outdoor events like weddings or barbecues.',
    },
  ],
};

 const whyChooseStarPlusMosquitoControlData = {
  tagline: 'WHY US',
  title: 'Why Choose A Star Plus Pest Control?',
  items: [
    {
      icon: "/assets/residential/icons/checked.png",
      title: 'Fast-Acting Results',
      description: 'Barrier that provides immediate relief and extended protection.',
    },
    {
      icon: "/assets/residential/icons/checked.png",
      title: 'Family & Pet Safe',
      description: 'Safe for kids, pets & pollinators like bees',
    },
    {
      icon: "/assets/residential/icons/checked.png",
      title: 'Health Protection',
      description: 'Helps reduce risk of mosquito-borne illnesses like West Nile Virus.',
    },
    {
      icon: "/assets/residential/icons/checked.png",
      title: 'Texas Climate Expertise',
      description: 'Locally tailored treatments specifically designed for Texas climates',
    },
    {
      icon: "/assets/residential/icons/checked.png",
      title: 'Affordable Plans',
      description: 'Budget-friendly seasonal plans available to keep your property protected.',
    },
  ],
  cta: {
    text: 'Schedule a Free Inspection',
    href: '/inspection',
  },
};


export default function MosquitoesPage() {
    return (
        <>
            {/* hero - reuseable with props for specific page */}
            <Hero
                title={<>Take Back Your Yard, Expert Mosquito Control That Works</>}
                description='Don’t let mosquitoes ruin your comfort or put your health at risk. At A Star Plus Pest Control, we deliver targeted, family-safe mosquito treatments that drastically reduce populations and keep them from coming back.'
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

            {/* signs */}
            <FeatureGrid
                tagline={signsOfMosquitoesData.tagline}
                title={signsOfMosquitoesData.title}
                description={signsOfMosquitoesData.description}
                items={signsOfMosquitoesData.items}
                variant='circularIcon' // Explicitly set or omit to use default
      />
      
       {/* control processes */}
                <ControlProcess
                  tagline={mosquitoControlProcessData.tagline}
                  title={mosquitoControlProcessData.title}
                  imageUrl={mosquitoControlProcessData.imageUrl}
                  imageAlt={mosquitoControlProcessData.imageAlt}
                  steps={mosquitoControlProcessData.steps}
              />

            {/* Why: RENDER THE SECOND VARIANT  */}
            {/* Todo adjust the card to display two cols and three  */}
            <FeatureGrid
                tagline={whyChooseStarPlusMosquitoControlData.tagline}
                title={whyChooseStarPlusMosquitoControlData.title}
                items={whyChooseStarPlusMosquitoControlData.items}
                variant='card' // Change the variant to get the other style
                cta={whyChooseStarPlusMosquitoControlData.cta} // Pass the CTA data
      />
            
        </>)
};