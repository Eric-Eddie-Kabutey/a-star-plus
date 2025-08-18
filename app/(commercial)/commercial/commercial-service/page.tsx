import { FacilityServices } from "@/components/commercial/commercial-service/facility-service";
import { WhyUs } from "@/components/commercial/commercial-service/why-us";
import { CtaSection } from "@/components/shared/cta";
import { HeroSection } from "@/components/shared/hero-section";
import { facilityServicesData } from "@/lib/data/com/commercial-service";
import { blueCtaData } from "@/lib/data/shared/cta";
import { HeroProps } from "@/types/share/hero";

// why us - why A Star Plus stands out data
const whyUsStandoutData = {
  tagline: 'WHY US',
  title: (
    <>
      Why A Star Plus
      <br />
      Stands Out
    </>
  ),
  description: 'With years of experience in commercial facility services, we’ve perfected our methods to deliver exceptional results for businesses of all sizes.',
  features: [
    {
      icon: "/assets/com/com/industry-leading-standard.png",
      title: 'Industry-Leading Standards',
      description: 'We exceed industry standards in all our services, ensuring your facility not only meets but surpasses health and safety requirements.',
    },
    {
      icon: "/assets/com/com/trained-professionals.png",
      title: 'Trained Professionals',
      description: 'Our team undergoes rigorous training and background checks, so you can trust the people working in your facility.',
    },
    {
      icon: "/assets/com/com/eco-friendly-solutions.png",
      title: 'Eco-Friendly Solutions',
      description: 'We prioritize environmentally responsible products that are tough on germs but gentle on the planet.',
    },
  ],
  testimonials: {
    title: 'Our Clients Trust Us',
    items: [
      {
        quote: 'Since switching to A Star Plus, our facility inspections have been flawless. Their attention to detail in floor and drain cleaning has significantly reduced our pest issues.',
        attribution: '— Restaurant Manager, Texas',
      },
      {
        quote: 'The scent services have transformed our hotel lobby. Guests frequently compliment the welcoming atmosphere, and our staff morale has improved too.',
        attribution: '— Hospitality Director, Kumasi',
      },
      {
        quote: 'Their exclusion services solved our rodent problem permanently. The thoroughness of their inspection and sealing work was impressive.',
        attribution: '— Warehouse Supervisor, Tema',
      },
      {
        quote: 'Since switching to A Star Plus, our facility inspections have been flawless. Their attention to detail in floor and drain cleaning has significantly reduced our pest issues.',
        attribution: '— Restaurant Manager, Texas',
      },
    ],
  },
};

// Define the data for the hero section
const commercialHeroData: HeroProps = {
  title: (
    <>
      Commercial Facility Services
    </>
  ),
  description: 'Beyond pest control, A Star Plus offers advanced facility services that elevate cleanliness, enhance sanitation, and safeguard your operations. These services help businesses meet strict health codes and deliver a positive experience for employees and customers.',
  backgroundImage: '/assets/com/images/commercial-service-hero.jpg', 
  overlay: 'bg-black/60', // A slightly darker overlay
  action: ['Schedule Inspection', '(233) 123-456-7890'],
};

export default function CommercialServicesPage() {
    return (<>
      {/* hero */}
      <HeroSection {...commercialHeroData} />

        {/* our service - facility  */}
        <FacilityServices
        tagline={facilityServicesData.tagline}
        title={facilityServicesData.title}
        description={facilityServicesData.description}
        services={facilityServicesData.services}
      />

      {/* Why us */}
      <WhyUs data={whyUsStandoutData} />
      
      {/* CTA - reusable with blue bg */}
       {/* Render the BLUE version */}
      <CtaSection {...blueCtaData} />

      {/* Render the RED version */}
      {/* <CtaSection {...redCtaData} /> */}

    </>)
}