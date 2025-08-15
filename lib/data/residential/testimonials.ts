export interface TestimonialProps {
    name: string;
    date: string;
    avatar: string;
    rating: number;
    review: string;
}

// --- Data for Testimonials ---
export const testimonials: TestimonialProps[] = [
  {
    name: 'Daniel Thompson',
    date: 'October 5, 2023',
    avatar: '/avatar-daniel.jpg',
    rating: 5,
    review: "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
  {
    name: 'Sarah Jenkins',
    date: 'September 22, 2023',
    avatar: '/avatar-daniel.jpg',
    rating: 5,
    review: "The team was professional, courteous, and incredibly effective. Our home has been pest-free ever since their visit. Highly recommended!",
  },
  {
    name: 'Michael Rodriguez',
    date: 'September 15, 2023',
    avatar: '/avatar-daniel.jpg',
    rating: 5,
    review: "From the initial consultation to the final treatment, everything was handled with expertise. A Star Plus is our go-to for any pest issues.",
  },
  {
    name: 'Emily Chen',
    date: 'August 30, 2023',
    avatar: '/avatar-daniel.jpg',
    rating: 5,
    review: "Fast, reliable, and thorough. They solved a persistent ant problem that other companies couldn't fix. So grateful for their service.",
  },
  {
    name: 'David Lee',
    date: 'August 11, 2023',
    avatar: '/avatar-daniel.jpg',
    rating: 5,
    review: "I was impressed by their commitment to using family-safe products. It gave me peace of mind, and the results were fantastic.",
  },
];