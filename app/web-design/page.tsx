import HeroBanner from "../_components/HeroBanner";
import ProjectBox from "../_components/ProjectBox";
import { webDesignData } from "../_data/data";

function page() {
  return (
    <>
      <HeroBanner
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <ProjectBox webDesignData={webDesignData} />
    </>
  );
}

export default page;
