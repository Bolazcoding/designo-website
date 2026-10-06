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
    <footer className="bg-black/90 pt-56 py-23">
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

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-60">
            <div className="mt-10">
              <p className="text-white text-[1.8rem] font-semibold">
                Designo Central Office
              </p>
              <p className="text-white text-[1.6rem]">3886 Wellington Street</p>
              <p className="text-white text-[1.6rem]">
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="mt-10">
              <p className="text-white text-[1.8rem] font-semibold">
                Contact Us (Central Office):
              </p>
              <p className="text-white text-[1.6rem]">P: +1 253-863-8967</p>
              <p className="text-white text-[1.6rem]">M: contact@designo.co</p>
            </div>
          </div>
          <div
            className="flex items-center gap-8"
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
