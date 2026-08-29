export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
}
