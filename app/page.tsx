import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full w-full">
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
