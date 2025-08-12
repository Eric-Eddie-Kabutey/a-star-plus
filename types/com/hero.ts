// Type for the optional small feature boxes at the bottom
export interface HeroFeature {
  title: string;
  description: string;
}

// Main type for the entire component's data
export interface VersatileHeroData {
  title: React.ReactNode;
  description: string;
  actions: React.ReactNode; // Flexible prop for buttons
  imageUrl: string;
  imageAlt: string;
  features?: HeroFeature[]; // Optional array for the small boxes
  cornerBorderPosition?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}