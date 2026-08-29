export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level?: 1 | 2 | 3 | 4 | 5
}
