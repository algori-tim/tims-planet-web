import { useEffect, useState } from 'react'
import { Project } from '../../Helpers/Types/Project.type'
import './Projects.css'
import { GetProjects } from '../../Helpers/DataHelper'
import ProjectCard from '../ProjectCard/ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await GetProjects()
      setProjects(() => projectData)
      setLoading(() => false)
    }

    fetchProjects()
  }, [])

  if (loading) return <div className='loading'>Loading...</div>

  return (
    <div className='projects-container'>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
