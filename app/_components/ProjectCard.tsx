import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col w-full">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="object-cover rounded-t-[1.7rem]"
        quality={100}
      />
      <div className="bg-tertiary/30 pt-11 pb-12 px-22 text-center rounded-b-[1.7rem]">
        <h3 className="text-primary text-[2rem] font-medium tracking-[0.2em] uppercase">
          {title}
        </h3>
        <p className="text-secondary text-[1.6rem] leading-10 font-normal mt-5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
