import Image from "next/image";
import AboutHeroImage from "@/public/about/desktop/image-about-hero.jpg";

function AboutHero() {
  return (
    <section className="flex mx-[6rem] flex-col overflow-hidden bg-primary max-md:w-full max-md:max-w-[111rem] max-md:mx-auto md:rounded-2xl lg:flex-row">
      <div className="order-2 bg-primary px-6 py-16 text-center sm:px-16 sm:py-20 lg:order-1 lg:flex lg:w-[58%] lg:flex-col lg:justify-center lg:px-24 lg:py-24 lg:text-left">
        <h1 className="text-[3.2rem] font-medium leading-tight text-white sm:text-[4.8rem]">
          About Us
        </h1>
        <p className="mt-6 text-[1.6rem] leading-relaxed text-white sm:text-[1.8rem]">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <picture className="order-1 block w-full lg:order-2 lg:w-[42%]">
        <source
          media="(max-width: 767px)"
          srcSet="/about/mobile/image-about-hero.jpg"
        />
        <source
          media="(max-width: 1023px)"
          srcSet="/about/tablet/image-about-hero.jpg"
        />
        <Image
          src={AboutHeroImage}
          alt="Designo creative team collaborating"
          quality={100}
          className="h-full w-full object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 47rem"
        />
      </picture>
    </section>
  );
}

export default AboutHero;
