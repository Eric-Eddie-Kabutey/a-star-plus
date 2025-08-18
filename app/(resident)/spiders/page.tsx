import { Hero } from "@/components/shared/hero";
import { InfoSection } from "@/components/shared/info-section";
import { HeroSection } from "@/components/shared/OtherHero";
import { Button } from "@/components/ui/button";
import { HeroData } from "@/types/residential/hero";

interface DetailItem {
  label: string;
  text: string;
}

interface PestServiceInfoData {
  tagline: string;
  title: string;
  description: string;
  details: DetailItem[];
  imageUrl: string;
  imageAlt: string;
}

const bedBugHeroData: HeroData = {
  title: <>Protecting Homes from Pests That Hide, Bite, and Damage</>,
  description: 'At A Star Plus Pest Control, we specialize in eradicating a wide range of household pests using safe, effective, and science-based solutions. From creepy crawlers to stingers and chewers, we’ve got you covered.',
  backgroundImage: '/assets/residential/images/hero-image-flies.jpg',
  overlay: 'bg-black/40',
}

const spiderData: PestServiceInfoData = {
  tagline: 'SPIDERS',
  title: 'Peace of Mind from Creepy Crawlers',
  description: 'While most spiders are harmless, some pose health risks or indicate bigger infestations. We safely remove webs and prevent future entry.',
  details: [
    {
      label: 'Common signs',
      text: 'spider webs in corners, garages, basements',
    },
    {
      label: 'Treatment',
      text: 'web removal, entry sealing, perimeter sprays',
    },
    {
      label: 'Why choose us',
      text: 'gentle yet effective, family-safe, customized approach',
    },
  ],
  imageUrl: '/assets/residential/images/spider-crawlers.png',
  imageAlt: 'A common garden spider sitting in the center of its web.',
};

export default function SpidersPage() {
    return (
        <>
            {/* hero - reuseable with props for specific page */}
            <HeroSection {...bedBugHeroData} />

            {/* Why centipedes: Image on the RIGHT (default layout) */}
            <InfoSection
                tagline={spiderData.tagline}
                title={spiderData.title}
                description={spiderData.description}
                details={spiderData.details}
                imageUrl={spiderData.imageUrl}
                imageAlt={spiderData.imageAlt}
                layout='imageRight'
            />
        </>
    )
}