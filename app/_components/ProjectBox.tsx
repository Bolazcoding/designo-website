type ProjectBoxProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectBox({ data }: { data: ProjectBoxProps }) {
  return <section className="grid grid-cols-3 gap-6"></section>;
}

export default ProjectBox;
