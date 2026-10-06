import { Metadata } from "next";
import AboutHero from "../_components/AboutHero";
import AboutTalent from "../_components/AboutTalent";

export const metadata: Metadata = {
  title: "About Us",
};

function About() {
  return (
    <>
      <AboutHero />
      <AboutTalent />
    </>
  );
}

export default About;
