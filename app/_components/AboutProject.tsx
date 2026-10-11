import Cta from "./Cta";
import { motion } from "framer-motion";

function AboutProject() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mx-6 -mb-24 mt-24 flex flex-col items-center justify-between gap-8 rounded-3xl bg-primary px-8 py-12 text-center sm:mx-10 md:mx-auto md:mb-[-9rem] md:mt-32 md:max-w-[111rem] md:flex-row md:px-16 md:py-20 md:text-left lg:mx-[6rem] lg:mt-60 lg:max-w-none lg:px-16 lg:py-23"
    >
      <div className="flex flex-col">
        <h2 className="text-[3.2rem] font-medium leading-tight text-white md:text-[4rem]">
          Let&apos;s talk about your project
        </h2>
        <p className="mt-5 max-w-[48rem] text-[1.5rem] font-normal leading-relaxed text-white md:mt-6">
          Ready to take it to the next level? Contact us today and find out how{" "}
          our expertise can help your business grow.
        </p>
      </div>

      <Cta bgColor="white" ctaColor="secondary" linkTo="/contact">
        Get in touch
      </Cta>
    </motion.section>
  );
}

export default AboutProject;
