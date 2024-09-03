import CertArea from "@/components/CertArea";
import ContactUsArea from "@/components/ContactArea";
import GridArea from "@/components/GridArea";
import HeroBanner from "@/components/HeroBanner";
import IntroArea from "@/components/IntroArea";
import StepArea from "@/components/StepArea";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <GridArea />
      <IntroArea />
      <StepArea />
      <CertArea />
      <ContactUsArea />
    </main>
  );
}
