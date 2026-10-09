"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/logo-dark.png";

const links = [
  { href: "/about", label: "Our Company" },
  { href: "/location", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-20 flex w-full items-center justify-between bg-white px-6 py-8 sm:px-10 md:py-12 lg:px-[6rem] lg:py-[6.4rem]">
      <Link href="/" aria-label="Designo home" onClick={() => setIsOpen(false)}>
        <Image src={Logo} alt="Designo" width="196" height="24" quality={100} />
      </Link>

      <button
        type="button"
        className="flex size-12 items-center justify-center text-secondary md:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span className="flex w-7 flex-col gap-[5px]" aria-hidden="true">
          <span className={`h-[3px] w-full bg-current transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[3px] w-full bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[3px] w-full bg-current transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`${isOpen ? "block" : "hidden"} absolute left-0 right-0 top-full bg-secondary px-6 py-12 sm:px-10 md:static md:block md:bg-transparent md:p-0`}
      >
        <ul className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12">
          {links.map(({ href, label }) => (
            <li key={href} className="text-[2.4rem] uppercase leading-[100%] tracking-[0.1em] text-white transition-colors duration-200 hover:text-primary md:text-secondary md:text-[1.4rem] md:tracking-[0.15em] lg:text-2xl lg:tracking-widest">
              <Link href={href} onClick={() => setIsOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
