import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-light.png";

function Footer() {
  return (
    <footer className="bg-black/90 py-23">
      <div className="mx-[6rem]">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width="196"
              height="24"
              quality={100}
            />
          </Link>

          <nav>
            <ul className="flex items-center gap-16">
              <li className="text-white text-2xl uppercase tracking-widest leading-[100%] transition-all duration-200 hover:underline">
                <Link href="/about">Our Company</Link>
              </li>
              <li className="text-white text-2xl uppercase tracking-widest leading-[100%] transition-all duration-200 hover:underline">
                <Link href="/location">Locations</Link>
              </li>
              <li className="text-white text-2xl uppercase tracking-widest leading-[100%] transition-all duration-200 hover:underline">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-[0.5px] border-b-[#555] mt-14"></div>

        <div className="flex items-center justify-between"></div>
      </div>
    </footer>
  );
}

export default Footer;
