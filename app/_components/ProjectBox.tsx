import ProjectCard from "./ProjectCard";

type ProjectBoxProps = {
  title: string;
  description: string;
  image: string;
};

// type ProjectBoxData = {
// data: ProjectBoxProps[];
// };

function ProjectBox({ data }: { data: ProjectBoxProps[] }) {
  return (
    <section className="mt-16 grid mx-[6rem] flex-col overflow-hidden max-md:w-full max-md:max-w-[111rem] max-md:mx-auto grid-cols-1 gap-12 px-6 sm:px-10 md:mt-24 md:grid-cols-2 lg:mt-28 lg:grid-cols-3 lg:px-0">
      {data.map((project, index) => (
        <div key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
          />
        </div>
      ))}
    </section>
  );
}

export default ProjectBox;
