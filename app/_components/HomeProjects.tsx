"use client";

import WebDesign from "@/public/home/desktop/image-web-design-large.jpg";
import AppDesign from "@/public/home/desktop/image-app-design.jpg";
import GraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";
import WebDesignTablet from "@/public/home/tablet/image-web-design.jpg";
import AppDesignTablet from "@/public/home/tablet/image-app-design.jpg";
import GraphicDesignTablet from "@/public/home/tablet/image-graphic-design.jpg";
import WebDesignMobile from "@/public/home/mobile/image-web-design.jpg";
import AppDesignMobile from "@/public/home/mobile/image-app-design.jpg";
import GraphicDesignMobile from "@/public/home/mobile/image-graphic-design.jpg";
import Image from "next/image";
import Link from "next/link";
import { chevronForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function HomeProjects() {
  return (
    <section className="mt-24 grid grid-cols-1 gap-6 md:mx-[10rem] md:mt-32 lg:mt-60 lg:grid-cols-2 lg:grid-rows-[repeat(2,30rem)] lg:gap-8">
      <Link
        href="/web-design"
        className="group relative block h-[25rem] overflow-hidden rounded-2xl md:h-[20rem] lg:row-span-2 lg:h-full"
      >
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={WebDesignMobile.src} />
          <source media="(max-width: 1023px)" srcSet={WebDesignTablet.src} />
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
            src={WebDesign}
            alt="Laptop displaying a web design"
            quality={100}
          />
        </picture>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-primary/75">
          <p className="text-[2.8rem] font-medium uppercase tracking-[0.1em] sm:text-[3.6rem]">
            Web Design
          </p>
          <p className="flex items-center mt-6">
            <span className="text-2xl font-medium uppercase tracking-[0.25em]">
              View Projects
            </span>
            <IonIcon
              icon={chevronForwardOutline}
              className="text-4xl text-primary stroke-4"
            />
          </p>
        </div>
      </Link>

      <Link
        href="/app-design"
        className="group relative block h-[25rem] overflow-hidden rounded-2xl md:h-[20rem] lg:h-full"
      >
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={AppDesignMobile.src} />
          <source media="(max-width: 1023px)" srcSet={AppDesignTablet.src} />
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
            src={AppDesign}
            alt="Mobile app design displayed on a phone"
            quality={100}
          />
        </picture>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-primary/75">
          <p className="text-[2.8rem] font-medium uppercase tracking-[0.1em] sm:text-[3.6rem]">
            App Design
          </p>
          <p className="mt-6 flex items-center">
            <span className="text-2xl font-medium uppercase tracking-[0.25em]">
              View Projects
            </span>
            <IonIcon
              icon={chevronForwardOutline}
              className="text-4xl text-primary stroke-4"
            />
          </p>
        </div>
      </Link>

      <Link
        href="/graphic-design"
        className="group relative block h-[25rem] overflow-hidden rounded-2xl md:h-[20rem] lg:h-full"
      >
        <picture className="absolute inset-0">
          <source media="(max-width: 767px)" srcSet={GraphicDesignMobile.src} />
          <source
            media="(max-width: 1023px)"
            srcSet={GraphicDesignTablet.src}
          />
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
            src={GraphicDesign}
            alt="Graphic design displayed on a desktop screen"
            quality={100}
          />
        </picture>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-primary/75">
          <p className="text-[2.8rem] font-medium uppercase tracking-[0.1em] sm:text-[3.6rem]">
            Graphic Design
          </p>
          <p className="mt-6 flex items-center">
            <span className="text-2xl font-medium uppercase tracking-[0.25em]">
              View Projects
            </span>
            <IonIcon
              icon={chevronForwardOutline}
              className="text-4xl text-primary stroke-4"
            />
          </p>
        </div>
      </Link>
    </section>
  );
}

export default HomeProjects;
