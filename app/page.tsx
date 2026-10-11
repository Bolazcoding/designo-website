import HomeFeatures from "./_components/HomeFeatures";
import HomeHero from "./_components/HomeHero";
import HomeProjects from "./_components/HomeProjects";
import MotionReveal, { MotionPreferences } from "./_components/MotionReveal";

export default function Page() {
  return (
    <MotionPreferences>
      <div className="mx-6 w-auto pb-24 sm:mx-10 md:pb-32 lg:mx-[6rem]">
        <MotionReveal onLoad>
          <HomeHero />
        </MotionReveal>
        <HomeProjects />
        <HomeFeatures />
      </div>
    </MotionPreferences>
  );
}
