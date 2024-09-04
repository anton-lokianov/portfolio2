import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { VelocityText } from "@/components/ui/velocityText";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <Hero />
        {/* <VelocityText /> */}
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
