import { cn } from '@/lib/utils'
import React from 'react'
import { BoldistLogo, EABILogo, ESRGLogo } from './work-logos'
import Image from 'next/image'
import landry_carroll from '../../public/images/landry-carroll-avatar@2x.webp'
import { Badge } from './badge'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

type WorkEntry = {
  employer: string
  logo: React.FC
  jobTitle: string
  jobDescription: string
  jobLink: string
  technologies: string[]
  timeSpan: string
}

const WorkEntries: WorkEntry[] = [
  {
    employer: 'Boldist',
    logo: BoldistLogo,
    jobTitle: 'Web Developer',
    jobDescription:
      "Contributed significantly to launching a Next.js enterprise web app and delivering high-quality code for diverse client projects, such as Gideon's Bakehouse, Openhouse Insurance,  and FFVA Mutual. I also drove innovation by creating a Headless Wordpress + Faust.js starter project, expanding our technological portfolio.",
    jobLink: '#',
    technologies: [
      'React',
      'Tailwind',
      'SCSS',
      'Wordpress',
      'Typescript',
      'PHP',
      'PostgreSQL',
    ],
    timeSpan: '2022 — present',
  },
  {
    employer: 'EcoScience Resource Group',
    logo: ESRGLogo,
    jobTitle: 'Graphic Designer',
    jobDescription:
      "Skillfully crafted infographics in alignment with company standards, introducing innovative elements to projects. I assumed a pivotal position in shaping Chevron Philips' isometric design system, while also contributing by developing compelling PowerPoint slides that enhanced training content.",
    jobLink: '#',
    technologies: ['Illustrator', 'Photoshop'],
    timeSpan: '2021 — 2022',
  },
  {
    employer: 'Entrepreneurs Across Borders',
    logo: EABILogo,
    jobTitle: 'Web Developer Intern',
    jobLink: '#',
    jobDescription:
      'Designed an Adobe XD prototype for the new landing page and played an integral role in its construction through Wild Apricot CMS and its page builder tools. Collaborated with Wild Apricot and EABI to explore integration options for internal services and tools.',
    technologies: ['Adobe XD', 'Wild Apricot CMS'],
    timeSpan: '2021 — 2022',
  },
]

interface ExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Experience: React.FC<ExperienceProps> = ({ className }) => {
  return (
    <div className={cn(className, 'flex flex-col')}>
      {WorkEntries.map((WorkEntry) => {
        return (
          <div
            key={WorkEntry.employer}
            className="flex gap-4 border border-transparent hover:border-border p-4 pt-5 rounded-md group transition hover:bg-foreground/[.02]"
          >
            <div className="text-sm mt-3 text-foreground/60 w-28 justify-end pr-1 hidden lg:flex">
              {WorkEntry.timeSpan}
            </div>

            <div className="">
              <div className="p-1.5 bg-accent rounded-full">
                <WorkEntry.logo />
              </div>

              <div className="h-full w-full flex items-start justify-center pt-9 pb-12">
                <div className="bg-border w-px h-[100%]"></div>
              </div>
            </div>

            <div className="max-w-sm -mt-1.5 flex-1">
              <div className="mb-2">
                <Link
                  href={WorkEntry?.jobLink}
                  className={'group hover:underline'}
                >
                  <h3 className="text-2xl">
                    {WorkEntry.employer}
                    <ExternalLinkIcon className="inline ml-1 h-4 w-4 " />
                  </h3>
                </Link>

                <span className="text-lg">{WorkEntry.jobTitle}</span>

                <span className="text-lg lg:hidden block text-foreground/60">
                  {WorkEntry.timeSpan}
                </span>
              </div>

              <div className="text-foreground/60 mb-4">
                <p>{WorkEntry.jobDescription}</p>
              </div>

              <div className="flex flex-wrap gap-3 pb-16">
                {WorkEntry.technologies?.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </div>
          </div>
        )
      })}

      <div className="flex gap-4 w-full p-4 pt-5">
        <div className="text-sm mt-3 text-foreground/60 justify-end pr-1 w-28 hidden lg:flex">
          {'2020'}
        </div>

        <div className="w-fit">
          <div className="p-1.5 bg-accent rounded-full">
            <Image
              src={landry_carroll}
              width={32}
              height={32}
              alt="Landry Carroll Avatar"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="-mt-1 lg:mt-2.5 w-full">
            <p>
              <span className="text-lg text-foreground/60 lg:hidden">2020</span>
              <br className="lg:hidden" />
              <span className="text-foreground/60">
                Started learning to code!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
