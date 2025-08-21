export interface ReasonItem {
  icon: string;
  title: string;
  description: string;
}

// Main type for the entire section's data
export interface KeyReasonsData {
  tagline: string;
  title: string;
  description: string;
  reasons: ReasonItem[];
  imageUrl: string;
  imageAlt: string;
}

// types for industry we server
// Type for a single industry card
export interface Industry {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

// Main type for the entire section's data
export interface IndustrySolutionsData {
  tagline: string;
  title: React.ReactNode;
  description: string;
  industries: Industry[];
}

// How it works
// Type for a single step in the approach
export interface ApproachStep {
  title: string;
  image: string;   
}

// Main type for the entire section's data
export interface ApproachData {
  tagline: string;
  title: string;
  description: string;
  steps: ApproachStep[];
  cta: {
    text: string;
    href: string;
  };
}

// types for business protection
export interface BusinessProtectionData {
  tagline: string;
  title: React.ReactNode;
  cta: {
    text: string;
    href: string;
  };
  listHeading: string;
  listItems: string[];
  imageUrl: string;
  imageAlt: string;
}

// tested and trusted by data for commercial/industry
// Type for a single feature in the grid
export interface TrustFeature {
  icon: string;
  title: string;
  description: string;
}

// Main type for the entire section's data
export interface TrustFeaturesData {
  tagline: string;
  title: string;
  description: string;
  features: TrustFeature[];
  id?: string;
}

// our industry data
// Type for a single industry card
export interface IndustryCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  listItems: string[];
}

// Main type for the entire section's data
export interface IndustryProtectionData {
  tagline: string;
  title: string;
  description?: string;
  industries: IndustryCard[];
}

// our proven approach
export interface FeatureDetailItem {
  icon: string;
  title: string;
  description: string;
}

// The main type for the entire section's data
export interface CommercialApproachData {
  mainTitle: string;
  mainDescription: string;
  processSteps: FeatureDetailItem[]; // For the list on the left
  whyChooseUs: { // For the top-right card
    title: string;
    items: FeatureDetailItem[];
  };
  compliance: { // For the bottom-right card
    title: string;
    description: string;
    items: string[];
  };
}


// pest-control-service: 
// Type for a single service card
export interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Main type for the entire section's data
export interface CoreServicesData {
  tagline: string;
  title: string;
  description: string;
  services: ServiceDetail[];
}

// info-section
export interface InfoSectionWithCtaData {
  tagline: string;
  title: string;
  description: string;
  features: string[]; // A simple array of strings for the bullet points
  imageUrl: string;
  imageAlt: string;
  cta: {
    text: string;
    href: string;
  };
}


// commercial services page
// Type for a single service card
export interface ServiceCardData {
  icon: string;
  title: string;
  description: string;
  isHighlighted?: boolean; // A flag to control the style for the special card
  features?: string[]; // For standard cards
  summary?: string; // Optional summary line for standard cards
  nestedCard?: { // For the highlighted card's inner content
    title: string;
    items: string[];
  };
}

// Main type for the entire section's data
export interface FacilityServicesData {
  tagline: string;
  title: string;
  description: string;
  services: ServiceCardData[];
}

// Why US - why A Star Plus Stand Out
// Type for a single feature on the left
export interface StandoutFeature {
  icon: string;
  title: string;
  description: string;
}

// Type for a single testimonial on the right
export interface Testimonial {
  quote: string;
  attribution: string;
}

// Main type for the entire section's data
export interface WhyUsData {
  tagline: string;
  title: React.ReactNode;
  description: string;
  features: StandoutFeature[];
  testimonials: {
    title: string;
    items: Testimonial[];
  };
}


// A STAR PLUS DIFFERENCE
// our promise data
// Type for a single guarantee card
export interface GuaranteeItem {
  icon: string;
  title: string;
  description: string;
  bannerText: string;
  colorScheme: 'blue' | 'green' | 'purple';
}

// Main type for the section's data
export interface GuaranteeData {
  tagline: string;
  title: string;
  description: string;
  guarantees: GuaranteeItem[];
}

// our assurance
// Type for a single feature in the QA program list
export interface QaFeature {
  title: string;
  description: string;
}

// Main type for the entire section's data
export interface QaProgramData {
  tagline: string;
  title: string;
  description: string;
  features: QaFeature[];
  imageUrl: string;
  imageAlt: string;
}

// specialization features
// Type for a single feature in the grid
export interface SpecialistFeature {
  icon: string;
  title: string;
  description: string;
}

// Main type for the entire section's data
export interface SpecialistsSectionData {
  tagline: string;
  title: string;
  description: string;
  features: SpecialistFeature[];
  ctaBanner: {
    title: string;
    description: string;
    button: {
      text: string;
      href: string;
    };
  };
}

// documentation
// Type for a single feature point in the documentation list
export interface FeaturePoint {
  title: string;
  description: string;
}

// Main type for the entire section's data
export interface DocumentationAndTrainingData {
  documentation: {
    tagline: string;
    title: string;
    description: string;
    features: FeaturePoint[];
  };
  training: {
    tagline: string;
    title: string;
    description: string;
    optionsCard: {
      title: string;
      description: string;
      tags: string[];
    };
    proTip: {
      icon: string;
      text: string;
    };
  };
}