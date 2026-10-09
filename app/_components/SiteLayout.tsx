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
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      {showAboutProject && <AboutProject />}
      <Footer />
    </div>
  );
}
