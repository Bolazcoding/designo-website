import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      <Image src={image} alt={title} quality={100} />
    </div>
  );
}

export default ProjectCard;
