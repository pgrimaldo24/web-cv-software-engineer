import type { Experience } from '../types'

export const experience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'Empresa Ejemplo S.A.',
    location: 'Remoto',
    startDate: '2023-01',
    description:
      'Lidero el desarrollo de features clave en una plataforma SaaS, colaborando con equipos de producto y diseño.',
    highlights: [
      'Reduje el tiempo de carga inicial en un 40% mediante code-splitting y lazy loading.',
      'Diseñé e implementé una arquitectura de componentes reutilizables adoptada por 3 equipos.',
      'Mentoricé a 2 desarrolladores junior en buenas prácticas de React y TypeScript.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Startup Ejemplo',
    location: 'Ciudad, País',
    startDate: '2021-03',
    endDate: '2022-12',
    description:
      'Desarrollé interfaces de usuario para un producto de e-commerce desde cero hasta el lanzamiento público.',
    highlights: [
      'Construí el sistema de diseño base del producto usando Tailwind CSS.',
      'Integré pasarelas de pago y flujos de checkout con alta tasa de conversión.',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'exp-3',
    role: 'Junior Developer',
    company: 'Consultora Ejemplo',
    location: 'Ciudad, País',
    startDate: '2019-06',
    endDate: '2021-02',
    description:
      'Participé en el desarrollo de aplicaciones web para distintos clientes en un entorno ágil.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'PHP'],
  },
]
