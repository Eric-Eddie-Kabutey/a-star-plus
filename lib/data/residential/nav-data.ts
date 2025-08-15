// src/lib/navData.ts

export interface NavLink {
	href: string
	label: string
}

export interface SubMenuColumn {
	links: NavLink[]
}

export interface SubMenu {
	title: string
	columns: SubMenuColumn[]
}

export interface NavigationItem {
	href: string
	label: string
	submenu?: SubMenu
}

// residential site nav data
export const navigationData: NavigationItem[] = [
	{
		href: '#pest-control',
		label: 'Pest Control',
		submenu: {
			title: 'Targeted Pest Control',
			columns: [
				{
					links: [
						{ href: '/ants', label: 'Ants' },
						{ href: 'bed-bugs', label: 'Bed Bugs' },
						{ href: '/beetles', label: 'Beetles' },
						{ href: '/centipedes-millipedes', label: 'Centipedes & Millipedes' },
						{ href: '/cockroaches', label: 'Cockroaches' },
						{ href: '/carpenter-ants', label: 'Carpenter Ants' },
					],
				},
				{
					links: [
						{ href: '/crickets', label: 'Crickets' },
						{ href: '/earwigs', label: 'Earwigs' },
						{ href: '/fleas', label: 'Fleas' },
						{ href: 'flies', label: 'Flies' },
						{ href: '/mites', label: 'Mites' },
						{ href: '/mosquitoes', label: 'Mosquitoes' },
					],
				},
				{
					links: [
						{ href: '/moths', label: 'Moths' },
						{ href: '/rodents', label: 'Rodents' },
						{ href: '/silverfish', label: 'Silverfish' },
						{ href: '/spiders', label: 'Spiders' },
						{ href: '/stinging-pets', label: 'Stinging Pests' },
						{ href: '/stink-bugs', label: 'Stink Bugs' },
					],
				},
				{
					links: [
						{ href: '/termite-control', label: 'Termite Control' },
						{ href: '/tricks', label: 'Ticks' },
					],
				},
			],
		},
	},
	{
		href: '/termite-controls',
		label: 'Termite Control',
		submenu: {
			title: 'Termite Control',
			columns: [
				{
					links: [
						{ href: '#types-of-termites', label: 'Types of Termite Treatment' },
						{ href: '#termite-damage', label: 'Termite Damage' },
						{ href: '#flying-ant-av-termite', label: 'Flying Ants vs. Termites' },
						{ href: '#termite-prevent-tips', label: 'Termite Prevention Tips' },
						{ href: '#types-of-termites', label: 'Types of Termites' },
						{ href: '#termite-swarm', label: 'Termite Swarm' },
					],
				},
				{
					links: [
						{ href: '#', label: 'How Do Termites Get in Your House?' },
						{ href: '#', label: 'How Much Does Termite Control Cost?' },
						{ href: '#', label: 'Get a Free Termite Inspection' },
					],
				},
			],
		},
	},
	{
		href: '/home-service',
		label: 'Home Service',
		submenu: {
			title: 'Home Service',
			columns: [
				{
					links: [
						{ href: '#', label: 'Attic Insulation' },
						{ href: '#', label: 'Wildlife Management' },
						{ href: '#', label: 'Moisture Control' },
						{ href: '#', label: 'A Star Plus: Wildlife & Rodent Prevention' },
					],
				},
				{
					links: [
						{ href: '#', label: 'Seasonal Pest Protection' },
						{ href: '#', label: 'Leaf Stopper®: Gutter Cover & Protection' },
						{ href: '#', label: 'New Homeowner Pest Prevention' },
					],
				},
			],
		},
	},
	{
		href: '/a-star-plus-difference',
		label: 'A Star Plus Difference',
		submenu: {
			title: 'A Star Plus Difference',
			columns: [
				{
					links: [
						{ href: '#', label: 'Expert Training' },
						{ href: '#', label: 'Environmental Responsibility' },
						{ href: '#', label: 'Commitment to Education' },
						{ href: '#', label: 'Community Involvement' },
					],
				},
				{
					links: [
						{ href: '#', label: 'Company History' },
						{ href: '#', label: 'Ask A Star Plus' },
						{ href: '#', label: 'FAQ' },
						{ href: '#', label: 'Customer Reviews' },
					],
				},
			],
		},
	},
]


// commercial site nav data
export const commercialNavigationData: NavigationItem[] = [
  {
    href: '/industries',
    label: 'Industries',
    submenu: {
      title: 'Industries',
      columns: [
        {
          links: [
            { href: '/industries/food-beverage', label: 'Food & Beverage Processing' },
            { href: '/industries/foodservice', label: 'Foodservice' },
            { href: '/industries/government', label: 'Government' },
            { href: '/industries/healthcare', label: 'Healthcare' },
            { href: '/industries/hospitality', label: 'Hospitality' },
            { href: '/industries/logistics', label: 'Logistics & Warehousing' },
          ],
        },
        {
          links: [
            { href: '/industries/manufacturing', label: 'Manufacturing' },
            { href: '/industries/multifamily', label: 'Multifamily' },
            { href: '/industries/office-property', label: 'Office Property Management' },
            { href: '/industries/pharmaceutical', label: 'Pharmaceutical' },
            { href: '/industries/retail', label: 'Retail' },
            { href: '/industries/education', label: 'Education' },
          ],
        },
        {
          links: [
            { href: '/industries/other', label: 'Other Industries' },
          ],
        },
      ],
    },
  },
  {
    href: '/pest-control-service',
    label: 'Pest Control Service',
    submenu: {
      title: 'Pest Control Service',
      columns: [
        {
          links: [
            { href: '/services/bird-control', label: 'Bird Control' },
            { href: '/services/fly-control', label: 'Fly Control' },
            { href: '/services/rodent-control', label: 'Rodent Control' },
            { href: '/services/mosquito-control', label: 'Mosquito Control' },
            { href: '/services/integrated-pest-management', label: 'Integrated Pest Management' },
            { href: '/services/bed-bugs', label: 'Bed Bugs Services' },
          ],
        },
        {
          links: [
            { href: '/services/bed-bug-proact', label: 'Bed Bug ProAct for Hospitality' },
            { href: '/services/green-pest-control', label: 'Element: Green Pest Control' },
            { href: '/services/stored-product-pest', label: 'Stored Product Pest Control' },
            { href: '/services/termite-control', label: 'Termite Control' },
          ],
        },
      ],
    },
  },
  {
    href: '/commercial-service',
    label: 'Commercial Service',
    submenu: {
      title: 'Commercial Service',
      columns: [
        {
          links: [
            { href: '/commercial/disinfectant-cleaning', label: 'Disinfectant Cleaning' },
            { href: '/commercial/exclusion-services', label: 'Exclusion Services' },
            { href: '/commercial/floor-drain-cleaning', label: 'Floor & Drain Cleaning' },
            { href: '/commercial/restroom-care', label: 'Restroom Care' },
            { href: '/commercial/odour-control', label: 'Odour Control & Scent Services' },
          ],
        },
      ],
    },
  },
  {
    href: '/a-star-plus-difference',
    label: 'A Star Plus Difference',
    submenu: {
      title: 'A Star Plus Difference',
      columns: [
        {
          links: [
            { href: '/about/guarantee', label: 'Commercial Triple Guarantee' },
            { href: '/about/gold-medal-qa', label: 'Gold Medal QA' },
            { href: '/about/specialists', label: 'Trained Specialists' },
            { href: '/about/national-accounts', label: 'National Accounts' },
            { href: '/about/service-documentation', label: 'Service Documentation' },
            { href: '/about/staff-training', label: 'Staff Training' },
          ],
        },
        {
          links: [
            { href: '/about/faq', label: 'FAQ' },
            { href: '/about/blog', label: 'Field Notes Blog' },
          ],
        },
      ],
    },
  },
];
