// a-star-plus cta 
export interface CtaData {
  title: string;  
  taglineItems: string[];
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction: {
    text: string;
    href: string;
  };
}