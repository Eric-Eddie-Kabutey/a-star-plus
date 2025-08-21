import { DocumentationAndTrainingData, GuaranteeData, QaProgramData, SpecialistsSectionData } from "@/types/com/service";

// our promise data
export const tripleGuaranteeData: GuaranteeData = {
    tagline: 'OUR PROMISE',
    title: 'Commercial Triple Guarantee',
    description: 'We stand behind our work with three powerful guarantees that protect your business.',
    guarantees: [
        {
            icon: "/assets/com/icons/re-service-guarantee.png",
      title: 'Re-Service Guarantee',
            description: 'If pests return between scheduled visits, we’ll return immediately at no additional charge.',
            bannerText: 'No questions asked - we’ll make it right',
            colorScheme: 'blue',
        },
        {
            icon: "/assets/com/icons/response-guarantee.png",
      title: 'Response Guarantee',
            description: 'We’ll respond to urgent pest issues within 24 hours—because emergencies can’t wait.',
            bannerText: '24/7 emergency hotline available',
            colorScheme: 'green',
        },
        {
            icon: "/assets/com/icons/compliance-guarantee.png",
      title: 'Compliance Guarantee',
            description: 'We help you stay audit-ready for health and safety inspections with thorough documentation.',
            bannerText: 'Protecting your reputation as if it were our own',
            colorScheme: 'purple',
        },
    ],
};

// our assurance data
export const qaProgramData: QaProgramData = {
    tagline: 'QUALITY ASSURANCE',
    title: 'Gold Medal QA Program',
    description: 'Our proprietary quality assurance system ensures service excellence at every visit, every time.',
    features: [
        {
            title: 'Routine Internal Audits',
            description: 'Regular quality checks to maintain our high standards',
        },
        {
            title: 'Detailed Inspection Reports',
            description: 'Comprehensive documentation of every service visit',
        },
        {
            title: 'Third-Party Benchmarking',
            description: 'Independent reviews to validate our performance',
        },
        {
            title: 'QA Scorecards',
            description: 'Transparent metrics for continuous improvement',
        },
    ],
    imageUrl: '/assets/com/images/our-assurance.png',
    imageAlt: 'Two professionals working on laptops in a bright, modern office.',
};

// specialization features
export const specialistsData: SpecialistsSectionData = {
    tagline: 'OUR TEAM',
    title: 'Trained Commercial Specialists',
    description: 'Certified professionals backed by ongoing training in industry-specific protocols.',
    features: [
        {
            icon: "/assets/com/icons/licensed-vetted.png",
      title: 'Licensed & Vetted',
            description: 'All technicians undergo thorough background checks and maintain state certifications.',
        },
        {
            icon: "/assets/com/icons/ongoing-training.png",
      title: 'Ongoing Training',
            description: 'Continuous education in IPM, safety protocols, and industry regulations.',
        },
        {
            icon: "/assets/com/icons/digital-tools.png",
      title: 'Digital Tools',
            description: 'Real-time mobile reporting for immediate documentation and communication.',
        },
        {
            icon: "/assets/com/icons/industry-specialist.png",
      title: 'Industry Specialists',
            description: 'Technicians assigned by vertical (healthcare, foodservice, etc.) for expert service.',
        },
    ],
    ctaBanner: {
        title: 'Not Just a Technician — A Trusted Partner',
        description: 'Our specialists understand that pest control impacts your brand reputation, customer experience, and regulatory compliance.',
        button: {
            text: 'Book a Free Inspection',
            href: '/inspection',
        },
    },
};

// national service data
export const nationalAccountsData: QaProgramData = {
    tagline: 'NATIONAL SERVICE',
    title: 'National Accounts',
    description: 'One trusted partner delivering consistent service across all your locations.',
    features: [
        {
            title: 'Centralized Billing',
            description: 'Simplified accounting with consolidated invoices',
        },
        {
            title: 'Standardized Service',
            description: 'Uniform protocols across all locations',
        },
        {
            title: 'Nationwide Coverage',
            description: 'Local support with national consistency',
        },
        {
            title: 'Custom Programs',
            description: 'Tailored solutions for franchises and chains',
        },
    ],
    imageUrl: '/assets/com/images/national-service.png',
    imageAlt: 'A person using a calculator on a desk, representing national accounts and billing.',
};

// documentation
export const documentationAndTrainingData: DocumentationAndTrainingData = {
    documentation: {
        tagline: 'DOCUMENTATION',
        title: 'Service Documentation',
        description: 'Clear, digital records that keep you informed and audit-ready 24/7.',
        features: [
            {
                title: 'Real-Time Reports',
                description: 'Digital service reports available immediately after each visit',
            },
            {
                title: 'Audit Logs',
                description: 'Comprehensive pest activity documentation for inspections',
            },
            {
                title: 'Product Records',
                description: 'Detailed documentation of all products used',
            },
            {
                title: 'Client Portal',
                description: 'Secure online access to all your service records',
            },
        ],
    },
    training: {
        tagline: 'EDUCATION',
        title: 'Staff Training',
        description: 'We train your team to be the first line of defense against pests.',
        optionsCard: {
            title: 'On-Site & Virtual Training Options',
            description: 'Customized education for your staff on critical pest prevention practices.',
            tags: [ 'Food Storage', 'Sanitation', 'Early Signs', 'Reporting', 'Seasonal Risks' ],
        },
        proTip: {
            icon: '/assets/com/icons/lightbulb-green.svg',
            text: 'Pro Tip: Businesses with trained staff experience 60% fewer pest incidents than those without training programs.',
        },
    },
};
