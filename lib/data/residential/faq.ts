export interface FaqProps {
    question: string;
    answer: string;
}

// --- Data for the FAQ items ---
export const faqItems: FaqProps[] = [
  {
    question: "How much does your service cost?",
    answer: "Our service costs vary depending on the type and extent of the infestation, as well as the size of your property. We offer a free, no-obligation inspection and quote to provide you with an accurate price.",
  },
  {
    question: "How quickly do you respond?",
    answer: "We pride ourselves on our fast response times. For urgent situations, we offer same-day service to address your pest problems as quickly as possible and restore your peace of mind.",
  },
  {
    question: "Are your treatments safe?",
    answer: "Yes, the safety of your family and pets is our top priority. We use eco-friendly and industry-approved treatments that are highly effective against pests while being safe for use in homes and businesses.",
  },
  {
    question: "What Pests do you treat?",
    answer: "We treat a wide variety of common pests, including termites, roaches, ants, spiders, rodents, bed bugs, mosquitoes, and more. If you have a pest problem, chances are we have a solution for it.",
  },
];

// faq for crickets 
export const cricketFaqData: FaqProps[] = [
  {
    question: 'Why are crickets so loud at night?',
    answer: "Male crickets chirp to attract mates, and they're most active at night when temperatures cool down. The sound can seem amplified indoors due to acoustics.",
  },
  {
    question: 'Can they survive indoors all year?',
    answer: 'Yes, crickets can complete their life cycle indoors if they find adequate food, water, and shelter. This is why professional treatment is important.',
  },
  {
    question: 'Are crickets dangerous to my health?',
    answer: "Crickets aren't directly dangerous, but they can damage property and attract other pests. Their droppings can also cause allergic reactions in sensitive individuals.",
  },
  {
    question: 'Do I need regular treatment or just one visit?',
    answer: 'It depends on the severity and your specific situation. We offer both one-time treatments and seasonal prevention plans to keep crickets from returning.',
  },
];