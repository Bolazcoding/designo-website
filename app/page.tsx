import AboutProject from "./_components/AboutProject";
import HomeFeatures from "./_components/HomeFeatures";
import HomeHero from "./_components/HomeHero";
import HomeProjects from "./_components/HomeProjects";

function page() {
  return (
    <>
      <HomeHero />
      <HomeProjects />
      <HomeFeatures />
      <AboutProject />
    </>
  );
}

export default page;
