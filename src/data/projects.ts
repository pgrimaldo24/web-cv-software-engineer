import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'fund-transfer-engine',
    title: 'Fund Transfer Engine',
    category: 'Backend / Microservicios',
    description:
      'Ecosistema de 2 microservicios en Java que orquesta transferencias de fondos aplicando el patrón Saga (coreografía orquestada), con compensación automática ante fallos.',
    stack: [
      'Java 21',
      'Quarkus 3.38',
      'gRPC + Protocol Buffers',
      'SmallRye Mutiny',
      'MicroProfile Fault Tolerance',
      'Arquitectura Hexagonal',
      'Hilos Virtuales',
      'Programación Reactiva',
      'JUnit 5',
      'Mockito',
      'AssertJ',
      'Docker',
      'Kubernetes',
    ],
    repos: [
      {
        label: 'Orquestador',
        url: 'https://github.com/pgrimaldo24/retotecnico-transaction-orchestrator-service',
      },
      {
        label: 'Ledger',
        url: 'https://github.com/pgrimaldo24/retotecnico-account-ledger-service',
      },
    ],
    highlights: [
      'Patrón Saga orquestado con máquina de estados (PENDING → RESERVED → COMPLETED / CANCELLED_COMPENSATED / FAILED).',
      'Comunicación interna vía gRPC entre transaction-orchestrator-service (gateway externo) y account-ledger-service (core contable, cerrado al exterior).',
      'Compensación automática (rollback) ante fallos simulados en la confirmación, liberando fondos reservados.',
      'Uso combinado de Hilos Virtuales (Java 21) en el orquestador y programación reactiva (Mutiny) en el ledger, cada uno justificado según el tipo de contención.',
      'Resiliencia con Circuit Breaker, Retry con backoff/jitter y Bulkhead configurados de forma diferenciada por operación.',
      'Streaming de eventos en tiempo real vía Server-Sent Events (SSE).',
      'Trazabilidad distribuida entre microservicios con propagación de traceId.',
      'Despliegue en Kubernetes con manifiestos incluidos (Deployment + Service + health probes).',
    ],
  },
  {
    id: 'agile-flow-board',
    title: 'Agile Flow Board',
    category: 'Fullstack',
    description:
      'Sistema de gestión de proyectos bajo esquema Scrum, con administración de tareas y tableros Kanban en tiempo real.',
    stack: [
      'Angular 17.3',
      'TypeScript 5.4',
      'PrimeNG 17',
      'Angular CDK',
      'SignalR',
      '.NET 8',
      'ASP.NET Core Web API',
      'Arquitectura Hexagonal',
      'Entity Framework Core 8',
      'PostgreSQL 16',
      'JWT + PBKDF2',
      'QuestPDF',
      'ClosedXML',
      'Docker / Docker Compose',
    ],
    repoUrl: 'https://github.com/pgrimaldo24/ideasgroup-business-agile-flow-board-web',
    highlights: [
      'Tableros Kanban con drag & drop usando Angular CDK.',
      'Actualizaciones en tiempo real vía SignalR (movimiento de tareas, notificaciones).',
      'Arquitectura Hexagonal en el backend (Domain, Application, Infrastructure, Api).',
      'Autenticación JWT con hash de contraseñas PBKDF2 (salt + pepper).',
      'Generación de reportes en PDF (QuestPDF) y Excel (ClosedXML).',
      'Despliegue containerizado con Docker Compose.',
    ],
  },
  {
    id: 'grupo-ciencias',
    title: 'Grupo Ciencias',
    category: 'Fullstack',
    description:
      'Plataforma integral para una academia pre-universitaria: landing page institucional, intranet de gestión y biblioteca virtual de contenido educativo con experiencia tipo Netflix.',
    stack: ['.NET', 'React', 'TypeScript'],
    repoUrl: 'https://github.com/pgrimaldo24/grupo-ciencias-intranet-services',
    highlights: [
      'Landing page institucional para captación de alumnos.',
      'Módulo de intranet para gestión académica/administrativa.',
      'Biblioteca virtual con interfaz tipo streaming (catálogo de clases/contenido en video).',
      'Integración frontend en React con backend en .NET.',
    ],
  },
]
