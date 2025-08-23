interface ContentBlock {
  subheading?: string;
  text: string;
}

export interface ContentSectionData {
  tagline: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  content: ContentBlock[];
}

// data for the Earwigs section
export const earwigData: ContentSectionData = {
  tagline: 'KNOW MORE ABOUT EARWIGS',
  title: 'What Are Earwigs?',
  imageUrl: '/assets/residential/images/earwigs.png',
  imageAlt: 'A close-up of an earwig on a woven basket surface.',
  content: [
    {
      text: 'Earwigs are nocturnal pests with distinctive pincers on their rear and a tendency to hide in damp, dark places. Though mostly harmless to humans, they can damage plants and become a significant nuisance indoors, especially in bathrooms and basements.',
    },
    {
      subheading: "Why They're Problematic?",
      text: 'These resilient pests multiply quickly and can cause extensive damage to garden plants and seedlings. Once they establish indoor colonies, they become increasingly difficult to eliminate without professional intervention.',
    },
  ],
};