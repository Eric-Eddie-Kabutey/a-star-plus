export interface HeroProps {
    title: React.ReactNode;
    description: string;
    backgroundImage: string;
    overlay?: string; // Optional: e.g., 'bg-black/50'
    action: string[]; 
}