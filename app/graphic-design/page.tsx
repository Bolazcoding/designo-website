import HeroBanner from "../_components/HeroBanner";
import ProjectBox from "../_components/ProjectBox";
import { graphicDesignData } from "@/app/data/data";
import MotionReveal from "../_components/MotionReveal";

function page() {
  return (
    <>
      <MotionReveal onLoad>
        <HeroBanner
          title="Graphic Design"
          description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
      </MotionReveal>
      <ProjectBox data={graphicDesignData} animateItems />
    </>
  );
}

export default page;
