import Container from "@/src/components/container/container";
import Hero from "@/src/modules/technolohy-page/hero/hero";
import OperatingPrinciple from "@/src/modules/technolohy-page/operating-principle/operating-principle";
import Scheme from "@/src/modules/technolohy-page/scheme/scheme";

export default function Technology() {
  return (
    <Container>
      <Hero/>
      <OperatingPrinciple/>
      <Scheme/>
    </Container>
  )
}