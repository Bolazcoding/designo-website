"use client";

import { useEffect, useRef, useState } from "react";

const DISPLAY_DURATION = 1000;

export default function RouteTransitionSpinner() {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showSpinner = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setIsVisible(true);
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        timerRef.current = null;
      }, DISPLAY_DURATION);
    };

    const handleLinkClick = (event: MouseEvent) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search)
      ) {
        return;
      }

      showSpinner();
    };

    document.addEventListener("click", handleLinkClick, true);
    window.addEventListener("popstate", showSpinner);

    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      window.removeEventListener("popstate", showSpinner);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center bg-white/95 p-6 backdrop-blur-md"
      role="status"
      aria-live="polite"
    >
      <div className="relative mb-8 grid size-28 place-items-center" aria-hidden="true">
        <span className="absolute inset-0 rounded-full border border-primary/30 border-r-transparent border-t-primary animate-spin motion-reduce:animate-none" />
        <span className="absolute inset-3 rounded-full border-2 border-primary/20 border-b-primary border-l-transparent [animation:spin_3.4s_linear_infinite_reverse] motion-reduce:animate-none" />
        <span className="absolute left-5 top-1 size-3 rounded-full border-2 border-white bg-primary" />
        <span className="grid size-12 place-items-center rounded-2xl bg-primary text-[2.7rem] font-semibold text-white shadow-lg shadow-primary/30 animate-pulse motion-reduce:animate-none">
          D
        </span>
      </div>
      <p className="text-[1.4rem] font-semibold uppercase tracking-[0.22em] text-secondary">
        Designo
      </p>
      <p className="mt-2 text-[1.5rem] text-secondary/70">Preparing your next page</p>
      <span className="mt-5 h-1 w-20 overflow-hidden rounded-full bg-primary/15" aria-hidden="true">
        <span className="route-progress-sweep block h-full w-2/5 rounded-full bg-primary motion-reduce:animate-none" />
      </span>
      <span className="sr-only">Loading page</span>
    </div>
  );
}
