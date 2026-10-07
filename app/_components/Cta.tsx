import Link from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  linkTo: string;
  ctaColor: string;
  bgColor: string;
};

function Cta({ children, className, linkTo, bgColor, ctaColor }: Props) {
  return (
    <div
      className={`${className} bg-${bgColor} inline-block py-6.5 px-9.5 rounded-[0.85rem] cursor-pointer`}
    >
      <Link
        href={linkTo}
        className={`text-${ctaColor} text-[1.45rem] font-medium tracking-widest uppercase`}
      >
        {children}
      </Link>

      {/* <svg className="h-[1.4rem] w-[4.5rem] stroke-white">
        <use xlinkHref="./shared/desktop/arrow.svg#arrow"></use>
      </svg> */}
    </div>
  );
}

export default Cta;
