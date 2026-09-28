import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-dark.png";

function Navigation() {
  return (
    <header className="flex items-center justify-between px-[6rem] py-[6.4rem]">
      <Link href="/">
        <Image src={Logo} alt="Logo" width="196" height="24" quality={100} />
      </Link>

      <nav>
        <ul className="flex items-center gap-16">
          <li className="text-[#333136] text-2xl uppercase tracking-widest leading-[100%] transition-all duration-200 hover:underline">
            <Link href="/about">Our Company</Link>
          </li>
          <li className="text-[#333136] text-2xl uppercase tracking-widest leading-[100%] transition-all duration-200 hover:underline">
            <Link href="/location">Locations</Link>
          </li>
          <li className="text-[#333136] text-2xl uppercase tracking-widest leading-[100%] transition-all duration-200 hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
