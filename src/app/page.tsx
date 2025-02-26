import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Winners } from "@/components/Winners";
import { Cta } from "@/components/Cta";

//<Faq /> <Cta /> <Testimonials /> <Winners />

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />

      <Video videoId="zIilCys-vVU" />
    </Container>
  );
}
