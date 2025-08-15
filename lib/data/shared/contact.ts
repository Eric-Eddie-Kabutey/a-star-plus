import { ContactSectionData } from "@/types/share/contact";

// contact data
export const contactData: ContactSectionData = {
  tagline: 'CONTACT US',
  title: 'Ask A Star Plus',
  description: 'Got Questions? Let’s Talk. From pest ID to treatment choices, we’re always here to answer. Use our form to get quick advice directly from our experts.',
  contactDetails: [
    {
      icon: "/assets/shared/icons/location.png",
      title: 'Service Area',
      lines: ['Serving all of Texas with locations in Dallas, Houston, Austin, and San Antonio'],
    },
    {
      icon: "/assets/shared/icons/phone.png",
      title: 'Call Us',
      lines: ['(233) 123-456-7890'],
    },
    {
      icon: "/assets/shared/icons/mail.png",
      title: 'Email Us',
      lines: ['info@astarplus.com'],
    },
    {
      icon: "/assets/shared/icons/time.png",
      title: 'Hours',
      lines: [
        'Monday - Saturday: 7am - 7pm',
        'Sunday: Emergency services only',
      ],
    },
  ],
};