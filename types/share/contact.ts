export interface ContactDetail {
  icon: string;
  title: string;
  lines: string[]; // An array to handle multi-line text like "Hours"
}

// Main type for the entire section's data
export interface ContactSectionData {
  tagline: string;
  title: string;
  description: string;
  contactDetails: ContactDetail[];
}