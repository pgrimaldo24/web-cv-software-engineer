import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Proyecto Ejemplo Uno',
    description:
      'Aplicación web para gestión de tareas con autenticación, tableros Kanban y notificaciones en tiempo real.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    repoUrl: 'https://github.com/usuario/proyecto-uno',
    liveUrl: 'https://proyecto-uno.example.com',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Proyecto Ejemplo Dos',
    description:
      'Plataforma de e-commerce con carrito de compras, pasarela de pago y panel de administración.',
    technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    repoUrl: 'https://github.com/usuario/proyecto-dos',
    liveUrl: 'https://proyecto-dos.example.com',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Proyecto Ejemplo Tres',
    description:
      'Herramienta CLI para automatizar tareas repetitivas de desarrollo y despliegue.',
    technologies: ['Node.js', 'TypeScript'],
    repoUrl: 'https://github.com/usuario/proyecto-tres',
  },
]
