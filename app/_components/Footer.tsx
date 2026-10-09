import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo-light.png";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black/90 px-6 pb-12 pt-32 sm:px-10 md:px-12 md:pb-16 md:pt-40 lg:pt-48">
      <div className="mx-auto w-full max-w-[111rem]">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link href="/" aria-label="Designo home">
            <Image
              src={Logo}
              alt="Logo"
              width="196"
              height="24"
              quality={100}
            />
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 sm:gap-10 md:gap-8 lg:gap-12">
              <li className="text-[1.2rem] uppercase leading-[100%] tracking-[0.15em] text-white transition-all duration-200 hover:underline sm:text-[1.4rem]">
                <Link href="/about">Our Company</Link>
              </li>
              <li className="text-[1.2rem] uppercase leading-[100%] tracking-[0.15em] text-white transition-all duration-200 hover:underline sm:text-[1.4rem]">
                <Link href="/location">Locations</Link>
              </li>
              <li className="text-[1.2rem] uppercase leading-[100%] tracking-[0.15em] text-white transition-all duration-200 hover:underline sm:text-[1.4rem]">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-b border-[#555] md:mt-12"></div>

        <div className="flex flex-col items-center gap-8 pt-8 text-center md:flex-row md:items-start md:justify-between md:pt-10 md:text-left">
          <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
            <div>
              <p className="text-white text-[1.8rem] font-semibold">
                Designo Central Office
              </p>
              <p className="text-white text-[1.6rem]">3886 Wellington Street</p>
              <p className="text-white text-[1.6rem]">
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div>
              <p className="text-white text-[1.8rem] font-semibold">
                Contact Us (Central Office):
              </p>
              <p className="text-white text-[1.6rem]">P: +1 253-863-8967</p>
              <p className="text-white text-[1.6rem]">M: contact@designo.co</p>
            </div>
          </div>
          <div
            className="flex items-center gap-6 md:self-end"
            aria-label="Social media links"
          >
            <button
              type="button"
              aria-label="Facebook"
              className="grid size-7 place-items-center rounded-full transition-transform hover:scale-110"
            >
              <FaFacebookSquare color="#e7816b" size={28} />
            </button>
            <button
              type="button"
              aria-label="YouTube"
              className="grid size-7 place-items-center rounded-full transition-transform hover:scale-110"
            >
              <FaSquareYoutube color="#e7816b" size={28} />
            </button>
            <button
              type="button"
              aria-label="Twitter"
              className="grid size-7 place-items-center rounded-full transition-transform hover:scale-110"
            >
              <FaTwitter color="#e7816b" size={28} />
            </button>
            <button
              type="button"
              aria-label="Pinterest"
              className="grid size-7 place-items-center rounded-full transition-transform hover:scale-110"
            >
              <FaPinterest color="#e7816b" size={28} />
            </button>
            <button
              type="button"
              aria-label="Instagram"
              className="grid size-7 place-items-center rounded-full transition-transform hover:scale-110"
            >
              <FaInstagram color="#e7816b" size={28} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
