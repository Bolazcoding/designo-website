import Image from "next/image";
import AboutTalentImage from "@/public/about/desktop/image-world-class-talent.jpg";

function AboutTalent() {
  return (
    <section className="flex mx-[6rem] flex-col overflow-hidden max-md:w-full max-md:max-w-[111rem] max-md:mx-auto bg-[#fdf3f0] md:mt-28 md:rounded-2xl lg:flex-row">
      <picture className="block w-full lg:w-[42%]">
        <source
          media="(max-width: 767px)"
          srcSet="/about/mobile/image-world-class-talent.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/about/tablet/image-world-class-talent.jpg"
        />
        <Image
          src={AboutTalentImage}
          alt="Designo team members working together"
          quality={100}
          className="h-full w-full object-cover"
          sizes="(max-width: 1023px) 100vw, 47rem"
        />
      </picture>
      <div className="bg-[#fdf3f0] px-6 py-16 text-center sm:px-16 sm:py-20 lg:flex lg:w-[58%] lg:flex-col lg:justify-center lg:px-24 lg:py-24 lg:text-left">
        <h2 className="text-[3.2rem] font-medium leading-tight text-primary sm:text-[4.8rem]">
          World-class talent
        </h2>
        <p className="mt-6 text-[1.6rem] leading-relaxed text-secondary sm:text-[1.8rem]">
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p className="mt-5 text-[1.6rem] leading-relaxed text-secondary sm:text-[1.8rem]">
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
}

export default AboutTalent;
