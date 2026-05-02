import {
  About,
  Assets,
  Contact,
  Hero,
  Manifesto,
  Nav,
  Services,
  Work,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Manifesto />
      <Assets />
      <Contact />
    </div>
  );
}
