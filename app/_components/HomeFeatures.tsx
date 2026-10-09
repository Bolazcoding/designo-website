import Image from "next/image";
import PassionImage from "@/public/home/desktop/illustration-passionate.svg";
import ResourceImage from "@/public/home/desktop/illustration-resourceful.svg";
import FriendlyImage from "@/public/home/desktop/illustration-friendly.svg";

function HomeFeatures() {
  return (
    <section className="mt-24 grid grid-cols-1 gap-12 md:mt-32 md:gap-8 lg:mt-60 lg:grid-cols-3">
      <article className="flex flex-col items-center text-center md:flex-row md:gap-12 md:text-left lg:flex-col lg:gap-0 lg:text-center">
        <Image className="size-40 shrink-0" src={PassionImage} alt="" quality={100} />
        <div>
          <p className="mt-8 text-[2rem] font-medium uppercase tracking-[0.2em] text-secondary lg:mt-10">
            Passionate
          </p>
          <p className="mt-5 text-[1.6rem] font-normal leading-relaxed text-secondary lg:mt-8">
            Each project starts with an in-depth brand research to ensure we only
            create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </article>
      <article className="flex flex-col items-center text-center md:flex-row md:gap-12 md:text-left lg:flex-col lg:gap-0 lg:text-center">
        <Image className="size-40 shrink-0" src={ResourceImage} alt="" quality={100} />
        <div>
          <p className="mt-8 text-[2rem] font-medium uppercase tracking-[0.2em] text-secondary lg:mt-10">
            Resourceful
          </p>
          <p className="mt-5 text-[1.6rem] font-normal leading-relaxed text-secondary lg:mt-8">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </article>
      <article className="flex flex-col items-center text-center md:flex-row md:gap-12 md:text-left lg:flex-col lg:gap-0 lg:text-center">
        <Image className="size-40 shrink-0" src={FriendlyImage} alt="" quality={100} />
        <div>
          <p className="mt-8 text-[2rem] font-medium uppercase tracking-[0.2em] text-secondary lg:mt-10">
            Friendly
          </p>
          <p className="mt-5 text-[1.6rem] font-normal leading-relaxed text-secondary lg:mt-8">
            We are a group of enthusiastic folks who know how to put people first.
            Our success depends on our customers, and we strive to give them the
            best experience a company can provide.
          </p>
        </div>
      </article>
    </section>
  );
}

export default HomeFeatures;
