import HeroBanner from "../_components/HeroBanner";
import ProjectBox from "../_components/ProjectBox";
import { webDesignData } from "@/app/data/data";
import MotionReveal from "../_components/MotionReveal";
import OtherDesignLinks from "../_components/OtherDesignLinks";

function page() {
  return (
    <>
      <MotionReveal onLoad>
        <HeroBanner
          title="Web Design"
          description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
      </MotionReveal>
      <ProjectBox data={webDesignData} animateItems />
      <OtherDesignLinks current="web-design" />
    </>
  );
}

export default page;
