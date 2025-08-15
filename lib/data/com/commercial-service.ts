import { FacilityServicesData } from "@/types/com/service";

// our service - facility service
export const facilityServicesData: FacilityServicesData = {
    tagline: 'OUR SERVICES',
    title: 'Our Facility Services',
    description: 'Comprehensive solutions to keep your facility clean, safe, and pest-free',
    services: [
        {
            icon: "/assets/com/icons/disinfectant-cleaning.png",
      title: 'Disinfectant Cleaning',
            description: 'Kill Germs, Create Confidence. Our hospital-grade disinfectant service targets bacteria, viruses (including COVID-19), and fungi that thrive on high-touch surfaces in busy environments.',
            features: [
                'EPA-registered disinfectants',
                'ULV fogging & electrostatic spray options',
                'Ideal for offices, schools, gyms & healthcare facilities',
                'Safe for use around sensitive areas',
            ],
            summary: 'Protect your brand and your people, with scheduled or one-time deep disinfection.',
        },
        {
            icon: "/assets/com/icons/exclusive-services.png",
      title: 'Exclusion Services',
            description: 'Seal Pests Out — Permanently. Exclusion is the physical blocking of pest entry points. We inspect your facility for vulnerabilities and reinforce it against rodents, insects, and birds.',
            features: [
                'Custom sealing of cracks, gaps, vents & utility lines',
                'Door sweeps, screens & barrier installation',
                'Ideal for foodservice, warehouses & healthcare buildings',
                'Long-term defense against recurring infestations',
            ],
            summary: 'Prevention is the best form of control.',
        },
        {
            icon: "/assets/com/icons/floor-drain-cleaning.png",
      title: 'Floor & Drain Cleaning',
            description: 'Stop Pests at the Source. Organic buildup in drains and on floors is a top attractant for pests like flies and cockroaches. Our industrial-grade floor and drain cleaning service removes biofilm and odors before they lead to infestations.',
            features: [
                'Deep enzyme-based cleaning for drains',
                'Degreasing for kitchen & food-prep floors',
                'Reduces fly breeding and bacterial risk',
                'Helps meet FDA and local hygiene compliance',
            ],
            summary: 'Clean floors = fewer pests = better inspections.',
        },
        {
            icon: "/assets/com/icons/restroom-care.png",
      title: 'Restroom Care',
            description: 'Sparkling, Fresh, Professional. A clean restroom is a direct reflection of your business. Our professional restroom service keeps facilities sanitized, stocked, and smelling fresh.',
            features: [
                'Touchpoint disinfection & fixture deep cleaning',
                'Odor neutralizers & auto-dispensing solutions',
                'Supply replenishment (tissue, soap, sanitizers)',
                'Maintenance reports with every service',
            ],
            summary: 'Protect public health and customer trust with consistent care.',
        },
        {
            icon: "/assets/com/icons/odour-control-scent-services.png",
      title: 'Odour Control & Scent Services',
            description: 'Make Every First Impression Count. Bad smells create lasting negative impressions. We offer tailored scenting solutions that neutralize odors and replace them with clean, pleasant aromas.',
            features: [
                'Commercial scent dispensers',
                'Neutralizing technology for smoke, waste & mildew',
                'Aromatherapy options for retail & hospitality',
                'Custom scent branding available',
            ],
            summary: 'Prevention is the best form of control.',
        },
        {
            icon: "/assets/com/icons/custom-service-plans.png",
      title: 'Custom Service Plans',
            description: 'We understand every facility has unique needs. Our experts will work with you to create a customized service plan that fits your requirements and budget.',
            isHighlighted: true,
            nestedCard: {
                title: 'Why Choose A Star Plus?',
                items: [
                    'Trained, certified professionals',
                    'Scalable service contracts',
                    'Fast scheduling',
                    '100% satisfaction guarantee',
                ],
            },
        },
    ],
};
