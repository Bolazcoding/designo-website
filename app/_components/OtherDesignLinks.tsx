import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import WebDesign from "@/public/home/desktop/image-web-design-large.jpg";
import AppDesign from "@/public/home/desktop/image-app-design.jpg";
import GraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";
import WebDesignTablet from "@/public/home/tablet/image-web-design.jpg";
import AppDesignTablet from "@/public/home/tablet/image-app-design.jpg";
import GraphicDesignTablet from "@/public/home/tablet/image-graphic-design.jpg";
import WebDesignMobile from "@/public/home/mobile/image-web-design.jpg";
import AppDesignMobile from "@/public/home/mobile/image-app-design.jpg";
import GraphicDesignMobile from "@/public/home/mobile/image-graphic-design.jpg";

type CategorySlug = "web-design" | "app-design" | "graphic-design";

type Category = {
  slug: CategorySlug;
  title: string;
  desktopImage: StaticImageData;
  tabletImage: StaticImageData;
  mobileImage: StaticImageData;
};

const categories: Category[] = [
  {
    slug: "web-design",
    title: "Web Design",
    desktopImage: WebDesign,
    tabletImage: WebDesignTablet,
    mobileImage: WebDesignMobile,
  },
  {
    slug: "app-design",
    title: "App Design",
    desktopImage: AppDesign,
    tabletImage: AppDesignTablet,
    mobileImage: AppDesignMobile,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    desktopImage: GraphicDesign,
    tabletImage: GraphicDesignTablet,
    mobileImage: GraphicDesignMobile,
  },
];

export default function OtherDesignLinks({
  current,
}: {
  current: CategorySlug;
}) {
  const otherCategories = categories.filter(({ slug }) => slug !== current);

  return (
    <section className="mx-auto mt-45 w-full max-w-[90rem] px-6 sm:mt-60 sm:px-10 lg:px-0">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {otherCategories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="group relative isolate block aspect-[1.5] overflow-hidden rounded-2xl md:aspect-[1.45]"
          >
            <picture className="absolute inset-0">
              <source
                media="(max-width: 767px)"
                srcSet={category.mobileImage.src}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={category.tabletImage.src}
              />
              <Image
                src={category.desktopImage}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 55rem"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </picture>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center text-white transition-colors duration-300 group-hover:bg-primary/80">
              <h3 className="text-[2.6rem] font-medium uppercase tracking-[0.1em] sm:text-[3.6rem]">
                {category.title}
              </h3>
              <p className="mt-5 text-[1.4rem] font-medium uppercase tracking-[0.2em] sm:text-[1.6rem]">
                View projects <span className="ml-2 text-primary">&rarr;</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
