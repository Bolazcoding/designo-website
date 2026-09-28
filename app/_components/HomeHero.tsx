import HeroPhone from "@/public/home/desktop/image-hero-phone.png";
import BgPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";
import Image from "next/image";

function HomeHero() {
  return (
    <section className="relative flex items-center justify-between overflow-hidden bg-[#e7816b] rounded-2xl mt-10 mx-[6rem]">
      <div className="flex-col items-center px-[3rem]">
        <h1 className="max-w-[54rem] text-white text-7xl font-medium">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="max-w-[44.5rem] text-white text-[1.7rem] mt-4">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
      </div>
      <picture className="flex items-center justify-center">
        <Image
          src={HeroPhone}
          alt="hero phone"
          quality={100}
          className="mb-[-25rem]"
          height="800"
          placeholder="blur"
        />
      </picture>

      <Image
        src={BgPattern}
        alt="Bg Pattern"
        quality={100}
        className="absolute right-0 top-0 "
      />
    </section>
  );
}

export default HomeHero;
