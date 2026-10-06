import Image from "next/image";
import AboutHeroImage from "@/public/about/desktop/image-about-hero.jpg";

function AboutHero() {
  return (
    <section className="flex items-center mx-[6rem]">
      <div className="bg-primary rounded-l-xl py-58 pl-35 pr-60">
        <h1 className="text-white text-7xl font-medium">About Us</h1>
        <p className="text-white text-[1.8rem] mt-5">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
      <Image src={AboutHeroImage} alt="About Hero Image" quality={100} />
    </section>
  );
}

export default AboutHero;
