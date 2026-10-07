"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import AboutProject from "./AboutProject";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showAboutProject = pathname !== "/contact";

  return (
    <>
      <Navigation />
      <main>{children}</main>
      {showAboutProject && <AboutProject />}
      <Footer />
    </>
  );
}
