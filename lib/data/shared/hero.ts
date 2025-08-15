export interface HeroData {
    title: React.ReactNode;
    description: string;
    backgroundImage: string;
    overlayColor?: string; // e.g., 'bg-black/50'
    primaryAction: {
        text: string;
        // The dialog content is passed as JSX for maximum flexibility
        dialogContent: React.ReactNode;
    };
    secondaryAction: {
        icon: React.ReactElement;
        text: string;
        href: string; // e.g., 'tel:1234567890'
    };
    buttonVariant?: 'blue' | 'red'; // To control the color theme
}