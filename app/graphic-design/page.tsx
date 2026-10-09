import HeroBanner from "../_components/HeroBanner";
import ProjectBox from "../_components/ProjectBox";
import { graphicDesignData } from "@/app/data/data";

function page() {
  return (
    <>
      <HeroBanner
        title="Graphic Design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <ProjectBox data={graphicDesignData} />
    </>
  );
}

export default page;
