import { Metadata } from "next";
import AboutHero from "../_components/AboutHero";
import AboutTalent from "../_components/AboutTalent";
import AboutDeal from "../_components/AboutDeal";
import AboutLocation from "../_components/AboutLocation";

export const metadata: Metadata = {
  title: "About Us",
};

function About() {
  return (
    <>
      <AboutHero />
      <AboutTalent />
      <AboutLocation />
      <AboutDeal />
    </>
  );
}

export default About;
