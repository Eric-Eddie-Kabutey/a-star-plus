export interface CtaData {
    title: string;
    description?: string; // Optional description for the blue version
    taglineIcon?: React.ReactElement; // Optional icon for the red version
    taglineItems?: string[]; // Optional tagline items for the red version
    primaryAction: {
        text: string;
        href: string;
    };
    secondaryAction: {
        text: string;
        href: string;
    };
    colorScheme?: 'red' | 'blue'; // To control the theme
}
