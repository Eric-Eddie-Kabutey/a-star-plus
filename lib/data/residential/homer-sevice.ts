import { ComprehensiveServicesProps, ServiceCardData } from "@/components/residential/home-service/comprehensive-service";
import { ContactSectionData } from "@/types/residential/contact";
import { InfoPackageData } from "@/types/residential/home-service";

export interface SectionHeaderData {
  tagline: string;
  title: React.ReactNode;
  description: string;
}

export const homeServiceOverviewData: SectionHeaderData = {
  tagline: 'OVERVIEW',
  title: 'Home Service Overview',
  description: 'At A Star Plus, we believe protecting your home means more than treating for pests. We offer a full range of services that help you maintain a clean, safe, energy-efficient, and pest-free environment — all year round. Explore our bundled services that protect both your property and your peace of mind.',
};

const servicesList: ServiceCardData[] = [
  {
    icon: "/assets/residential/icons/home-service/attic-insulation.png",
    title: 'Attic Insulation',
    subtitle: 'Keep Pests Out. Keep Energy In.',
    description: "Proper insulation doesn't just reduce your energy bill — it acts as a barrier to insects, rodents, and wildlife.",
    accordionTitle: 'Service Includes',
    accordionContent: [
      'Removal of old or contaminated insulation',
      'Installation of pest-repellent, fire-resistant insulation',
      'Energy-efficiency upgrades',
      'Rodent-proofing of gaps and entry points',
    ],
    footerNote: 'Great for new homes or older homes with infestations or heat-loss issues.',
  },
  {
    icon: "/assets/residential/icons/home-service/wildlife-management.png",
    title: 'Wildlife Management',
    subtitle: 'Safe, Humane, and Effective Wildlife Removal',
    description: "Wildlife in your home is dangerous — not just structurally, but to your health. We remove, relocate, and prevent re-entry.",
    accordionTitle: 'We Handle',
    accordionContent: [
      'Raccoons, squirrels, opossums',
      'Snakes, bats, birds',
      'Nesting or burrowing animals',
      'Dead animal removal',
    ],
    footerNote: 'All removal is done humanely and in compliance with local laws.',
  },
  {
    icon: "/assets/residential/icons/home-service/stop-moisture.png",
    title: 'Moisture Control',
    subtitle: 'Stop Moisture. Stop Pests.',
    description: 'Damp environments are breeding grounds for mold, wood rot, and pests like termites, cockroaches, and centipedes.',
    accordionTitle: 'What We Do',
    accordionContent: [
      'Crawl space vapor barriers',
      'Dehumidifier installation',
      'Drainage solutions & foundation grading',
      'Termite moisture treatment',
    ],
    footerNote: 'Moisture issues are one of the top causes of long-term home pest problems.',
  },
  {
    icon: "/assets/residential/icons/home-service/wildlife-prevention.png",
    title: 'Wildlife & Rodent Prevention Program',
    subtitle: 'Prevention > Infestation',
    description: 'This premium program is for homeowners who want total protection from wildlife and rodents — year-round.',
    accordionTitle: 'Program Features',
    accordionContent: [
      'Quarterly inspection & exclusion',
      'Rodent baiting stations',
      'Wildlife monitoring systems',
      'Roof & foundation sealing',
    ],
    footerNote: 'Perfect for rural, wooded, or older properties.',
  },
  {   
    icon: "/assets/residential/icons/home-service/seasonal-pest.png",
    title: 'Seasonal Pest Protection',
    subtitle: 'Because Every Season Brings a New Pest.',
    description: 'As seasons change, different pests become active. We tailor your pest defense for spring, summer, fall, and winter threats.',
    accordionTitle: 'Covered Pests Include',
    accordionContent: [
      'Ants, mosquitoes, spiders, cockroaches (Spring/Summer)',
      'Rodents, stink bugs, overwintering insects (Fall/Winter)',
    ],
    footerNote: 'We proactively treat your home before pests strike.',
  },
  {
    icon: "/assets/residential/icons/home-service/leaf-stopper.png",
    title: 'Leaf Stopper',
    subtitle: 'Say Goodbye to Clogged Gutters and Nesting Insects',
    description: 'The Leaf Stopper® Gutter Protection System is a physical barrier that prevents leaves, debris, and pests from clogging your gutters.',
    accordionTitle: 'Benefits',
    accordionContent: [
      'No more gutter cleaning',
      'Stops mosquito breeding & ant nesting',
      'Reduces roof water damage',
      'Durable aluminum & mesh design',
    ],
    footerNote: 'Add Leaf Stopper® to any pest control or roofing service.',
  },
];

export const comprehensiveServicesData: ComprehensiveServicesProps = {
  tagline: 'SERVICES',
  title: 'Our Comprehensive Services',
  services: servicesList,
};

// pet prevention 
export const newHomeownerPackageData: InfoPackageData = {
  tagline: 'PEST PREVENTION',
  title: 'New Homeowner Pest Prevention',
  description: 'Just moved in? Your home may already have unwanted guests. Our New Homeowner Package ensures a clean, pest-free start.',
  listHeading: "What's included:",
  includedItems: [
    'Full interior & exterior inspection',
    'Ants, roaches, rodents, and termite treatments',
    'Attic & crawl space checks',
    'Entry-point sealing & gutter review',
  ],
  bonusNote: {    
    text: '🎁 Bonus: First-month free on seasonal protection plan!',
  },
};


// contact data
export const contactData: ContactSectionData = {
  tagline: 'CONTACT US',
  title: 'Ask A Star Plus',
  description: 'Got Questions? Let’s Talk. From pest ID to treatment choices, we’re always here to answer. Use our form to get quick advice directly from our experts.',
  contactDetails: [
    {
      icon: "/assets/residential/icons/contact/location.png",
      title: 'Service Area',
      lines: ['Serving all of Texas with locations in Dallas, Houston, Austin, and San Antonio'],
    },
    {
      icon: "/assets/residential/icons/contact/phone.png",
      title: 'Call Us',
      lines: ['(233) 123-456-7890'],
    },
    {
      icon: "/assets/residential/icons/contact/mail.png",
      title: 'Email Us',
      lines: ['info@astarplus.com'],
    },
    {
      icon: "/assets/residential/icons/contact/time.png",
      title: 'Hours',
      lines: [
        'Monday - Saturday: 7am - 7pm',
        'Sunday: Emergency services only',
      ],
    },
  ],
};