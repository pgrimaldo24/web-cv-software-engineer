import { Blocks, GitBranch, Layers, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import type { CertificationGroup } from '../types'

export const certificationGroups: CertificationGroup[] = [
  {
    id: 'architecture',
    category: 'Arquitectura & Microservicios',
    icon: Blocks,
    items: [
      { name: 'Spring Boot & Spring WebFlux: Programación Reactiva RESTful', institution: 'Udemy', year: '2025' },
      { name: 'Quarkus: Desarrollo Ágil de Microservicios, GraphQL y GraalVM', institution: 'Udemy', year: '2025' },
      { name: 'Microservicios con Spring Cloud y Spring Boot', institution: 'Udemy' },
      { name: 'Java Microservices: CQRS and Event Sourcing with Kafka', year: '2026' },
      { name: 'Clean Architecture: Microservicios con .NET 6 y RabbitMQ', institution: 'Udemy', year: '2022' },
      { name: 'Starting with Quarkus', year: '2026' },
    ],
  },
  {
    id: 'security',
    category: 'Seguridad',
    icon: ShieldCheck,
    items: [
      { name: 'Web Security: Injection Attacks with Java and Spring Boot', year: '2026' },
      { name: 'Microservices Security', year: '2026' },
      { name: 'Mastering the Security Code Review', year: '2026' },
    ],
  },
  {
    id: 'best-practices',
    category: 'Buenas Prácticas & Patrones',
    icon: Sparkles,
    items: [
      { name: 'Complete Java Design Patterns masterclass', year: '2026' },
      { name: 'Programación funcional en Java con Lambdas y Streams', year: '2026' },
      { name: 'Clean Code', year: '2026' },
    ],
  },
  {
    id: 'devops',
    category: 'DevOps & Herramientas',
    icon: GitBranch,
    items: [
      { name: 'Azure DevOps Fundamentals for Beginners', year: '2026' },
      { name: 'Git: experto (GitHub y GitLab)', institution: 'Udemy', year: '2021' },
    ],
  },
  {
    id: 'fullstack-dotnet',
    category: 'Frontend & Backend (.NET)',
    icon: Layers,
    items: [
      {
        name: 'ASP.NET Core Web Application (POO, SOLID, MVC, EF Core, Bootstrap, jQuery)',
        institution: 'Galaxy Training Perú',
      },
      { name: 'Web Application Angular 11', institution: 'Galaxy Training Perú', year: '2021' },
      { name: 'REST Services .NET 5', institution: 'Galaxy Training Perú', year: '2021' },
    ],
  },
  {
    id: 'methodologies',
    category: 'Metodologías',
    icon: Workflow,
    items: [{ name: 'Scrum Fundamentals Certified', institution: 'VMEdu Inc.', year: '2020' }],
  },
]
