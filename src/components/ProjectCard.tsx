import Project from "../models/Project";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card bg-base-200 w-96 shadow-xl my-2">
      <figure>
        <img src={project.imageUrl} alt={project.description} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end mt-4">
          <a
            className="btn btn-primary"
            href={project.sourceCodeUrl}
            target="_blank"
          >
            View source code
          </a>
          <a className="btn btn-success" href={project.liveUrl} target="_blank">
            Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
