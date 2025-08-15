interface PestInfoData {
  tagline: string;
  title: string;
  description: string;
  quickFacts: string[];
  imageUrl: string;
  imageAlt: string;
}

export const cockroachData: PestInfoData = {
  tagline: 'COCKROACHES ARE MORE THAN JUST GROSS',
  title: "They're Dangerous.",
  description: 'Cockroaches are known carriers of disease, allergens, and bacteria. They reproduce rapidly, survive in the toughest conditions, and often stay hidden until the infestation is severe.\nDangers of Cockroaches:',
  quickFacts: [
    'Spread of salmonella, E. coli, and other pathogens',
    'Asthma triggers and allergy aggravators — especially in children',
    'Fast reproduction: one female can produce hundreds of offspring',
    'Thrive in kitchens, bathrooms, drains, basements, and behind appliances',
    'Difficult to eliminate without professional-grade treatment',
  ],
  imageUrl: '/assets/images/cockroaches.png', 
  imageAlt: 'A cockroach on a white surface with medicine bottles in the background.',
};

// common cockroaches
// lib/data.ts

// Define (or reuse) the type for a single pest species item
export interface PestSpecies {
  name: string;
  description: string;
  imageUrl: string;
}

export const cockroachSpeciesData: PestSpecies[] = [
  {
    name: 'American Cockroach',
    description: 'Large reddish-brown roaches found in sewers, basements, and kitchens.',
    imageUrl: '/assets/images/american-cockroach.png', // Placeholder
  },
  {
    name: 'German Cockroach',
    description: 'Small, fast, and the most common indoor species especially in apartment kitchens and restaurants.',
    imageUrl: '/assets/images/german-cockroach.png',
  },
  {
    name: 'Oriental Cockroach',
    description: 'Likes cool, damp areas like drains, under sinks, and crawl spaces.',
    imageUrl: '/assets/images/oriental-cockroach.png',
  },
  {
    name: 'Brown-Banded Cockroach',
    description: 'Found in dry locations and high places like ceilings or behind picture frames.',
    imageUrl: '/assets/images/brown-branded-cockroach.png',
  },
];
