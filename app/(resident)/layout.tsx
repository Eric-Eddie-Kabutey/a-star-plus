import { SiteHeader } from "@/components/residential/nav/site-header";
import { Footer } from "@/components/residential/footer/footer";

export default function MainLayout({
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