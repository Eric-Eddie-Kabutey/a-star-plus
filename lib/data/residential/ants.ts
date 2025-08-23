export interface AntDataProps {
    tagline: string;
    title: string;
    description: string;
    quickFacts: string[];
    imageUrl: string;
    imageAlt: string;
}

export const antData: AntDataProps = {
  tagline: 'Why Ants Are a Serious Issue',
  title: 'Ants Are Small, But They Cause Big Problems',
  description: 'Ants might seem harmless, but they can contaminate food, damage property, and even pose health risks. Carpenter ants destroy wood. Fire ants bite. Sugar ants invade pantries. Once inside, ants leave a scent trail for others to follow — turning a minor annoyance into a major infestation within days.',
  quickFacts: [
    'Ants contaminate food with bacteria as they forage',
    'Fire ant stings cause allergic reactions in sensitive individuals',
    'Carpenter ants hollow out wooden structures over time',
  ],
  imageUrl: '/assets/residential/images/why-ants-sec-image.png', 
  imageAlt: 'A close-up of many ants swarming on a surface.',
};

export const bedBugData: AntDataProps = {
  tagline: 'Bed Bugs Are More Than a Nuisance',
  title: "They're a Health Hazard",
  description: 'Bed bugs feed on blood while you sleep, leaving behind itchy welts, allergic reactions, and psychological stress. Unlike other pests, they hide deep in mattresses, furniture, and walls — making them incredibly hard to detect and even harder to eliminate without professional help.',
  quickFacts: [
    'One female can lay 250+ eggs in her lifetime',
    'Bed bugs can survive for months without feeding',
    'DIY sprays often scatter, not kill, infestations',
    'Found in homes, hotels, schools, offices, and even public transport',
  ],
  imageUrl: '/assets/residential/images/bed-bugs-treatment.png', 
  imageAlt: 'A pest control professional in a hazmat suit treating a bed.',
};

export interface antSpeciesDataProps {
  name: string;
  description: string;
  imageUrl: string;
}

export const antSpeciesData = [
  {
    name: 'Fire Ants',
    description: 'Aggressive, reddish ants known for painful stings and mounds in lawns.',
    imageUrl: '/assets/residential/images/fire-ant.png',
  },
  {
    name: 'Carpenter Ants',
    description: 'Large black ants that damage wood structures.',
    imageUrl: '/assets/residential/images/carpenter-ant.png',
  },
  {
    name: 'Odorous House Ants',
    description: 'Tiny ants that emit a foul smell when crushed.',
    imageUrl: '/assets/residential/images/odorous-house-ant.png',
  },
  {
    name: 'Pharaoh Ants',
    description: 'Difficult to control and known for contaminating food and sterile environments.',
    imageUrl: '/assets/residential/images/pharaoh-ant.png',
  },
  {
    name: 'Pavement Ants',
    description: 'Nest in cracks and crevices; often found on sidewalks and kitchens.',
    imageUrl: '/assets/residential/images/pavement-ant.png', 
  },
];