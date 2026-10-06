import Image from "next/image";
import AboutDealImage from "@/public/about/desktop/image-real-deal.jpg";

function AboutDeal() {
  return (
    <section className="flex items-center mt-60 mx-[6rem]">
      <div className="bg-tertiary/30 rounded-l-xl py-65 pl-35 pr-60">
        <h1 className="text-primary text-7xl font-medium">The real deal</h1>
        <p className="text-secondary text-[1.8rem] mt-5">
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p className="text-secondary text-[1.8rem] mt-5">
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
      <Image src={AboutDealImage} alt="About Deal Image" quality={100} />
    </section>
  );
}

export default AboutDeal;
