interface PestInfoData {
  tagline: string;
  title: string;
  description: string;
  quickFacts: string[];
  imageUrl: string;
  imageAlt: string;
}

export const cricketInfoData: PestInfoData = {
  tagline: 'CRICKETS ARE MORE THAN JUST GROSS',
  title: 'More Than Just a Noisy Nuisance',
  description: 'While their chirping may be annoying, crickets can cause more harm than you think. These pests are nocturnal and often enter buildings in large numbers, especially in late summer and fall. Once inside, they can:',
  quickFacts: [
    'Damage fabrics like curtains, clothes, and upholstery',
    'Chew on paper and plants',
    'Attract predators like spiders and scorpions',
    'Cause sleepless nights with loud chirping',
    'Lay eggs indoors, leading to larger infestations',
  ],
  imageUrl: '/assets/residential/images/cricket.png',
  imageAlt: 'A close-up of a brown cricket on a wooden surface.',
};