import { projects } from "../projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h1 className="text-center text-3xl font-bold text-primary underline decoration-double mb-8 ">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
