import { CtaData } from "@/types/share/cta";

// Data for the RED version
export const redCtaData: CtaData = {
    title: 'Ready to Experience the A Star Plus Difference?',    
    taglineItems: ['🛡️', 'Trusted', 'Local', 'Professional' ],
    primaryAction: {
        text: 'Book a Free Inspection',
        href: '/inspection',
    },
    secondaryAction: {
        text: 'Call Now: (123) 456-7890',
        href: 'tel:1234567890',
    },
    colorScheme: 'red',
};

// Data for the BLUE version
export const blueCtaData: CtaData = {
    title: 'Let’s Build a Clean & Pest-Free Facility',
    description: 'A Star Plus helps your business shine — inside and out.',
    primaryAction: {
        text: 'Book a Free Inspection',
        href: '/inspection',
    },
    secondaryAction: {
        text: 'Call Now: (123) 456-7890',
        href: 'tel:1234567890',
    },
    colorScheme: 'blue',
};