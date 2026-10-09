import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  linkTo: string;
  ctaColor: "secondary" | "white";
  bgColor: "primary" | "white";
};

function Cta({ children, className, linkTo, bgColor, ctaColor }: Props) {
  const backgroundClass = bgColor === "primary" ? "bg-primary" : "bg-white";
  const textClass = ctaColor === "white" ? "text-white" : "text-secondary";
  const hoverClass =
    bgColor === "primary"
      ? "hover:bg-secondary hover:text-white"
      : "hover:bg-primary hover:text-white";

  return (
    <div className={className}>
      <Link
        href={linkTo}
        className={`inline-flex rounded-[0.85rem] px-9.5 py-6.5 text-[1.45rem] font-medium uppercase tracking-widest transition-colors ${backgroundClass} ${textClass} ${hoverClass}`}
      >
        {children}
      </Link>
    </div>
  );
}

export default Cta;
