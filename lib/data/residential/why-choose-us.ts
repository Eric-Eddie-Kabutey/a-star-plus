import { DetailedFeatureGridData } from "@/types/residential/a-start-plus";

export interface FeaturesProps {
  title: string;
  description: string;
  features: string[];
  stats: { value: number; suffix: string; label: string }[];
}

// --- Data for Checklist and Stats ---
export const features: FeaturesProps['features'] = [
  "Same-day service when you need us most",
  "Eco-friendly treatments that are safe for kids and pets",
  "Local expertise, not just a national script",
  "100% satisfaction guarantee on every job",
];

export const stats: FeaturesProps['stats'] = [
  { value: 99, suffix: '%', label: 'Work Percentage' },
  { value: 200, suffix: '+', label: 'Testimonials' },
  { value: 20, suffix: '+', label: 'Workers' },
];


// why choose us for a-start-plus page
export const whyChooseUsDetailedData: DetailedFeatureGridData = {
  tagline: 'WHY CHOOSE US',
  title: 'Why Choose A Star Plus?',
  description: 'At A Star Plus Pest Control, we don’t just get rid of pests, we build safer homes, support healthier environments, and create local impact. Here’s what makes us different from the rest.',
  features: [
    {
      icon: "/assets/residential/icons/a-star-plus/expert.png",
      title: 'Expert Training',
      description: 'Certified Professionals. Constantly Sharpened. Every A Star Plus technician is professionally trained and state-certified.',
      listItems: [
        'Weekly held drills',
        'Monthly recertifications',
        'Industry-leading equipment training',
      ],
      check: true
    },
    {
      icon: "/assets/residential/icons/a-star-plus/eco.png",
      title: 'Environmental Responsibility',
      description: 'Protecting People, Pets & The Planet. We use eco-conscious methods that balance effective pest control with environmental care.',
      listItems: [
        'Low-toxicity solutions',
        'Bee-safe practices',
        'Water-safe runoff protocols',
      ],
      check: true
    },
    {
      icon: "/assets/residential/icons/a-star-plus/commitment.png",
      title: 'Commitment to Education',
      description: 'We Empower Our Customers. We believe educated homeowners make better, longer-lasting pest decisions.',
      listItems: [
        'Ask our techs anything on-site',
        'Read our monthly pest blog',
        'Download our free seasonal pest guide',
      ],
      check: true
    },
    {
      icon: "/assets/residential/icons/a-star-plus/community.png",
      title: 'Community Involvement',
      description: 'Rooted in the Neighborhood. A Star Plus is locally owned — and community committed.',
      listItems: [
        'Sponsor youth sports',
        'Participate in neighborhood cleanups',
        'Offer free educational talks',
        'Giving back is part of our treatment plan.',
      ],
      check: true
    },
    {
      icon: "/assets/residential/icons/a-star-plus/franchise.png",
      title: 'Franchise Opportunities',
      description: 'Want to Run a Business That Makes a Difference? A Star Plus offers franchise partnerships to motivated individuals.',
      listItems: [
        'With full training, branding, and operational support, you’ll be helping people live pest-free — and building your own future.',
      ],
    },
    {
      icon: "/assets/residential/icons/a-star-plus/company-history.png",
      title: 'Company History',
      description: 'From One Family to Thousands of Homes. Founded with a single truck and a mission to make pest control smarter and safer.',
      listItems: [
        '10+ years of trusted protection',
        'Serving thousands across Texas & beyond',
      ],
      check: true
    },
  ],
};