import { Project } from './Types/Project.type'

export const GetProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('/data/projects.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: Project[] = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}
