"use client";
import ProjectCard from "./ProjectCard";

type ProjectBoxProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectBox({ data }: { data: ProjectBoxProps }) {
  return (
    <section className="grid grid-cols-3 gap-6">
      {data.map((project, index) => {
        <div key={index}>
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
          />
          ;
        </div>;
      })}
    </section>
  );
}

export default ProjectBox;
