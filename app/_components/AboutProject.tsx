import Cta from "./Cta";

function AboutProject() {
  return (
    <section className="flex items-center justify-between bg-primary mt-60 mb-60 mx-[6rem] px-16 py-23 rounded-2xl">
      <div className="flex flex-col">
        <h2 className="text-white text-[4rem] font-medium leading-16">
          Let&apos;s talk about <br /> your project
        </h2>
        <p className="text-white text-[1.5rem] font-normal mt-6 leading-9">
          Ready to take it to the next level? Contact us today and find out how{" "}
          <br /> our expertise can help your business grow.
        </p>
      </div>

      <Cta bgColor="white" ctaColor="secondary" linkTo="/contact">
        Get in touch
      </Cta>
    </section>
  );
}

export default AboutProject;
