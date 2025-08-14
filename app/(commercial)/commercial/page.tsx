import { Hero } from "@/components/commercial/hero/hero";
import { VersatileHeroData } from "@/types/com/hero";
import { Service } from "@/components/commercial/home/service";
import { commercialPestControlMattersData } from "@/lib/data/com/service";
import { ApproachData, BusinessProtectionData, IndustrySolutionsData } from "@/types/com/service";
import { IndustrySolutions } from "@/components/commercial/home/industry-solution";
import { Approach } from "@/components/commercial/home/approach";
import { BusinessProtection } from "@/components/commercial/home/business-protection";
import { Testimonials } from "@/components/shared/testimonials";
import { Faq } from "@/components/shared/faq";

// data for hero section
const heroData: VersatileHeroData = {
  title: (
    <>
      Safe & Reliable Pest Control for Texas Businesses.
    </>
  ),
  description: 'Protect your property, customers, and reputation with expert pest solutions tailored for commercial spaces.',
  actions: ['Get a Free Inspection'],
  imageUrl: '/assets/com/images/hero-side.png',
  imageAlt: 'Technician in blue gloves holding a pest control spray bottle.',
  features: [
    { title: 'Experienced Professionals', description: 'Whether you need preventive treatments or urgent pest removal, A Star Plus has got you covered.' },
    { title: '24/7 Availability', description: 'Whether you need preventive treatments or urgent pest removal, A Star Plus has got you covered.' },
  ],
  cornerBorderPosition: 'topLeft',
};

// data for industry solution
const industrySolutionsData: IndustrySolutionsData = {
  tagline: 'INDUSTRIES WE SERVE',
  title: (
    <>
      Industry-Specific      
      Solutions for Every Space
    </>
  ),
  description: 'Our platform offers a comprehensive pest management services tailored to residential, commercial, and industrial environments.',
  industries: [
    {
      title: 'Hospitality',
      description: 'Protect your reputation and guest satisfaction with discreet pest treatments that eliminate pests without disrupting operations or guest experiences.',
      imageUrl: '/assets/com/images/hospital.png',
      imageAlt: 'A modern and luxurious hotel reception area.',
    },
    {
      title: 'Restaurants & Food Service',
      description: 'Safeguard food preparation areas and dining spaces with targeted solutions that exceed health department standards.',
      imageUrl: '/assets/com/images/restaurants.png',
      imageAlt: 'A chef presenting a beautifully plated dish.',
    },
    {
      title: 'Offices & Corporate Spaces',
      description: 'Maintain a professional, productive work environment with customized pest management for office buildings and corporate campuses.',
      imageUrl: '/assets/com/images/offices.png',
      imageAlt: 'A modern open-plan office with comfortable seating.',
    },
    {
      title: 'Warehouses & Industrial',
      description: 'Protect valuable inventory and equipment with robust pest control systems designed for large-scale industrial operations.',
      imageUrl: '/assets/com/images/warehouses.png', 
      imageAlt: 'A large, well-organized warehouse with tall shelves.',
    },
    {
      title: 'Property Management',
      description: 'Implement building-wide pest prevention strategies for apartment complexes and multi-tenant properties.',
      imageUrl: '/assets/com/images/property-mgt.png',
      imageAlt: 'A person handing over keys to a new property.',
    },
    {
      title: 'Healthcare Facilities',
      description: 'Ensure patient safety and regulatory compliance with specialized pest management protocols for hospitals and clinics.',
      imageUrl: '/assets/com/images/health-care-facilities.png', 
      imageAlt: 'A clean and modern hospital or clinic room with medical equipment.',
    },
  ],
};

// data for approach
const ourApproachData: ApproachData = {
  tagline: 'HOW IT WORKS',
  title: 'Our Approach',
  description: 'A Strategic Approach That Works Around Your Business',
  steps: [
    {
      title: 'Site Evaluation',
      image: '/assets/com/images/evaluation.png',      
    },
    {
      title: 'Custom Plan Development',
      image: '/assets/com/images/plan.png',      
    },
    {
      title: 'Discreet Implementation',
      image: '/assets/com/images/implementation.png',      
    },
  ],
  cta: {
    text: 'Get a Free Inspection',
    href: '/inspection',
  },
};

// business protect data
const businessProtectionData: BusinessProtectionData = {
  tagline: 'WHY US?',
  title: (
    <>
      Why Choose A Star Plus for
      <br />
      Your Business?
    </>
  ),
  cta: {
    text: 'Get Started With A Star Plus',
    href: '/get-started',
  },
  listHeading: 'Commercial Protection You Can Count On',
  listItems: [
    'Certified, Background-Checked Technicians',
    'Discreet, Flexible Scheduling',
    'Real-Time Reporting & Audit Support',
    '100% Satisfaction Guarantee',
    'Local Experts – Fast Response Times',
  ],
  imageUrl: '/assets/com/images/success-stories.png',
  imageAlt: 'A pest control professional in a hazmat suit treating an indoor space.',
};

export default function CommercialPage() {
    return (<>
        {/* Hero */}
        <Hero
        title={heroData.title}
        description={heroData.description}
        actions={heroData.actions}
        imageUrl={heroData.imageUrl}
        imageAlt={heroData.imageAlt}
        features={heroData.features}
        cornerBorderPosition={heroData.cornerBorderPosition}
        />                 
        
        {/* service  */}
         <Service
        tagline={commercialPestControlMattersData.tagline}
        title={commercialPestControlMattersData.title}
        description={commercialPestControlMattersData.description}
        reasons={commercialPestControlMattersData.reasons}
        imageUrl={commercialPestControlMattersData.imageUrl}
        imageAlt={commercialPestControlMattersData.imageAlt}
        />
        
        {/* industries we serve */}
         <IndustrySolutions
        tagline={industrySolutionsData.tagline}
        title={industrySolutionsData.title}
        description={industrySolutionsData.description}
        industries={industrySolutionsData.industries}
        />
        
        {/* how it works */}
        <Approach
        tagline={ourApproachData.tagline}
        title={ourApproachData.title}
        description={ourApproachData.description}
        steps={ourApproachData.steps}
        cta={ourApproachData.cta}
        />
        
        {/* business protection */}
         <BusinessProtection 
        tagline={businessProtectionData.tagline}
        title={businessProtectionData.title}
        cta={businessProtectionData.cta}
        listHeading={businessProtectionData.listHeading}
        listItems={businessProtectionData.listItems}
        imageUrl={businessProtectionData.imageUrl}
        imageAlt={businessProtectionData.imageAlt}
      />

      {/* Testimonial */}
      <Testimonials />

      {/* Faq */}
      <Faq />
    </>)
}