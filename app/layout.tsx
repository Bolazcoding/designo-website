import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/app/_styles/globals.css";
import SiteLayout from "./_components/SiteLayout";

const jost = Jost({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Designo | Creative digital design agency",
  description:
    "Designo creates custom websites, app designs, and brand experiences for ambitious businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${jost.className} min-h-screen antialiased`}>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
