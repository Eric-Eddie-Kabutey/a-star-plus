import { FeatureGridDataWith, NestedListInfoData, PestSpecies } from "@/types/residential/termite-control";


export const termiteControlData: NestedListInfoData = {
  tagline: 'TERMITE CONTROL',
  title: 'Silent Destroyers, Stopped Before They Spread',
  mainList: [
    {
      text: 'Common Signs:',
      subItems: [
        'Mud tubes on walls or foundation',
        'Discarded wings near windows',
        'Hollow-sounding wood',
        'Blistering or bubbling paint',
      ],
      isNumberedSublist: false, // This is a bulleted list
    },
    {
      text: 'Our Treatment:',
      subItems: [
        'Thorough Inspection: We detect hidden colonies and wood damage.',
        'Baiting & Liquid Barriers: We install advanced baiting systems and apply termiticides around your foundation.',
        'Ongoing Monitoring: Regular checks to ensure termites don’t return.',
      ],
      isNumberedSublist: true, // This is a numbered list
    },
  ],
  imageUrl: '/assets/residential/images/termite-control.png',
  imageAlt: 'A close-up of a termite colony in soil and wood.',
};

export const tickControlData: NestedListInfoData = {
  tagline: 'TICKS',
  title: 'Bite Back Against Dangerous Parasites',
  description: 'Ticks carry serious diseases like Lyme, ehrlichiosis, and Rocky Mountain spotted fever. They hide in tall grass, wooded areas, and even pet fur.',
  mainList: [
    {
      text: 'Common Signs:',
      subItems: [
        'Ticks on pets, clothing, or skin after being outdoors',
        'Small red bite marks, sometimes with a bullseye rash',
        'Presence of deer or wild animals around the property',
      ],
      isNumberedSublist: false, // This is a standard bulleted sub-list
    },
    {
      text: 'Our Treatment:',
      subItems: [
        'Property Evaluation: We identify tick-prone zones like shaded lawns, fences, and woodpiles.',
        'Perimeter Sprays: We apply safe treatments to grass lines, walkways, and bushes.',
        'Pet-Friendly Advice: We work with pet owners to limit tick exposure inside and out.',
      ],
      isNumberedSublist: true, // This should be rendered as a, b, c...
    },
  ],
  imageUrl: '/assets/residential/images/tricks.png', // Placeholder image
  imageAlt: 'A close-up of a small black-legged tick on a person\'s finger.',
};

// 
export interface FeatureItem {
  icon: string; // Path to the icon image
  title: string;
  description: string;
}

export interface FeatureGridData {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  items: FeatureItem[];
  bottomNote?: { // New optional property for the banner
    icon: string;
    text: string;
  };
  cta?: {
    text: string;
    href: string;
  };
}

// termite data: circular card
export const termiteTreatmentData: FeatureGridDataWith = {
  tagline: 'TYPES OF TREATMENT',
  title: 'Types of Termite Treatment',
  description: 'Not all homes (or termites) are the same. We tailor the most effective treatment from the options below:',
  items: [
    {
      icon: '/assets/residential/icons/termite/pre-construction-treatment.png',
      title: 'Liquid Barrier Treatment',
      description: 'A protective chemical zone around your home’s foundation that kills termites upon contact.',
    },
    {
      icon: '/assets/residential/icons/termite/bait-station.png',
      title: 'Bait Stations',
      description: 'Discreet, underground bait systems that attract and eliminate the colony.',
    },
    {
      icon: '/assets/residential/icons/termite/foam-dust-treatment.png',
      title: 'Foam & Dust Treatment',
      description: 'Ideal for wall voids and hard-to-reach areas.',
    },
    {
      icon: '/assets/residential/icons/termite/wood-treatment.png',
      title: 'Wood Treatment',
      description: 'Preventative solution for vulnerable wood structures and framing.',
    },
    {
      icon: '/assets/residential/icons/termite/liquid-barrier-treatment.png',
      title: 'Pre-Construction Treatment',
      description: 'Termite protection applied before a structure is built.',
    },
  ],
  bottomNote: {    
      text: '✅ All treatments are EPA-approved, pet-safe, and backed by warranty.',
    style: 'success'
  },  
};

// termite data: card
export const termiteWarningSignsData: FeatureGridDataWith = {
  tagline: "TERMITE DAMAGE OFTEN GOES UNNOTICED UNTIL IT'S SEVERE",
  title: 'Termite Damage Warning Signs',
  items: [
    {
      icon: '/assets/residential/icons/termite/sagging-or-hollow.png',
      title: 'Sagging or hollow-sounding wood',
      description: '', // Description is not used in the "chip" variant
    },
    {
      icon: '/assets/residential/icons/termite/tight-window.png',
      title: 'Tight windows or doors (due to warped frames)',
      description: '',
    },
    {
      icon: '/assets/residential/icons/termite/blistering.png',
      title: 'Blistering paint or dark areas on walls',
      description: '',
    },
    {
      icon: '/assets/residential/icons/termite/mud-tubes.png',
      title: 'Mud tubes on walls, ceilings, or beams',
      description: '',
    },
    {
      icon: '/assets/residential/icons/termite/small-piles.png',
      title: 'Small piles of wings or frass (termite droppings)',
      description: '',
    },
  ],
  bottomNote: {    
    text: '💸 Termite damage can cost thousands in repairs. Early detection saves money and structure.',
    style: 'warning', // We specify the new style here
  },
};


export interface ComparisonRow {
  trait: string;
  itemA: string;
  itemB: string;
}

export interface ComparisonTableData {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  itemAName: string;
  itemBName: string;
  data: ComparisonRow[];
  bottomNote?: {    
    text: string;
    style?: 'success' | 'warning';
  };
}

// --- EXTRACTED DATA ---

export const flyingAntsVsTermitesData: ComparisonTableData = {
  tagline: 'KNOW YOUR ENEMY',
  title: 'Flying Ants vs. Termites',
  description: "Not sure if it's a termite or a flying ant? Here's how to tell:",
  itemAName: 'Flying Ants',
  itemBName: 'Termites',
  data: [
    { trait: 'Waist', itemA: 'Narrow and pinched', itemB: 'Broad and uniform' },
    { trait: 'Antennae', itemA: 'Bent (elbowed)', itemB: 'Straight' },
    { trait: 'Wings', itemA: 'Uneven sizes', itemB: 'Equal length' },
    { trait: 'Behavior', itemA: 'Mostly seen outdoors', itemB: 'Found near wood or inside' },
  ],
  bottomNote: {    
    text: '🧠 Pro Tip: Flying termites = potential swarm season and colony expansion.',
    style: 'success',
  },
};

// table data
export const termiteSpeciesData: {
  tagline: string;
  title: string;
  pests: PestSpecies[];
} = {
  tagline: 'KNOW YOUR ENEMY',
  title: 'Types of Termites',
  pests: [
    {
      name: 'Subterranean Termites',
      description: 'Live underground; most destructive species that require soil contact.',
      imageUrl: '/assets/residential/images/subterranean-termites.png',
    },
    {
      name: 'Drywood Termites',
      description: 'Infest dry wood; common in attics and furniture without soil contact.',
      imageUrl: '/assets/residential/images/dry-wood-termites.png', 
    },
    {
      name: 'Dampwood Termites',
      description: 'Thrive in moist, decaying wood; usually found outside structures.',
      imageUrl: '/assets/residential/images/dampwood-termites.png',
    },
    {
      name: 'Formosan Termites',
      description: 'Aggressive and hard to control; known for large swarms and rapid destruction.',
      imageUrl: '/assets/residential/images/formosan-termites.png',
    },
  ],
};


// termite swamp alert
export const termiteSwarmAlertData: FeatureGridData = {
  tagline: 'SWARM ALERT',
  title: 'Termite Swarm Alert',
  description: 'Swarmers are winged termites that fly out of a colony to start a new one, typically during spring or after rain.',
  items: [
    {
      icon: '/assets/shared/icons/weather.png',
      title: 'Discarded wings near windows',
      description: '', // Description is not used in this visual variant
    },
    {
      icon: '/assets/shared/icons/ice-water.png',
      title: 'Sudden swarm indoors or near lights',
      description: '',
    },
    {
      icon: '/assets/shared/icons/grasshopper.png',
      title: 'Flying insects with straight antennae and equal-length wings',
      description: '',
    },
  ],
};

export interface NumberedStepsData {
  tagline: string;
  title: React.ReactNode;
  description?: string;
  steps: string[];
}


// number of steps
export const termiteInvestmentData: NumberedStepsData = {
  tagline: 'CONTROL INVESTMENT',
  title: 'Termite Control Investment',
  description: 'Costs vary depending on several factors:',
  steps: [
    'Type of termite',
    'Severity of infestation',
    'Size of property',
    'Treatment method',
  ],
};