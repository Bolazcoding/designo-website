import { Metadata } from "next";
import AboutHero from "../_components/AboutHero";
import AboutTalent from "../_components/AboutTalent";
import AboutDeal from "../_components/AboutDeal";
import AboutLocation from "../_components/AboutLocation";
import MotionReveal from "../_components/MotionReveal";

export const metadata: Metadata = {
  title: "About Us",
};

function About() {
  return (
    <>
      <MotionReveal onLoad>
        <AboutHero />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <AboutTalent />
      </MotionReveal>
      <MotionReveal>
        <AboutLocation />
      </MotionReveal>
      <MotionReveal delay={0.1}>
        <AboutDeal />
      </MotionReveal>
    </>
  );
}

export default About;
