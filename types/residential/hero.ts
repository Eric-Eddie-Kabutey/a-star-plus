export interface HeroData {
    title: React.ReactNode;
    description: string;
    backgroundImage: string;
    overlay?: string; // Optional overlay color class, e.g., 'bg-black/60'   
}