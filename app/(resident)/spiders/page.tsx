import { Hero } from "@/components/shared/hero";
import { InfoSection } from "@/components/shared/info-section";
import { Button } from "@/components/ui/button";

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
            <Hero
                title={<>Protecting Homes from Pests That Hide, Bite, and Damage</>}
                description='At A Star Plus Pest Control, we specialize in eradicating a wide range of household pests using safe, effective, and science-based solutions. From creepy crawlers to stingers and chewers, we’ve got you covered.'
                backgroundColor='#fff0f0'
                buttons={
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-xs mx-auto'>
                        <Button
                            size='lg'
                            className='w-full bg-red-600 hover:bg-red-700 text-lg py-6'>
                            Book a Free Ant Inspection
                        </Button>
                        <Button
                            size='lg'
                            variant='outline'
                            className='w-full border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700 text-lg py-6'>
                            Call Now: (123) 456-7890
                        </Button>
                    </div>
                }
            />

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