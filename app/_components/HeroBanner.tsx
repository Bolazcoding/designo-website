type HeroTexrProps = {
  title: string;
  description: string;
};
function HeroBanner({ title, description }: HeroTexrProps) {
  return (
    <section className="flex mx-[6rem] flex-col overflow-hidden max-md:w-full max-md:max-w-[111rem] max-md:mx-auto items-center justify-center bg-primary px-6 py-16 text-center sm:rounded-2xl sm:px-12 sm:py-20 md:py-24">
      <h1 className="text-[3.2rem] font-medium leading-tight text-white sm:text-[4.8rem]">
        {title}
      </h1>
      <p className="mt-5 max-w-[40.5rem] text-[1.6rem] leading-relaxed text-white sm:mt-6 sm:text-[1.8rem]">
        {description}
      </p>
    </section>
  );
}

export default HeroBanner;
