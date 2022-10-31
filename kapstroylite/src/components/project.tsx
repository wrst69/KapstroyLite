import { Project } from '../types/project';


type ProjectProps = {
  project: Project;
}

function ProjectCard(props: ProjectProps) {
  return (
    <div>
      <article>{props.project.title}</article>
    </div>     
  );
}

export default ProjectCard;