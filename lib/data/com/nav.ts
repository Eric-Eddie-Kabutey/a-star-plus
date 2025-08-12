import { NavigationItem } from "@/types/share/nav";

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