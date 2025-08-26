import { WhyUsData } from "@/types/residential/card";

export const homeServiceWhyUsData: WhyUsData = {
  tagline: 'WHY US',
  title: "Texas's Trusted Choice for Carpenter Ant Removal",
  items: [
    {
      icon: "/assets/residential/icons/home-service/licensed.png", 
      title: 'Licensed & certified technicians',      
    },
    {
      icon: "/assets/residential/icons/home-service/integrated.png", 
      title: 'Integrated pest & property protection',      
    },
    {
      icon: "/assets/residential/icons/home-service/fast.png",
      title: 'Fast, same-day service available',      
    },
    {
      icon: "/assets/residential/icons/home-service/eco.png",
      title: 'Eco-conscious, safe treatments',      
    },
    {
      icon: "/assets/residential/icons/home-service/satisfaction.png",
      title: 'Satisfaction guaranteed',      
    },
  ],
  cta: {
    text: 'Schedule a Free Inspection',
    href: '/free-inspection'
  }
};