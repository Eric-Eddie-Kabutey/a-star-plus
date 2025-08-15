export interface PestInfoData {
  tagline: string;
  title: string;
  description: string;
  quickFacts: string[];
  imageUrl: string;
  imageAlt: string;
}

export const beetleData: PestInfoData = {
  tagline: 'BEETLES ARE MORE THAN A NUISANCE',
  title: 'They Destroy Property',
  description: 'Unlike occasional pests, beetles can cause extensive, often hidden, damage to food stores, wooden structures, furniture, fabrics, and even your landscape. Some infestations go unnoticed for months — until costly damage is already done.',
  quickFacts: [
    'Powderpost beetles destroy wood from the inside out',
    'Carpet beetles eat natural fibers in furniture and clothing',
    'Pantry beetles contaminate flour, grains, and dried goods',
    'Beetles can reproduce quickly and thrive in dark, undisturbed areas',
  ],
  imageUrl: '/assets/images/black-beetle.png', 
  imageAlt: 'A close-up of a black beetle on a piece of wood.',
};

// Define the type for the data structure if you haven't already
export interface PestSpecies {
  name: string;
  description: string;
  imageUrl: string;
}

export const beetleSpeciesData: PestSpecies[] = [
  {
    name: 'Carpet Beetles',
    description: 'Feed on natural fabrics and hide in closets, carpets, and upholstery',
    imageUrl: '/assets/icons/beetle/carpet-beetle.png', 
  },
  {
    name: 'Powderpost Beetles',
    description: 'Bore tiny holes in hardwood floors, beams, and furniture',
    imageUrl: '/assets/icons/beetle/powderpost-beetle.png', 
  },
  {
    name: 'Cigarette Beetles',
    description: 'Infest stored products like spices, pet food, and dried flowers',
    imageUrl: '/assets/icons/beetle/cigarette-beetle.png', 
  },
  {
    name: 'Grain Beetles',
    description: 'Invade pantries, often found in rice, cereals, and flour',
    imageUrl: '/assets/icons/beetle/grain-beetle.png', 
  },
  {
    name: 'Ground Beetles',
    description: 'Usually enter through cracks; more nuisance than destructive, but persistent',
    imageUrl: '/assets/icons/beetle/ground-beetle.png', 
  },
];