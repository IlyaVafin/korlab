import ContactForm from "@/src/components/contact-form/contact-form";
import Container from "@/src/components/container/container";
import CompositionDecision from "@/src/modules/technolohy-page/composition-decision/composition-decision";
import Hero from "@/src/modules/technolohy-page/hero/hero";
import OperatingPrinciple from "@/src/modules/technolohy-page/operating-principle/operating-principle";
import Scheme from "@/src/modules/technolohy-page/scheme/scheme";
import Support from "@/src/modules/technolohy-page/support/support";

export default function Technology() {
  return (
    <Container>
      <Hero/>
      <OperatingPrinciple/>
      <Scheme/>
      <CompositionDecision/>
      <Support/>
      <ContactForm/>
    </Container>
  )
}