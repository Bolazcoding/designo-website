import Image from "next/image";
import AboutTalentImage from "@/public/about/desktop/image-world-class-talent.jpg";

function AboutTalent() {
  return (
    <section className="flex flex-row-reverse items-center mt-60 mx-[6rem]">
      <div className="bg-tertiary/30 rounded-r-xl py-65 pr-35 pl-60">
        <h1 className="text-primary text-7xl font-medium">
          World-class talent
        </h1>
        <p className="text-secondary text-[1.8rem] mt-5">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="text-secondary text-[1.8rem] mt-5">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
      <Image src={AboutTalentImage} alt="About Hero Image" quality={100} />
    </section>
  );
}

export default AboutTalent;
