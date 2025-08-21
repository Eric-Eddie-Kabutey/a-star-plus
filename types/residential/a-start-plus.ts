export interface FeatureDetail {
  icon: string;
  title: string;
  description: string;
  listItems: string[];
  check?: boolean;
}

export interface DetailedFeatureGridData {
  tagline: string;
  title: string;
  description: string;
  features: FeatureDetail[];
  id?: string;
}