import { Project } from '../../Helpers/Types/Project.type'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <>
      <div className='project-card'>
        <h2>{props.project.name}</h2>
        <a href=''>
          <img className='project-card-img' src={props.project.image} />
        </a>
        <p>{props.project.blurb}</p>
        <div className='tools-container'>
          {props.project.tools.map((tool) => (
            <img src={`icons/${tool}.svg`} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectCard
