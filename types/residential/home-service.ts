export interface InfoPackageData {
  tagline: string;
  title: string;
  description: string;
  listHeading: string;
  includedItems: string[];
  bonusNote?: {    
    text: string;
  };
}