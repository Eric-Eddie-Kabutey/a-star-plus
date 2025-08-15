import { WhyUsData } from "@/types/residential/card";

export const homeServiceWhyUsData: WhyUsData = {
  tagline: 'WHY US',
  title: "Texas's Trusted Choice for Carpenter Ant Removal",
  items: [
    {
      icon: "/assets/icons/licensed.png", 
      title: 'Licensed & certified technicians',      
    },
    {
      icon: "/assets/icons/integrate.png", 
      title: 'Integrated pest & property protection',      
    },
    {
      icon: "/assets/icons/fast.png",
      title: 'Fast, same-day service available',      
    },
    {
      icon: "/assets/icons/leafs.png",
      title: 'Eco-conscious, safe treatments',      
    },
    {
      icon: "/assets/icons/thumbs-up.png",
      title: 'Satisfaction guaranteed',      
    },
  ],
  cta: {
    text: 'Schedule a Free Inspection',
    href: '/free-inspection'
  }
};