interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

// Interface for the Call-to-Action button
interface Cta {
  text: string;
  href: string;
}

// The main interface for the entire data object
export interface WhyUsData {
  tagline: string;
  title: string;
  items: FeatureItem[];
  cta: Cta;
}