import { Award } from 'lucide-react'
import type { CertificationGroup } from '../types'

export const certificationGroups: CertificationGroup[] = [
  {
    id: 'certifications',
    category: 'Certificaciones',
    icon: Award,
    items: [
      { name: 'AI with GitHub Copilot for Java & Spring Boot Developers', institution: 'Udemy', year: '2026' },
      { name: 'Starting with Quarkus Reactive', institution: 'Udemy', year: '2026' },
      { name: 'Software Architecture and Design of Modern Large Scale Systems', institution: 'Udemy', year: '2026' },
      { name: 'SOLID Principles: Software Architecture and Design', institution: 'Udemy', year: '2026' },
      { name: 'Clean Architecture for Beginners', institution: 'Udemy', year: '2026' },
      { name: 'Azure Serverless Functions and Logic Apps', institution: 'Udemy', year: '2026' },
      { name: 'Curso Completo de Microsoft Azure AI Fundamentals AI-900', institution: 'Udemy', year: '2026' },
      { name: 'Azure AI Studio', institution: 'Udemy', year: '2026' },
      { name: 'Terraform Code Infrastructure', institution: 'Udemy', year: '2026' },
    ],
  },
]
