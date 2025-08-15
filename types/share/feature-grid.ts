interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

export interface FeatureGridProps {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  items: FeatureItem[];
  variant?: 'circularIcon' | 'card';
  cta?: {
    text: string;
    href: string;    
  };  
}