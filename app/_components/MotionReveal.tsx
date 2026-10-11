"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion } from "framer-motion";

export function MotionPreferences({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default function MotionReveal({
  children,
  delay = 0,
  onLoad = false,
  className,
}: {
  children: ReactNode;
  delay?: number;
  onLoad?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      {...(onLoad
        ? { animate: { opacity: 1, y: 0 } }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
          })}
      transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
