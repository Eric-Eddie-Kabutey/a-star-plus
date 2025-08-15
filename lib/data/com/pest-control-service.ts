import { CoreServicesData, InfoSectionWithCtaData } from "@/types/com/service";

// core services
export const coreServicesData: CoreServicesData = {
    tagline: 'OUR SERVICES',
    title: 'Explore Our Core Services',
    description: 'Designed to meet the specific needs of your commercial environment',
    services: [
        {
            icon: "/assets/com/icons/bird-control.png",
      title: 'Bird Control',
            description: 'Humane Solutions for Nuisance Birds. Pest birds cause structural damage, contaminate surfaces, and pose health risks.',
            features: [ 'Netting, spikes & electric track systems', 'Rooftop, signage & ledge protection', 'Sanitation & droppings removal' ],
        },
        {
            icon: "/assets/com/icons/fly-control.png",
      title: 'Fly Control',
            description: 'Rapid Response for Fast-Breeding Flies. Flies spread disease and disrupt business especially in foodservice, healthcare, and hospitality.',
            features: [ 'Fly lights & traps', 'Drain & sanitation treatments', 'Exclusion around entry points' ],
        },
        {
            icon: "/assets/com/icons/rodent-control.png",
      title: 'Rodent Control',
            description: 'Smart Monitoring, Total Elimination. Rodents chew wires, contaminate food, and damage reputations.',
            features: [ 'Bait stations & smart traps', 'Interior & exterior sealing', 'Digital activity reports' ],
        },
        {
            icon: "/assets/com/icons/mosquito-control.png",
      title: 'Mosquito Control',
            description: 'Outdoor Comfort for Employees & Guests. Mosquitoes transmit harmful diseases and thrive near commercial properties with standing water.',
            features: [ 'Larvicide applications', 'Standing water treatment', 'Fogging for outdoor zones' ],
        },
        {
            icon: "/assets/com/icons/integrated-pest-management.png",
      title: 'Integrated Pest Management (IPM)',
            description: 'Proactive, Sustainable, and Smart. Our IPM approach combines monitoring, prevention, and eco-friendly treatment to reduce past risk long-term.',
            features: [ 'Non-chemical methods first', 'Custom risk-based plans', 'Ongoing evaluation & education' ],
        },
        {
            icon: "/assets/com/icons/bed-bug-services.png",
      title: 'Bed Bug Services',
            description: 'Discreet Detection, Targeted Eradication. Bed bugs spread quickly and ruin customer trust.',
            features: [ 'K-9 detection available', 'Steam, chemical, or heat treatments', 'Emergency & scheduled service' ],
        },
        {
            icon: "/assets/com/icons/bed-bug-pro-act-(for-hospitality).png",
      title: 'Bed Bug ProAct (for Hospitality)',
            description: 'Ongoing Defense for Hotels & Rentals. This proactive plan ensures your hotel rooms stay bug-free, guest-ready, and protected from reputation damage.',
            features: [ 'Regular inspections', 'Rapid-response units', 'Staff training available' ],
        },
        {
            icon: "/assets/com/icons/element-green-pest-control.png",
      title: 'Element: Green Pest Control',
            description: 'Eco-Friendly Solutions Without Compromise. Our Element program uses botanically-based, low-toxicity products for businesses prioritizing sustainability.',
            features: [ 'Organic-certified options', 'Ideal for schools & wellness spaces', 'Indoor-safe, pet-safe' ],
        },
        {
            icon: "/assets/com/icons/stored-product-pest-control.png",
      title: 'Stored Product Pest Control',
            description: 'Preserve Your Inventory, Prevent Infestation. Protect your goods from beetles, weevils, and moths. Our program is ideal for warehouses, grocers, and manufacturers.',
            features: [ 'Targeted treatments for pantry pests', 'Sifter inspections & traps', 'Compliance with FDA/USDA standards' ],
        },
    ],
};

// termite control
export const commercialTermiteData: InfoSectionWithCtaData = {
    tagline: 'TERMITE CONTROL',
    title: 'Commercial-Grade Termite Defence',
    description: 'Structural termites can silently cause massive damage. We offer industry-leading termite detection and treatment for offices, warehouses, and commercial buildings.',
    features: [
        'Subterranean & drywood termite control',
        'Baiting systems & liquid barriers',
        'Annual termite warranty available',
    ],
    imageUrl: '/assets/com/images/termite-control.png',
    imageAlt: 'A close-up of a termite colony in soil and wood.',
    cta: {
        text: 'Protect Your Property',
        href: '/contact', 
    },
};