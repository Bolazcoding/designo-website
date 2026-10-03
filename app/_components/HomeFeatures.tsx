import Image from "next/image";
import PassionImage from "@/public/home/desktop/illustration-passionate.svg";
import ResourceImage from "@/public/home/desktop/illustration-resourceful.svg";
import FriendlyImage from "@/public/home/desktop/illustration-friendly.svg";

function HomeFeatures() {
  return (
    <section className="flex items-center gap-10 mt-60 mb-60 mx-[6rem]">
      <div className="flex flex-col items-center text-center">
        <Image src={PassionImage} alt="Passionate" quality={100} />
        <p className="text-secondary text-[2rem] font-medium tracking-[0.2em] uppercase mt-10">
          Passionate
        </p>
        <span className="text-secondary text-[1.6rem] leading-10 font-normal mt-8 ">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src={ResourceImage} alt="Resourceful" quality={100} />
        <p className="text-secondary text-[2rem] font-medium tracking-[0.2em] uppercase mt-10">
          Resourceful
        </p>
        <span className="text-secondary text-[1.6rem] leading-10 font-normal mt-8 ">
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs.
        </span>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src={FriendlyImage} alt="Friendly" quality={100} />
        <p className="text-secondary text-[2rem] font-medium tracking-[0.2em] uppercase mt-10">
          Friendly
        </p>
        <span className="text-secondary text-[1.6rem] leading-10 font-normal mt-8 ">
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </span>
      </div>
    </section>
  );
}

export default HomeFeatures;
