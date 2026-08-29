import type { LucideIcon } from 'lucide-react'

export interface Certification {
  name: string
  institution?: string
  year?: string
}

export interface CertificationGroup {
  id: string
  category: string
  icon: LucideIcon
  items: Certification[]
}
