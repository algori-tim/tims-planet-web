import { Project } from '../../Helpers/Types/Project.type'
import './ProjectCard.css'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className='project-card'>
      <h2>{props.project.name}</h2>
      <a href={props.project.url} target='_blank' rel='noopener noreferrer'>
        <img className='project-card-img' src={props.project.image} />
      </a>
      <div className='bottom-section'>
        <p>{props.project.blurb}</p>
        <div className='tools-container'>
          {props.project.tools.map((tool) => (
            <img key={tool} src={`icons/${tool}.svg`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
