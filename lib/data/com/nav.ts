import { NavigationItem } from '@/types/share/nav'

// commercial site nav data
export const commercialNavigationData: NavigationItem[] = [
	{
		href: '/commercial/industries',
		label: 'Industries',
		submenu: {
			title: 'Industries',
			columns: [
				{
					links: [
						{
							href: '/commercial/industries#our-industries',
							label: 'Food & Beverage Processing',
						},
            { href: '/commercial/industries#our-industries', label: 'Foodservice' },
            { href: '/commercial/industries#our-industries', label: 'Government' },
            { href: '/commercial/industries#our-industries', label: 'Healthcare' },
            { href: '/commercial/industries#our-industries', label: 'Hospitality' },
            { href: '/commercial/industries#our-industries', label: 'Logistics & Warehousing' },
					],
				},
				{
					links: [
						{ href: '/industries/manufacturing', label: 'Manufacturing' },
						{ href: '/industries/multifamily', label: 'Multifamily' },
						{
							href: '/industries/office-property',
							label: 'Office Property Management',
						},
						{ href: '/industries/pharmaceutical', label: 'Pharmaceutical' },
						{ href: '/industries/retail', label: 'Retail' },
						{ href: '/industries/education', label: 'Education' },
					],
				},
				{
					links: [{ href: '/industries/other', label: 'Other Industries' }],
				},
			],
		},
	},
	{
		href: '/commercial/pest-control-service',
		label: 'Pest Control Service',
		submenu: {
			title: 'Pest Control Service',
			columns: [
				{
					links: [
						{
              href: '/commercial/pest-control-service#our-core-services',
							label: 'Bird Control',
						},
            { href: '/commercial/pest-control-service#our-core-services', label: 'Fly Control' },
            { href: '/commercial/pest-control-service#our-core-services', label: 'Rodent Control' },
            { href: '/commercial/pest-control-service#our-core-services', label: 'Mosquito Control' },
						{
              href: '/commercial/pest-control-service#our-core-services',
							label: 'Integrated Pest Management',
						},
            { href: '/commercial/pest-control-service#our-core-services', label: 'Bed Bugs Services' },
					],
				},
				{
					links: [
						{
              href: '/commercial/pest-control-service#our-core-services',
							label: 'Bed Bug ProAct for Hospitality',
						},
						{
              href: '/commercial/pest-control-service#our-core-services',
							label: 'Element: Green Pest Control',
						},
						{
							href: '/commercial/pest-control-service#our-core-services',
							label: 'Stored Product Pest Control',
						},
            { href: '/commercial/pest-control-service#termite-control', label: 'Termite Control' },
					],
				},
			],
		},
	},
	{
		href: '/commercial/commercial-service',
		label: 'Commercial Service',
		submenu: {
			title: 'Commercial Service',
			columns: [
				{
					links: [
						{
              href: '/commercial/commercial-service#facilityServices',
							label: 'Disinfectant Cleaning',
						},
						{
              href: '/commercial/commercial-service#facilityServices',
							label: 'Exclusion Services',
						},
						{
              href: '/commercial/commercial-service#facilityServices',
							label: 'Floor & Drain Cleaning',
						},
            { href: '/commercial/commercial-service#facilityServices', label: 'Restroom Care' },
						{
              href: '/commercial/commercial-service#facilityServices',
							label: 'Odour Control & Scent Services',
            },
            {
              href: '/commercial/commercial-service#whyUs',
              label: 'Why A Star Plus Stands Out',
            },
					],
				},
			],
		},
	},
	{
		href: '/commercial/a-star-plus-difference',
		label: 'A Star Plus Difference',
		submenu: {
			title: 'A Star Plus Difference',
			columns: [
				{
					links: [
						{
							href: '/commercial/a-star-plus-difference#commercialTripleGuarantee',
							label: 'Commercial Triple Guarantee',							
						},
						{
              href: '/commercial/a-star-plus-difference#goldMediaQA',
							label: 'Gold Medal QA',
						},
						{
							href: '/commercial/a-star-plus-difference#trainedSpecialists',
							label: 'Trained Specialists',
						},
            { href: '/commercial/a-star-plus-difference#nationalAccounts', label: 'National Accounts' },
						{
              href: '/commercial/a-star-plus-difference#serviceDocumentation',
							label: 'Service Documentation',
						},
            { href: '/commercial/a-star-plus-difference#serviceDocumentation', label: 'Staff Training' },
					],
				},
				{
					links: [
            { href: '/commercial/a-star-plus-difference#faq', label: 'FAQ' },
						{ href: '#', label: 'Field Notes Blog' },
					],
				},
			],
		},
	},
]
