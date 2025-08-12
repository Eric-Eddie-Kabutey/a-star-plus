import { SiteHeader } from "@/components/commercial/header/site-header";
import { Footer } from "@/components/commercial/footer/footer";

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (    
    <>
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}