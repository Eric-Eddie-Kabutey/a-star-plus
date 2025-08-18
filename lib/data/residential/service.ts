export interface ServiceCardData {
  imageSrc: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

export const servicesData: ServiceCardData[] = [
  {
    imageSrc: '/assets/residential/images/service-business.png',
    title: 'Extensive Pest Control For Businesses',
    description: 'Comprehensive pest control solutions to protect your business, ensuring healthy environment and maximum productivity.',
    learnMoreLink: '#',
  },
  {
    imageSrc: '/assets/residential/images/service-home.png',
    title: 'Extensive Home Fumigation',
    description: 'Thorough and effective home fumigation to eliminate pests at all stages, ensuring a safe and pest-free living space.',
    learnMoreLink: '#',
  },
  {
    imageSrc: '/assets/residential/images/service-urgent.png',
    title: 'Fast Response to Urgent Pest Situation',
    description: 'Quick and effective pest control when you need it most. A star Plus pest control responds fast to eliminate urgent infestations and restore your peace of mind.',
    learnMoreLink: '#',
  },
];