type HeroTexrProps = {
  title: string;
  description: string;
};
function HeroBanner({ title, description }: HeroTexrProps) {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-28 mx-[6rem] rounded-3xl">
      <h1 className="max-w-[54rem] text-white text-[4.8rem] leading-20 font-medium">
        {title}
      </h1>
      <p className="max-w-[40.5rem] text-white text-[1.6rem] text-center mt-8">
        {description}
      </p>
    </div>
  );
}

export default HeroBanner;
