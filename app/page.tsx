import HomeFeatures from "./_components/HomeFeatures";
import HomeHero from "./_components/HomeHero";
import HomeProjects from "./_components/HomeProjects";

export default function Page() {
  return (
    <div className="mx-6 w-auto pb-24 sm:mx-10 md:pb-32 lg:mx-[6rem]">
      <HomeHero />
      <HomeProjects />
      <HomeFeatures />
    </div>
  );
}
