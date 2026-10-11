import Image from "next/image";
import CanadaDesign from "@/public/shared/desktop/illustration-canada.svg";
import AustraliaDesign from "@/public/shared/desktop/illustration-australia.svg";
import UKDesign from "@/public/shared/desktop/illustration-united-kingdom.svg";
import Cta from "./Cta";

function AboutLocation() {
  return (
    <section className="my-20 flex mx-[6rem] flex-col overflow-hidden max-md:w-full max-md:max-w-[111rem] max-md:mx-auto items-center gap-14 px-6 sm:my-24 sm:px-10 md:my-28 md:flex-row md:justify-between md:gap-6 lg:my-36">
      <div className="flex flex-col items-center text-center">
        <Image src={CanadaDesign} alt="Canada Design" quality={100} />
        <p className="text-secondary text-[2.1rem] font-medium tracking-[0.2em] uppercase mt-12">
          Canada
        </p>
        <Cta
          className="mt-10"
          bgColor="primary"
          ctaColor="white"
          linkTo="/location"
        >
          See Location
        </Cta>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src={AustraliaDesign} alt="Canada Design" quality={100} />
        <p className="text-secondary text-[2.1rem] font-medium tracking-[0.2em] uppercase mt-12">
          Australia
        </p>
        <Cta
          className="mt-10"
          bgColor="primary"
          ctaColor="white"
          linkTo="/location"
        >
          See Location
        </Cta>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src={UKDesign} alt="Canada Design" quality={100} />
        <p className="text-secondary text-[2.1rem] font-medium tracking-[0.2em] uppercase mt-12">
          United Kingdom
        </p>
        <Cta
          className="mt-10"
          bgColor="primary"
          ctaColor="white"
          linkTo="/location"
        >
          See Location
        </Cta>
      </div>
    </section>
  );
}

export default AboutLocation;
