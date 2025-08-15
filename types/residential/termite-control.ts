type ListItem = string;

export interface ListSection {
  heading: string;
  items: ListItem[];
  isNumbered?: boolean; // Optional flag to handle numbered lists
}

export interface MultiListInfoData {
  tagline: string;
  title: string;
  lists: ListSection[];
  imageUrl: string;
  imageAlt: string;
}

export interface MainListItem {
  text: string;
  subItems: string[];
  isNumberedSublist?: boolean; // Flag to render sublist as a, b, c...
}

// Main type for the entire component's data
export interface NestedListInfoData {
  tagline: string;
  title: string;
  description?: string; // description is optional
  mainList: MainListItem[];
  imageUrl: string;
  imageAlt: string;
}

// Type for a single feature item in the grid
export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

// Type for the optional bottom note/banner
export interface BottomNote {  
  text: string;
  style?: 'success' | 'warning';
}

// The main, authoritative type for the entire FeatureGrid section
export interface FeatureGridDataWith {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  items: FeatureItem[];
  bottomNote?: BottomNote; // Use the BottomNote type here
  cta?: {
    text: string;
    href: string;
  };
}

export interface PestSpecies {
  name: string;
  description: string;
  imageUrl: string;
}

// Optional: A type for the entire section's data for better organization
export interface PestSpeciesSectionData {
  tagline: string;
  title: string;
  pests: PestSpecies[];
}