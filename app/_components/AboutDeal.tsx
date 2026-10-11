import Image from "next/image";
import AboutDealImage from "@/public/about/desktop/image-real-deal.jpg";

function AboutDeal() {
  return (
    <section className="flex mx-[6rem] flex-col overflow-hidden max-md:w-full max-md:max-w-[111rem] max-md:mx-auto bg-[#fdf3f0] sm:mt-24 md:mt-28 md:rounded-2xl lg:flex-row">
      <picture className="block w-full lg:w-[42%]">
        <source
          media="(max-width: 767px)"
          srcSet="/about/mobile/image-real-deal.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/about/tablet/image-real-deal.jpg"
        />
        <Image
          src={AboutDealImage}
          alt="Designo team planning a project together"
          quality={100}
          className="h-full w-full object-cover"
          sizes="(max-width: 1023px) 100vw, 47rem"
        />
      </picture>
      <div className="bg-[#fdf3f0] px-6 py-16 text-center sm:px-16 sm:py-20 lg:flex lg:w-[58%] lg:flex-col lg:justify-center lg:px-24 lg:py-24 lg:text-left">
        <h2 className="text-[3.2rem] font-medium leading-tight text-primary sm:text-[4.8rem]">
          The real deal
        </h2>
        <p className="mt-6 text-[1.6rem] leading-relaxed text-secondary sm:text-[1.8rem]">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="mt-5 text-[1.6rem] leading-relaxed text-secondary sm:text-[1.8rem]">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </section>
  );
}

export default AboutDeal;
