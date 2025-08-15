export interface FeatureDetail {
  icon: string;
  title: string;
  description: string;
  listItems: string[];
}

export interface DetailedFeatureGridData {
  tagline: string;
  title: string;
  description: string;
  features: FeatureDetail[];
}