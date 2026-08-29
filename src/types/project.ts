export interface ProjectRepo {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription?: string
  stack: string[]
  repoUrl?: string
  repos?: ProjectRepo[]
  highlights: string[]
}
