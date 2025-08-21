import { Hero } from "@/components/commercial/hero/hero";
import { CommercialApproach } from "@/components/commercial/industries/commercial-approach";
import { IndustryProtectionS } from "@/components/commercial/industries/industry-protections";
import { TrustFeatures } from "@/components/commercial/industries/trust-features";
import { Contact } from "@/components/shared/contact";
import { Testimonials } from "@/components/shared/testimonials";
import { industriesContactData } from "@/lib/data/shared/contact";
import { VersatileHeroData } from "@/types/com/hero";
import { CommercialApproachData, IndustryProtectionData, TrustFeaturesData } from "@/types/com/service";

const industryHeroData: VersatileHeroData = {
    title: 'Commercial Pest Control Solutions',
    subTitle: 'Tailored Pest Protection for Every Industry',
    description:
    'A Star Plus Pest Control delivers industry-specific pest management programs designed to keep your business protected, compliant, and thriving.',
    actions: ['Schedule Inspection', '(233) 123-456-7890'],    
    imageUrl:
        '/assets/com/images/industryHeroImage.png', 
    imageAlt: 'Technician in a hazmat suit spraying a large warehouse.',	
}

// tested and trusted by data
const trustedByBusinessesData: TrustFeaturesData = {
  tagline: 'TESTED AND TRUSTED',
  title: 'Trusted By Businesses Across Industries',
  description: 'Our certified technicians deliver compliant, effective pest management solutions tailored to your specific industry needs.',
  features: [
    {
      icon: "/assets/com/icons/compliance-guaranteed.png",
      title: 'Compliance Guaranteed',
      description: 'Meeting all industry regulations and standards',
    },
    {
      icon: "/assets/com/icons/monitoring.png",
      title: '24/7 Monitoring',
      description: 'Round-the-clock protection for your business',
    },
    {
      icon: "/assets/com/icons/certified-experts.png",
      title: 'Certified Experts',
      description: 'Background-checked, industry-trained technicians',
    },
    {
      icon: "/assets/com/icons/satisfaction-guarantee.png",
      title: 'Satisfaction Guarantee',
      description: 'Your peace of mind is our priority',
    },
  ],
};

// other industries data
const industryProtectionData: IndustryProtectionData = {
  tagline: 'OUR INDUSTRIES',
  title: 'Industry-Specific Pest Protection',
  description: 'Explore how we safeguard your space, no matter your industry.',
  industries: [
    {
      icon: "/assets/com/icons/food-beverages.png",
      title: 'Food & Beverage Processing',
      subtitle: 'Stay Audit-Ready & Pest-Free',
      description: 'Pests in processing facilities threaten product safety and compliance. We deliver HACCP-aligned protocols and USDA/FSMA-compliant solutions to prevent contamination and shutdowns.',
      listItems: [
        'Inspections & documentation',
        'Sanitation & exclusion support',
        '24/7 monitoring systems',
      ],
    },
    {
      icon: "/assets/com/icons/food-services.png",
      title: 'Foodservice',
      subtitle: 'Safe Kitchens, Satisfied Guests',
      description: 'From restaurants to cafes, we protect your reputation with discreet, rapid-response pest programs.',
      listItems: [
        'Odourless treatments',
        'Fly control & grease trap management',
        'Nighttime service options',
      ],
    },
    {
      icon: "/assets/com/icons/health-care.png",
      title: 'Healthcare',
      subtitle: 'Medical-Grade Pest Protection',
      description: 'Hospitals, clinics, and nursing homes demand precise and discreet pest control. We specialize in non-invasive solutions that meet healthcare safety standards.',
      listItems: [
        'Sterile space-compatible treatments',
        'No patient disruption',
        'CDC and OSHA-compliant protocols',
      ],
    },
    {
      icon: "/assets/com/icons/hospitality.png",
      title: 'Hospitality',
      subtitle: 'Guests Expect Comfort. We Deliver Peace of Mind.',
      description: 'Pests in hotels or short-term rentals are deal-breakers. We ensure rooms, kitchens, and common areas remain pest-free and review-proof.',
      listItems: [
        'Bed bug prevention & remediation',
        'Weekly or monthly hotel programs',
        'Emergency same-day service',
      ],
    },
    {
      icon: "/assets/com/icons/logistics-warehousing.png",
      title: 'Logistics & Warehousing',
      subtitle: 'Pest Control That Moves at Your Speed',
      description: 'Warehouses attract rodents, stored product pests, and insects. Our barrier protection and facility-wide treatment plans reduce infestation risks without disrupting operations.',
      listItems: [
        'Non-disruptive treatments',
        'Structural sealing & baiting',
        'Digital logbooks for audits',
      ],
    },
    {
      icon: "/assets/com/icons/other-industries.png",
      title: 'Other Industries',
      subtitle: 'Custom Solutions for Unique Spaces',
      description: "Don't see your industry listed? We'll build a custom pest prevention plan to suit your business's structure, risk profile, and regulations.",
      listItems: [
        'Non-profits',
        'Religious institutions',
        'Recreation centers & more',
      ],
    },
  ],
};

// our proven approach to commercial pets control data
const commercialApproachData: CommercialApproachData = {
  mainTitle: 'Our Proven Approach to Commercial Pest Control',
  mainDescription: 'A Star Plus Pest Control combines industry expertise with cutting-edge technology to deliver comprehensive pest management solutions.',
  processSteps: [
    {
      icon: "/assets/com/icons/industries/thorough-inspection.png",
      title: 'Thorough Inspection',
      description: 'We begin with a comprehensive assessment of your facility to identify current issues and potential risks.',
    },
    {
      icon: "/assets/com/icons/industries/customized-plan.png",
      title: 'Customized Plan',
      description: 'Our experts develop a tailored solution that addresses your specific pest challenges while complying with industry regulations.',
    },
    {
      icon: "/assets/com/icons/industries/ongoing-protection.png",
      title: 'Ongoing Protection',
      description: 'We implement preventive measures and provide continuous monitoring to ensure long-term pest-free operations.',
    },
  ],
  whyChooseUs: {
    title: 'Why Choose A Star Plus Pest Control?',
    items: [
      {
        icon: "/assets/com/icons/industries/industry-specific-certifications.png",
        title: 'Industry-Specific Certifications',
        description: 'Our technicians hold specialised certifications for food processing, healthcare, pharmaceutical, and other regulated industries.',
      },
      {
        icon: "/assets/com/icons/industries/data-driven-solutions.png",
        title: 'Data-Driven Solutions',
        description: 'We utilize digital monitoring and reporting tools to track pest activity and measure program effectiveness.',
      },
      {
        icon: "/assets/com/icons/eco-conscious-methods.png",
        title: 'Eco-Conscious Methods',
        description: 'Our Integrated Pest Management (IPM) approach prioritizes non-chemical solutions whenever possible.',
      },
    ],
  },
  compliance: {
    title: 'Compliance & Documentation',
    description: 'We understand that proper documentation is critical for regulated industries. Our comprehensive reporting includes:',
    items: [
      'Detailed service reports',
      'Corrective action recommendations',
      'Regulatory compliance documentation',
      'Digital audit trails',
    ],
  },
};


export default function IndustryPage() {
    return (<>
    <Hero
            title={industryHeroData.title}
            description={industryHeroData.description}
            actions={industryHeroData.actions}
            imageUrl={industryHeroData.imageUrl}
            imageAlt={industryHeroData.imageAlt}    
        />
        
        {/* trusted features */}
         <TrustFeatures
        tagline={trustedByBusinessesData.tagline}
        title={trustedByBusinessesData.title}
        description={trustedByBusinessesData.description}
        features={trustedByBusinessesData.features}
        id="trusted-features"
        />
        
        {/* other industries */}
        <IndustryProtectionS
        tagline={industryProtectionData.tagline}
        title={industryProtectionData.title}
        description={industryProtectionData.description}
        industries={industryProtectionData.industries}
        />
        
        {/* Our Proven Approach to Commercial Pest Control */}
        <CommercialApproach data={commercialApproachData} />

        {/* Testimonial */}
      <Testimonials />      
      
      {/* Contact */}
      <Contact
              tagline={industriesContactData.tagline}
              title={industriesContactData.title}
              description={industriesContactData.description}
              contactDetails={industriesContactData.contactDetails}
              variant='blue'
            />
        
    </>)
}