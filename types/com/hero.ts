// Type for the optional small feature boxes at the bottom
export interface HeroFeature {
  title: string;
  description: string;
}

// Main type for the entire component's data
export interface VersatileHeroData {
  title: React.ReactNode;
  subTitle?: string;
  description: string;
  actions: string[];
  imageUrl: string;
  imageAlt: string;
  features?: HeroFeature[]; // Optional array for the small boxes
  cornerBorderPosition?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export interface SolutionCard {
  icon: string; // Path to the icon image
  title: string;
}

// Main type for the entire section's data
export interface IndustrySolutionsData {
  tagline: string;
  title: string;
  description: string;
  solutions: SolutionCard[];
  imageUrl: string;
  imageAlt: string;
}