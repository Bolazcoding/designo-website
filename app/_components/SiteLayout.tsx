"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import AboutProject from "./AboutProject";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { MotionConfig, motion } from "framer-motion";

export default function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showAboutProject = pathname !== "/contact";

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <motion.main
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
        {showAboutProject && <AboutProject />}
        <Footer />
      </div>
    </MotionConfig>
  );
}
