import HeroBanner from "../_components/HeroBanner";
import ProjectBox from "../_components/ProjectBox";
import { appDesignData } from "@/app/data/data";
import MotionReveal from "../_components/MotionReveal";

function page() {
  return (
    <>
      <MotionReveal onLoad>
        <HeroBanner
          title="App Design"
          description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        />
      </MotionReveal>
      <ProjectBox data={appDesignData} animateItems />
    </>
  );
}

export default page;
