import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-[1.7rem]">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        sizes="(max-width: 767px) calc(100vw - 4.8rem), (max-width: 1023px) calc(50vw - 4rem), 35rem"
        className="aspect-[4/3] w-full object-cover"
        quality={100}
      />
      <div className="flex flex-1 flex-col items-center bg-[#fdf3f0] px-6 py-8 text-center sm:px-10 sm:py-10 lg:px-6">
        <h3 className="text-[1.8rem] font-medium uppercase tracking-[0.2em] text-primary">
          {title}
        </h3>
        <p className="mt-4 text-[1.6rem] font-normal leading-relaxed text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}

export default ProjectCard;
