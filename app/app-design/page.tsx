import HeroBanner from "../_components/HeroBanner";
import ProjectBox from "../_components/ProjectBox";
import { appDesignData } from "@/app/data/data";

function page() {
  return (
    <>
      <HeroBanner
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <ProjectBox data={appDesignData} />
    </>
  );
}

export default page;
