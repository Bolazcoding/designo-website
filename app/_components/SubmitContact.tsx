import ContactForm from "./ContactForm";
import MotionReveal from "./MotionReveal";

function SubmitContact() {
  return (
    <section className="flex mx-[6rem] flex-col overflow-hidden max-md:w-full max-md:max-w-[111rem] max-md:mx-auto items-center gap-12 bg-primary px-6 py-16 text-center sm:rounded-2xl sm:px-12 sm:py-20 md:px-24 md:py-18 lg:flex-row lg:justify-between lg:gap-16 lg:px-24 lg:py-24 lg:text-left">
      <MotionReveal
        onLoad
        className="flex w-full max-w-[48rem] flex-col justify-center lg:w-[42%]"
      >
        <h1 className="text-[3.2rem] font-medium text-white sm:text-[4.8rem]">
          Contact us
        </h1>
        <p className="mt-6 text-[1.6rem] leading-relaxed text-white sm:mt-7 sm:text-[1.8rem]">
          Ready to take it to the next level? Let&apos;s talk about your project
          or idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that&apos;s relatable to your
          users, drop us a line.
        </p>
      </MotionReveal>
      <MotionReveal
        onLoad
        delay={0.18}
        className="w-full max-w-[55rem] lg:flex-1"
      >
        <ContactForm />
      </MotionReveal>
    </section>
  );
}

export default SubmitContact;
