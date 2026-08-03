import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Path } from "@/components/sections/Path";
import { Toolkit } from "@/components/sections/Toolkit";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Path />
      <Toolkit />
      <Credentials />
      <Contact />
    </>
  );
}
