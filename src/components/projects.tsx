import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import after8music from '../../public/images/after8music.webp'
import infoScreens from '../../public/images/infoscreens.webp'
import phonemeGame from '../../public/images/phonemegame.webp'
import Image from 'next/image'
import { Badge } from './badge'

type ProjectEntry = {
  imageUrl: StaticImport
  title: string
  description: string
  link: string
  gitHubLink?: string
  technologies: string[]
}

const ProjectEntries: ProjectEntry[] = [
  {
    imageUrl: after8music,
    title: 'After 8 Music',
    description:
      'Redesigned and developed the marketing site for a high-level, multi-faceted band based out of Baton Rouge, LA.',
    link: 'https://after8music.com',
    gitHubLink: '',
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
  {
    imageUrl: infoScreens,
    title: 'Information Screens',
    description:
      'Web application for displaying event information, complete with titles, dates, and images using Next.js and Supabase.',
    link: '#',
    technologies: ['Next.js 13', 'Tailwind', 'Supabase', 'Framer Motion'],
  },
  {
    imageUrl: phonemeGame,
    title: 'Classroom Phoneme Game',
    description:
      'Redesigned and developed the marketing site for a high-level, multi-faceted band based out of Baton Rouge, LA.',
    link: '#',
    technologies: ['Sanity', 'Next.js', 'Vercel'],
  },
]

interface ProjectsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col gap-6">
      {ProjectEntries.map((projectEntry) => {
        return (
          <div
            key={projectEntry.title}
            className="flex flex-col items-start md:flex-row gap-8 p-4 md:items-center border-transparent border rounded-md hover:border-border hover:bg-foreground/[.02] w-fit"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={projectEntry.imageUrl}
                width={300}
                className="aspect-[5/3] object-cover"
                alt=""
              />
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
