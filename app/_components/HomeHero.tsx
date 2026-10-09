import HeroPhone from "@/public/home/desktop/image-hero-phone.png";
import BgPattern from "@/public/home/desktop/bg-pattern-hero-home.svg";
import Image from "next/image";
import Cta from "./Cta";

function HomeHero() {
  return (
    <section className="relative isolate mt-2 flex min-h-[73rem] w-full flex-col items-center overflow-hidden rounded-2xl bg-primary px-6 pb-[34rem] pt-16 text-center sm:px-12 md:mt-5 md:mb-10 md:min-h-[60rem] md:flex-row md:items-center md:justify-between md:px-16 md:pb-0 md:pt-0 md:text-left lg:min-h-[64rem] lg:px-24">
      <div className="relative z-10 w-full max-w-[55rem] md:w-[58%]">
        <h1 className="mx-auto max-w-[54rem] text-[3.6rem] font-medium leading-[1.15] text-white sm:text-[4.6rem] md:mx-0 lg:text-[5.2rem]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mx-auto mt-6 max-w-[44.5rem] text-[1.6rem] leading-relaxed text-white md:mx-0">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Cta className="mt-10 md:mt-12" bgColor="white" ctaColor="secondary" linkTo="/web-design">
          Learn More
        </Cta>
      </div>
      <picture className="absolute -bottom-[12rem] left-1/2 z-0 flex w-[34rem] -translate-x-1/2 justify-center md:bottom-[-24rem] md:left-auto md:right-[-3rem] md:w-[52%] md:translate-x-0 lg:right-[-2rem] lg:w-[54rem]">
        <Image
          src={HeroPhone}
          alt="A smartphone displaying the Designo mobile website"
          quality={100}
          className="h-auto w-full"
          sizes="(max-width: 767px) 34rem, (max-width: 1023px) 52vw, 54rem"
          placeholder="blur"
        />
      </picture>

      <Image
        src={BgPattern}
        alt=""
        aria-hidden="true"
        quality={100}
        className="pointer-events-none absolute -right-[24rem] top-1/2 z-0 h-auto w-[75rem] -translate-y-1/2 opacity-70 md:right-[-20rem] md:w-[90rem]"
      />
    </section>
  );
}

export default HomeHero;
