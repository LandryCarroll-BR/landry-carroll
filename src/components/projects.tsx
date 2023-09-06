import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import after8music from '../../public/images/after8music.webp'
import Image from 'next/image'
import { Badge } from './badge'

type ProjectEntry = {
  imageUrl: StaticImport
  title: string
  description: string
  link: string
  technologies: string[]
}

const ProjectEntries: ProjectEntry[] = [
  {
    imageUrl: after8music,
    title: 'After 8 Music',
    description:
      'Redesigned and developed the marketing site for a high-level, multi-faceted band based out of Baton Rouge, LA.',
    link: '#',
    technologies: [
      'Headless WordPress',
      'Next.js',
      'Tailwind',
      'Google Calendar API',
      'Google Analytics',
      'Vercel',
      'Framer Motion',
    ],
  },
]

interface ProjectsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div>
      {ProjectEntries.map((projectEntry) => {
        return (
          <div key={projectEntry.title} className="flex gap-8 items-center">
            <div className="border overflow-hidden rounded-md">
              <Image src={projectEntry.imageUrl} width={300} alt="" />
            </div>
            <div className="max-w-sm">
              <h3 className="text-2xl mb-2">{projectEntry.title}</h3>
              <p className="text-sm text-foreground/60 mb-4">
                {projectEntry.description}
              </p>
              <div className="flex flex-wrap gap-3 pb-1">
                {projectEntry.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
