"use client";

import WebDesign from "@/public/home/desktop/image-web-design-large.jpg";
import AppDesign from "@/public/home/desktop/image-app-design.jpg";
import GraphicDesign from "@/public/home/desktop/image-graphic-design.jpg";
import Image from "next/image";
import Link from "next/link";
import { chevronForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function HomeProjects() {
  return (
    <section className="com-container mx-[6rem] grid grid-cols-1 gap-6 md:grid-cols-2 mt-60">
      <Link
        href="/web-design"
        className="group relative block overflow-hidden rounded-2xl"
      >
        <Image
          className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={WebDesign}
          alt="Laptop displaying a web design"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-primary/75">
          <p className="text-[4rem] font-medium uppercase tracking-[0.1em]">
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

      <div className="grid grid-cols-1 gap-6">
        <Link
          href="/app-design"
          className="group relative block overflow-hidden rounded-2xl"
        >
          <Image
            className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={AppDesign}
            alt="Mobile app design displayed on a phone"
            quality={100}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-primary/75">
            <p className="text-[4rem] font-medium uppercase tracking-[0.1em]">
              App Design
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
          href="/graphic-design"
          className="group relative block overflow-hidden rounded-2xl"
        >
          <Image
            className="block h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={GraphicDesign}
            alt="Graphic design displayed on a desktop screen"
            quality={100}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/25 text-center text-white transition-colors group-hover:bg-primary/75">
            <p className="text-[4rem] font-medium uppercase tracking-[0.1em]">
              Graphic Design
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
      </div>
    </section>
  );
}

export default HomeProjects;
